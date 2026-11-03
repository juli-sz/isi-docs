---
tags: [ASI-U3, puigjaner, explotacion]
aliases: [Explotación, Operación de sistemas, Metodología de explotación]
---
# Explotación de sistemas

> [!warning] Fuentes de esta nota
> El apunte sistematizado de U3 **no desarrolla** este tema del programa (solo lo menciona: el subsistema de aplicación incluye **explotar** los recursos y su finalidad habla de "esquemas de trabajo y de **explotación** de la infraestructura de información"). Se arma con:
> 1. Un **cuestionario resuelto de alumnos** (versión anterior del cuestionario) que transcribe la **metodología de explotación de Puigjaner** → más confiable.
> 2. El **"Complemento a los apuntes"** *(fuente: Complemento a los apuntes — no es material de cátedra; generado por compañeros con IA)* → solo para completar.

## Concepto
**Explotación (operación o producción):** fase en que los recursos ya **dimensionados, configurados y asignados** según la carga y la capacidad planificada **funcionan día a día**: HW, SW de base, redes y aplicaciones **compiten por los recursos** para transformar datos de entrada en resultados, cumpliendo los **acuerdos de nivel de servicio** *(fuente: Complemento a los apuntes — no es material de cátedra)*.

**En criollo:** es "la sala de máquinas": que todo corra, a tiempo y dentro del SLA.

## Metodología de explotación (Puigjaner, vía cuestionario resuelto)
Modelo que responde a los objetivos y enfoques con que se estructura la **organización y el funcionamiento de la explotación**, y se concreta en **normas de actuación**. Determinarla implica diseñar el modelo más acorde. Tres modelos:

| Modelo | Qué define | Contenido |
|---|---|---|
| **Decisional** | Estructura de decisiones y funciones por nivel para **controlar** las operaciones | **Planificación** (largo plazo: previsión de carga y necesidades de capacidad según los planes de desarrollo; corto plazo: ordenar los trabajos en el tiempo; objetivo: resolver conflictos de capacidad limitada y equilibrar el uso de los equipos) · **Lanzamiento** (preparar los requisitos de los trabajos del plan diario y la **orden de explotación**; contemplar urgentes) · **Control** (verificar resultados y, si procede, **relanzar**) |
| **Organizacional** | Relaciones del departamento de explotación con el resto | Internas: **explotación, sistemas y proyectos** (gestión de recursos de HW/SW); externas: prestación de servicios al resto de la empresa |
| **Informacional** | Soportes documentales de relaciones y decisiones | Documentación de **procedimientos** (cómo explotar cada aplicación) · de **trabajos** (lo necesario para ejecutar y controlar cada uno) · de **control** (catálogos de archivos, estado de terminales, **registro de incidencias**) |

### Niveles de planificación de la explotación

| Nivel | Características |
|---|---|
| **Largo plazo** | Negociar con usuarios **fechas, plazos, tiempos de respuesta, volúmenes y costo**; con proveedores, **cantidad y calidad de recursos**; considerar todos los sistemas de la empresa; revisar con los usuarios |
| **Corto plazo o diaria** | Basada en compromisos y recursos disponibles; pocos trabajos; interna al depto.; objetivo: **cumplir el plazo de entrega**; seguimiento detallado; diaria y constantemente actualizada |
| **Microplanificación** (por estación de trabajo) | Lista cronológica de operaciones, uso de **recursos críticos**, precedencias y prioridades; objetivos: cumplir horarios y **optimizar el uso de recursos** |

### Factores para organizar el área de explotación
Tamaño de la instalación · recursos del departamento · características del **SO** · características del **personal** · situación del depto. dentro del centro de proceso de datos · características de la empresa · **plan informático** a corto y largo plazo · política informática interna: **centralización o no** (cruce directo con [[SI delegados]] y [[Ubicación de los IS]]).

## Áreas de la explotación según el Complemento *(fuente: Complemento a los apuntes — no es material de cátedra)*
1. **Planificación y recepción de aplicaciones:** *job scheduling* (calendarios de procesos batch para evitar picos), control de entrada de datos, recepción de nuevas aplicaciones o versiones **con documentación operativa y actas de prueba y aceptación**.
2. **Producción u operación:** ejecución y **monitoreo** diario (CPU, memoria, E/S, red) para mantener el SLA; gestión de soportes y **backups** locales y *off-site*; control y distribución segura de salidas.
3. **Soporte técnico:** administración del SW de base y **sintonización (tuning)**; gestión de incidencias (*help desk*); **contabilidad del sistema** (*accounting*, *chargeback*).
- **Regla de oro:** **separación desarrollo / explotación** — explotación solo ejecuta programas **aprobados y compilados** recibidos por un procedimiento formal de pasaje a producción; los programadores no operan en producción ni los operadores modifican código.

> [!tip] Por qué importa para U6
> La separación desarrollo/explotación es una aplicación del **principio de separación de funciones** que revisa la [[Auditoría de la función informática]] (organización y administración del ambiente informático) y es parte del [[Control interno]]. Los backups *off-site* conectan con el [[Plan de contingencias]].

> [!question] Para relacionar (cuestionario resuelto, sin respuesta)
> "Relacione y compare la propuesta de organización del área de explotación de Puigjaner con el **rol y la organización** de los SI/TI de Robson." Pista: el modelo **organizacional** de explotación es la "operación" que el enfoque **tradicional** separa de desarrollo y mantenimiento; los **factores** incluyen la política de centralización (ubicación). → [[Enfoques estructurales — detalle U3]] · [[RUO — Rol, Ubicación y Organización del área de SI-TI]]

## 🔗 Relacionado
- [[Separación de funciones]] · [[Control del ambiente informático]] · [[Subsistema de aplicación de SI-TI]] · [[Planificación de la capacidad]] · [[Monitores]] · [[Mejora del comportamiento de un sistema]] · [[Modelo de administración de recursos (políticas y normas)]] · [[Auditoría de la función informática]]
