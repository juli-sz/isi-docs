---
tags: [ASI-U6, robson, riesgo]
---
# Identificación del riesgo (etapa 1)

> [!quote] Robson
> "El primer paso en el management sistemático de seguridad es identificar '**todos**' los riesgos a los que es vulnerable un sistema particular, un conjunto de sistemas, una función o una empresa. Para realizar esta tarea se necesitan dos cosas: un **conocimiento bastante detallado del trabajo de la organización**, más un **reconocimiento de las áreas que tienden a la vulnerabilidad**."

## ¿Quién la hace?
- La **comprensión del riesgo probable** puede hacerse con **consultores externos** (aportan **amplio conocimiento**).
- La **identificación de las amenazas específicas** la hacen mejor el **personal o consultores internos** (aportan **profunda comprensión de la empresa**).
- Ambas instancias hacen surgir la pregunta: **¿quién vigila a los que vigilan?**

Requiere, por lo general, **reuniones iniciales** para desarrollar ideas (tipo lluvia de ideas) y clasificaciones posteriores que conduzcan a un análisis sistemático.

## Qué se identifica
"Se trata de encontrar los **puntos débiles**, un proceso organizado de identificación de:"
- **Fuentes de amenazas potenciales**
- **Activos que son vulnerables a la pérdida**
- **Ubicación de esos riesgos** (¿dónde están?) y sus vulnerabilidades

> [!warning] ¿En qué orden?
> **Robson** (y el Apunte Supremo / cuestionarios resueltos) los lista como: *fuentes de amenazas → activos vulnerables → ubicación*. El **apunte sistematizado** propone identificar "en ORDEN": *activos → ubicación y vulnerabilidades → fuentes de amenazas*, y lo resume en una oración: **"tengo este activo, con esta vulnerabilidad, que como consecuencia puede sufrir esta amenaza"**. Los elementos son los mismos; si te preguntan "según Robson", usá el orden del libro; el orden del apunte es el más práctico para armar el análisis (ver [[Guía del laboratorio U6 (líneas de defensa sobre análisis de riesgo)|laboratorio]]).

## Matriz de toma de conciencia (Robson, Fig. 13.3 "Lista de identificación de amenazas")
Los ejes recuerdan que las amenazas son **físicas o lógicas** y **accidentales o deliberadas**:

| | **Físico** (elemento amenazado) | **Lógico** |
|---|---|---|
| **Accidental** | Fallas en los equipos, fallas de energía, relámpagos, inundación, incendio | Error del usuario, error de programación (bugs), error en la configuración |
| **Deliberada** | Robo, sabotaje | Virus, piratería, fraude, hacking |

- No todas las amenazas son abuso humano deliberado: hay riesgos **accidentales** (inundación, incendio, humo, errores humanos, crashes).
- Lo **menos común** suele ser lo de **consecuencias más notorias** y lo que más atención atrae (hackers, fraudes bancarios son relativamente raros pero se habla mucho de ellos). Los **virus** tienen perfil alto pero su principal impacto es sobre la **confianza en los IS**.
- **Hacking:** la mayoría del acceso no autorizado lo realiza **personal interno**; gran parte por curiosidad y sin finalidad delictiva, pero una vez dentro el intruso puede hacer cualquier cosa.

## Método alternativo: por vulnerabilidad
| Enfoque | Pregunta | Ejemplo |
|---|---|---|
| **Activos específicos** (redes, datos y medios, hardware y software, documentación, aptitudes de los empleados) | **"¿Qué le puede pasar a este activo en particular?"** | Redes (Satya, 1988): radiación, cruce de conversaciones, fallas de hardware del emisor/receptor, fallas de software (que mantiene los controles de acceso) |
| **Riesgo genérico** (desastres naturales, entorno físico, robo, sabotaje) | **"¿Cómo somos vulnerables a este tipo de riesgo?"** | Entorno físico: energía, aire acondicionado, vibraciones, agua, calor y polvo; **incendios** |

Muchas amenazas provienen de un punto débil en: **fabricación, diseño, mantenimiento, capacitación del usuario o procedimientos de operación**. Si se elimina el punto débil, la amenaza se reduce.

> [!example] "Tiger teams"
> Equipos de expertos que **irrumpen deliberadamente** en los sistemas (roban, modifican o destruyen software, datos o equipos) para poner al descubierto las áreas vulnerables. Originan **consideraciones éticas**, porque exponen a críticas al personal.

## Factores de vulnerabilidad (Robson, a propósito del hacking)
- **El personal de la organización:** la protección del acceso puede quebrarse en cualquier elemento de la red.
- **El tamaño de la red:** cuanto más amplia, mayor potencial de riesgo.
- **La calidad (valor) de la transmisión de datos:** cuanto más valiosos los datos transmitidos, mayor el riesgo, porque el beneficio del abuso justifica la inversión del atacante.

## 🔗 Relacionado
- [[Administración del riesgo]] · [[Amenaza, vulnerabilidad y riesgo (definiciones)]] · [[Análisis del riesgo]]
