---
tags: [ASI-U6, examen]
aliases: [Comodines U6]
---
# 💡 Comodines y cruces de examen U6

## El cruce maestro: aspecto ↔ ataque ↔ elemento de política ↔ línea de defensa

| Aspecto de la pérdida de seguridad (Robson) | Ataque que lo golpea | Control típico por línea de defensa |
|---|---|---|
| **Disponibilidad** | **Interrupción**; degradación fraudulenta del servicio | Prevención: UPS, redundancia · Detección: monitoreo · Recuperación: hot/warm/cold site, backups |
| **Integridad** | **Modificación**; reactuación; modificación de mensajes | Prevención: perfiles, separación de funciones · Detección: totales de control, logs · Recuperación: restaurar desde backup |
| **Confidencialidad** | **Intercepción** (pasivos) | Prevención: encriptación, control de acceso · Detección: registro de intentos fallidos · Recuperación: cambio de claves, seguro |
| *(Autenticidad — elemento de la política)* | **Fabricación**; suplantación de identidad | Prevención: autenticación · Detección: verificación de origen · Recuperación: depurar registros falsos |

## El cruce Robson ↔ Lardent
| Robson (seguridad) | Lardent (control interno / auditoría) |
|---|---|
| 1ª línea: **prevención** | Control **preventivo** |
| 2ª línea: **detección** | Control **de detección** |
| 3ª línea: **recuperación** | Control **correctivo** |
| Etapa 4: **recuperación del desastre** | **Plan de contingencias**, niveles de emergencia, hot/warm/cold sites, metodologías de recuperación, auditoría de la continuidad |

## Identificación rápida por palabras clave
- "falla de los elementos para brindar el servicio" → **pérdida de seguridad**
- "equilibrio entre costo de la falla y costo de las medidas" → **administración del riesgo**
- "pensamiento creativo y espontáneo" → **identificación**; "proceso más estructurado" → **análisis**
- "probabilidad de agresión × probabilidad de éxito" → **frecuencia**; "costo × frecuencia" → **ALE**
- "reír y soportar" → **asumir**; "póliza / contrato de mantenimiento" → **transferir**; "la más común" → **reducir**
- "no expresamente permitido → denegado" → **prohibitiva**
- "vigencia, concordancia, permanencia del diseño, eficiencia" → **auditoría de SI (Lardent)**
- "plan de organización, métodos y medidas para salvaguardar activos" → **control interno**
- "día a día, informa a la Dirección de Informática" → **control interno informático**
- "documentación" → **prueba de cumplimiento**; "procesamiento en paralelo" → **prueba sustantiva**
- "error material por la naturaleza de la actividad" → **riesgo inherente**; "procedimiento inadecuado" → **riesgo de detección**
- "fe pública" → **auditoría externa**
- "puntos de control", "plan maestro", "factibilidad" → **auditoría del desarrollo (Lardent)**; "objetivos de control, técnicas, pruebas" → **Piattini/ISACA**
- "datos completos, exactos, válidos, autorizados y por única vez" → **sistemas de aplicación instalados**
- "separación de funciones", "organigrama", "plan de organización" → **función informática**

## Respuestas blindadas
- **¿La seguridad total es posible?** → No: "ningún sistema puede ser completamente seguro"; se busca un **nivel razonable**.
- **¿Qué se administra, la seguridad o el riesgo?** → **El riesgo**.
- **¿Cuándo conviene reducir?** → Cuando la baja en la **ALE** supera el **costo anual** del control.
- **¿Cuándo transferir?** → Amenazas de **alto costo y baja probabilidad**, con recuperación imposible.
- **¿La prevención siempre es mejor que la cura?** → **No**: con consecuencias bajas (p. ej., virus), backups y recuperación pueden ser más efectivos en costo.
- **¿Las políticas a qué línea?** → **Primera (prevención)**.
- **¿Qué pérdida es la más seria y difícil de cuantificar?** → **Datos e información**.
- **¿Qué costo se pasa más por alto?** → La pérdida de **personal clave**.
- **¿Quién hace más hacking?** → **Personal interno** (Robson).
- **¿Quién formula el plan de contingencias?** → La **gerencia superior**; el auditor lo **evalúa**.
- **¿Qué va primero en el informe según Soria?** → **La opinión**, después los hallazgos.
- **¿Puede el auditor definir puntos de control?** → **Sí, debe participar** (Lardent), pero **otro** audita después.
- **¿De quién depende el auditor interno?** → De la **máxima autoridad / Dirección General**, nunca de la gerencia que audita.
- **Capítulo de Piattini sobre desarrollo** → **12** (no 22).

## Cruces con otras unidades
- **U1 — Costos de los IS:** la **seguridad** (prevención de daños y **recuperación de desastres**) es una categoría de la lista de **Hochstrasser y Griffiths** → [[Costos de los IS]].
- **U1 — Auditoría de costos de IS:** balance de activos de IS, **software ilegal**, **robo de componentes** → [[Auditoría de costos de IS]].
- **U1 — Ubicación:** en los **delegados** hay que **automatizar la seguridad**; "**no descentralizar**" como prevención → [[Centralizados vs no centralizados]].
- **U1 — Organización de los IS:** lo que revisa la auditoría de la función informática → [[Organización de los IS (enfoques estructurales)]].
- **U3 — Seguimiento:** monitores y evaluación de prestaciones como **evidencia** para la auditoría y la detección → [[Monitores]] · [[Evaluación de prestaciones]].
- **U3 — Explotación y RUO:** objeto de la auditoría de la función informática → [[Explotación de sistemas]] · [[RUO — Rol, Ubicación y Organización del área de SI-TI]].
- **U3 — Políticas y normas:** base de las políticas de seguridad → [[Modelo de administración de recursos (políticas y normas)]].

## 🔗 Relacionado
- [[Cuestionario U6 (11 preguntas)]] · [[Diferencias que se confunden U6]] · [[Preguntas de final U6]] · [[00 Home — U6 Seguridad y auditoría|🏠 Home]]
