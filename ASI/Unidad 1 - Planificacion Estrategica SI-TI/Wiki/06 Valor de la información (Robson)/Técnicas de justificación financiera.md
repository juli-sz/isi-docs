---
tags: [ASI-U1, robson, valor]
aliases: [ROI, NPV, IRR, Payback, RoM]
---
# Técnicas de justificación financiera ("duras") y de riesgo

> [!info] Alcance
> Es la sección **7.3** del capítulo (*Decisión de la inversión*, pp. 54-93). **No tiene pregunta propia en el cuestionario (P13–P18)** y los apuntes de alumnos (Supremo, Yoel) **no la desarrollan**; sale del libro. La parte que sí se pregunta es la **economía de la información** (→ [[Economía de la información]], P18).

## Por qué hacen falta varias técnicas
- Ya **no se puede evaluar el rendimiento solo con los marcos de la contaduría tradicional** (no significa que sean obsoletos, pero **por sí solos no bastan**): no hacen visibles todos los costos ni todas las ganancias, son **de corto plazo** (el límite es el año fiscal), cuantitativos, evitan el riesgo y favorecen las actividades de **bajo costo** (p. 56).
- Los beneficios de los IS **son inciertos y llevan mucho tiempo**: se sugiere que todo proyecto necesita **2 a 3 años** antes de que sus beneficios sean lo bastante estables para medirse (Nolan Norton; Fig. 7.21).
- Diferentes tipos de beneficio → **diferentes enfoques** (las eras de [[Beneficios de los IS]]). La Fig. 7.24 los ordena en un **continuo de "dureza"**:

| Posición del continuo (de **duro/tangible** a **blando/intangible**) | Técnica asociada |
|---|---|
| **Evaluar el impacto financiero del cambio** | **NPV, IRR**, etc., para documentar el ahorro neto cuantificable |
| **Evaluar el valor del cambio** | **RoM** o similar, para documentar el valor neto |
| **Lógica causal para el cambio** | *No corresponde: no es realmente una decisión* |
| **Cambio por acto de fe** | **CSF** o similar para la **contribución estratégica** |
| **Cambio por deber / dictado** | *N/A: no es realmente una decisión* (obligaciones legales, mandatos) |

*(Fig. 7.24, p. 60.)* En el extremo "duro" se ubica la teoría del "debemos medirlo para poder manejarlo"; en la zona intermedia, "si apoya nuestra dirección estratégica, debemos hacerlo" (desenfatiza las cifras y las reemplaza por declaraciones de fe). A medida que se avanza hacia la derecha, los **beneficios intangibles** son una parte cada vez mayor del valor del proyecto (p. 59, 63).

## 7.3.1 Justificaciones financieras "duras" (pp. 63-67)
Todas buscan **cuantificar todo lo que pueda verse como un instrumento que genera flujo de fondos**: **ingresos incrementados** o **gastos reducidos/evitados** (los segundos, "gastos blandos"). Hacen las decisiones "plenamente racionales" para los sistemas de la **era de la eficiencia** (beneficios tangibles, procesos bien entendidos). Siguen siendo necesarias porque **(1)** esos sistemas todavía se implementan y **(2)** muchos métodos de estimación del valor **extienden** los tradicionales en vez de reemplazarlos.

