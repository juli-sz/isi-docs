---
tags: [ASI-U3, examen, finales]
aliases: [Finales U3]
---
# 🎓 Preguntas de final — U3 (Subsistema de aplicación)

*Preguntas reales de finales (recopiladas por alumnos en "Preguntas teóricas — Finales", ordenadas y sin ordenar). Las respuestas entre corchetes de los alumnos se verificaron contra el apunte; donde no coinciden, se aclara.*

## Verdadero / Falso (con justificación)

| # | Afirmación | V/F | Justificación | Nota |
|---|---|---|---|---|
| 1 | "Un **benchmark** puede ser cualquier programa ejecutable: (a) programas diseñados para el estudio de prestaciones (benchmarks generales) o (b) programas completos en alto nivel extraídos de, y representativos de, la carga real." | **V** | Benchmark = "punto de referencia". El apunte lo ubica como **carga sintética natural** (programas extraídos de la carga real) y entre las **cargas artificiales ejecutables** | [[Benchmarking]] |
| 2 | "**NAGIOS** es una herramienta de código abierto de tipo **monitor** que vigila redes examinando equipos (HW) y servicios (SW), alertando cuando los parámetros exceden los márgenes definidos por el administrador." | **V** | Es un monitor: sigue el comportamiento de los elementos del sistema | [[Monitores]] |
| 3 | "El proceso de **benchmarking** es en esencia un proceso de **medición del rendimiento real** de un sistema." | **F** | Es un proceso de **comparación**: resultados de un componente bajo una carga de prueba vs los de uno similar bajo **la misma carga** | [[Benchmarking]] |
| 4 | "Un sistema que no presenta el nivel aceptable de rendimiento debe ser **inmediatamente actualizado**." | **F** | Primero se **sintoniza** (parámetros del SO, programas, políticas, equilibrio de carga); la ampliación es la última opción | [[Mejora del comportamiento de un sistema]] |

## Desarrollo — RRHH

- **Cuadro sinóptico comparando los modelos de diseño de cargos (clásico, humanista, contingencial).** → [[Modelos de diseño de cargos]]
- **Proponga dos medidas de enriquecimiento horizontal y dos de vertical.** Horizontal = más tareas del **mismo nivel** (a un programador sumarle diseño y pruebas); vertical = responsabilidades de **nivel superior** (supervisar juniors, planificar la infraestructura de una nueva área). → [[Enriquecimiento de cargos]]
- **¿Qué es un equipo (grupo) efectivo de trabajo?** → [[Equipo efectivo de trabajo]] · **¿Cómo evaluaría a un equipo? ¿Con qué puntaje lo consideraría efectivo?** → el material no fija puntaje: usar las características como factores de evaluación y justificar el corte.
- **¿Cuáles de estas frases pueden traer problemas al evaluar el desempeño? (a) basarse solo en la DyAC; (b) basarse solo en estándares de trabajo; (c) mala herramienta de selección en la provisión; (d) falta de discrecionalidad del evaluador.** Respuesta de alumnos para (a)/(b): el control necesita **ambos** (estándares basados en la DyAC **y** seguimiento del desempeño real comparado contra ellos). (c) conecta con provisión: una mala selección aparece como problema de desempeño. → [[Evaluación del desempeño humano]] · [[Aplicación y provisión de RRHH]]
- **Inventario de necesidades** (parte B de un final): **no está en el material de U3** (apareció en la misma mesa; corresponde a otra unidad).

## Desarrollo — SI/TI

- **¿En qué situaciones "caracterizar la carga" presenta un problema? Describa las magnitudes que la caracterizan.** La carga **fluctúa continuamente** e **interactúa con el entorno**; magnitudes por componente, por conjunto y para cargas interactivas. → [[Caracterización de la carga]]
- **¿Por qué la carga de prueba es "un modelo de la carga real"? Características de un modelo de carga.** Reproducibilidad, compacidad, compatibilidad, representatividad, flexibilidad, independencia del sistema. → [[Modelo de carga y representatividad]]
- **Defina carga de trabajo.** "Todas las demandas que realiza un usuario a un sistema en un intervalo de tiempo determinado." → [[Carga del sistema]]
- **¿Cuáles son los tipos de comportamiento de la carga en la planificación de SI/TI?** Tendencia, cíclico, estacional, estacionario (con gráficos). → [[Patrones de la carga y métodos de predicción]]
- **¿Qué método aplicaría para cargas tendenciales?** **Regresión lineal**. → [[Técnicas cuantitativas de predicción de la carga]]
- **Relacione aplicación de SW y HW con provisión de SW y HW.** → [[Aplicación y provisión de SI-TI]]
- **Concepto de monitor. Características. ¿En qué otros subsistemas lo usaría?** → [[Monitores]]
- **Herramienta top: tipo y clasificación, componentes que sigue, dos datos que muestra; leer memoria total, % de memoria usada, % de CPU, carga media de 15 min y tendencia.** → [[Herramienta top]]
- **Ley de Amdahl: enunciado, cuándo se usa, ¿qué tipo de técnica de evaluación es?, ¿para qué usaría el resultado?** → [[Ley de Amdahl]]
- **Diferencia entre variable y magnitud.** → [[Magnitudes y variables de medida]]
- **Oral:** caracterización de la carga; ¿en qué momento se planifica la capacidad?; comportamientos y cómo determinarlos (describir los gráficos). → [[Planificación de la capacidad]]

## Desarrollo — Management de SI (Robson)

- **"Nos dio un organigrama": ¿qué rol tiene el área y cómo se relaciona con los usuarios? ¿Qué organización (enfoque estructural) es? ¿En qué organización aplicaríamos ese rol y esa organización?** → usar la tabla rol ↔ relación ↔ estructura de [[Rol de IS — relaciones con los usuarios y estructuras]] y [[Enfoques estructurales — detalle U3]].

## Cruces que aparecieron en la misma mesa
- Monitorización y evaluación de rendimiento como **interacción** entre seguimiento y **seguridad/auditoría** (resultados de monitorización para justificar vulnerabilidades; evaluaciones de rendimiento como fuente de auditoría del uso eficiente de recursos) → [[Auditoría de sistemas de información]].
- Separación de funciones y auditoría de la función informática → [[Auditoría de la función informática]] · [[Explotación de sistemas]].

## 🔗 Relacionado
- [[Cuestionario U3 (27 preguntas)]] · [[Comodines y cruces de examen U3]]
