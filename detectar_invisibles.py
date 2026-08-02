#!/usr/bin/env python3
"""
Chequeo previo al deploy de un vault de Obsidian a Quartz / GitHub Pages.

Corré esto desde la raiz del vault:

    python detectar_invisibles.py

Detecta:
  1. Caracteres invisibles en nombres de archivo y dentro de las notas
     (soft hyphen, zero-width space, BOM, non-breaking space).
  2. Wikilinks rotos, y en particular los que solo difieren en mayusculas
     (andan en Windows, rompen en el runner Linux de GitHub Actions).
  3. Nombres de nota duplicados entre carpetas (ambiguos con
     markdownLinkResolution: "shortest").
  4. Falta de index.md en la raiz.
"""

import re
import sys
from collections import defaultdict
from pathlib import Path

INVISIBLES = {
    "\u00ad": "SOFT HYPHEN",
    "\u200b": "ZERO WIDTH SPACE",
    "\u200c": "ZERO WIDTH NON-JOINER",
    "\u200d": "ZERO WIDTH JOINER",
    "\ufeff": "BOM / ZERO WIDTH NO-BREAK SPACE",
    "\u00a0": "NO-BREAK SPACE",
    "\u2060": "WORD JOINER",
}

IGNORAR_DIRS = {
    ".git", ".github", ".obsidian", ".trash",
    "private", "privado", "templates", "plantillas",
    "node_modules", "Excalidraw",
}

# [[Nota]] | [[Nota|alias]] | [[Nota#Seccion]] | ![[Nota]]
WIKILINK = re.compile(r"!?\[\[([^\]\|#\^]+)")


def recorrer(raiz: Path):
    for p in raiz.rglob("*"):
        if any(part in IGNORAR_DIRS for part in p.parts):
            continue
        if p.is_file():
            yield p


def main() -> int:
    raiz = Path(".").resolve()
    print(f"Analizando vault: {raiz}\n")

    archivos = list(recorrer(raiz))
    notas = [p for p in archivos if p.suffix.lower() == ".md"]

    if not notas:
        print("No se encontro ninguna nota .md. Estas parada en la raiz del vault?")
        return 1

    problemas = 0

    # ---------- 1. index.md ----------
    if not (raiz / "index.md").exists():
        print("[FALTA] No hay index.md en la raiz del vault.")
        print("        Sin el, la home del sitio va a tirar 404.\n")
        problemas += 1

    # ---------- 2. caracteres invisibles ----------
    hallazgos = []
    for p in archivos:
        rel = p.relative_to(raiz)
        for ch, nombre in INVISIBLES.items():
            if ch in str(rel):
                hallazgos.append(f"  NOMBRE   {rel}  ->  {nombre} (U+{ord(ch):04X})")

    for p in notas:
        try:
            texto = p.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            print(f"[AVISO] {p.relative_to(raiz)} no es UTF-8 valido.")
            problemas += 1
            continue
        for nlinea, linea in enumerate(texto.splitlines(), 1):
            for ch, nombre in INVISIBLES.items():
                if ch in linea:
                    col = linea.index(ch) + 1
                    hallazgos.append(
                        f"  TEXTO    {p.relative_to(raiz)}:{nlinea}:{col}  ->  {nombre} (U+{ord(ch):04X})"
                    )
                    break

    if hallazgos:
        print(f"[CARACTERES INVISIBLES] {len(hallazgos)} hallazgo(s):")
        print("\n".join(hallazgos))
        print()
        problemas += len(hallazgos)

    # ---------- 3. nombres duplicados ----------
    por_nombre = defaultdict(list)
    for p in notas:
        por_nombre[p.stem.lower()].append(p.relative_to(raiz))

    dupes = {k: v for k, v in por_nombre.items() if len(v) > 1}
    if dupes:
        print(f"[NOMBRES DUPLICADOS] {len(dupes)} caso(s) — los wikilinks cortos quedan ambiguos:")
        for nombre, rutas in sorted(dupes.items()):
            print(f"  '{nombre}':")
            for r in rutas:
                print(f"      {r}")
        print()
        problemas += len(dupes)

    # ---------- 4. wikilinks ----------
    # indice de destinos validos: por stem y por ruta relativa sin extension
    destinos = {}
    for p in archivos:
        rel = p.relative_to(raiz).as_posix()
        destinos[p.stem] = rel
        destinos[rel] = rel
        if p.suffix.lower() == ".md":
            destinos[rel[:-3]] = rel

    destinos_lower = {k.lower(): k for k in destinos}

    rotos, case_mismatch = [], []
    for p in notas:
        try:
            texto = p.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        for nlinea, linea in enumerate(texto.splitlines(), 1):
            for m in WIKILINK.finditer(linea):
                objetivo = m.group(1).strip()
                if not objetivo or objetivo.startswith(("http://", "https://")):
                    continue
                if objetivo in destinos:
                    continue
                real = destinos_lower.get(objetivo.lower())
                if real:
                    case_mismatch.append(
                        f"  {p.relative_to(raiz)}:{nlinea}  [[{objetivo}]]  ->  el archivo es '{real}'"
                    )
                else:
                    rotos.append(f"  {p.relative_to(raiz)}:{nlinea}  [[{objetivo}]]")

    if case_mismatch:
        print(f"[MAYUSCULAS] {len(case_mismatch)} link(s) que andan en Windows y ROMPEN en el deploy:")
        print("\n".join(case_mismatch))
        print()
        problemas += len(case_mismatch)

    if rotos:
        print(f"[LINKS ROTOS] {len(rotos)} wikilink(s) sin destino:")
        print("\n".join(rotos[:50]))
        if len(rotos) > 50:
            print(f"  ... y {len(rotos) - 50} mas")
        print()
        # los links rotos no rompen el build, solo quedan grises
        print("  (no rompen el build, quedan como links vacios en el sitio)\n")

    # ---------- resumen ----------
    print("-" * 60)
    print(f"Notas analizadas: {len(notas)}   Archivos totales: {len(archivos)}")
    if problemas == 0 and not rotos:
        print("Todo OK. El vault esta listo para publicar.")
        return 0
    print(f"Problemas que conviene arreglar antes de publicar: {problemas}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
