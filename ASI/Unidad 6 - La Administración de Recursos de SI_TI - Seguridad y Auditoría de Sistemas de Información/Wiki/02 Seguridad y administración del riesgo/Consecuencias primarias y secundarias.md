---
tags: [ASI-U6, robson, riesgo]
aliases: [Pérdidas primarias, Pérdidas secundarias]
---
# Consecuencias primarias y secundarias de una falla de seguridad

| | **Consecuencias PRIMARIAS (pérdidas directas)** | **Consecuencias SECUNDARIAS** |
|---|---|---|
| Qué son | Lo que se desprende **directamente, y por lo general en forma inmediata**, de un problema de seguridad | Surgen **como consecuencia de las pérdidas primarias**, no de la falla en sí misma |
| Cuantificación | Difíciles de cuantificar | **Aún más difíciles**; tienden a ser **más costosas** que las directas y, como son costos empresariales, aparecen **después de un largo tiempo** → se usan **clasificaciones cualitativas** |

## Ejemplos (Robson, Figs. 13.9 y 13.11)

| Primarias | Secundarias |
|---|---|
| Interrupción del procesamiento a corto o largo plazo | Pérdida en la producción |
| Corrupción de los registros de datos (peor caso: no se detecta o su alcance es incierto) | Retraso en las entregas |
| Destrucción de los medios de almacenamiento | Problemas de flujo de efectivo |
| Uso de software no autorizado | Pérdida de confianza del cliente |
| Revelación de información confidencial | Declaraciones de impuestos imprecisas |
| Desaparición de equipos, datos o software | Información gerencial inútil, imprecisa e inoportuna |
| Pérdida de los registros de contabilidad u otros | Sanciones por incumplimiento de obligaciones legales |
| | Incapacidad de continuar con la función del sistema |
| | Pérdida de una posición competitiva |
| | **Incapacidad de continuar con el negocio** |

```mermaid
flowchart LR
    E["Eventos<br/>conflictivos"] -->|actúan sobre| S["Sistemas"]
    S -->|causan pérdida o daño a| I["Sistemas /<br/>información"]
    I -->|provocan| P["Pérdidas directas<br/>(primarias)"]
    P -->|que a su vez provocan| SE["Pérdidas secundarias<br/>e interrupción de los negocios"]
```

> [!important] La doble ganancia
> "La magnitud de la pérdida total de una falla en la seguridad es la **suma de las consecuencias primarias y secundarias**." Si se **minimizan las primarias** (eso busca una buena recuperación ante el desastre), hay **doble ganancia**: también se reducen las secundarias. Ej.: una falla de software daña datos, pero un **backup efectivo** y buenos procedimientos de reparación minimizan la pérdida primaria y, con ella, los retrasos e imprecisiones (secundarias).

> [!note] Similitud de pérdidas
> Muchas pérdidas primarias distintas producen **pérdidas secundarias similares**; aunque los riesgos sean muy diferentes, si las pérdidas son similares los costos también lo serán. Esto importa al decidir el manejo del riesgo, porque **el costo de evitar cada riesgo puede ser muy distinto** aunque las pérdidas secundarias sean comparables.

## 🔗 Relacionado
- [[Análisis del riesgo]] · [[Recuperación ante el desastre]] · [[Manejo del riesgo (4 estrategias)]]
