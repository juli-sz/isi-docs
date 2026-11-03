---
tags: [ASI-U3, puigjaner, rendimiento, herramientas]
aliases: [Monitor, Monitorización, Monitor de rendimiento]
---
# Monitores

> [!quote] Definición (apunte sistematizado, Puigjaner)
> "Los **monitores** son las herramientas de medición que permiten **seguir el comportamiento** de los principales elementos de un sistema informático sometido a una **carga de trabajo determinada**."

**En criollo:** el monitor es el "termómetro" del sistema: sin él no se ven las **variables internas** (utilización, overhead, fallos de página…).

## Características (según respuestas de finales)

> [!warning] Fuente
> El apunte de U3 solo da la definición. Lo que sigue proviene de **respuestas de alumnos a preguntas de final** ("Concepto de monitor. Características de un monitor"), no del apunte; está en línea con Puigjaner pero no pudo verificarse textualmente.

- **Repetibilidad:** una medida debe poder repetirse y dar siempre el mismo resultado.
- **Según el mecanismo de activación:**
  - **Por detección de acontecimientos (eventos):** un acontecimiento es un **cambio de estado** del sistema; se inserta código suplementario (**traps**, interrupciones controladas por programa) en el SO que, al ocurrir el evento, guarda sus datos y el instante.
  - **Por muestreo:** analiza solo una **muestra** de los acontecimientos (cuando examinarlos todos es imposible o caro); se activa a **intervalos fijos o aleatorios** mediante interrupciones de reloj.
- En las respuestas de final, [[Herramienta top|top]] se clasifica como **monitor software por muestreo**.

## Ejemplos que aparecen en finales
- **top** → monitor software por muestreo en tiempo real → [[Herramienta top]].
- **NAGIOS** (V/F, **verdadero**): herramienta de **código abierto** de tipo **monitor** que vigila redes examinando equipos (HW) y servicios (SW) especificados, y **alerta** cuando los parámetros exceden los márgenes definidos por el administrador.

## ¿En qué otros subsistemas se usa el monitor? (pregunta de final)
- **Aplicación de SI/TI:** evaluar prestaciones y **planificar la capacidad** (paso 1: dotar al sistema de instrumentación) → [[Planificación de la capacidad]].
- **Seguimiento de SI/TI:** controlar que los recursos sigan cumpliendo los niveles de servicio.
- **Explotación:** vigilancia continua de CPU, memoria, E/S y red para cumplir el SLA *(fuente: Complemento a los apuntes — no es material de cátedra)* → [[Explotación de sistemas]].
- **Seguridad y auditoría:** los resultados de monitorización sirven como **evidencia** (ej. justificar vulnerabilidades de un recurso; verificar uso eficiente de recursos) → [[Auditoría de sistemas de información]] · [[Auditoría de la función informática]].

> [!example] Final oral (relato de alumno)
> "Inventá un entorno donde hagas seguimiento": e-commerce transaccional que no cumple el **tiempo de respuesta** al registrar una compra → monitor software para ver uso de **procesador y memoria** (¿otros procesos?), la **red**, y si el proveedor cumple los **niveles de servicio**.

## 🔗 Relacionado
- [[Técnicas de evaluación de sistemas]] · [[Magnitudes y variables de medida]] · [[Herramienta top]] · [[Benchmarking]]
