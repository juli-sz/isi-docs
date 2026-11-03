---
tags: [ASI-U6, auditoria, areas]
aliases: [Auditoría de accesos lógicos y físicos, Auditoría de bases de datos, Auditoría de redes, Auditoría de adquisición de software, Auditoría de modificaciones a programas, Auditoría de control de entrada de datos]
---
# Otras áreas de auditoría (Extras del apunte)

> [!warning] Sobre esta sección
> La sección "Extras" del apunte responde la II.4 con un recorrido por **capítulos numerados (20 a 26)** que corresponden, por su contenido, al libro de **Lardent**; el propio apunte marca dudas ("capítulo 23 en el índice y en el texto", "capítulo 26 en el texto") y referencias de página sin verificar. Usá estas fichas como **complemento**: las cuatro áreas centrales (función informática, desarrollo, sistemas instalados y seguridad) están en sus propias notas.

| Área | i. Concepto | ii. Funciones del auditor | iii. Elementos a auditar |
|---|---|---|---|
| **Auditoría de SI (general)** | Examen **independiente** de SI, procedimientos, operaciones y controles para ver si la seguridad es adecuada y se cumplen políticas; identificar riesgos y proponer mejoras | Planifica, prueba, analiza, documenta, recomienda; foco en control interno, cumplimiento, eficiencia y eficacia | Controles (preventivos, correctivos, de detección); riesgos y exposiciones; estándares de operatividad; segregación de funciones; evidencia; factores de complejidad (criticidad, estabilidad, controlabilidad…) |
| **Controles de accesos lógicos y físicos** | Control interno para **salvaguardar la información** revisando cómo se asegura el acceso a los recursos | Verificar políticas de seguridad; evaluar seguridad física; revisar **rutas de acceso** lógico y físico; probar controles (contraseñas) | Políticas; seguridad física (vigilancia, cerraduras, tarjetas, ubicación); rutas de acceso (centralizado, LAN, terminales remotas); controles por etapa (**prevención, detección, recuperación**); autorización de usuarios (claves, límites de transacción y monetarios); acceso remoto |
| **Seguridad en bases de datos** | Controles para la **fiabilidad y disponibilidad** de grandes volúmenes de datos | Auditar accesos (por usuario y por programa), operación, mantenimiento; funciones del **DBA**; revisar **logs**; respaldo y recuperación; integridad y consistencia | Accesos; operaciones; documentación; funciones del DBA; logs; backups; integridad; modificaciones a programas |
| **Seguridad de redes y sistemas distribuidos** | Medidas de seguridad en redes; énfasis en **comunicaciones** | Revisar aspectos lógicos y físicos; perfiles de acceso; reglas de transmisión; acceso remoto; planes de contingencia | Topología; componentes; seguridad lógica y física; controles ambientales y de comunicación (detección/corrección de errores); protocolos (TCP/IP) |
| **Adquisición de software** | Que la organización **seleccione bien** y con **términos contractuales** adecuados | Revisar el proceso; solvencia y soporte del proveedor; contratos; pruebas y satisfacción | Proceso de adquisición; proveedor; contratos; documentación; **licencias** |
| **Modificaciones a programas** | Que los cambios estén **autorizados, documentados y probados** | Verificar autorización y documentación; procedimientos de prueba; **control de bibliotecas** (*librarian*) | Proceso de modificación; registros de autorización; evidencia de pruebas; bibliotecas; **segregación de funciones** en el proceso |
| **Control de entrada de datos** | Exactitud, integridad y **autorización** de los datos que ingresan (incluye en línea y transmitidos a distancia) | Observar operaciones; revisar documentación; probar **validaciones**; pruebas de entrada remota | Procesos de entrada; validaciones; formato y contenido; **logs de transacciones**; transacciones en línea |

> [!tip] Cómo encajan
> Adquisición y modificación de programas son **niveles 3 y 4** de la [[Auditoría del desarrollo de sistemas|auditoría del desarrollo]] de Lardent; control de entrada de datos es parte de la [[Auditoría de sistemas de aplicación instalados|auditoría de sistemas instalados]]; accesos, BD y redes son parte de la [[Auditoría de seguridad|auditoría de seguridad]].

## 🔗 Relacionado
- [[Objetos y áreas de la auditoría de SI]] · [[Artífices y modalidades del delito informático]] (manipulación de entradas, troyanos y puertas falsas atacan justamente estas áreas)
