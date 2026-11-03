---
tags: [ASI-U3, molero, capacidad]
aliases: [Regresión lineal, Medias móviles, Suavizado exponencial]
---
# Técnicas cuantitativas de predicción de la carga (Molero)

## Regresión lineal
Estima el valor de una **variable dependiente** en función de **variables independientes**. Apropiada para datos **no estacionales con tendencia**; la regresión lineal simple supone evolución **lineal**.

- Recta: `y = a + b·x`
- Mínimos cuadrados: `b = (Σ xᵢ·yᵢ − n·x̄·ȳ) / (Σ xᵢ² − n·x̄²)` y `a = ȳ − b·x̄`

## Medias móviles
El valor predicho para el período siguiente es la **media de las n observaciones previas**. Muy exacta con datos **casi estacionarios**; sirve para **corto plazo**.

- `fₜ₊₁ = (yₜ + yₜ₋₁ + … + yₜ₋ₙ₊₁) / n`
- Elegir **n** que minimice el **error cuadrático medio**: `ECM = (1/n) · Σ (yₜ − fₜ)²` (probar distintos n).
- Aplicable cuando la demanda real: **no varía mucho a corto plazo**, **no tiene tendencia marcada** e, idealmente, **no tiene estacionalidad**.

## Suavizado exponencial
**Media ponderada** de observaciones pasadas y la presente que da **más peso a las recientes** (esa es la diferencia con medias móviles). Para datos **no estacionales sin tendencia sistemática**.

- `fₜ₊₁ = (1 − α)·fₜ + α·yₜ₊₁`  ⇔  `fₜ₊₁ = fₜ + α·(yₜ₊₁ − fₜ)`, con **0 < α < 1** (peso del valor observado más reciente).
- **Aproximación de Tustin:** tomar **más de un valor estimado** anterior (más relevancia a lo estimado) o **más de un valor observado** (más relevancia a observaciones consecutivas).

| Técnica | Patrón | Horizonte / rasgo |
|---|---|---|
| **Regresión lineal** | Tendencia | Extrapola la recta |
| **Medias móviles** | Estacionario | Corto plazo; todas las observaciones pesan igual |
| **Suavizado exponencial** | Sin tendencia sistemática (tabla: cíclico/estacional) | Pondera más lo reciente (α) |

> [!info] Fuente de las fórmulas
> En el apunte sistematizado las ecuaciones son imágenes; las fórmulas de arriba se transcribieron de los resúmenes de alumnos (Apunte Supremo / Apunte Yoel), que copian a Molero.

**Cuestionario:** responde la **II.10**.

## 🔗 Relacionado
- [[Patrones de la carga y métodos de predicción]] · [[Planificación de la capacidad]] · [[Unidades de predicción natural (UPN)]]