| Técnica | Fórmula / criterio |
|---|---|
| **ROI** (rendimiento de la inversión; "rendimiento simple") | **ROI = Beneficio anual / Monto de inversión** (proporción de ingresos netos anuales promedio del proyecto sobre la inversión interna). Puede calcularse con beneficio promedio o año por año |
| **DCF** (actualización de flujos de fondos) | Considera la **dependencia temporal del valor**: el dinero hoy vale más que el mismo monto futuro (costo de oportunidad). Los costos suelen estar al principio y los beneficios al final. Base de NPV e IRR (usan una **tasa de descuento**) |
| **NPV / VAN** (valor neto presente) | PV del beneficio = Beneficio / (1+*i*)ⁿ (*i* = tasa de interés, *n* = años). **NPV = PV del beneficio − PV de la inversión**. **Si NPV ≥ 0 → invertir; si NPV < 0 → no invertir.** La tasa de descuento es el **costo de capital** de la empresa y puede incluir elementos de riesgo; hay que considerar el efecto impositivo (la **depreciación** se incluye por su desgravación fiscal). El proyecto más rentable es el de **mayor NPV positivo**. Mide el **superávit sobre el rendimiento requerido** |
| **IRR / TIR** (tasa de rendimiento interna) | Tasa *i* que hace **NPV = 0** (0 = Beneficio/(1+*i*)ⁿ; "resuelve para *i*, no para NPV"). Se compara con una **tasa crítica** (ej. del libro: no se aprueba ninguna inversión a menos que el IRR sea **≥ 12%**: **si *i* ≥ 12% invertir; si < 12% no**). También "rentabilidad de inversión" |
| **Período de recuperación** (payback) | Tiempo (años y meses) que tarda el **ingreso de fondos acumulativo en igualar la inversión inicial**. *Método de agotamiento* (el más usado): Recuperación = Inversión − Beneficio acumulativo (año a año hasta llegar a cero). *Método del promedio*: Recuperación = Inversión / Beneficio anual promedio (solo útil si los beneficios anuales son cercanos al promedio). Un período **corto reduce el riesgo** de que el proyecto se descarríe (típico de épocas de crisis de confianza), a costa de **bajar el beneficio neto**. Mejora: **recuperación descontada** (siempre mayor que la nominal) |

> [!warning] Críticas a las técnicas "duras" (p. 70)
> **Ventaja:** permiten **comparar alternativas** y expresan el valor en el **lenguaje del capital**, familiar para los gerentes senior; sirven para proyectos de **importancia comercial relativamente baja** (cartera: segmento de apoyo; estrategia genérica de escasos recursos). **Desventaja:** **no funcionan** donde el impacto estratégico es extensivo (beneficios **indirectos e intangibles** que no se definen como costos efectuados o ahorrados) y suponen relaciones simples y causales "con o sin" que raramente existen en los sistemas de información. Las **actividades de alta importancia** alterarán la forma de hacer negocios: serán de **riesgo alto**, con beneficios difíciles de predecir y cuantificar.

## 7.3.2 Técnica de reconocimiento de riesgo: análisis de la probabilidad de logro (pp. 68-69)
- Es **la única justificación financiera del capítulo que considera explícitamente el riesgo**. Es una **expansión del simple RoI** que describe **niveles de confianza** sobre los beneficios esperados. Por convención, **tres niveles**:
  - **Certeza** (**80% de confianza o más**)
  - **Probabilidad** (**50% o más**)
  - **Esperanza** (**solo lograda si todo va bien**)
- Se asume que alguien de la empresa (el **usuario/experto**) puede cuantificar la probabilidad relativa de los beneficios (no hay datos del pasado). *Ejemplo (Fig. 7.28, sistema de análisis de competencia):* el sistema podría aumentar las ventas 1% (+\$750) con prob. 0,80 → ganancia esperada \$600; 3% (+\$2.250) con prob. 0,15 → \$337,50; 5% (+\$3.750) con prob. 0,05 → \$187,50; combinando todas las posibilidades = \$1.125; con 15% de ganancia antes de impuestos → rentabilidad \$168,75.

## 7.3.3 Rendimiento sobre el management — RoM (Strassmann, pp. 71-75)
- Strassmann (1985) halló que **no existe correlación entre el nivel de inversión en informática y el rendimiento**; las industrias que más invirtieron mostraron un incremento de producción relativamente bajo. Concluyó que **el factor decisivo es el management y no el capital** ⇒ el **valor agregado del management** es la variable a medir, y el **RoM** es más válido que el RoI para evaluar el potencial de las inversiones en IS.
- **RoM = valor agregado del management / costo del management.** El **valor agregado del management** es el **remanente** después de pagar cada contribución a los ingresos de la empresa (de los ingresos se deducen: **compras e impuestos** → valor agregado de la empresa; luego el **dividendo** (valor agregado de los accionistas); luego los **costos directos y generales** (operaciones); y finalmente los **costos de management**). Si el remanente excede el costo del management, el management es **"productivo"**; una empresa tiene "éxito" si **RoM > 1**.
- Hallazgo: el principal determinante de un RoM alto tras un proyecto es **haber tenido un RoM alto antes** de comenzar.
- **Ventajas:** combina estados financieros y balances contables, **aísla la productividad del management**, es autoindexado, es adecuado para **empresas de servicios** (usan menos capital que las de fabricación), permite evaluaciones de diagnóstico. **Problemas:** ambigüedad de qué incluir en "management"; usa **estimativos** (ingresos tras el cambio, cambios en costos y contribuciones); **no se demostró relación causal** entre el proceso de management y el valor agregado. Funciona **mejor como técnica de evaluación que de justificación** (útil para "chequeos" y monitoreo longitudinal).

