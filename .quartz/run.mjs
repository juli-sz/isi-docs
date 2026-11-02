// Corre Quartz sobre esta vault sin tener un repo aparte.
//   npm run serve  -> sitio local en http://localhost:8080 con recarga automática
//   npm run build  -> genera el sitio estático
// El motor de Quartz se descarga una sola vez fuera de la vault (por defecto en
// ~/.cache/quartz-isi-docs) para que Obsidian y el watcher no vean node_modules.
import { spawnSync } from "node:child_process"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"

const here = path.dirname(fileURLToPath(import.meta.url))
const vault = path.resolve(here, "..")
const version = fs.readFileSync(path.join(here, "QUARTZ_VERSION"), "utf8").trim()
const engine = process.env.QUARTZ_ENGINE ?? path.join(os.homedir(), ".cache", "quartz-isi-docs")
const output = process.env.QUARTZ_OUTPUT ?? path.join(engine, "public")
const mode = process.argv[2] ?? "build"
const extra = process.argv.slice(3)

const nodeMajor = Number(process.versions.node.split(".")[0])
if (nodeMajor < 22) {
  console.error(`Quartz ${version} necesita Node 22 o más nuevo (tenés ${process.version}).`)
  process.exit(1)
}

function run(cmd, args, cwd, { shell = false } = {}) {
  const r = spawnSync(cmd, args, { cwd, stdio: "inherit", shell })
  if (r.error) throw r.error
  if (r.status !== 0) process.exit(r.status ?? 1)
}

// 1. Descargar/actualizar el motor si hace falta
const marker = path.join(engine, ".isi-docs-version")
const installed = fs.existsSync(marker) ? fs.readFileSync(marker, "utf8").trim() : null
if (installed !== version) {
  console.log(`Instalando Quartz ${version} en ${engine} ...`)
  fs.rmSync(engine, { recursive: true, force: true })
  fs.mkdirSync(path.dirname(engine), { recursive: true })
  run("git", ["clone", "--depth", "1", "--branch", version, "https://github.com/jackyzha0/quartz.git", engine], vault)
  // npm en Windows es un .cmd y necesita shell; los argumentos no tienen espacios
  run("npm", ["ci", "--no-audit", "--no-fund"], engine, { shell: process.platform === "win32" })
  fs.writeFileSync(marker, version)
}

// 2. Usar la config versionada en esta vault
for (const f of ["quartz.config.ts", "quartz.layout.ts"]) {
  fs.copyFileSync(path.join(here, f), path.join(engine, f))
}

// 3. Build (o build + servidor local)
const args = [path.join(engine, "quartz", "bootstrap-cli.mjs"), "build", "-d", vault, "-o", output]
if (mode === "serve") args.push("--serve")
args.push(...extra)
run(process.execPath, args, engine)
