---
tags: [ASI-U6, examen, finales]
aliases: [Finales U6]
---
# 🎓 Preguntas de final U6 (seguridad y auditoría)

*Preguntas reales de finales (PDF "Preguntas teóricas — Finales", ordenadas por unidad y sin ordenar). Las respuestas de alumnos se verificaron contra el apunte; donde había errores o imprecisiones se corrigieron y se indica.*

## Verdadero / Falso (con justificación)

| Afirmación | V/F | Justificación | Nota |
|---|---|---|---|
| Según el principio de independencia de criterio de la auditoría, **el responsable de sistemas debe participar en todos los procedimientos de auditoría** de la organización | **F** | Por ese mismo principio, el auditor no puede auditar nada con lo que tenga vínculo y el auditado no puede intervenir en la evaluación de su propia área; el auditor debe ser independiente del área de sistemas | [[Deontología del auditor]] |
| **Un reporte de auditoría puede contener una opinión del auditor** | **V** | La opinión es el **contenido** de la auditoría y una sección del informe (Lardent: "opinión del auditor sobre la situación encontrada", respaldada por evidencias) | [[Informe de auditoría]] |
| Una política **prohibitiva** es aquella en la que **todo lo que no está explícitamente permitido está denegado** | **V** | Es la definición. (En el PDF aparece mal redactada: "no todo lo que está explícitamente permitido está denegado"; corregí la redacción si te la toman así) | [[Políticas de seguridad]] |
| **iptables** permite la configuración de un firewall **por hardware** | **F** | iptables configura un firewall **por software** (filtrado de paquetes en Linux); es un control lógico preventivo sobre el acceso a recursos de red | [[Guía del laboratorio U6 (líneas de defensa sobre análisis de riesgo)]] |

## Desarrollo

### 1. ¿Qué es la pérdida de seguridad? ¿Qué aspectos se ven afectados?
"La **falla de los elementos de un SI computarizado para realizar la función o brindar el o los servicios para los cuales estaba destinado**" (Robson). Puede afectar uno o todos estos aspectos: **integridad** (no se puede confiar en los datos), **operatividad/disponibilidad** (no se puede acceder) y **confidencialidad** (se pierde la posesión exclusiva). → [[Pérdida de seguridad]]

### 2. ¿Qué aspectos se deben tener en cuenta para el manejo de los SI de un modo "seguro"? Explique y dé ejemplos. / ¿Cuándo se dice que el management de SI funciona en modo seguro?
Seguros desde el punto de vista **organizacional (técnico)**, **social (ético)** y **judicial (legal)**; los tres se superponen. Ejemplo de la respuesta circulante (caso de filtración de repositorios): **técnico** → repositorios de código mal protegidos frente a intrusiones; **legal** → exposición a multas y juicios de clientes con información filtrada; **ético** → se evalúa la conducta de la empresa (en ese caso, no presentaba falla). → [[Management responsable de IS]]

### 3. ¿Qué son las líneas de defensa?
Los **controles y contramedidas** con que se implementan las estrategias de manejo del riesgo para **evitar, reducir o transferir** su impacto, organizados por intención: **1ª prevención**, **2ª detección**, **3ª recuperación** (Robson: prohibir fumar, detector de humo, backups off-site). La respuesta circulante ("barreras y controles para proteger los activos, prevenir pérdidas y asegurar los objetivos") es correcta pero conviene nombrar las **tres etapas**. → [[Líneas de defensa]]

### 4. ¿A qué línea de defensa corresponden las políticas de seguridad?
A la **primera línea: prevención**, porque intentan **evitar** que ocurran las amenazas (son medidas preventivas). → [[Políticas de seguridad]]

### 5. Tipos de políticas de seguridad (explique y dé ejemplos)
**Prohibitiva** (lo no permitido está denegado; ej.: internet solo para sitios del trabajo) y **permisiva** (lo no prohibido está permitido; ej.: no se permiten USB personales → lo demás sí). Agregá la amplitud: **generales** y **específicas** (por activo, situación o perfil). → [[Políticas de seguridad]]

