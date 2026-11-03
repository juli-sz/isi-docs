---
tags: [ASI-U6, robson, riesgo]
aliases: [Estrategias de manejo del riesgo, Prevenir asumir reducir transferir]
---
# Manejo del riesgo (etapa 3) — las 4 estrategias genéricas

> [!quote] Robson
> "El manejo del riesgo consiste en la **aplicación de controles y contra medidas apropiadas para el riesgo, de acuerdo con el tiempo, el dinero y otros límites**."

Los pasos previos —(1) enumerar amenazas potenciales, (2) cuantificar las pérdidas de las amenazas exitosas y (3) determinar la **ALE** u otra medida de probabilidad o gravedad— "constituyen un proceso valioso pero **sólo como medio para alcanzar un fin**". El propósito es identificar el **"mejor" método**, entendiendo por mejor un management de las fallas potenciales que sea **efectivo en cuanto al costo**.

## Las cuatro estrategias

| Estrategia | Qué es (Robson / apunte) | Cuándo / ejemplo |
|---|---|---|
| **1. Prevenir el riesgo** (evitar) | Si es posible **evitar la amenaza**, tomar los recaudos necesarios | Colocar los sistemas lejos de áreas peligrosas, ubicar los datos delicados en áreas protegidas, **no descentralizar**, alterar métodos de trabajo, prescindir de lo que amenaza (ej.: no alojar el centro de cómputos en un sótano); usar antivirus |
| **2. Asumir el riesgo** | Si la organización **puede tolerar la pérdida esperada** (suma de primarias y secundarias), adopta la estrategia de "**reír y soportar**" | Riesgos de **bajo costo**, con consecuencias menores. Ojo: a menudo se adopta **en forma inadvertida** (se pasa por alto la verdadera exposición total) |
| **3. Reducir el riesgo** | Introducir **controles y contramedidas** para reducir la **probabilidad** de ocurrencia y/o las **pérdidas** resultantes | **La más común**: es muy difícil evitar por completo una amenaza y a menudo es inadecuado ignorarla → "compromiso conveniente". Ej.: backup |
| **4. Transferir el riesgo** | Trasladar a un **tercero** los costos de una falla: **pólizas de seguro o contratos de mantenimiento** | Amenazas de **alto costo y baja probabilidad**, donde la recuperación completa es imposible. Las cláusulas de la póliza o del contrato definen el grado de riesgo asumido, que puede quedar sujeto a una estrategia de prevención |

> [!important] Cuándo conviene reducir
> El portfolio de controles es **efectivo económicamente solo si provoca en la tabla ALE una reducción mayor que el aumento anual del costo** de las medidas. Todas las contramedidas suman costos a **el desarrollo, la operación y el mantenimiento** (y, según el cuestionario resuelto, a la **flexibilidad**). La pregunta clave: **"¿hasta qué grado se reducirá el costo?"**

## El portfolio de management del riesgo
"Identificar un portfolio de management de riesgo significa **seleccionar un conjunto heterogéneo de estrategias** de manejo del riesgo que dependen de la aplicación sistemática de la identificación y el análisis del riesgo." Lo habitual (Robson):
- **Prevención y transferencia** → para **calamidades totales**.
- **Asumir** → amenazas con **pérdidas muy bajas** (salvo que los controles sean baratos y no quiten flexibilidad).
- **Mezcla de reducción y transferencia** → para las amenazas restantes.

> [!tip] Apunte de clase
> "Por cada riesgo se debe pensar **una sola estrategia**; las estrategias indican en qué se pondrá más foco al invertir en seguridad." Y: "**Cualquier medida es más barata que perder los datos.**"

## La seguridad como tema estratégico
- "Cada vez más, la seguridad de los IS debe ser considerada como un **tema estratégico**, y toda empresa debería invertir en seguridad." Si las pérdidas prevenidas o reducidas superan el costo de la seguridad, hay una **contribución neta a las ganancias** (esto ayuda a superar la imagen negativa del gasto en seguridad).
- **Ley de disminución de ganancias:** cuanto más alto el nivel actual de seguridad, **más costará el próximo paso**. Smith (1993): además, las medidas adicionales pueden **perjudicar la utilidad global** → hay que "filtrar" la lista de defensas (por grado de **interconexión** de la PC y **número de usuarios**) y priorizar hasta que la **utilidad marginal llegue a cero**.
- **Medidas baratas de espectro amplio** suelen ser más efectivas que **medidas costosas de espectro restringido** (una contraseña barata en todos los sistemas > una firma costosa en pocos).
- Seguros: problemas de **elegir el tipo** y de que las aseguradoras **exigen procedimientos de reducción** antes de asegurar; el seguro de **datos y pérdidas secundarias** es necesario para transferir de verdad el riesgo (si no, la empresa cierra y los liquidadores solo recuperan el costo del equipo).

## 🔗 Relacionado
- [[Tabla de pérdida anual (ALE)]] · [[Controles y contramedidas]] · [[Líneas de defensa]] · [[Políticas de seguridad]] (documentan las estrategias elegidas) · [[Administración del riesgo]]
- [[Centralizados vs no centralizados]] ("no descentralizar" como prevención; en los delegados hay que automatizar la seguridad)