## 7.3.4 Economía de la información
→ [[Economía de la información]]: **extiende el RoI** (vinculación, aceleración, reestructuración y valuación de la innovación) y califica factores de **valor y riesgo** de los dominios empresarial y tecnológico.

## 7.3.5 Evaluación de la contribución estratégica — "acto de fe" (Silk, pp. 82-86)
- A medida que se avanza en la escala de justificación **disminuye la cuantificación**. Este grupo (Silk, 1991: **justificación por "acto de fe"**) se relaciona con el **propósito y el impacto del cambio**, no con su monto absoluto; los efectos reales de iniciativas radicalmente favorables **solo se establecen después**. Los proyectos se evalúan **casi enteramente por sus beneficios intangibles**, mirando diferencias marginales.
- **Lógica:** si el proyecto **contribuye a ampliar** (con los objetivos comerciales) → **entonces invertir**. Se **aprueban** los proyectos con fuerte vinculación con las estrategias comerciales (típicamente **diferenciación** o **reducción de costos**) y se **rechazan** los de poca o ninguna vinculación. Funciona mejor cuanto **más claramente definidas** estén las estrategias empresarial y de IS; si están bien alineadas, hay una línea clara de apoyo a ambas. Puede usarse **anualmente** como indicador de la dirección estratégica.
- **Desventajas:** al ser no cuantificado, es **difícil elegir entre dos proyectos** que contribuyen a la estrategia; casi no hay dedicación a cuantificar costos y beneficios ⇒ el **control del proyecto** es dificultoso; **ignora costos y viabilidad** (considera solo ganancias) y no separa costos de beneficios. A diferencia de la economía de la información, que reconoce explícitamente el área comercial y la de IS. A menudo es "un verdadero acto de fe" cuando un gerente senior **"campeón"** desafía a otros a justificar por qué *no* invertir. El "acto de fe" **no siempre** obtiene recompensas.

## 7.4 Consideraciones finales (pp. 86-93)
- Todas las técnicas para priorizar IS comprenden: **(1)** identificar la medida del "éxito" · **(2)** definirla en unidades y escalas · **(3)** llevar a cabo la medición. Los pasos (1) y (2) son claramente evaluativos (y, en menor medida, el 3); las empresas tienden a optar por el paso (1). Aunque se reconoce el impacto de los intangibles, **las medidas tradicionales de cuantificación todavía dominan** la decisión de invertir, y **no hay mucha evidencia** de que se usen la economía de la información, el RoM o SESAME (IBM). Los análisis tradicionales CBA y RoI son microeconómicos, estáticos, de corto plazo y fruto de la economía de manufactura, e **incentivan inversiones de bajo riesgo con poco rendimiento** (pp. 86-89).
- **Justificación ≠ evaluación.** *Justificar* es **seleccionar** entre alternativas; *evaluar* es estimar el valor de un aspecto de los IS. Después de justificar, seleccionar e implementar, hace falta una **evaluación de seguimiento**, pero **casi ninguna empresa la hace** (Fig. 7.36) → se pierden oportunidades de **aprendizaje** de la empresa (p. 91).
- **O'Brien (1992):** no siempre hace falta cuantificar todo; propone 3 técnicas para lo "inextricable": **lógica de decisiones escalonada** (cuantificar solo las **diferencias** entre opciones), **justificación por portfolio de proyectos** y **justificación de inseparabilidad de los factores** (los IS suelen ser parte fundamental de un emprendimiento comercial: no separar las justificaciones). Casos en que cuantificar es una carga innecesaria: **proyectos de experimentación** y **proyectos inseparables de lo comercial**.
- Otra mirada (Hirschheim y Smithson): **toda evaluación es subjetiva y política**; lo fundamental es entender las **fuerzas sociales** que llevan a percibir ciertas actividades de IS como importantes.
- **La efectividad del costo** y la **contribución estratégica** son, en general, **las dos tensiones opuestas** de la implementación de la estrategia (p. 93).

## 🔗 Relacionado
- [[Economía de la información]] · [[Clasificación de las inversiones en IS]] · [[Beneficios de los IS]]
- [[Prioridades de las aplicaciones]] · [[Recurso escaso]]
