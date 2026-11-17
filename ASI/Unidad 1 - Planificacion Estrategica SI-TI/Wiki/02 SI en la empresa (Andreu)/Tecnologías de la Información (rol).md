---
tags: [ASI-U1, andreu, TI]
aliases: [TI, Relación SI-TI, Rol de las TI]
---
# Tecnologías de la Información (rol) y su relación con los SI

**Las TI son el conjunto de recursos tecnológicos utilizados para implementar los SI; la necesidad inicial se plantea siempre en términos de SI (negocio) y la influencia de la tecnología es solo *coyuntural*, pero no irrelevante: puede llegar a ser muy grande.** (Andreu, Ricart y Valor, cap. 3 "Tecnologías de la Información y Sistemas de Información", §3.1, p. 25.)

> [!quote] Definición de TI (apuntes de alumnos)
> TI = *conjunto de recursos tecnológicos utilizados para la implementación de los SI*; de mínima: **aplicaciones, comunicaciones y todo dispositivo necesario para acceder a la información** (Apunte Yoel / Apunte Supremo).
> **Ojo:** esta formulación **no figura textual** en el cap. 3 de Andreu (que llama "tecnologías" a *la informática y afines*, p. 25, y habla de TI "para implementar los SI"). Es la que usan los apuntes y conviene usarla, citándola como definición de cátedra/apuntes.
> Terminología del libro: **SI** = el SI básico; **TI/SI** = todos los subsistemas, incluidas las aplicaciones específicas de TI a actividades concretas (p. 20).

## Respuesta a la P2 — relación SI ↔ TI (pp. 25-27, 36)
1. **Primero el SI, después la TI.** La necesidad nace en términos de SI (negocio); la TI es **el medio de implementación**. Por eso su influencia en la planificación, diseño e implementación del SI es **"solamente coyuntural"**; pero **sería poco realista** decir que es irrelevante (p. 25).
2. **Punto de contacto natural.** La TI da **soluciones claras** a problemas que aparecen, en mayor o menor grado, en **todo SI**: **almacenamiento de datos y acceso posterior** según pautas difíciles de anticipar; **tratamiento de datos rápido y con pocos errores**; **comunicaciones automáticas** (p. 25).
3. **Pero implementar SI con TI "no ha sido un camino de rosas"** (Fig. 3.1, "¿Nuevas tecnologías para eso?"): una comprensión deficiente de **lo que la TI puede hacer (plano funcional)** lleva a implementaciones "poco menos que ridículas" (p. 26).
4. **La tecnología NO es neutral:** aporta **su propia "idiosincrasia"**, de la que no puede prescindir (sería transformar la tecnología misma). Por eso a menudo **no se puede "hacer lo mismo que antes y de la misma manera", solo con otra tecnología**. No hay que sucumbir *indefectiblemente* a esa idiosincrasia, pero **sí tenerla en cuenta** (p. 26).
5. **A veces conviene prescindir de la tecnología:** hay que estar dispuestos a ello *si, desde la perspectiva de SI, sus aportaciones (rapidez, comodidad de acceso, etc.) **no justifican los sacrificios de adaptación*** en la manera de hacer las cosas (p. 26).
6. **Reconsiderar la manera de hacer las cosas.** Tener en cuenta la tecnología puede llevar a replantear cómo se hace lo necesario para que el SI funcione, con **dos resultados** (p. 27):
   - **(1)** la tecnología aporta **mejores maneras** de hacer las cosas → ignorarlo lleva a la situación "ridícula" evitable;
   - **(2)** **nos fuerza a hacerlas de maneras peores** — *puede que más eficientes, pero quizá menos efectivas* → si no se la puede evitar, solo renunciando a la tecnología (y perdiendo lo invertido).
7. **Responsable de estar al día.** *"Alguien en la estructura organizativa de la empresa debe **responsabilizarse de estar al día** acerca de las cambiantes posibilidades de las TI y de mantener una **actitud crítica** frente a ellas **desde la perspectiva de las necesidades de SI**"*, que tiene su raíz en el planteamiento de **negocio**. Si no, la situación de la Fig. 3.1 se producirá tarde o temprano (pp. 26-27). Conocer las posibilidades de la tecnología **desde una perspectiva de SI = perspectiva de empresa**.

> [!tip] Contraste con las 4 afirmaciones del Cuestionario II (P2)
> | Afirmación de los alumnos | ¿Está en el libro? |
> |---|---|
> | a) La tecnología **no es neutral**, aporta su idiosincrasia | ✔ p. 26 |
> | b) A veces **conviene prescindir** de las TI | ✔ p. 26 (si no justifican los sacrificios de adaptación) |
> | c) A veces hay que **replantear la implementación** para aprovechar las ventajas y no caer en una implementación ridícula | ✔ pp. 26-27 (reconsiderar la manera de hacer las cosas; Fig. 3.1) |
> | d) **Alguien debe estar al día** de las TI desde la perspectiva de SI (de la empresa) | ✔ p. 26 |
>
> Las cuatro son correctas. **Faltan**: la **definición** de TI, que la necesidad se plantea **en términos de SI** (influencia "coyuntural"), el **punto de contacto inicial** (almacenar/acceder, tratar rápido, comunicar) y los **dos resultados posibles** (mejor / peor: *eficiente pero menos efectivo*).