### 6. Auditoría de la función informática: concepto
Analizar la **organización y administración del ambiente informático**: que los recursos de TI estén bien gestionados, **alineados** con los objetivos y operen con **eficiencia y efectividad**; corresponde al **área de sistemas**.
> [!warning] La respuesta circulante arranca con la definición general de **auditoría informática** ("recoger, agrupar y evaluar evidencias…"). No está mal como marco, pero el concepto **específico** es el de organización y administración del ambiente informático (y su foco en la gestión de todo el departamento de TI).

→ [[Auditoría de la función informática]]

### 7. ¿Qué significa el principio de separación de funciones?
Delimitar responsabilidades, tareas y funciones de cada cargo para que **ninguna persona concentre todas las operaciones** (configurar, implementar y vigilar controles y además usar el sistema). Lardent: si una sola persona conociera y pudiera ejercer todas las operaciones del centro de cómputos, **el riesgo de fraude sería mayor**. **Función incompatible:** la que no está debidamente separada → menos control. → [[Separación de funciones]]

### 8. Puntos a auditar en la función informática considerando la separación de funciones (con foco en las funciones de servicio de apoyo técnico)
Organigrama y manual de funciones que separen **desarrollo, operación, control y soporte técnico**; desarrollo y pruebas separados de producción; accesos privilegiados del soporte técnico **registrados y revisados por otro**; administración de la seguridad lógica separada del uso; custodia de backups separada; rotación de tareas. → [[Separación de funciones]] · [[Auditoría de la función informática]]

### 9. Describa 2 interacciones del Subsistema de Seguridad y Auditoría de SI/TI con el Seguimiento de Recursos
1. Los **resultados de la monitorización** de los sistemas como **justificación/evidencia de vulnerabilidades** en algún recurso (alimentan la identificación del riesgo y la detección).
2. Los **resultados de las evaluaciones de rendimiento** como **fuente de auditoría** para determinar si los sistemas usan los recursos de forma **óptima/eficiente**.
→ [[Monitores]] · [[Evaluación de prestaciones]] · [[ASI U6 - Seguridad y Auditoría de SI-TI (Súper Resumen)#12. Cierres y conclusiones para las preguntas de elaboración|Súper Resumen §12]]

### 10. Orales registrados
- "**Management responsable de IS** y las **etapas del análisis del riesgo**" → [[Management responsable de IS]] · [[Administración del riesgo]] · [[Análisis del riesgo]].
- "**Auditoría**: definición, objetos, pruebas, evidencia, objetivos… y la función informática" → [[Auditoría — concepto y tipos]] · [[Objetos y áreas de la auditoría de SI]] · [[Tipos de pruebas de auditoría]] · [[Procedimientos y evidencia de auditoría]] · [[Auditoría de la función informática]].

## Preguntas que aparecen en la sección "Unidad 6" pero son de OTRA unidad
La sección "Unidad 6 [Subsistema de control]" del PDF de finales responde al **programa anterior** y mezcla temas que hoy están en otras unidades:

| Pregunta | Unidad / tema actual | Ver |
|---|---|---|
| V/F: "Los elementos del subsistema de seguimiento de RR. HH. son control de RR. HH. y auditoría de RR. HH." (V) | Seguimiento / control de **RR. HH.** | [[Evaluación del desempeño humano]] |
| V/F: "El proceso de control de RR. HH. compara el rendimiento con el umbral de desempeño" (F: compara contra el **estándar** de desempeño) | Control de RR. HH. (el cuestionario resuelto lo desarrolla como "proceso de control": estándares → monitoreo → comparación → acción correctiva) | [[Evaluación del desempeño humano]] |
| Herramienta **TOP**: tipo (monitor de software), componentes que sigue, datos que muestra | **U3** — seguimiento / monitores | [[Monitores]] |
| **Ley de Amdahl**: significado, tipo de técnica, uso como administrador; ejercicio de la placa aceleradora (87 %, k = 2) | **U3** — evaluación de prestaciones | [[Evaluación de prestaciones]] |
| "Estándar de desempeño: qué es, para qué sirve, clasificación" | Control de RR. HH. | [[Evaluación del desempeño humano]] |

## 🔗 Relacionado
- [[Cuestionario U6 (11 preguntas)]] · [[Comodines y cruces de examen U6]] · [[00 Home — U6 Seguridad y auditoría|🏠 Home]]
