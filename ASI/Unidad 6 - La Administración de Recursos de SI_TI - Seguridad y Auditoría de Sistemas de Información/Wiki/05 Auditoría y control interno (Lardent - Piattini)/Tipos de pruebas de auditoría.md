---
tags: [ASI-U6, auditoria, lardent]
aliases: [Pruebas de cumplimiento, Pruebas sustantivas]
---
# Tipos de pruebas de auditoría (II.3)

"La auditoría distingue **dos categorías** de pruebas: las de **cumplimiento** y las **sustantivas**."

| | **PRUEBAS DE CUMPLIMIENTO** | **PRUEBAS SUSTANTIVAS** |
|---|---|---|
| Objeto | Determinar si los **controles se ajustan a las políticas y procedimientos** de la organización y si se **aplican conforme a la documentación** de los programas | Verificar la **adecuación de los controles para proteger a la organización de actividades fraudulentas**, minimizando el riesgo de pérdidas materiales durante el procesamiento |
| En criollo | "¿Se hace lo que está escrito?" | "¿El sistema realmente procesa bien y resiste un intento de alterarlo?" |
| Insumo | **La documentación** | **El tratamiento de la información**: se va a los sistemas y se observa cómo operan |
| Herramientas | Revisión documental, entrevistas, observación | **Herramientas informáticas**: procesamiento en paralelo, cruce de datos |
| Objetivo según el cuestionario resuelto | Dar al auditor la **garantía razonable** de que un control en el que piensa basarse **opera como lo percibió** en la revisión preliminar | **Fundamentar la integridad de un procesamiento real** |

## Subtipos de pruebas de cumplimiento
| Subtipo | Qué es | Ejemplo |
|---|---|---|
| **De detalle** | **Revisión de documentos**; más **pasivas** | Verificar que el programa en uso sea **la misma versión** que las versiones fuente y objeto de la biblioteca; validar un usuario o la condición de un alumno contra el registro |
| **De indagación y observación** | Tomar acciones para detectar errores; más **activas** | **Indagar al personal** (¿conocen el procedimiento de gestión del cambio? → volver otro día y ver si realmente sabe actuar); **observar el comportamiento de los programas de edición ante situaciones simuladas** que generan errores de ingreso |

> [!example] Ejemplo de clase (cumplimiento)
> Si según el **organigrama** hay un área de programación y otra de testing con personal distinto, la prueba de cumplimiento verifica con la documentación (y entrevistas) que **realmente sean personas distintas** y no personal multitarea → [[Separación de funciones]].

## Ejemplos de pruebas sustantivas
- **Procesamiento en paralelo:** procesar la misma base en **dos servidores distintos** y comparar; si la aplicación da **resultados contables distintos con los mismos datos**, hay un problema.
- **Cruzar datos** con herramientas para ver si una aplicación **altera las salidas** de otra.
- Revisar **cómo se hacen y preservan las copias de seguridad** (en qué servidor, quiénes tienen acceso).
- Determinar si el **inventario de la biblioteca de cintas** está registrado adecuadamente (ejemplo del apunte, Extras).

> [!important] ¿Cuál se usa más?
> Si los controles son **buenos** → más **pruebas de cumplimiento**; si son **débiles o inexistentes** → más **pruebas sustantivas**. Los **sistemas instalados** se auditan sobre todo con **pruebas sustantivas** ("todo lo que procese información").

**Cuestionario:** responde la **II.3**.

## 🔗 Relacionado
- [[Procedimientos y evidencia de auditoría]] · [[Auditoría de sistemas de aplicación instalados]] · [[Etapas de la auditoría (plan y programa de revisión)]]
