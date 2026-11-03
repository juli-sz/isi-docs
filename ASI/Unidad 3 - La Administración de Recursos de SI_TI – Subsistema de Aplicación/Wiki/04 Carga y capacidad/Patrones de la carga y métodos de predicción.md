---
tags: [ASI-U3, molero, capacidad]
aliases: [Comportamiento de la carga, Tendencia cíclico estacional estacionario, Métodos de predicción]
---
# Patrones de la carga y métodos de predicción

## Dos tipos de métodos

| **Cuantitativos** | **Cualitativos** |
|---|---|
| Se basan en **datos históricos** para estimar valores futuros de los parámetros de la carga | Proceso **subjetivo**: análisis e intuición sobre el mercado, **planes de negocio**, opiniones de expertos, analogías históricas, información del escenario tecnológico |

**Para elegir la técnica cuantitativa:** (1) **disponibilidad y fiabilidad** de los datos históricos; (2) **exactitud y horizonte** de planificación; (3) **patrón** de los datos.

## Los cuatro patrones (tipos de comportamiento de la carga)

| Patrón | Qué muestra | Ejemplo (respuestas de final) | Técnica (tabla del apunte) |
|---|---|---|---|
| **Tendencia** | La carga tiende claramente a **aumentar o disminuir** | Crecimiento sostenido de usuarios | **Regresión** |
| **Cíclico** | Fluctuaciones que se repiten | Cyber Monday | **Suavizado** |
| **Estacional** | Fluctuaciones con **periodicidad** ligada a épocas del año | Inscripciones a exámenes/materias en Sysacad; tráfico de servidores para universitarios que baja en verano | **Suavizado** |
| **Estacionario** | **Sin variación sistemática**; media constante | — | **Medias móviles** |

> [!warning] Inconsistencia del apunte
> La tabla asigna **suavizado** a cíclicos y estacionales, pero la explicación del **suavizado exponencial** dice que "debería utilizarse para datos **no estacionales** que no muestran una tendencia sistemática". En el examen, respondé el mapeo de la tabla y, si podés, aclarás la condición.

> [!example] Pregunta de final: "¿qué método aplicaría para cargas tendenciales?"
> **Regresión lineal**: apropiada para datos **no estacionales que muestran una tendencia**; la regresión lineal simple supone un patrón de evolución **lineal**.

> [!tip] Final oral
> Te pueden pedir **describir los gráficos** de cada comportamiento: tendencia = recta inclinada; cíclico/estacional = ondas que se repiten (estacional con período fijo ligado a épocas); estacionario = oscila alrededor de una media constante.

**Cuestionario:** responde la **II.10** (junto con [[Técnicas cuantitativas de predicción de la carga]]).

## 🔗 Relacionado
- [[Técnicas cuantitativas de predicción de la carga]] · [[Planificación de la capacidad]] · [[Unidades de predicción natural (UPN)]]
