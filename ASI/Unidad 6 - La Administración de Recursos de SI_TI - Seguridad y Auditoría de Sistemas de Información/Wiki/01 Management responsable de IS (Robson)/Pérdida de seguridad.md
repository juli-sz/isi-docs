---
tags: [ASI-U6, robson, seguridad]
aliases: [Falla de seguridad, CID]
---
# Pérdida de seguridad

El manejo de la seguridad de los IS "se refiere a la **visualización y el management de los riesgos** en términos de las **causas**, los **efectos** y, por lo tanto, los **costos** que implica una pérdida de seguridad" (Robson).

> [!quote] Definición textual (Robson)
> Una pérdida de seguridad es "**la falla de los elementos de un sistema de información computarizado para realizar la función o brindar el o los servicios para los cuales estaba destinado**".

**En criollo:** hay pérdida de seguridad cuando el sistema deja de hacer lo que tenía que hacer (o lo hace mal, o lo hace para quien no debía).

## Los aspectos involucrados (I.2)
"Dicha falla puede referirse a la pérdida de uno de los siguientes aspectos (**o de todos**)":

| Aspecto | Qué se pierde (Robson / apunte) | Ejemplo |
|---|---|---|
| **Integridad** de la información | Destruye la capacidad de la empresa para **confiar en sus datos** o, peor aún, la deja con **datos de precisión incierta** | Un error de programa altera saldos y nadie sabe desde cuándo |
| **Operatividad / disponibilidad** | Destruye, **total o parcialmente**, la capacidad de la empresa para **acceder** a datos e información | Se cae el servidor de facturación un día de cierre |
| **Confidencialidad** | Destruye la **posesión exclusiva** de los datos → la organización **pierde poder y confianza**. También implica que **cada rol acceda solo a la información que le corresponde** según sus responsabilidades | Un empleado de atención al público consulta sueldos de gerentes |

> [!warning] Detalle de fuentes
> El OCR de Robson lista "Disponibilidad · Integridad · Confiabilidad" con una corrección manuscrita "Confidencialidad"; más adelante el mismo capítulo habla de "pérdida de **confidencialidad/seguridad**". La cátedra usa **confidencialidad**. Usá esa.

> [!important] Los aspectos se contagian
> La pérdida de un aspecto **puede impactar en los demás** (ej.: un intruso que lee datos —confidencialidad— puede además modificarlos —integridad—). En los tres casos, **el peor escenario es la incertidumbre**: no saber qué se perdió.

## De la pérdida de seguridad a la administración del riesgo
"De esta definición se desprende la noción de que las organizaciones necesitan **administrar el riesgo de exposición** de cada uno de los elementos de los IS" → [[Administración del riesgo]].

Robson cita a **Davis y Olson (1985)**: ya no tiene sentido preguntarse si una empresa puede seguir existiendo después de una pérdida de seguridad importante, sino **en cuánto tiempo dejará de funcionar**.

**Cuestionario:** responde la **I.2**.

## 🔗 Relacionado
- [[Management responsable de IS]] · [[Administración del riesgo]] · [[Análisis del riesgo]] · [[Tipos de ataques contra los SI]] (cada ataque golpea a uno de estos aspectos)
