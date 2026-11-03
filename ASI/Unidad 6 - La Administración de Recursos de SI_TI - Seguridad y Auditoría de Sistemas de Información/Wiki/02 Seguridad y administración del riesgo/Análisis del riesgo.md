---
tags: [ASI-U6, robson, riesgo]
aliases: [Pérdida esperada]
---
# Análisis del riesgo (etapa 2)

> [!quote] Robson
> "Una vez detectadas las amenazas, se puede proceder con el análisis de su impacto potencial. Si la etapa de identificación del riesgo constituye una forma de '**pensamiento creativo y espontáneo**', entonces la etapa del análisis del riesgo es un **proceso más estructurado**, aunque a menudo de una manera **cualitativa y no cuantitativa**."

**Objetivo:** cuantificar la **probabilidad** y la **frecuencia** esperada de ocurrencia de cada riesgo y la **gravedad** de sus consecuencias. Acá se **relacionan activos, vulnerabilidades y lugares** para poder formular, expresar y calcular el riesgo, y se le asigna un **valor monetario** a lo que ocurriría si el riesgo se materializa.

## Las fórmulas

| Concepto | Cálculo |
|---|---|
| **Pérdida esperada** | **Pérdida potencial (en pesos) × Frecuencia de pérdida** |
| **Frecuencia de pérdida** | **Probabilidad de agresión × Probabilidad de éxito** (de la agresión) |
| **Exposición anual de pérdidas** | **Costo (de las consecuencias) × Frecuencia (de los cálculos)** → es la **pérdida anual esperada** de cada amenaza, que se tabula en la [[Tabla de pérdida anual (ALE)\|tabla ALE]] |

> [!note] "Agresión" en Robson
> La palabra "agresión" hace referencia a **cualquier falla en la seguridad**, **no necesariamente a un deliberado abuso humano** (un incendio también es una "agresión").

## Las dos etapas del análisis del impacto potencial
1. **Evaluar los costos empresariales** que surgen de una brecha de seguridad: cálculos financieros al menos aproximados, incluso para costos conceptuales (ver [[Consecuencias primarias y secundarias]]).
2. **Estimar la frecuencia de ocurrencia** a partir de la probabilidad de agresión y la probabilidad de que la agresión prospere. Estos cálculos pueden extraerse de: **tablas de actuarios, evidencia empírica o cálculos razonados**.

> [!tip] Medidas relativas mejor que precisión espuria
> Es difícil predecir la probabilidad de una amenaza (el uso de los IS cambia muy rápido y las empresas no registran todas las agresiones por miedo a dañar su reputación). Por eso Robson recomienda usar **medidas relativas** (muy alto, alto, mediano…) y asignarles un valor (90 %, 70 %, 50 %…): "el uso de estos cálculos aproximados es **más efectivo que cualquier precisión espuria y engañosa**".

> [!example] Cálculos de frecuencia (Robson, Fig. 13.6)
> | Amenaza | Prob. de agresión | Prob. de éxito | Frecuencia |
> |---|---|---|---|
> | Incendio | mediana 50 % | alta 70 % | **35 %** |
> | Hacking | baja 20 % | mediana 50 % | **10 %** |
>
> La **reducción del riesgo** puede bajar la probabilidad de agresión o la de éxito (para reducir la frecuencia), o bien bajar los costos resultantes.

## Por qué es difícil
- Requiere apreciar la **verdadera magnitud** de las pérdidas de cada amenaza.
- Requiere una **valoración realista de la posibilidad** de que la amenaza se concrete. Según **Loch et al. (1992)**, muchas organizaciones no están ciegas ante las amenazas ni sus costos, sino ante **la probabilidad de que el evento les suceda a ellas**.

## Las tres categorías de pérdida
Todas las pérdidas "se relacionan con los **atributos de valor agregado de la información**":
1. **Pérdida de disponibilidad** — no se puede acceder a datos e información.
2. **Falla en la integridad/precisión** — no se puede confiar en los datos.
3. **Pérdida de confidencialidad/seguridad** — se pierde la posesión exclusiva. "Una vez más, el peor caso es el de **incertidumbre**."

> [!important] Su lugar en el proceso
> "El análisis del riesgo establece **un lado** del punto de equilibrio óptimo entre el costo de pérdidas y el costo de medidas de seguridad. El **manejo del riesgo** identifica contra medidas posibles y luego elige el conjunto adecuado para ese **trueque óptimo**."

## 🔗 Relacionado
- [[Identificación del riesgo]] · [[Tabla de pérdida anual (ALE)]] · [[Consecuencias primarias y secundarias]] · [[Manejo del riesgo (4 estrategias)]] · [[Administración del riesgo]]
