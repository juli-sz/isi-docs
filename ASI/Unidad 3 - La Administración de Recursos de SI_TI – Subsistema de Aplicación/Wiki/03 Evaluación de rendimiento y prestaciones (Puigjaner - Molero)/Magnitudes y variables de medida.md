---
tags: [ASI-U3, puigjaner, rendimiento]
aliases: [Variables internas y externas, Variables de comportamiento, Qué debe medirse]
---
# Magnitudes y variables de medida

Para evaluar se usan **medidas cuantitativas** que caracterizan el comportamiento del HW y SW o cómo lo ven el **usuario** (visión externa) y el **responsable del sistema** (visión interna).

> [!quote] Magnitud
> "Todo aquello que puede **medirse** y expresarse mediante un **número y una unidad**."

**Magnitudes a medir:** **consumo de tiempo** · **utilización de recursos o dispositivos** · **trabajo realizado** por el sistema o sus componentes.

## Variables externas (perceptibles por el usuario)

| Variable | Definición |
|---|---|
| **Productividad (throughput)** | Trabajo útil ejecutado por unidad de tiempo en un entorno de carga (trabajos/hora, transacciones/s) |
| **Capacidad** | **Máxima** cantidad de trabajo útil por unidad de tiempo |
| **Tiempo de respuesta** | Desde la entrega de un trabajo o transacción hasta la recepción del resultado |

## Variables internas (del sistema — no se ven a simple vista: hace falta un monitor)

| Variable | Definición |
|---|---|
| **Factor de utilización** | % de tiempo que un componente (CPU, canal, E/S…) estuvo realmente en uso |
| **Solapamiento de componentes** | % de tiempo en que dos o más componentes se usaron simultáneamente |
| **Overhead** | % de tiempo de uso en tareas del sistema no imputables a los trabajos en curso |
| **Factor de carga de multiprogramación** | Tiempo de respuesta en multiprogramación / en monoprogramación |
| **Factor de ganancia de multiprogramación** | Tiempo total de ejecutar un conjunto de programas secuencialmente en mono / en multiprogramación |
| **Frecuencia de fallo de página** | Fallos de página por unidad de tiempo (memoria virtual paginada) |
| **Frecuencia de swapping** | Programas expulsados de memoria por unidad de tiempo |

**Ejemplos vistos en clase:** % CPU de sistema y de usuario · memoria usada y total · carga en un tiempo x · tasas de recepción y transmisión · tasas de lectura y escritura en disco · % CPU y memoria por proceso · tiempo de ejecución de un proceso · hilos por proceso (justo lo que muestra [[Herramienta top]]).

## Variables de comportamiento (más funcionales que de prestaciones)

| Variable | Definición |
|---|---|
| **Fiabilidad** | Probabilidad de trabajar correctamente durante un intervalo (fallos por unidad de tiempo o **tiempo medio entre fallos**) |
| **Disponibilidad** | Probabilidad de estar funcionando y disponible en el instante t |
| **Seguridad** | Probabilidad de no perturbar otros sistemas ni comprometer la seguridad de las personas |
| **Performabilidad** | Probabilidad de que las prestaciones estén por encima de cierto nivel en un instante |
| **Mantenibilidad** | Facilidad para reparar el sistema después de un fallo |

> [!warning] Performabilidad
> Un cuestionario resuelto de alumnos escribe "performance": el apunte sistematizado dice **performabilidad**.

> [!example] Pregunta de final: "diferencia entre variable y magnitud" (respuesta elaborada a partir del apunte)
> La **magnitud** es **qué** se mide (tiempo, utilización, trabajo realizado: número + unidad); la **variable** es el **indicador concreto** que expresa esa magnitud para un componente o para el usuario (ej. tiempo de respuesta → magnitud tiempo; factor de utilización de la CPU → magnitud utilización).

**Cuestionario:** responde la **II.5**.

## 🔗 Relacionado
- [[Evaluación de prestaciones]] · [[Monitores]] · [[Mejora del comportamiento de un sistema]] · [[Sistemas batch, transaccional e interactivo]]
