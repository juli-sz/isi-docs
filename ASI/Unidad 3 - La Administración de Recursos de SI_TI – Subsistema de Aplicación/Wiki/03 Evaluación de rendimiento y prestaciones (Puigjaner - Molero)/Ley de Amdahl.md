---
tags: [ASI-U3, rendimiento, examen]
aliases: [Amdahl]
---
# Ley de Amdahl (pregunta de final)

> [!warning] Fuente
> No está en el apunte de U3. Aparece en finales ("Sintetice la ley de Amdahl. ¿Qué tipo de técnica de evaluación es? Como administrador de recursos, ¿para qué utilizaría el resultado?") bajo "Subsistema de aplicación de SI/TI — técnicas analíticas". Lo que sigue sale de **respuestas y ejercicios de alumnos en finales**.

**Qué dice:** indica el **incremento de prestaciones** obtenido en un sistema como consecuencia de **mejorar una o varias de sus partes**. La mejora global está limitada por la **fracción de tiempo** en que se usa la parte mejorada.

**Fórmula usada en el ejercicio de final:**

`A = 1 / ((1 − f) + f / k)`  ·  `T mejorado = T original / A`

- **A:** aceleración (mejora) global.
- **f:** fracción del tiempo en que se usa la parte que se mejora.
- **k:** factor de mejora de esa parte (k = 2 si se reduce su tiempo a la mitad).

> [!example] Ejercicio de final
> Un programa usa la placa aceleradora de video el **87 %** del tiempo y se cambia la placa para que ese tiempo se reduzca **a la mitad** (f = 0,87; k = 2):
> A = 1 / (0,13 + 0,87/2) = 1 / 0,565 ≈ **1,77**.
> Si hoy tarda **32 s**: T = 32 / 1,77 ≈ **18,08 s**.
> Verificación: 87 % de 32 s = 27,84 s → a la mitad = 13,92 s; + 4,16 s del resto = **18,08 s**.

**¿Qué tipo de técnica de evaluación es?** Según la respuesta de final: **no es una técnica de evaluación** (las técnicas son monitorización, modelado y benchmarking → [[Técnicas de evaluación de sistemas]]); es una relación analítica.

**¿Para qué la usa el administrador de recursos?** Para **justificar un upgrade** (ampliación o sustitución de componentes): muestra cuánto mejora realmente el sistema y evita invertir en mejorar una parte que casi no se usa.

> [!tip] Conexión con la unidad
> Es el razonamiento detrás de la opción "**sustitución o ampliación de componentes**" de [[Mejora del comportamiento de un sistema]] y de las alternativas que compara la [[Planificación de la capacidad]].

## 🔗 Relacionado
- [[Mejora del comportamiento de un sistema]] · [[Planificación de la capacidad]] · [[Técnicas de evaluación de sistemas]]
