---
tags: [ASI-U6, control-interno, auditoria]
aliases: [Segregación de funciones, Principio de separación de funciones, Funciones incompatibles, División de responsabilidades]
---
# Principio de separación (segregación) de funciones

> [!quote] Robson — división de responsabilidades
> "Un control de seguridad tradicional debe asegurar que **no haya instancias en las que un único individuo sea el responsable de configurar, implementar y vigilar los controles, y que sea, al mismo tiempo, responsable del uso de los sistemas**. La participación de varias personas [...] permite la **vigilancia mutua**."

**Lardent (según respuestas de final):** si **una sola persona** tuviera el **conocimiento operacional completo** de un centro de cómputos y la posibilidad de ejercer **todas las operaciones** involucradas, el **riesgo de fraude sería mayor**. Cuando las funciones se **segregan entre varias personas**, se reduce el daño que podría causar la actuación de una sola.

- Se basa en **delimitar las responsabilidades, tareas y funciones de cada cargo**, considerando el control interno y la auditoría.
- **Función incompatible:** aquella cuyas tareas **no están debidamente separadas**, lo que resulta en una **disminución del control**.

**En criollo:** el que programa no pasa a producción; el que opera no autoriza; el que controla no ejecuta. Así, para hacer trampa hacen falta dos.

## Actividades que Robson recomienda separar
**Desarrollar sistemas · administrar los medios de entrada · operar el sistema · administrar documentos y archivos · distribuir las salidas.** Ninguna persona debe "transponer los límites de su tarea". Se complementa con la **rotación de obligaciones** y las **auditorías sorpresivas**.

> [!note] El matiz de Robson
> Estas medidas corresponden a un management basado en la **desconfianza** y pueden resultar inadecuadas en un enfoque moderno (y algunos desarrollos, como la computación de usuario final, no se prestan). Alternativa: un **clima de honestidad** que involucre al personal en la seguridad. Aun así, Hinde (1993) muestra con *Jurassic Park* el desastre de **no dividir tareas**.

## Qué revisa el auditor (aplicación del principio)
*Puntos sugeridos a partir del material (Lardent: segregación en el departamento de procesamiento; funciones de proyecto, procesamiento y soporte técnico; CII: gestión del cambio):*
- [ ] El **organigrama y el manual de funciones** separan desarrollo, operación/producción, control y soporte técnico (prueba de **cumplimiento**: ¿son personas distintas o personal multitarea?).
- [ ] **Desarrollo y pruebas separados de producción**: los programadores no tienen acceso a los datos ni a los programas en producción; la **migración** la hace otro sector con autorización (gestión del cambio).
- [ ] El **soporte técnico** (software de base, administración de redes y BD) no autoriza ni registra transacciones de negocio, y sus accesos privilegiados quedan **registrados** (logs revisados por un tercero).
- [ ] Quien **administra la seguridad lógica** (altas de usuarios, perfiles) no es quien **usa** esos perfiles para operar.
- [ ] La **custodia de archivos y backups** está separada de la operación.
- [ ] Existen **rotación de tareas** y **controles sorpresivos**.
- [ ] El **auditor** y el **control interno** son independientes del área auditada.

## 🔗 Relacionado
- [[Auditoría de la función informática]] · [[Control interno]] · [[Controles y contramedidas específicos (Robson)]] · [[Deontología del auditor]]
