---
tags: [ASI-U6, riesgo, definiciones]
aliases: [Amenaza, Vulnerabilidad, Riesgo residual, Elementos del riesgo]
---
# Amenaza, vulnerabilidad y riesgo (definiciones)

> [!quote] Amenaza (apunte sistematizado)
> "Condición del entorno del sistema de información (**persona, máquina, suceso o idea**) que, dada una oportunidad, podría dar lugar a una **violación de seguridad** (confidencialidad, integridad, disponibilidad, autenticidad, no repudio)." Es algo con **capacidad de daño**. **Un ataque es la realización de una amenaza.**

- Afectan la **disponibilidad** (interrupción), la **integridad** (modificación) o la **confidencialidad** (intercepción) → ver [[Tipos de ataques contra los SI]].
- Tipos: **físicas o lógicas**; **accidentales o deliberadas**.

> [!quote] Riesgo (ISACA, citado en el apunte)
> "Es el **potencial** de que una **amenaza** determinada **explote las vulnerabilidades** de un **activo** o de un grupo de activos y ocasione su **pérdida o daño**."

El riesgo se relaciona con la **materialidad**: la **magnitud del error** en términos de su **impacto potencial** para el conjunto de la organización; en general se expresa en **términos monetarios**.

## Elementos del riesgo

| Elemento | Qué es | Ejemplos |
|---|---|---|
| **Activos** | Lo que hay que proteger | Información, datos, hardware, software, servicios, documentos, personal |
| **Amenazas** | Resultado de un análisis de vulnerabilidades | Errores, ataques maliciosos, fraude, robo, fallas de equipos o de software |
| **Vulnerabilidades** | **Lo que es atacable** | Falta de conocimientos del usuario, falta de funcionalidad de seguridad, mala elección de contraseñas, tecnología no probada, transmisiones no seguras |
| **Impactos** | Pérdidas que resultan de la ocurrencia de una amenaza | Pérdida directa de dinero, violación de leyes, pérdida de reputación, violación de la confianza, pérdida de oportunidades de negocio, reducción de la eficiencia, interrupción de las actividades |
| **Riesgo global** | Combinación de los elementos anteriores | Cálculo del impacto y la probabilidad de cada amenaza |
| **Riesgo residual** | Nivel de riesgo que **queda una vez aplicados los controles** | La gerencia lo usa para ver dónde hace falta **más control** o qué puntos están **sobrecontrolados** |

**En criollo:** *activo* = lo que tengo; *vulnerabilidad* = su punto flojo; *amenaza* = lo que podría aprovechar ese punto flojo; *riesgo* = la chance de que eso pase y me cueste plata; *riesgo residual* = lo que me queda después de poner controles.

## Activos vulnerables a pérdidas (Robson)

| Activo | Cómo se valúa la pérdida |
|---|---|
| **Hardware** | Relativamente **fácil** de evaluar; suele estar **asegurado** (costo de reposición + costo de repetir la adquisición) |
| **Software** | Complicado: el **valor intrínseco o costo de reemplazo no tiene relación con su costo original de desarrollo**; además su pérdida genera pérdida de **capacidad de procesamiento**, que hay que sumar |
| **Datos e información** | **La pérdida más seria y la más difícil de cuantificar** (ej.: perder los datos de ventas deja a la empresa sin saber quiénes le deben) |
| **Capacidad de procesamiento** | La **duración de la interrupción** es la variable clave (un sistema de tiempo real pierde fortunas en segundos) |
| **Personal** | Quizás el costo que **más se pasa por alto**: pérdida de personal clave, por su conocimiento teórico o su competencia práctica |
| **Fondos** | Depende del tipo de negocio; los fraudes a menudo se originan en errores accidentales no detectados en movimientos de efectivo |

## 🔗 Relacionado
- [[Identificación del riesgo]] · [[Análisis del riesgo]] · [[Riesgos de auditoría (inherente, de control y de detección)]] (¡otro "riesgo", el del auditor!)
