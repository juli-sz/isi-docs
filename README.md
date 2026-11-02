# isi-docs

Repo de apuntes de algunas materias de Ingeniería en Sistemas de Información cursada en la UTN FRRe.

Es una vault de Obsidian que se publica sola en GitHub Pages con [Quartz 4](https://quartz.jzhao.xyz):
**https://juli-sz.github.io/isi-docs/**

## Cómo funciona

- Cada push a `main` dispara `.github/workflows/deploy.yml`, que compila la vault con Quartz y la publica.
- La configuración del sitio está en `.quartz/quartz.config.ts` y `.quartz/quartz.layout.ts`.
- La versión de Quartz está fijada en `.quartz/QUARTZ_VERSION`. El motor no está en el repo: `.quartz/run.mjs` lo descarga la primera vez (en `~/.cache/quartz-isi-docs`).

## Ver el sitio en local

Requisitos: Node 22 o más nuevo y git.

```bash
npm run serve   # http://localhost:8080, se recarga al guardar notas
npm run build   # solo genera el sitio
```

La primera vez tarda un par de minutos porque descarga e instala Quartz.

## Qué no se publica

- Notas con `draft: true` en el frontmatter.
- Carpetas `privado/`, `private/`, `plantillas/`, `templates/`, `Excalidraw/`.
- Archivos del repo que no son apuntes (este README, `AGENTS.md`, etc.). Ver `ignorePatterns` en `.quartz/quartz.config.ts`.
