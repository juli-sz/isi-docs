import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Config de Quartz para la vault isi-docs.
 * Se versiona acá (.quartz/) y .quartz/run.mjs la copia al motor antes de cada build.
 * Docs: https://quartz.jzhao.xyz/configuration
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Apuntes de ISI",
    pageTitleSuffix: " · Apuntes de ISI",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "es-ES",
    baseUrl: "juli-sz.github.io/isi-docs",
    ignorePatterns: [
      // carpetas que no se publican (en cualquier nivel)
      "**/private/**",
      "**/privado/**",
      "**/templates/**",
      "**/plantillas/**",
      "**/Excalidraw/**",
      "**/.obsidian/**",
      "**/.trash/**",
      // archivos del repo que no son apuntes
      "package.json",
      "package-lock.json",
      "README.md",
      "AGENTS.md",
      "CONSIDERACIONES-VAULT.md",
      "detectar_invisibles.py",
      "example-expert.md",
      "index-ejemplo.md",
      ".gitignore.txt",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Imágenes de preview para redes. Comentalo si querés builds más rápidos.
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
