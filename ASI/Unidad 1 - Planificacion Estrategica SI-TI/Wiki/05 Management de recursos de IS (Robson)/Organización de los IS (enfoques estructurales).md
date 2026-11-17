---
tags: [ASI-U1, robson, management-IS]
aliases: [Enfoques estructurales]
---
# La organización de los IS — enfoques estructurales

**Organización = ¿cómo se dispondrán los IS?** Es la **estructura interna** de los IS, **en cualquier lugar en que se encuentren**: cómo se **agrupan** los profesionales de IS, qué **responsabilidades** tienen y bajo qué **jerarquías** (Robson T4, cap. 9, §9.3; páginas del libro).

- Las estructuras surgieron **por generaciones**, como las tecnologías, pero **ninguna se volvió obsoleta**: **pueden coexistir** en una empresa y la **variedad** maximiza ventajas y minimiza desventajas (p. 50-51).
- Cada una es adecuada para ciertas circunstancias; **la elección se hace según la estrategia de IS** (que define los objetivos y la elección estructural).

## Los enfoques y su época (p. 50-51)

| Década de aparición | Enfoque |
|---|---|
| 1960 | **Tradicional** |
| 1970 | **Estructura de bases de datos** |
| principios de 1980 | **Grupos de proyectos funcionales** |
| mediados de 1980 | **Centros de información** |
| fin de 1980 | **Apoyo de decisiones** |
| principios de 1990 | **Enfoque externo** |

> [!note] ¿5 o 6?
> Robson lista **seis** en la cronología, pero en el desarrollo (§9.3.4) trata **juntos** *Centro de información y apoyo de decisiones*. Por eso el cuestionario (P12) habla de **cinco** enfoques.

## Cuadro general `[P12]`

| Enfoque | Cómo se agrupa el personal / de qué se ocupa | Relación con el rol (Fig. 9.1) |
|---|---|---|
| **1. Tradicional** (depto. de procesamiento de datos → hoy *centro de datos*) | Por **función de IS**: **desarrollo, mantenimiento y operación separados**, cada uno con objetivos, estilos y habilidades distintos | **Hacerles algo a ellos** (el grupo de IS fija las reglas) |
| **2. Estructura de bases de datos** | Según las **necesidades de almacenamiento de datos**: datos separados de las aplicaciones y reagrupados | **Hacer algo para ellos** (orientación al servicio) |
| **3. Grupos de proyectos funcionales** | **Analistas + programadores** juntos en **grupos de proyectos empresariales** (ej.: equipo de sistemas financieros, de producción) | **Hacer algo con ellos** (puentes y participación) |
| **4. Centro de información y apoyo a decisiones** | La función de IS se organiza para **apoyar las decisiones de management** de los usuarios | **Ayudarlos a que lo hagan por sí mismos** (influencia más que control) |
| **5. Estructuras externas** | Centradas en el **ambiente**: líneas de servicio al consumidor, **acuerdos de servicio** | **Mantener un depósito de información** (puente proveedores ↔ usuarios de información) |

## Detalle por enfoque