## Dos extremos peligrosos (Resumen, §3.7, p. 36)
1. Dejarse llevar por **"modas" tecnológicas**: hacer las cosas **como antes pero con la nueva tecnología** → altamente ineficiente.
2. **Cambiar el modo de hacer las cosas solo porque la tecnología lo exige**, sin pensar si tiene sentido desde el SI.
→ Hay que ser **críticos**: conocer tanto las **posibilidades** de la tecnología como las **necesidades en términos de SI**.
> [!example] "Real enough time"
> Se canta como virtud que "el SI funciona **en tiempo real**" (cada transacción queda reflejada de inmediato en la BD). Es bueno, pero **puede no ser estrictamente necesario**: si no lo es, costó más que una alternativa más modesta e igualmente efectiva, y **genera más desajuste** en la infraestructura. Dicho inglés del libro: *no hablemos de "real time", sino de **"real enough time"*** (lo que realmente se necesite desde la perspectiva de SI). Hoy se mencionan otras características (IA, sistemas expertos, BD relacionales/distribuidas, internet…) pero el **síndrome es el mismo**: se habla de la tecnología sin referirse a las necesidades de SI.

## Aportes históricos de las TI a los SI (pp. 27-37)
Resumidos en §3.7 (p. 36-37). **Cuatro aportes positivos:**

| Aporte | Idea clave | Dónde |
|---|---|---|
| **1. Base de Datos (BD)** como conjunto de datos de la empresa | Agrupa **todos los datos relevantes en un único lugar**, **sin redundancias** (evita inconsistencias), **estructurados de una única manera** (la "natural", la de la perspectiva de SI) y con **acceso lo más "natural" posible** (basta saber del dato, no dónde está archivado). Beneficios: **disciplina** en definir las colecciones (depura datos), **visión global única** (los departamentos deben consensuar) y **estructura el SI alrededor de la BD**. Su **diseño** es de importancia capital → los **responsables de funciones y procesos de negocio** deben **involucrarse** (Fig. 3.2) | §3.2, pp. 27-28 |
| **2. Secuencias de proceso vs intervalos de decisión → DSS** | ver abajo y [[DSS e intervalos de decisión]] | §3.5, pp. 32-33 |
| **3. Aprendizaje organizativo** | Incorporar TI al SI rompe el **equilibrio** de la infraestructura (Fig. 2.3): la implementación es un **proceso de aprendizaje multidimensional** (SI, control, estructura…) que debe **coordinarse**, con la **dirección involucrada** (no delegar en técnicos informáticos) | §3.6, pp. 33-35 |
| **4. Procesos de negocio / reingeniería** | La TI contribuye a **identificar procesos de negocio y mejorarlos sustancialmente** | §3.6, p. 35 |

### BD y centralización (§3.3-3.4, pp. 28-32)
- La BD da cierto **aire centralizador** (la BD es nodo central del SI). Opinión de los autores: es **recomendable**, no nocivo: visualiza los datos **como un todo de la empresa** (no de departamentos) para **diseñarlos, administrarlos y usarlos globalmente**. Ejemplo: al diseñar la BD, responsables vecinos descubren que usan datos de los otros.
- **Descentralización a partir de la BD:** los **PC y herramientas personales** (hojas de cálculo, pequeñas BD) permiten que los usuarios desarrollen **"sus propias soluciones"**. Se juzga **desde la perspectiva de SI** (que la tecnología lo permita **no** basta). Esas herramientas suelen necesitar **datos de la BD central** (ej.: históricos de ventas para previsiones). La **arquitectura cliente-servidor** lo facilita: un **servidor** da servicio a **clientes** con acceso eficiente y sin errores a datos comunes ("una solución técnica respondió a una necesidad de SI") (Fig. 3.3).
- Las colecciones de datos **locales** de cada usuario quedan **circunscritas a su ámbito**, **no** son parte de la BD del SI básico: **no basar tratamientos de alcance empresarial en ellas** (fuente casi segura de inconsistencias). Con telecomunicaciones los usuarios descentralizados pueden ser **remotos**.

