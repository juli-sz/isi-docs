---
tags: [ASI-U1, complementario, DSS, andreu]
aliases: [DSS, Decision Support Systems, Intervalos de decisión, Secuencias de proceso]
---
# DSS e intervalos de decisión

**Intervalo de decisión = parte del SI (o del proceso de información) que por su naturaleza *no es mecanizable*, porque necesita la intervención de un decisor; los *DSS* (Decision Support Systems) son la respuesta de las TI: *ayudar* a quien decide en vez de automatizar la decisión.** (Andreu, Ricart y Valor, cap. 3, §3.5, pp. 32-33; definición formal en nota al pie, pp. 64-65.)

## Origen: una limitación de las TI (§3.5, p. 32)
- **Años 60:** numerosos intentos de aplicar las TI "a rajatabla", **automatizando cualquier manipulación de información**. **Innumerables fracasos** → convencimiento de que las TI **no pueden sustituir a las personas** en las **decisiones no triviales** (la mayoría de las actividades de las figuras del cap. 2).
- Nuevo enfoque, **más modesto y realista**: **ayudar** a quienes tienen la responsabilidad de decidir → **Decision Support System (DSS)**. En castellano: *Sistemas de Información de Ayuda a la Toma de Decisiones (SIATD)* o *Sistemas de Planificación y Apoyo a la Gestión (SPAG)* (Keen y Scott Morton, 1978; Sprague y Watson, 1986).
- El **sistema experto** (emula lo que haría un experto) es **otra aproximación a la ayuda a decidir**; desde la perspectiva de SI **juega el mismo papel que un DSS**.

## Secuencias de proceso vs intervalos de decisión (distinción "capital", p. 32-33)

| | **Secuencia de proceso** | **Intervalo de decisión** |
|---|---|---|
| Qué es | Procedimiento de manipulación y elaboración de datos **muy bien definido y estable** | Actividad de **toma de decisiones** que se beneficia de acceder a ciertos datos o elaborar otros; sus necesidades **difícilmente se estructuran o anticipan** con precisión y pueden **cambiar rápido** |
| Uso de la TI | La TI "**va como anillo al dedo**": se **automatiza totalmente**, con eficiencia | **No se automatiza**; la TI ayuda **mediante un DSS** |
| Busca | **Eficiencia** | **Eficacia** ("esencialmente la eficacia y no tanto la eficiencia") |
| Diseño | Convencional | **Flexible, por aproximaciones sucesivas** (p. ej. un **prototipo**), con **participación del decisor** en el diseño e implementación (p. 35) |

- **Por qué importa distinguirlos:** el tipo de solución informática adecuada es **muy distinto** y la distinción ayuda a comprender la **estructura general del SI** (p. 33).
- **Con la cadena de valor (Figs. 2.2-a a 2.2-d):** algunos de los **subsistemas circunscritos** a actividades concretas existen para resolver problemas planteados en **intervalos de decisión** → acabarán siendo **DSS** y se diseñan con los principios propios de esos sistemas (p. 33). Ver [[El SI en la cadena de valor]].
- **Ejemplo del libro** (nota al pie, p. 64-65): el **lanzamiento de cartas de apremio a impagados**. El SI **proporciona la lista de impagados**, pero es un **decisor humano** quien decide si se lanza el proceso; una vez decidido, el sistema **imprime automáticamente las cartas y genera los informes**. (Es decir: la lista y las cartas son *secuencias de proceso*; la decisión es el *intervalo*.)

## En el procedimiento de alineamiento (Andreu, Apéndice)
- **Fase II (descripción de la situación actual):** si algún sistema de información descrito presenta intervalos de decisión, se debe **documentar en detalle tanto la información necesaria para apoyar la decisión como el proceso de decisión** (nota 2, p. 64-65). [[Procedimiento de alineamiento (4 fases)]]
- **Fase III (elaboración del plan):** las **necesidades de información vagas o poco claras** probablemente se refieren a **procesos de toma de decisiones** que deberían apoyarse en **subsistemas casi personalizados o muy especializados** → *"intervalos de decisión que deben ser tratados aparte"* (p. 68). La **estructura del SI emergente** incluye identificar **intervalos de decisión** (presentación de la cátedra, Alineamiento estratégico).
- Cap. 4 (p. 40): **diagnosticar cuidadosamente** la existencia de intervalos de decisión y después **diseñar ayudas adecuadas**, con **participación de los decisores** en ambas tareas.

## DSS en la justificación de inversiones (Robson T3, cap. 7)
En el ejemplo de **Silk (1991)** (Fig. 7.7), un **proyecto de DSS** tiene **valor de efectividad** (columna "mayor RoA") y su beneficio comercial lo **advierte primero el nivel táctico** del management. Es una **justificación más "blanda"**: muchos beneficios (p. ej. la calidad de una decisión táctica) son **intangibles**. Ver [[Beneficios de los IS]] y [[Niveles organizacionales (Chiavenato)]].

> [!warning] Ojo con los apuntes de alumnos
> - En el Cuestionario I (recursos de la administración) los alumnos dicen que el SI "brinda soporte para la toma de decisiones (DSS)". **El DSS no está en Chiavenato**: viene de **Andreu cap. 3** (concepto) y de **Robson T3** (justificación).
> - La definición "baches donde el software no puede actuar solo" es una **paráfrasis de alumno**; la del libro es *parte del SI que por su naturaleza no es mecanizable por requerir la intervención del decisor*.

## 🔗 Relacionado
- [[Tecnologías de la Información (rol)]] · [[Beneficios de los IS]] · [[Niveles organizacionales (Chiavenato)]] · [[El SI en la cadena de valor]]