### 1. Tradicional — centro de datos (p. 50-55)
- Robson aclara que "en realidad" no es del todo apropiado llamarlos IS: es la **sección de informática o depto. de procesamiento de datos**, de estructura **bastante rígida** (Fig. 9.6). Hoy, donde se mantiene, se llama **Centro de datos** (Fig. 9.7): el elemento de IS responsable de **adquirir, proveer y apoyar los servicios centralizados o comunes**.
- **Operación por turnos** (recursos muy costosos; ninguna instalación funciona sin control), con programadores de sistemas. **Preparación de datos** = el grupo más grande, incluye control y auditoría. En desarrollo, **análisis y diseño separados** → graves problemas de comunicación. Se asocia con la **era de desarrollos internos** (de ahí tantos programadores).
- Su estructura solía estar determinada por una **función financiera** (Fig. 9.8): los sistemas financieros eran los primeros candidatos (grandes volúmenes y reglas predefinidas) y el recurso costoso exigía **estricto control financiero**. Casi ningún miembro del senior management tenía responsabilidad por la informática.
- **Máxima virtud:** soporta un **amplio grado de especialización**; exige **estandarización** → eficiencia pero **burocracia**. Cada equipo es **independiente y separado del usuario**.
- **Desventajas (5):** ① **retraso** (años; descontento de usuarios) · ② **sistemas proscriptos** (se mira la "elegancia" técnica y no el uso; el depto. "sabe más" y dirige) · ③ **sistemas inflexibles** (especificaciones formales para grupos aislados) · ④ **gran demanda de personal de preparación de datos** (carga pesada, difícil de automatizar) · ⑤ **mantenimiento costoso** (pocas herramientas o metodologías → código COBOL que nadie mantiene).
- **Sigue funcionando bien** cuando el **volumen de trabajo lo justifica** y la empresa tiene madurez tal que los **estándares son valorados**. Se usa para actividades de **complejidad técnica y gran volumen de datos**; las de **alto crecimiento y vida corta** van mejor con enfoques externos. *Rightsizing* = **elegir** la organización según el caso (década del '90).

### 2. Estructura de bases de datos (p. 56)
- Datos **separados de las aplicaciones** y reagrupados para análisis, diseño y desarrollo. **Ventaja principal:** **facilita el acceso del usuario a los datos, bajo el control del administrador de la base**.
- Como el **usuario se responsabiliza del ingreso de datos**, el personal de **preparación de datos pasa a los departamentos de usuarios**.
- Al agrupar al personal en torno a las **áreas de datos**, los IS **comienzan a conectarse con los usuarios** y se pone énfasis en los **requerimientos de información**: los usuarios, al menos al preguntarles qué datos necesitan, desarrollan **conciencia y habilidades** respecto de los IS. Apoya el uso extensivo de **EIS** (análisis rápido) y la exploración de nuevos paradigmas (orientación a objetos).
- Igual que el tradicional, agrupa por preocupaciones **internas** (no por destinatario): **todavía no es estructura de demanda**.

### 3. Grupos de proyectos funcionales (p. 57-58)
- **Primer reconocimiento del objetivo de los IS en el negocio**: es la **primera estructura basada en mecanismos de DEMANDA** y no de oferta. El tradicional y el de bases de datos agrupan al personal según preocupaciones **internas** (cómo se proveen los sistemas), no según **a quién** se dirigen.
- **Desarrollo y mantenimiento** en los equipos funcionales; las **operaciones** siguen "en forma tradicional". Al distribuirse los equipos en las áreas, queda un **pequeño depto. de IS** centrado en **bases de datos corporativas e infraestructura de hardware y software** = **centro de datos corporativo** (Fig. 9.9).
- ✅ Sistemas **más relevantes**; usuario **más involucrado** (hace más por sí mismo); IS con más **conciencia del negocio**; los IS aprenden el lenguaje del usuario y hay **transferencia de habilidades en ambos sentidos** (base de la **computación controlada por el usuario**).
- ⚠️ Es una **matriz de management** (todas las dificultades de esa estructura ambigua; problema de los **"dos jefes"**); **"murallas chinas"** entre áreas (cada equipo interpreta los hechos y maneja los datos a su modo); **carga de trabajo despareja**.

### 4. Centro de información y apoyo a decisiones (p. 59-60)
- IBM desarrolló el **centro de información en 1981** (Cap. 11). La **computación controlada por el usuario** puede existir sin centro de información, pero **el centro no tiene sentido sin ella**.
- Las estructuras de **apoyo a decisiones** están ligadas a los centros de información y **organizan la función de IS para servir de apoyo a las decisiones de management** de los usuarios, **aunque no necesariamente con esos usuarios controlando la naturaleza de los sistemas**. Los IS ya no son responsables **solo del procesamiento de datos** sino del **manejo efectivo de los IS** (Fig. 9.10).
- **Objetivo común:** apoyar y fomentar la **computación controlada por el usuario** y el **management híbrido**; ambas estructuras **requieren** que existan estructuras de IS así.

### 5. Estructuras externas (p. 60-61)
- La **posición competitiva** es un aspecto **externo**; esta estructura se centra en el **ambiente** por **dos aspectos** (Fig. 9.11):
  1. La función se estructura en torno a **líneas de servicio al consumidor** para satisfacer a la organización del negocio (el **entorno inmediato** de los IS); hay **acuerdos de servicio** con la comunidad de usuarios, que definen las **obligaciones** de los IS y las **percepciones de valor** del negocio.
  2. Los IS, como toda la empresa, **enfocados hacia el exterior, hacia los clientes reales**. No es una relación cliente/proveedor simplista: **los IS son la empresa**, la relación es **en ambos sentidos** (el entorno empresarial afecta a los IS; los IS influyen en la naturaleza del negocio). **La estructura de IS debe ser coherente con la del negocio.**

> [!tip] Idea común de las nuevas estructuras (p. 61)
> Todas **transfieren autonomía** para lograr **ciclos de desarrollo más cortos** y sistemas **más flexibles y menos prescriptivos**. Resuelven los inconvenientes de la estructura tradicional **distribuyendo** aspectos del sistema y sus responsabilidades (**desarrollo, adquisición, operación, control y mantenimiento**). Los IS **ya no son un elemento homogéneo**.

> [!warning] Ojo con los apuntes de alumnos (P12 en `Todos Los Cuestionarios`)
> - *Tradicional* = "automatización de tareas, solo brindan soporte, no existe relación con la tarea": **no está en el libro**. El libro lo define por su **rigidez** y la **separación de desarrollo / mantenimiento / operación**.
> - Los apuntes listan **4** desventajas del tradicional; el libro da **5** (falta la **carga de preparación de datos**).
> - *Apoyo a decisiones*: "es el usuario quien los desarrolla": el libro dice que **no necesariamente** controlan la naturaleza de los sistemas.
> - *Estructura externa*: "el SI es la cara visible de la empresa" **no está en el libro**; lo que dice es que **el negocio afecta a los IS y los IS influyen en la naturaleza del negocio**.

## Lo que agrega el libro: matriz y Zmud (p. 62-63)
- **Matriz de management:** surgió para imponer los equipos de proyecto sobre las agrupaciones funcionales; aumentó la complejidad y el problema de los **"dos jefes"** (conflicto entre gerente de proyecto y funcional). Los grupos funcionales se forman en torno a la **naturaleza del producto** (ej. automatización de oficina) o al **destinatario** (ej. marketing). Estructurar por función facilita estandarizar a futuro; con equipos de proyecto se **subutilizan habilidades escasas** y la composición es **inestable**.
- **Zmud (1984)** ofrece opciones de diseño (**3:2:2**): **estructura** (funcional, producto, matriz) · **proceso** (mecanicista, orgánico) · **coordinación** (formal, informal). Sus sugerencias por actividad (Fig. 9.12):

| Actividad de IS | Estructura | Proceso | Coordinación |
|---|---|---|---|
| Desarrollo de sistemas | Funcional | Mecanicista (algo orgánico) | Informal (alguna formal) |
| Servicios técnicos | Producto (alguna funcional) | Mecanicista | Informal |
| Centro de información | Funcional / producto | Orgánico | Informal |
| Investigación y desarrollo | Producto | Orgánico | Informal |
| Planificación | Funcional (alguna producto) | Orgánico | Informal (interna) · Formal (externa) |
| Administración | Función | Mecanicista | Formal |

## ¿Qué estructura conviene? (p. 62-65)
- Debe ser **coherente con el estado de madurez del management de IS y de la tecnología** a la que da apoyo (ej.: grupos pensados para servir de apoyo a controles de management **no** sirven para la fase de **integración**) y reflejar las **prioridades del negocio** (la recesión de principios de los '90 llevó a equipos que redujeran gastos y a **outsourcing**).
- **No se trata de imitar** a la empresa sino de ser **coherente** con ella. Preguntas de §9.4: ¿los IS están **en tono con la estrategia corporativa**? ¿**con la "forma" de la empresa**? ¿deben **mirar hacia adentro** (manejo de la tecnología) o **hacia afuera** (ayudar al negocio a usarla)?
- Referencias adicionales: **actitud ante el riesgo** (empresas reacias al riesgo → sistemas **centralizados más formales**) y **capacidad de cambio** (empresas que exploraron el "aprendizaje" → sistemas **más delegados**); también la línea de producto o el tipo de servicio de IS.

> [!example] ¿Cómo encarar el "organigrama" del final? (inferencia, no está resuelto en el material)
> Un final dio un organigrama y preguntó: **¿qué rol?, ¿cómo se relaciona con los usuarios?, ¿qué organización es? ¿en qué organización aplicaría ese rol y esa organización?**
> 1. **Reconocé la estructura** por el dibujo: jerarquía rígida con **operaciones / desarrollo / soporte** separados = **tradicional / centro de datos** (Fig. 9.6-9.7); gerente bajo la función **financiera** (9.8); equipos **por área funcional** (marketing, manufactura, finanzas…) + un **centro de datos** chico = **grupos de proyectos funcionales** (9.9); divisiones con **centros de información** = **apoyo a decisiones** (9.10); **líneas de servicio al cliente/acuerdos de servicio** = **externa** (9.11).
> 2. **Pasá a la Fig. 9.1** (misma fila): da el **rol** ("hacerles algo a ellos"…) y la **relación** con los usuarios ("el grupo de IS establece las reglas"…).
> 3. **Aplicalo:** usá los criterios de §9.4 (madurez, estrategia de IS, riesgo, capacidad de cambio) y el consejo de cátedra: **verificar que la organización ayude al rol y se relacione con la ubicación**.

## Administración de los SI por nivel gerencial
> [!info] Fuente
> Esta tabla **no está en el capítulo de Robson**: viene del **apunte de la cátedra** (Unidad 3).

| Qué se administra | Nivel | Quiénes (cátedra) |
|---|---|---|
| **La información** | Gerencia **estratégica** del área de SI/TI | **CIO** (*Chief Information Officer*) |
| **El uso de los SI** | Gerencias **tácticas / medias** | Subgerencias (seguridad, desarrollo, etc.) |
| **La tecnología** | **Primera línea** (supervisión) | **CTO** (*Chief Technology Officer*), jefes de servidores, de proyectos, soporte |

**Cuestionario:** responde la **P12**.

## 🔗 Relacionado
- [[Administración de recursos de IS]] · [[Rol de los IS]] · [[Niveles organizacionales (Chiavenato)]] · [[Beneficios de los IS]]
- **Otras unidades:** [[Enfoques estructurales — detalle U3]] · [[Niveles de administración del área de SI-TI]] · [[Estructura del área de SI-TI (elementos de diseño)]] (U3) · [[Auditoría de la función informática]] · [[Separación de funciones]] (U6)