### Secuencias de proceso vs intervalos de decisión y DSS (§3.5, pp. 32-33)
- Años 60: intentos de aplicar la TI "a rajatabla" (**automatizar cualquier manipulación de información**) → **innumerables fracasos** → las TI **no pueden sustituir a las personas** en decisiones **no triviales**.
- Solución más modesta y realista: **ayudar** a quien decide en vez de automatizar toda la actividad → **Decision Support System (DSS)** (en castellano SIATD o SPAG). El **sistema experto** juega, desde la perspectiva de SI, **el mismo papel que un DSS** (con la diferencia técnica de emular a un experto).
- **Secuencias de proceso:** procedimientos de manipulación de datos **muy bien definidos y estables** → la TI "va como anillo al dedo": **se automatizan totalmente** y con eficiencia.
- **Intervalos de decisión:** actividades de toma de decisiones que se benefician de acceder/elaborar datos, pero **cuyas necesidades difícilmente se pueden estructurar o anticipar** (cambian incluso rápido) → **no se automatizan**; la TI ayuda **con un DSS**, buscando **esencialmente eficacia y no tanto eficiencia**.
- Distinguirlos **es capital** en el diseño de SI: el tipo de solución es muy distinto y ayuda a entender la estructura general. Algunos **subsistemas circunscritos** (Fig. 2.2-c/d) resuelven intervalos de decisión y acabarán siendo DSS → se diseñan con los principios apropiados (p. 33). El diseño de DSS debe ser **flexible, por aproximaciones sucesivas (prototipo)** y con **participación del decisor** (p. 35).

### Aprendizaje organizativo y evolución (§3.6, pp. 33-35)
- Rediseñar el SI con una tecnología que obliga a replantear actividades **rompe el equilibrio** de la Fig. 2.3 y el conjunto reacciona. Si se **anticipa** (cambios incrementales, convencer a los demás sistemas) → **éxito**; si no → resultado imprevisible y **casi seguro fracaso**. Los fracasos suelen explicarse porque la **estructura, el control**, etc. no acompañan.
- **Gibson y Nolan (1974)**, según Andreu cap. 3: cuatro fases **Inicio, Contagio, Control, Madurez** (luego ampliado a seis). *Inicio*: mecanización de pocas actividades muy estructuradas con pocos líderes; *Contagio*: generalización de pedidos de soluciones informáticas; *Control*: se reconoce la necesidad de control más explícito para evitar el crecimiento caótico (el control del departamento de SI es **laxo en Contagio y muy estricto en Control**); *Madurez* (raramente alcanzada): la tecnología incorporada definitiva y efectivamente a los SI. No es obligatorio seguir la secuencia, pero es prudente no apartarse mucho.
  > [!warning] No confundir
  > Otra nota del vault describe "las 4 fases históricas de la planificación de SI (Gibson y Nolan)" con otros nombres (ver [[Evolución de la planificación de SI (4 fases históricas)]]). Aquí van los nombres que Andreu da en el cap. 3 (p. 34).
- Lectura: la incorporación de TI es **multidimensional** → coordinar el avance (SI, control, estructura…). Más recientemente se agregaron etapas (Venkatraman, 1991); destacan **reingeniería de procesos de negocio** y **innovaciones en la estructura de sectores económicos completos**.
- **Dirección involucrada:** si se inhibe, no hay evolución equilibrada salvo por casualidad; **delegar en técnicos informáticos** puede dar resultados "pobres para la empresa globalmente".

## Implicaciones para la dirección (cap. 4, pp. 39-40)
**TI/SI se eleva a tema de responsabilidad de la dirección**, y *sí*, también los temas técnicos (puede ser "un técnico puro de toda confianza" o directivos que entiendan la tecnología: lo importante es **no eludir la responsabilidad**). Además: BD con **visión consensuada** y participación de todos sus usuarios; para **intervalos de decisión**, **diagnosticar** su existencia y **diseñar ayudas adecuadas con participación de los decisores**; **proceso de negocio** como base de mejoras sustanciales con TI; las TI pueden apoyar actividades **fuera del SI básico** con implicaciones estratégicas (→ **planificación de TI/SI**).

> [!warning] Ojo con los apuntes de alumnos
> - El **Apunte Supremo** y el Apunte Yoel rotulan "El Rol de las Tecnologías de la Información — ROBSON". **Es de Andreu, Ricart y Valor** (cap. 3), no de Robson.
> - **Intervalo de decisión** (definición formal del libro, nota al pie del procedimiento de alineamiento, p. 64): *parte del SI (o del proceso de información) que por su naturaleza **no es mecanizable**, al ser necesaria la **intervención del decisor**.* Ver [[DSS e intervalos de decisión]].
> - Hay otra relación entre SI y TI en el vocabulario de la **estrategia** (SI = qué / TI = cómo; demanda / oferta): **no** viene del cap. 3 de Andreu sino de Edwards, cap. 4: ver [[Estrategia de SI vs Estrategia de TI]].

**Cuestionario:** base de la **P2** junto con [[Estrategia de SI vs Estrategia de TI]].

## 🔗 Relacionado
- [[Sistema de Información (definición)]] · [[El SI en la cadena de valor]] (Fig. 2.3, equilibrio) · [[Estrategia de SI vs Estrategia de TI]]
- [[DSS e intervalos de decisión]] · [[Enfoque de Tavistock]] — lo técnico repercute en lo social y viceversa
- [[Alineamiento E.O. – E.SI-TI (esquema general)]]
