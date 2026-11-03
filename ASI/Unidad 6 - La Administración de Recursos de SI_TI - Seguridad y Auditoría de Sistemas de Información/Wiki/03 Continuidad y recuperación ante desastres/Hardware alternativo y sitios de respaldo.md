---
tags: [ASI-U6, lardent, robson, contingencia]
aliases: [Hot site, Warm site, Cold site, Sitios de respaldo]
---
# Hardware alternativo y sitios de respaldo

## Lardent — disponibilidad de hardware alternativo
Dos alternativas:
1. **Centro de procesamiento duplicado, propiedad de la misma empresa** → para aplicaciones **críticas**. **Eficaz pero costoso**.
2. **Centros de procesamiento en otra sede, mediante contratos con terceros**. Según **tiempo de activación y costo**:

| Sitio | Qué tiene | Activación | Costo |
|---|---|---|---|
| **Hot site** | Instalación **completa**, configurada de manera similar a la sede primaria | **Rápida** | El más caro |
| **Warm site** | **Parcialmente** configurada; generalmente **falta la unidad central de procesamiento** (el dispositivo más costoso) | Intermedia | Más económica |
| **Cold site** | Lugar físico en condiciones de **recibir** el equipamiento, **sin instalaciones específicas** ("no tienen infraestructura") | Lenta | La más barata |

## Robson — soluciones de respaldo (mantenimiento)
| Tipo | Equivalente aproximado |
|---|---|
| **Instalaciones de emergencia** (todo instalado, operatividad inmediata si hay backups) | ≈ hot site |
| **Instalaciones intermedias** (centro vacío pero equipado, propósito general, más lento) | ≈ warm site |
| **Instalaciones móviles** (vehículos o edificaciones prefabricadas semimóviles) | sin equivalente directo en Lardent |

> [!warning] La equivalencia es didáctica
> El apunte dice que la clasificación de Robson corresponde a la "disponibilidad de hardware alternativo en Lardent", pero los nombres y criterios no son idénticos. Si te preguntan por un autor, usá su terminología.

## Otras consideraciones (Robson)
- Los **acuerdos de mantenimiento recíproco** funcionan entre divisiones de un mismo grupo, pero **rara vez entre organizaciones independientes** (el socio no libera sus instalaciones o también está afectado); los desastres grandes afectan a varios suscriptores a la vez.
- Además del hardware: **telecomunicaciones** (rutas alternativas y diversificadas) y **sede alternativa para backups y documentación**.

## 🔗 Relacionado
- [[Plan de contingencias]] · [[Recuperación ante el desastre]] · [[Niveles de emergencia (catástrofe, desastre y no desastre)]]
