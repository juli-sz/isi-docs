---
tags: [ASI-U6, control-interno, lardent]
aliases: [Clasificación de controles, Controles preventivos detectivos correctivos]
---
# Control interno (II.2)

## ¿Qué es?
> [!quote] Definición clásica (respuesta del cuestionario en el apunte)
> "El control interno comprende el **plan de organización, los métodos coordinados y las medidas** adoptadas dentro de una empresa para:
> - **salvaguardar sus activos**,
> - **verificar la confiabilidad y la corrección de los datos** contables,
> - **promover la eficiencia operativa**,
> - **fomentar la adhesión a las políticas** administrativas."

> [!quote] Definición operativa (apunte, Piattini)
> "Cualquier **actividad o acción, realizada manual o automáticamente**, para **prevenir o corregir errores o irregularidades** que puedan afectar el funcionamiento de un sistema para cumplir sus objetivos." **Se asemeja a las líneas de defensa.**

**En criollo:** el control interno es "el sistema inmune" de la organización: todo lo que se hace —a mano o automático— para que los errores y las trampas no pasen, o se detecten y corrijan.

> [!info] Todo control interno tiene limitaciones
> Por eso **solo brinda una seguridad razonable** en el logro de sus objetivos (Apunte Supremo).

## Clasificaciones de control

### 1. Por su intencionalidad / finalidad (Lardent) — la principal
| Categoría | Qué hace | Ejemplo | Línea de defensa |
|---|---|---|---|
| **Preventivo** | Diseñado para **evitar** que se produzca un error, una omisión o un acto malicioso (doloso) | **Control de acceso lógico** que solo permite a personas autorizadas, y desde lugares autorizados, acceder a archivos sensibles; **segregar tareas** | 1ª — prevención |
| **De detección (detectivo)** | **Detecta** que se produjo un error, omisión o acto malicioso **e informa** de su aparición. Actúa **cuando fallan los preventivos**, para descubrir cuanto antes el evento e impedir su avance | **Software de seguridad que registra los intentos de acceso no autorizado**; puntos de verificación en trabajos de producción | 2ª — detección |
| **Correctivo** | **Corrige** errores, omisiones o actos maliciosos; busca **restablecer el funcionamiento** si ocurrió un daño | **Campo de fecha que corrige el formato** (o pone la fecha actual si falta); **recuperar un archivo dañado desde las copias de seguridad** | 3ª — recuperación |

> [!tip] Dicho en clase
> Los correctivos "son la **tercera línea de defensa** y devuelven el funcionamiento a la normalidad. Pueden separarse en **los que corrigen** y **los que recuperan**". Y: "los **errores de los usuarios también son amenazas** que hay que prevenir".

### 2. Por su alcance (Robson; cuestionario resuelto)
| Tipo | Qué cubre | Ejemplo |
|---|---|---|
| **Generales** | Todas las actividades de los IS (afectan estructura, políticas, procedimientos y ambiente de control) | Política de contraseñas para toda la empresa; plan de backups del centro de datos |
| **De aplicación (específicos)** | Un área o aplicación concreta | Validación de CUIT en el módulo de facturación; totales de control de un lote de sueldos |

### 3. Por su naturaleza (Robson)
| Tipo | Ejemplo |
|---|---|
| **Lógicos** | Usuarios y contraseñas, diccionarios de datos, controles de ingreso fallido |
| **Físicos** | Cerraduras, tarjetas de acceso, vigilancia, ubicación de equipos |

### 4. Por su forma de ejecución (de la definición)
**Manuales** (firma de autorización de un cambio) o **automáticos** (validación del sistema). Para asegurar integridad, disponibilidad y eficacia se requieren mecanismos **complejos, la mayoría automáticos** (Piattini).

## Cualidades de un buen control (Piattini)
Los controles deben ser, al menos: **completos, simples, fiables, revisables, adecuados y rentables** (para esto último, analizar el **costo-riesgo** de su implantación).

## Control interno como unidad organizativa
→ [[Control interno informático (Piattini)]]: el área que verifica **día a día** que se cumplan los controles.

**Cuestionario:** responde la **II.2**.

## 🔗 Relacionado
- [[Líneas de defensa]] · [[Controles y contramedidas]] · [[Auditoría informática vs control interno informático]] · [[Separación de funciones]]
