---
tags: [ASI-U3, puigjaner, carga]
aliases: [Carga de trabajo, Carga]
---
# Carga del sistema

> [!quote] Definición (Puigjaner)
> "Se denomina **carga** a todas las **demandas** que realizan los usuarios de un sistema (programas, datos, órdenes, etc.) **durante un intervalo de tiempo**."

**En criollo:** todo lo que le "pedimos" al sistema en un período. Es lo que define qué rendimiento se va a observar.

> [!info] Variante de alumnos
> Un cuestionario resuelto amplía: demandas del usuario **más** las del SW y HW de base y otras aplicaciones de la cartera. El apunte sistematizado se queda con "demandas de los usuarios": usá esa y, si querés, aclarás que compite con el resto de la carga del sistema.

## Dificultades que plantea la carga real
1. **Fluctúa continuamente.**
2. **Interactúa con su entorno.**
3. **No permite repeticiones** para eliminar errores de medición → difícilmente sirve como carga de prueba (no es reproducible: si el pico es a la mañana, medir a la tarde no sirve).
4. El resultado de las medidas es **función de la carga e inseparable de ella**: todo índice de prestaciones debe informarse **con su carga**, y comparar sistemas solo tiene sentido **con la misma carga**.

## Solución
**Establecer un modelo de la carga** (carga de prueba o de test) que reproduzca lo más fielmente posible la carga real, construido a partir de los **objetivos del estudio** → [[Caracterización de la carga]] · [[Modelo de carga y representatividad]] · [[Cargas de test]].

> [!example] Definir carga de trabajo (pregunta de final)
> "Son todas las demandas que realiza un usuario a un sistema en un intervalo de tiempo determinado."

**Cuestionario:** responde la **II.3**.

## 🔗 Relacionado
- [[Caracterización de la carga]] · [[Rendimiento y prestaciones]] · [[Planificación de la capacidad]]
