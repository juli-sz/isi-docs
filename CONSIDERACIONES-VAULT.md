---
draft: true
---

# Consideraciones para que `isi-docs` se despliegue bien en Quartz

Checklist de todo lo que hay que tener en cuenta **del lado del vault** para que el sitio salga bien.

---

## 1. Obligatorio

### `index.md` en la raíz del vault
Es la home del sitio. Sin él, la URL principal tira 404.

```markdown
---
title: Apuntes de ISI
---

Apuntes de la carrera de Ingeniería en Sistemas de Información (UTN FRRe).

- [[Análisis Matemático I]]
- [[Algoritmos y Estructuras de Datos]]
```

Tip: dentro de cada carpeta también podés poner un `index.md` para darle título y descripción a la página de esa carpeta.

### El vault tiene que estar en git, con historial
El workflow usa `git log` de cada archivo para sacar la fecha de última modificación. Si el vault no está versionado, todas las notas quedan fechadas el día del build.

---

## 2. La trampa más grande: mayúsculas

**Windows no distingue mayúsculas de minúsculas. Linux (el runner de GitHub) sí.**

Si tenés el archivo `Algebra.md` y escribís `[[algebra]]`, en tu compu anda perfecto y en el sitio publicado el link queda roto. Es el error que más cuesta encontrar porque no se reproduce local.

**Regla:** escribí los wikilinks copiando el nombre exacto del archivo. Usá el autocompletado de Obsidian (`[[` y elegir de la lista), nunca lo tipees a mano.

---

## 3. Nombres de archivo

- Evitá `# ? % : | < > * " \ /` — rompen la URL o el filesystem.
- Los espacios se convierten en `-` en la URL. Está bien, pero es más prolijo evitarlos.
- Los acentos funcionan, pero generan URLs con percent-encoding (`Programaci%C3%B3n`). Feo pero no rompe. Si te importa la URL, poné el nombre sin tildes y el título bonito en el frontmatter.
- **Cuidado con caracteres invisibles.** Un soft hyphen (`U+00AD`) o un espacio no separable al principio del nombre hace que el link se vea idéntico y no resuelva nunca. Si un link "que está bien" no funciona, sospechá de esto.

Para detectar caracteres invisibles en todo el vault (nombres de archivo y contenido), corré esto desde la raíz del vault:

```bash
python detectar_invisibles.py
```

(el script está en esta misma carpeta; anda igual en Windows, Linux y Termux)

### Nombres duplicados
La config usa `markdownLinkResolution: "shortest"`: `[[Introducción]]` resuelve por nombre de archivo sin importar la carpeta. Si tenés `AyED/Introducción.md` **y** `Redes/Introducción.md`, el link es ambiguo y Quartz elige uno solo. Ponéles nombres únicos o linkeá con ruta completa: `[[Redes/Introducción]]`.

---

## 4. Frontmatter

Opcional, pero conviene. Todo lo que soporta:

```yaml
---
title: Grafos y recorridos          # sobreescribe el nombre del archivo como título
description: BFS, DFS y Dijkstra     # se usa para la preview y el SEO
tags: [ayed, grafos, algoritmos]
aliases: [Teoría de grafos]          # genera redirects a esta nota
draft: false                         # true = NO se publica
date: 2026-03-15                     # opcional, si querés fechar a mano
---
```

- `draft: true` es la forma más rápida de dejar una nota fuera del sitio sin borrarla.
- `aliases` genera redirects reales, sirve cuando renombrás una nota.

---

## 5. Qué se renderiza y qué no

