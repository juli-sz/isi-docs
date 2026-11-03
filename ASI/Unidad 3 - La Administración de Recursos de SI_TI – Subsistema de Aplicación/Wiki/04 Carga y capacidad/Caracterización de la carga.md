---
tags: [ASI-U3, puigjaner, carga]
aliases: [Magnitudes que caracterizan la carga]
---
# Caracterización de la carga

> [!quote] Definición (Puigjaner)
> "La **caracterización de la carga** es el proceso de describir la carga real a través de un conjunto de **parámetros**, generando un **modelo** que refleje sus particularidades más importantes y su comportamiento."

"Caracterizar" = **construir un modelo de carga** que reproduzca lo más fielmente posible el comportamiento de la carga real, con los parámetros que afectan al sistema y **según los objetivos del estudio**.

## ¿En qué situaciones surge el problema?
Cuando hay que **medir un sistema existente** o **recabar datos para predecir** su comportamiento: como la carga **fluctúa** e **interactúa con el entorno**, hay que modelarla y explicitarla para que los índices sean **comparables y útiles**.

## Parámetros
- **Cuantitativos:** surgen de la carga de trabajo.
- **Cualitativos:** relacionados con las **variables de comportamiento**; dependen también del **entorno organizacional**.

> [!important] Regla de oro
> "Una carga está correctamente caracterizada **si, y solo si**, el resultado es un conjunto de parámetros cuantitativos **seleccionados de acuerdo con los objetivos** de la operación de caracterización." → **Primero los objetivos**, después las **herramientas** que manipularán el modelo (modelos analíticos, simulación, el sistema real).

## Magnitudes que caracterizan la carga (niveles)

| Nivel | Variable | Definición |
|---|---|---|
| **Cada componente** | Tiempo de CPU por trabajo | CPU total necesaria para ejecutar un trabajo |
| | N.º de operaciones de E/S por trabajo | Conviene desglosarlo por dispositivo |
| | Características de las E/S | Soporte (cinta, disco), tipo de acceso, posición del archivo |
| | Prioridad | La que el usuario asigna |
| | Memoria | Tipo y cantidad requerida (real o virtual) |
| | Localidad de las referencias | Tiempo en que las referencias a memoria permanecen en una página o conjunto de páginas |
| **Conjunto de la carga** | Tiempo entre llegadas | Intervalo entre peticiones |
| | Frecuencia de llegada | Peticiones por unidad de tiempo |
| | Distribución de trabajos | Proporción entre tipos de trabajo |
| **Cargas conversacionales** | Tiempo de reflexión del usuario | Leer la respuesta, pensar y teclear |
| | N.º de usuarios simultáneos | — |
| | Intensidad del usuario | Tiempo de respuesta del sistema / tiempo de reflexión |

> [!tip] Conclusión del apunte
> El rendimiento observado es **función de la carga**; como la carga varía e interactúa con el entorno, hay que **modelarla y explicitarla**. Recién así los índices de prestaciones serán **comparables y útiles**.

**Cuestionario:** responde la **II.6** (y es pregunta de final).

## 🔗 Relacionado
- [[Carga del sistema]] · [[Modelo de carga y representatividad]] · [[Cargas de test]] · [[Planificación de la capacidad]] · [[Unidades de predicción natural (UPN)]]
