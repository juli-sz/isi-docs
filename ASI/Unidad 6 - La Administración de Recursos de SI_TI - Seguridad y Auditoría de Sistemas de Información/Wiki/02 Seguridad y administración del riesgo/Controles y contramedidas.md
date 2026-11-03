---
tags: [ASI-U6, robson, controles]
aliases: [Contramedidas, Controles generales y de aplicación, Controles lógicos y físicos]
---
# Controles y contramedidas (Robson)

> [!quote] Robson
> "Las estrategias de manejo del riesgo se **implementan a través de controles y contra medidas**. La elección del conjunto que, de un modo **efectivo con respecto al costo, evita, reduce o transfiere** el impacto del riesgo es obviamente un aspecto del management del riesgo. [...] Las medidas de seguridad y control deben ser consideradas en términos de los **costos netos** y de los **nuevos riesgos potenciales** resultantes de su adopción."

Los controles se relacionan básicamente con las estrategias de **prevención y reducción**.

## Por su alcance: generales vs de aplicación

| | **Contramedidas / controles GENERALES** | **Controles de APLICACIÓN** |
|---|---|---|
| Para qué | Reducir la amenaza sobre **todas las actividades de los IS** de la organización | Proteger de amenazas un **área específica** |
| Costo | Se considera **"compartido"** por todas las áreas protegidas | Propio del área |
| Riesgo | **Un punto débil** en los generales puede provocar una pérdida de seguridad **en cualquier sistema** | Limitado al área |

Robson: "hasta cierto punto, los controles de aplicación son un **subconjunto** de controles generales" (muchas medidas generales se aplican a todas las áreas, con precauciones adicionales para las específicas).

> [!warning] Confusiones de fuentes
> - El apunte sistematizado agrega entre paréntesis que las contramedidas "se introducen ante la ocurrencia de la amenaza"; en Robson las contramedidas **generales** "se introducen para **reducir la amenaza**" (no solo después). El apunte distingue además: **controles = prevención y detección** (antes del incidente) y **contramedidas = respuesta y mitigación** (después). Es una distinción didáctica útil, pero Robson usa "controles y contra medidas" casi como par inseparable y los ubica en las **tres** etapas (prevención, detección, recuperación).
> - El apunte dice que los controles de aplicación son "un conjunto" de controles generales; Robson dice **subconjunto**.

## Capas de control
"Los controles y las contra medidas **no son un único conjunto homogéneo**. Para dar como resultado una 'buena' seguridad, las diversas amenazas deben ser combatidas por **capas de controles** dirigidos a diferentes aspectos del uso y management de los IS." Los factores determinantes de cada capa:

| Factor | Influye en |
|---|---|
| **Plataforma de hardware** | El **tipo y la cantidad** de controles disponibles |
| **Grado de distribución** | El **énfasis** de los controles requeridos |
| **Integración de la infraestructura** | La **naturaleza de las amenazas** |

Cualquier cambio en este entorno (ej.: un **downsizing**) extiende sus consecuencias de seguridad por **todas las capas** y exige reajustar la posición neta. Dentro de cada capa hay **intenciones** distintas: prevenir, detectar o reducir el impacto → [[Líneas de defensa]].

## Por su naturaleza: lógicos vs físicos

| **Controles LÓGICOS** | **Controles FÍSICOS** |
|---|---|
| Aseguran que el **desarrollo, la integridad de los datos y las operaciones** continúen sin tropiezos | **Filtran el acceso físico** a los elementos de los IS |
| Ej.: **diccionarios de datos** (implementan de una vez toda una serie de controles de datos), claves de usuario, estándares de desarrollo y evaluación, reglas de management, controles de ingreso fallido, software de control, claves de acceso | Ej.: personal de seguridad, sistemas de vigilancia, cerraduras, tarjetas con clave, ubicación del equipo (no cerca de áreas públicas, ni en sótanos por inundaciones, ni junto a paredes por escuchas) |
| El más común **y a menudo inadecuado**: identificación de usuario + **contraseñas** | **Más costosos, menos efectivos y más propensos a producir resentimiento** → evaluar cuidadosamente su uso |
| | Buscan minimizar: revelación de información; modificación o destrucción de datos, software o equipos; uso no autorizado; robo |

Aun así, **las organizaciones suelen preferir los controles físicos a los lógicos**. Y a medida que el procesamiento se vuelve **portátil**, se vuelve más vulnerable: el hardware es barato, pero el software y los datos que contiene no.

## El objetivo de seleccionar controles
> [!important] Equilibrio
> "El principal objetivo cuando se seleccionan controles y contra medidas y, por lo tanto, cuando se define la **política de seguridad**, es crear una **situación equilibrada entre los costos de riesgo y los costos de control**." Si los niveles de control **no se ajustan nivel por nivel** a los de las amenazas (control fuerte donde el riesgo es bajo y débil donde es alto), **la política de seguridad es ineficaz** (Fig. 13.15).

- Un conjunto **demasiado "pesado"** desperdicia dinero y reduce innecesariamente la flexibilidad; uno **demasiado "liviano"** deja un nivel inaceptable de riesgo.
- Las medidas de seguridad **disminuyen la productividad global** (menos flexibilidad y velocidad de acceso).
- Algunos **requisitos legales** pueden anular decisiones basadas solo en costos (ej.: *Data Protection Act* 1984 del Reino Unido).
- Las medidas **no siempre son de IS**: Courtney (1989) vincula los delitos con los **niveles de salarios** → ajustar sueldos puede ser una reducción de riesgo efectiva. Como la sección de IS no decide sueldos, **la seguridad de los IS es un tema estratégico que atañe a toda la organización y requiere participación de la gerencia superior**.

## Además de herramientas
Las **herramientas de seguridad** son una de las contramedidas posibles; también lo son las [[Políticas de seguridad|políticas de seguridad]] y las **buenas prácticas** de seguridad.

## 🔗 Relacionado
- [[Líneas de defensa]] · [[Controles y contramedidas específicos (Robson)]] · [[Manejo del riesgo (4 estrategias)]] · [[Control interno]] (clasificación preventivo / detectivo / correctivo de Lardent)
