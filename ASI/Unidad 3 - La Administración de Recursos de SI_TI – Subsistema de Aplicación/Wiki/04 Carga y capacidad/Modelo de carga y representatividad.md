---
tags: [ASI-U3, puigjaner, carga]
aliases: [Carga de prueba, Representatividad de la carga, Características de un modelo de carga]
---
# Modelo de carga y representatividad

**Carga de prueba o de test (modelo de carga):** la carga que debe procesar un sistema **mientras se realiza un experimento de medición**. **Sesión de medida:** intervalo del experimento (no tiene por qué ser continuo).

## ¿Por qué la carga de prueba es "un modelo de la carga real"? (pregunta de final)
Porque se construye para (respuesta de alumnos, coherente con el apunte):
- Satisfacer la **reproducibilidad** de los experimentos (comparaciones significativas).
- **Reducir** la duración de cada sesión de medida respecto de la carga real total.
- Lograr una representación **compatible** con su uso (a veces se usan simuladores donde la carga real no se puede usar).
- *(Cuestionario resuelto)* Evitar problemas de **privacidad y seguridad** de usar programas y datos reales.

## Características deseables

| Característica | Qué significa |
|---|---|
| **Reproductibilidad** | Permite reproducir los experimentos |
| **Compacidad** | Reduce sustancialmente la duración de cada sesión de medida |
| **Compatibilidad** | Representación coherente con su uso |
| **Representatividad** | Qué aspectos de la carga real se conservan |
| **Flexibilidad** | Si es posible y poco costoso modificar el modelo |
| **Independencia del sistema** | Importante en problemas de **selección** |

## Niveles de representatividad
No hay un criterio único: la carga puede representarse en los mismos niveles en que se describe un sistema.

| Nivel | W′ representa perfectamente a W si… | Características | Campo de aplicación |
|---|---|---|---|
| **Físico** | Solicita **los mismos recursos físicos en las mismas proporciones** | Orientado al consumo de recursos físicos · **gran dependencia del sistema** · construcción **fácil** (datos de *logging/accounting* del SO) | **Sintonización** · **capacidad residual** (% del equipo sin usar) · diseño |
| **Virtual** | Solicita **los mismos recursos lógicos con la misma frecuencia** (accesos a BD, sentencias) | Recursos lógicos · **menor dependencia** · cerca del punto de vista del programador/usuario · parámetros **más difíciles** de obtener | **Estudios de ampliación** (agregar unidades) |
| **Funcional** | Realiza **las mismas funciones en las mismas proporciones** | Orientado a **aplicaciones** · **independiente del sistema** · difícil de diseñar sistemáticamente | **Selección de un computador** · **planificación de la capacidad** |
| **De comportamiento** | Produce **los mismos valores de los índices de comportamiento** en el mismo sistema | Precisión = diferencia entre índices de la carga y del modelo | Validar el modelo por sus efectos *(desventaja según alumnos: modelos dependientes del sistema)* |

> [!tip] Truco
> **Físico** → sintonizar (mismo HW). **Virtual** → ampliar. **Funcional** → elegir/comprar o planificar (independiente del sistema). **Comportamiento** → validar.

**Fases de implantación de un modelo de carga:** **formulación o especificación → construcción → validación**.

## 🔗 Relacionado
- [[Cargas de test]] · [[Caracterización de la carga]] · [[Planificación de la capacidad]] · [[Benchmarking]]