| Cosa de Obsidian                                       | En el sitio                                       |
| ------------------------------------------------------ | ------------------------------------------------- |
| `[[Wikilinks]]`, `[[Nota\|alias]]`, `[[Nota#Sección]]` | ✅ Funciona                                        |
| `![[Nota]]` (transclusión / embed)                     | ✅ Funciona                                        |
| `![[imagen.png]]`                                      | ✅ Funciona                                        |
| Callouts `> [!note]`, `> [!warning]`                   | ✅ Funciona                                        |
| Tablas, checkboxes, footnotes, highlights `==x==`      | ✅ Funciona                                        |
| LaTeX `$x^2$` y `$$...$$`                              | ✅ Funciona (KaTeX)                                |
| Bloques `mermaid`                                      | ✅ Funciona                                        |
| Tags `#tema` y en frontmatter                          | ✅ Genera páginas de tag                           |
| PDFs y otros adjuntos linkeados                        | ✅ Se copian y quedan descargables                 |
| **Dataview** (```` ```dataview ````)                   | ❌ Sale como bloque de código crudo                |
| **Tasks**, **Templater**, cualquier plugin JS          | ❌ No se ejecuta nada                              |
| **Excalidraw** (`.excalidraw.md`)                      | ❌ Ignorado (exportá a PNG/SVG y embebé la imagen) |
| **Canvas** (`.canvas`)                                 | ❌ Ignorado                                        |
| Comentarios `%%esto%%`                                 | ✅ Se ocultan (no se publican)                     |

**Regla general:** todo lo que sea markdown puro se publica; todo lo que dependa de un plugin de Obsidian corriendo, no.

### LaTeX y el signo `$`
Si escribís `El costo es $500 y el otro $300`, KaTeX interpreta lo del medio como fórmula y te queda un desastre. Escapá: `\$500`.

---

## 6. Imágenes y adjuntos

- Tienen que estar **dentro del vault**. Si Obsidian te guarda los adjuntos en una carpeta afuera, no se publican.
- Configurá en Obsidian: `Settings` → `Files & Links` → *Default location for new attachments* → una carpeta del vault (ej. `assets/` o `_attachments/`).
- Activá `Use [[Wikilinks]]` y `New link format: shortest path` para que los links sean portables.
- Mismo tema de mayúsculas que con las notas: `foto.PNG` linkeada como `foto.png` rompe en Linux.
- Ojo con el peso: GitHub Pages tiene un límite de ~1 GB por sitio. Si metés muchos escaneos en alta, comprimilos antes.

---

## 7. Privacidad — esto es importante

**Todo lo que esté en el repo del vault se publica**, salvo lo que excluyas explícitamente. Y si el repo es público, además está visible en GitHub aunque Quartz no lo publique.

Tres capas de exclusión:

1. **`draft: true`** en el frontmatter de la nota.
2. **Carpetas ignoradas** — ya están configuradas en `quartz.config.ts`: `private`, `privado`, `templates`, `plantillas`, `Excalidraw`, `.obsidian`, `.trash`.
3. **`.gitignore` del vault** — lo que ni siquiera querés que llegue a GitHub.

Antes del primer push, revisá que no haya en el vault: parciales resueltos que no podés compartir, datos de compañeros, credenciales, notas de trabajo de IGECH mezcladas con las de la facu.

---

## 8. `.gitignore` sugerido para el vault

```gitignore
# Estado local de Obsidian (cambia todo el tiempo, ensucia el historial)
.obsidian/workspace.json
.obsidian/workspace-mobile.json
.obsidian/cache
.obsidian/plugins/*/data.json

# Papelera
.trash/

# Sistema
.DS_Store
Thumbs.db

# Privado
private/
privado/
```

El resto de `.obsidian/` (config, snippets CSS, hotkeys) conviene **sí** commitearlo: así tenés la misma configuración en la compu y en Termux.

---

## 9. Estructura recomendada

```
isi-docs/
├── index.md                 ← home del sitio (obligatorio)
├── .gitignore
├── .github/workflows/avisar-al-sitio.yml
├── assets/                  ← imágenes y PDFs
├── plantillas/              ← ignorada, no se publica
├── privado/                 ← ignorada, no se publica
├── Análisis Matemático I/
│   ├── index.md             ← portada de la materia
│   └── Límites.md
└── Algoritmos y Estructuras de Datos/
    ├── index.md
    └── Grafos.md
```

Las carpetas se convierten en secciones navegables del explorer y en páginas de índice automáticas.

---

## 10. Checklist antes de publicar

- [ ] Existe `index.md` en la raíz
- [ ] El vault está en git y con commits reales (no un solo commit inicial)
- [ ] No hay credenciales ni datos sensibles
- [ ] Los adjuntos están dentro del vault
- [ ] Los wikilinks respetan mayúsculas exactas
- [ ] No hay nombres de nota duplicados entre carpetas
- [ ] Las notas que no querés publicar tienen `draft: true` o están en `privado/`
- [ ] Los diagramas de Excalidraw están exportados a PNG/SVG
- [ ] Probaste el build local con `npx quartz build --serve` antes de pushear
