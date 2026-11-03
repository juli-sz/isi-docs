---
tags: [ASI-U3, puigjaner, rendimiento]
aliases: [Sintonización, Magnitudes para controlar el comportamiento, Tuning]
---
# Mejora del comportamiento de un sistema (magnitudes para controlarlo)

Las modificaciones para mejorar el comportamiento pueden hacerse **en todos los niveles** que influyen en él:

## 1. Ajuste de los parámetros del SO

| Parámetro | Qué es |
|---|---|
| **Tamaño del quantum** | Tiempo de uso ininterrumpido de CPU que un sistema de tiempo compartido asigna a cada trabajo |
| **Prioridad interna** | Prioridad inicial que recibe un programa según la prioridad externa asignada |
| **Factor de multiprogramación** | Máximo de trabajos simultáneamente en memoria principal con opción a usar CPU y recursos |
| **Tamaño de la partición de memoria** | Memoria principal fija asignada a cada trabajo |
| **Tamaño de la ventana** | Intervalo en que el sistema mide el **conjunto de trabajo** de un programa (memoria virtual paginada) |
| **Máxima frecuencia de fallo de página** | — |
| **Índice de supervivencia de las páginas** | Ráfagas de CPU que recibe un programa antes de que se saque de memoria una página no referenciada |
| **Número de usuarios simultáneos** | Máximo de usuarios de terminales en tiempo compartido |

## 2. Modificación de los programas
Que su ejecución promedio requiera **menos recursos**: recodificar los caminos más recorridos, montar en la misma página o segmento los módulos que deben coexistir. **Modifica la carga.**

## 3. Modificación de las políticas de gestión del SO
Sustituir la rutina que gestiona un recurso por otra con una **política más idónea** para el caso.

## 4. Equilibrado de la distribución de la carga

## 5. Sustitución o ampliación de componentes
Cambiar la **configuración**: elementos de mayor capacidad o rapidez, o más dispositivos.

> [!tip] Orden lógico (V/F de final)
> "Un sistema que no presenta un nivel aceptable de rendimiento debe ser inmediatamente actualizado" → **Falso**: primero se **sintoniza** (1 a 4); la **sustitución/ampliación** (5) es la que dispara **nueva provisión**.

> [!info] Complemento (no cátedra)
> El "Complemento a los apuntes" ubica el **tuning** (quantum, grado de multiprogramación, paginación) dentro del **soporte técnico a la explotación** *(fuente: Complemento a los apuntes — no es material de cátedra)* → [[Explotación de sistemas]].

**Cuestionario:** responde la **II.7**.

## 🔗 Relacionado
- [[Magnitudes y variables de medida]] · [[Evaluación de prestaciones]] · [[Aplicación y provisión de SI-TI]] · [[Enriquecimiento de cargos]] *(el análogo en RRHH: mejorar lo que ya está aplicado)*
