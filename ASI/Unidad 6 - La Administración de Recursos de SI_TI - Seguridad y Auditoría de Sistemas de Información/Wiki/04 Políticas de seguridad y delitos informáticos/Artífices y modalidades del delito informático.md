---
tags: [ASI-U6, delito, complemento]
aliases: [Hackers y crackers, Modalidades de fraude informático]
---
# Artífices y modalidades del delito informático

> [!warning] Origen del contenido
> El apunte sistematizado deja **sin responder** la segunda parte de la I.6 (artífices y modalidad). Lo que sigue sale casi todo del *Complemento a los apuntes* **(fuente: Complemento a los apuntes — no es material de cátedra)**, generado por compañeros con ayuda de IA, que lo atribuye a Lardent y a Piattini & Del Peso **sin indicar páginas verificables**. Lo que sí está respaldado por material de la cátedra/Robson va marcado con ✅.

## ¿Quiénes son los artífices?
| Artífice | Descripción |
|---|---|
| ✅ **Personal interno** (y ex empleados) | Robson: **"la mayoría del hacking (es decir, del acceso no autorizado a ciertas áreas) se realiza por personal interno"**. Conocen procedimientos y debilidades de los controles y tienen permisos. *(El Complemento agrega que son "estadísticamente la mayor fuente de riesgo")* |
| ✅ **Hackers** | Robson: el hacking "hace referencia a la **entrada no autorizada, o a un intento de entrada**, en un sistema"; gran parte está impulsada por la **curiosidad** y carece de finalidad delictiva, pero una vez dentro el intruso puede hacer cualquier cosa (robo, modificación de resultados, virus, alteración de datos) |
| **Crackers** | Alto conocimiento técnico con **fines maliciosos o de lucro**: destruir datos, denegar servicios, robar información, fraude, desproteger programas |
| **Phreakers** | Especialistas en vulnerar **sistemas de telecomunicaciones** para interceptar o usar servicios sin pagar |
| **Piratas informáticos** | Copian, distribuyen y comercializan ilegalmente **software o datos protegidos** (✅ Robson menciona la **piratería** como amenaza deliberada lógica y los problemas legales del software pirata) |
| **Lamers / script kiddies** | Sin conocimientos profundos; usan **herramientas de terceros** para dañar o presumir |
| **Intrusos remunerados / espías industriales / ciberterroristas** | Contratados para sustraer secretos, sabotear o extorsionar |

## ¿Con qué modalidad operan?
**✅ Según el material de cátedra:** mediante **ataques** de interrupción, intercepción, modificación y fabricación, **pasivos** (escucha, análisis de tráfico) o **activos** (suplantación, reactuación, modificación de mensajes, degradación del servicio) → [[Tipos de ataques contra los SI]]. Y, en la matriz de Robson, mediante **robo y sabotaje** (físicos) o **virus, piratería, fraude y hacking** (lógicos).

**Técnicas clásicas** *(fuente: Complemento a los apuntes — no es material de cátedra)*:

| Técnica | En qué consiste |
|---|---|
| **Manipulación de datos de entrada** (*data diddling*) | Alterar, falsificar, omitir o insertar datos **antes o durante su ingreso** (la más frecuente y sencilla) |
| **Caballo de Troya** | Instrucciones ocultas dentro de un programa legítimo que realizan una función clandestina |
| **Técnica del salami** | Sustraer **fracciones mínimas** (redondeos) de miles de cuentas hacia una cuenta propia |
| **Bombas lógicas o de tiempo** | Código latente que se activa ante una condición o fecha |
| **Puertas falsas / trampas** (*backdoors*) | Entradas secretas dejadas por programadores que saltan los controles |
| **Llave maestra** (*superzapping*) | Uso indebido de utilitarios de emergencia que saltan los controles **sin dejar rastro en las pistas de auditoría** |
| **Suplantación e ingeniería social** (*spoofing, phishing*) | Hacerse pasar por otro o engañar al personal para obtener claves |
| **Recolección de residuos** (*scavenging*) | Obtener información de basura física o de restos en memoria/disco |
| **Pinchado de líneas y reactuación** | Escuchar tráfico o retransmitir mensajes legítimos capturados |

> [!tip] Cómo usar esto en el examen
> Arrancá por lo seguro: **definición** (apunte) + **artífices según Robson** (personal interno, hackers, piratería) + **modalidades = clasificación de ataques**. Recién después sumá ejemplos de técnicas. Notá que varias técnicas atacan justamente lo que revisa la auditoría: entrada de datos (*data diddling*), **modificación de programas** (troyanos, bombas, puertas falsas) y **pistas de auditoría** (*superzapping*).

## 🔗 Relacionado
- [[Delito informático]] · [[Tipos de ataques contra los SI]] · [[Auditoría del desarrollo de sistemas]] (modificación de programas) · [[Auditoría de sistemas de aplicación instalados]] (controles de entrada)
