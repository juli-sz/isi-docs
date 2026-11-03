---
tags: [ASI-U3, puigjaner, rendimiento, herramientas]
aliases: [Benchmark, Evaluación comparativa]
---
# Benchmarking

> [!quote] Definición (apunte sistematizado, Puigjaner)
> "Es un método bastante frecuente para **comparar sistemas informáticos frente a una carga característica de una instalación concreta**; la comparación se efectúa, básicamente, a partir del **tiempo necesario para su ejecución**. En términos generales, puede considerarse como la **medición del comportamiento sobre un prototipo**."

**En criollo:** correr *tu* carga típica en distintas alternativas y ver cuál la resuelve mejor.

## Benchmark vs benchmarking
- **Benchmark** = "punto de referencia": el **programa o conjunto de programas** que se ejecuta.
- **Benchmarking** = "evaluación comparativa": el **proceso** de comparar.
- Como **carga de test**, "benchmark" aparece dos veces en el apunte:
  - **Carga sintética natural** = "**benchmark en sentido estricto**": programas **extraídos de la carga real** (estudios de selección).
  - Entre las **cargas artificiales ejecutables**, los **benchmarks**: programas estándar para simular una carga genérica.
  → [[Cargas de test]]

## V/F de finales
1. "Un benchmark puede ser cualquier programa ejecutable: (a) programas diseñados para el estudio de prestaciones (benchmarks generales) o (b) programas completos en lenguaje de alto nivel extraídos de, y representativos de, la carga real" → **Verdadero**.
2. "El proceso de benchmarking es en esencia un proceso de **medición del rendimiento real**" → **Falso**: es un proceso de **comparación** de resultados de rendimiento de un componente sometido a una carga de prueba con los de un componente similar **sometido a la misma carga**.

> [!tip] Cruce con provisión (U2)
> En la selección de paquetes, los criterios se evalúan con el cuestionario del usuario, el del vendedor "**y/o los resultados del benchmarking de paquetes**"; y los vendedores pueden **optimizar para el test de referencia** en vez del uso real, por eso las referencias deben ajustarse al uso supuesto real ([[02_AdmRR-Unidad2-SW-HW-Secc2.pdf|U2 Secc. 2]], [[01_AdmRR-Unidad2-SW-HW-Secc1.pdf|U2 Secc. 1]]).

## 🔗 Relacionado
- [[Técnicas de evaluación de sistemas]] · [[Cargas de test]] · [[Aplicación y provisión de SI-TI]] · [[Monitores]]
