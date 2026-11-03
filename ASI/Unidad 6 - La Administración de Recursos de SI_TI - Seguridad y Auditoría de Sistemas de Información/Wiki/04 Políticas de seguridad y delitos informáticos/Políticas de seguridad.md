---
tags: [ASI-U6, politicas, seguridad]
aliases: [Política de seguridad, Política prohibitiva, Política permisiva]
---
# Políticas de seguridad

> [!quote] Definición (apunte de la profesora Soria)
> "El conjunto de **requisitos definidos por los responsables directos o indirectos de un sistema** que indica, **en términos generales, qué está permitido y qué no está permitido** hacer en el área de seguridad durante la operación general de dicho sistema."

> [!quote] Definición (Robson)
> "Una política de seguridad define el **nivel de seguridad que se ajusta al valor de lo que se debe proteger y al gasto e inconveniencia de las medidas de protección**. Esas políticas **documentan el resultado de la identificación y el análisis del riesgo, y de las estrategias elegidas para manejarlo**."

**En criollo:** la política es "las reglas de juego" de la seguridad: qué se puede y qué no, decidido a partir del análisis de riesgo.

> [!important] ¿A qué línea de defensa corresponden?
> Son **medidas preventivas**: se usan en la **primera línea de defensa** (prevención), porque intentan **evitar que ocurran** las amenazas. → [[Líneas de defensa]]

## Clasificación (I.5)

### Por su amplitud
| Amplitud | Qué cubre |
|---|---|
| **Políticas generales** | Lineamientos para toda la organización, en términos generales |
| **Políticas específicas** ("de aplicación específica") | Para **cada activo, cada situación, cada perfil de usuario**. Refinan los términos generales en **indicaciones precisas** de qué está permitido y qué denegado en cierta parte de la operación → **funcionan como reglas** |

> [!example] Ejemplo de la profesora
> "Los empleados de **atención al cliente no pueden cambiar el estado** de un cliente; quien lo hace es el **jefe de sección**." (política específica, por perfil de usuario)

### Por su tipo (criterio de lo no dicho)
| Tipo | Regla | Ejemplos |
|---|---|---|
| **Prohibitiva** | **Todo lo que no está expresamente permitido está denegado** | "Al área de TIC **solo** puede entrar el personal del área"; "la salida a internet está permitida **únicamente** para sitios relacionados con el trabajo" |
| **Permisiva** | **Todo lo que no está expresamente prohibido está permitido** | "No se puede tomar **mate** en el laboratorio" → entonces sí se puede café o gaseosa; "no se permite conectar USB personales" → lo demás, sí |

> [!tip] Cuál es mejor
> Las **prohibitivas son más efectivas en cuanto a seguridad** (más restrictivas). Las permisivas dan más libertad o amparo.

> [!warning] V/F de final mal redactado
> Circula el ítem "*Una política prohibitiva es aquella en donde no todo lo que está explícitamente permitido está denegado (Verdadero)*". La definición correcta es: **todo lo que NO está expresamente permitido está denegado**. Si te lo toman así, justificá con la definición exacta.

## Los seis elementos clave que toda política debe contemplar
| Elemento | Significado |
|---|---|
| **Disponibilidad** | Los recursos estén disponibles **cuando se necesiten**, especialmente la información crítica |
| **Utilidad** | Recursos e información deben ser **útiles para alguna función** |
| **Integridad** | La información debe estar disponible **tal como la almacenó un agente autorizado** |
| **Autenticidad** | El sistema verifica la identidad de los usuarios **y los usuarios la del sistema** |
| **Confidencialidad** | Información disponible **solo para agentes autorizados**, especialmente su propietario |
| **Posesión** | Los propietarios deben poder **controlar** el sistema en todo momento; perderlo en favor de un usuario malicioso compromete a todos |

## Contenido mínimo del documento (Saunders, 1989, citado por Robson)
- **Protección de la información:** su naturaleza determina su atractivo externo y su importancia interna.
- **Valor de la información:** cuantifica las pérdidas potenciales.
- **Acceso a la información:** quién está autorizado para ver, modificar, cargar o bajar datos.
- **Recuperación de la información:** cómo se recuperan y reutilizan los datos perdidos o dañados.

Los documentos suelen incluir **tablas** con la **estrategia de manejo del riesgo para cada amenaza** (Robson, Fig. 13.12: amenaza → qué corre peligro → prioridad → acción con su costo, p. ej. backups remotos, seguro de pérdidas secundarias, control estricto de acceso, autenticación de usuario, o "ninguna acción" si el riesgo es bajo).

## Cómo se baja a tierra
La política se despliega en **estándares, mejores prácticas, guías y procedimientos** → [[Jerarquía normativa de seguridad (política, estándar, mejor práctica, guía y procedimiento)]]; y tiene un ciclo de vida → [[Ciclo de vida de una política de seguridad]].

**Cuestionario:** responde la **I.5**.

## 🔗 Relacionado
- [[Manejo del riesgo (4 estrategias)]] · [[Controles y contramedidas]] · [[Auditoría de seguridad]] (revisa las políticas)
- [[Modelo de administración de recursos (políticas y normas)]] (U3: las políticas y normas del modelo de administración de recursos)
