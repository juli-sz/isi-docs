---
tags: [ASI-U6, auditoria, areas, lardent, piattini]
aliases: [Auditoría del desarrollo, Puntos de control]
---
# Auditoría del desarrollo de sistemas

> [!tip] Dicho en clase
> "**Se audita para mejorar.**" La auditoría es una forma de medir, y midiendo se mejora: "así como un **test es bueno cuando encuentra errores**, una auditoría es buena cuando **encuentra cosas para mejorar**".

**¿Por qué auditar el desarrollo?** Para verificar la conformidad, detectar errores, mejorar la calidad, promover la mejora, dar **responsabilidad y transparencia** (qué historia de usuario genera cada funcionalidad y sus casos de prueba) y evaluar el cumplimiento de los requisitos.

## i. Concepto
> [!quote] Lardent (según el apunte)
> "El objetivo de este tipo de auditoría es **identificar, analizar y evaluar los requerimientos del usuario**, así como **los riesgos, las exposiciones a riesgos y los controles que deben incorporarse a los sistemas de aplicación durante las fases de desarrollo**." Busca verificar que los sistemas se desarrollen **siguiendo las metodologías establecidas** y que cumplan con los requisitos del negocio.

> [!quote] Piattini & Del Peso (según el apunte)
> "La **función auditora** es la encargada de **comprobar la existencia de procedimientos de control** y de **verificar su correcta definición y aplicación**, para determinar las **deficiencias** que existan al respecto y los **riesgos asociados** a esas carencias de control."

**Lo importante es identificar los puntos de control.** Se busca contribuir a la **calidad y la confiabilidad del software**.

## ii. Funciones del auditor (Lardent)
- Determinar los **objetivos y requerimientos básicos de los usuarios** e identificar las **áreas afectadas** por el sistema.
- Determinar y **clasificar los riesgos** y las exposiciones a riesgos del sistema.
- Procurar la identificación de los **controles necesarios** para minimizarlos (**los puntos de control**).
- **Asesorar** al equipo de desarrollo sobre la incorporación de **controles en el diseño** y de **módulos de auditoría** que permitan, una vez implementado el sistema, revisiones de rutina mediante **pistas de auditoría**.
- Asegurar que se **sigan los pasos de la metodología** de desarrollo aplicada.
- Verificar que se haya hecho la **evaluación de factibilidad** y que sea **consistente y completa**.

> [!important] La paradoja del auditor asesor
> Lardent plantea al auditor como **función asesora** que ayuda a definir los puntos de control (papel **activo**, consultoría a la par del equipo en las fases del ciclo de vida). Pero entonces, ¿quién controla después? → **La persona que luego haga la auditoría debe ser distinta de la que ayudó a definir los puntos de control** (principio de independencia).

## Los cuatro niveles de Lardent
| Nivel | Qué revisa |
|---|---|
| **1. Revisión del ciclo de vida** | Si el área se dedica a desarrollar. Parte del **plan maestro** (plan de SI/TI: recursos, cronograma, prioridades): verificar que exista, que esté estructurado para saber en qué etapa está cada aplicación y que sea flexible. Luego, un punto de control de **factibilidad** por cada proyecto del plan maestro (documentación, fechas de inicio, **soluciones alternativas**, **justificación económica**). Luego, las **fases de desarrollo** de las metodologías clásicas (o del framework usado; si es ágil, según aporten valor). Lardent dice **qué**, no **cómo** |
| **2. Documentación de sistemas** | Que cumpla los **estándares de la organización** (p. ej., si se certifica CMMI); propone los documentos a tener **por etapa**, incluida la **posinstalación** |
| **3. Adquisición de software** | **Solvencia del proveedor** (historial, casos, soporte posterior); **recuperación del código fuente** y quién es su **propietario** (cuestión legal y contractual: propiedad intelectual; ¿qué pasa si se corta la relación?); documentación de respaldo; **satisfacción** de otros clientes; **capacidad de actualización** |
| **4. Modificación de programas** | **Autorización** de los cambios (quién autorizó), **trazabilidad** (por qué se hizo), **concordancia código fuente – código objeto**, documentación del cambio y de sistemas (manuales); todo relacionado con puntos de control |

## La visión de Piattini (cap. 12 "Auditoría del desarrollo")
- Usa la metodología de **ISACA**: parte de los **riesgos potenciales** y define **objetivos de control**; para cada objetivo, **una o varias técnicas de control**, y para cada técnica, **una o varias pruebas de cumplimiento**. El auditor evalúa el **grado de cumplimiento**.
- **Doble foco:**
  1. **Auditoría de la organización y gestión del área de desarrollo** (cómo se administra a las personas y cómo trabajan): propone **8 objetivos de control**, con niveles de la **A a la G** según su tecnicismo.
  2. **Auditoría de proyectos de desarrollo de SI**: un plan distinto por proyecto según **riesgos, complejidad y recursos**; según el índice del libro abarca **aprobación, planificación y gestión del proyecto** y las fases de **análisis, diseño, construcción e implantación**.
- Cubre el ciclo de vida del desarrollo (análisis → implantación) pero **no la explotación, el mantenimiento ni el retiro**, que trata en capítulos aparte.
- Los objetivos y niveles **no son un modelo cerrado**: el auditor los **adapta** a cada organización y proyecto.

→ Comparación completa: [[Auditoría del desarrollo — Lardent vs Piattini]].

## iii. Síntesis de los elementos a auditar
- **Plan maestro** (plan de SI/TI): concordancia del plan y de los sistemas que incluye.
- **Estudio de factibilidad.**
- **Documentación** y **ERS** (especificación de requerimientos).
- **Metodología** utilizada.
- **Cada fase del proyecto:** definición y análisis de requerimientos · diseño lógico · diseño físico · prueba del sistema · implantación · posinstalación (mantenimiento).
- **Adquisición** de software y **modificación** de programas.

> [!warning] Auditoría ≠ certificación
> "No hay que confundir auditoría con certificación de calidad. La certificación **utiliza** la auditoría, pero también se puede hacer una auditoría solo para saber si se están haciendo bien las cosas."

**Cuestionario:** responde la **II.4** (área 2.a) y es base de la **II.5**.

## 🔗 Relacionado
- [[Auditoría del desarrollo — Lardent vs Piattini]] · [[Deontología del auditor]] · [[Control interno informático (Piattini)]] (gestión del cambio) · [[Plan de TI-SI (contenido)]] (U1: el "plan maestro")
