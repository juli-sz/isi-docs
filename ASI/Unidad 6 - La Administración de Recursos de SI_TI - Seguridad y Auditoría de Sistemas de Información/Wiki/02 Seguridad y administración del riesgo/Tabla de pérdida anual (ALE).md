---
tags: [ASI-U6, robson, riesgo]
aliases: [ALE, Exposición anual de pérdidas, Matriz de gravedad de la amenaza]
---
# Tabla de pérdida anual (ALE)

**ALE** = *Annual Loss Exposure / Expectancy*: la **exposición anual de pérdidas** de cada amenaza.

**Costo (de las consecuencias) × Frecuencia (de los cálculos) = Exposición anual de pérdidas**

La tabla (Robson, Fig. 13.7) cruza la **pérdida por ocurrencia** (en pesos, en filas) con la **frecuencia** (una vez cada 300 años, 30 años, 3 años, 100 días, 10 días, 1 día, 10 veces por día…) y da directamente la pérdida anual. Debe desarrollarse en una escala **pertinente al patrón de amenaza** analizado.

> [!example] Ejemplo de Robson
> Una **reducción de energía** que causa una pérdida de **100 pesos** cada vez que ocurre y, por fallas en el cableado, ocurre **una vez al día** en algún lugar del edificio, ocasiona una **pérdida anual de 30.000 pesos** (la tabla de Robson trabaja con unas 300 ocurrencias por año para "una vez al día": 100 × 300 = 30.000).
> → El método ALE **cuantifica la gravedad** de la amenaza y permite elegir contramedidas **efectivas en cuanto al costo**: medidas cuyo **costo anual sea menor que 30.000 pesos**.

**En criollo:** la ALE te dice "cuánto me cuesta por año no hacer nada"; cualquier control que cueste menos que eso (y lo reduzca) se paga solo.

## Cuando no se puede poner en pesos: matriz de gravedad de la amenaza
Si cuantificar en dinero no es fácil, se usa una **tabla de ranking cualitativo** (Fig. 13.8) con una escala simple (a menudo **logarítmica**) para la **magnitud de la pérdida** y la **probabilidad de ocurrencia**:
- Los riesgos **frecuentes** van a la **derecha**; los **raros**, a la izquierda; el **costo** del evento se lee de arriba hacia abajo.
- El manejo del riesgo suele concentrarse en **dos categorías**:
  1. Los que **ocurren frecuentemente** (las contramedidas dan **rédito neto alto**).
  2. Las **catástrofes absolutas**: infrecuentes, pero **provocarían el cierre del negocio**.

> [!tip] Respuesta clásica según la celda
> - **Baja frecuencia y costo potencial alto** → **seguro** (transferir).
> - Los controles y contramedidas de la **política de seguridad** se orientan generalmente a eventos de **frecuencia alta aunque de costo bajo**.

## Uso posterior
- La organización **ordena los riesgos en forma descendente según la tabla ALE** para considerar prioritariamente las contramedidas ("**portfolio de management del riesgo**"); los **desastres potenciales** se tratan siempre como ítem de **alta prioridad**.
- La reducción del riesgo solo es económicamente efectiva si produce en la tabla ALE una **reducción mayor que el aumento anual del costo** de las medidas.

## 🔗 Relacionado
- [[Análisis del riesgo]] · [[Manejo del riesgo (4 estrategias)]] · [[Guía del laboratorio U6 (líneas de defensa sobre análisis de riesgo)]]
