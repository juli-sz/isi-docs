---
tags: [ASI-U6, robson, contingencia]
aliases: [Recuperación del desastre, Planificación de contingencias, Continuidad del negocio]
---
# Recuperación ante el desastre (etapa 4)

> [!quote] Robson (13.1.4 Planificación de contingencias y recuperación)
> "El cuarto y último elemento de los procesos de management de seguridad de los IS **asume que la prevención total del riesgo es poco práctica o imposible** y que, por lo tanto, la empresa debe planificar cómo enfrentarse a las inevitables rupturas de seguridad y cómo recuperarse de ellas. Esto es lo que se denomina **planificación de contingencias**, e incluye planes para **métodos de trabajo que permitan que la empresa sobreviva al desastre**, y para **procesos a largo plazo** a fin de que la organización se recupere."

## Las dos etapas y sus términos
- **Primera etapa:** incrementar la seguridad, **minimizar los daños** y facilitar el **regreso al trabajo**.
- **Segunda etapa:** **minimizar los efectos secundarios** del desastre.

| Término | Definición |
|---|---|
| **Tiempo de inhabilitación** | Cantidad de tiempo antes de que las operaciones/sistemas vuelvan a funcionar, parcial o completamente |
| **Respaldo o mantenimiento** | Mantener el funcionamiento de la empresa a través de los **sistemas clave** (críticos y vitales) hasta volver a la normalidad |
| **Reinstalación** | Actualizar los sistemas con **todos los datos generados durante el tiempo de inhabilitación** |

## Ideas clave
- El management del riesgo busca **prevenir** siempre que pueda, pero también debe **prepararse para los desastres**: una estrategia de reducción reconoce que **existe una probabilidad residual de falla**.
- **"En algunos casos, cuando las consecuencias del riesgo son bajas, la prevención no es mejor que la cura"** y la recuperación en sí misma puede ser una estrategia adecuada.
- **Primer paso:** clasificar los sistemas y aplicaciones **según la necesidad de las operaciones empresariales** (grado de tolerancia) → **"cronograma de prioridades"** que muestra **cuándo** cada elemento debe volver a funcionar para que la empresa sobreviva. Debe basarse en la **importancia del negocio (no en la dificultad técnica)**. El *standby* suele cubrir solo los sistemas críticos, pero **el plan de recuperación debe cubrir todos los aspectos del uso y del management de los IS**.
- Como es parte del **management estratégico de los IS**, no puede separarse de los demás aspectos de gestión del uso de los IS.
- Las organizaciones **muy automatizadas** están sometidas a **mayores riesgos** que las poco mecanizadas: les cuesta más restaurar procedimientos y tienen menor capacidad de procesar sus datos (apunte, según Lardent).
- **Dos problemas importantes:** mantenerse actualizado con los **tipos/tiempos de desastre** y con los **cronogramas de prioridades**.
- **Recuperación ante desastres ≠ continuidad del negocio:** la tradicional asegura reconstruir la oficina de cómputos; la continuidad depende de la **disponibilidad de los datos** → **los backups son un pilar fundamental**. "A menudo no se realizan; cuando sí, no se ponen a prueba, y cuando sí se prueban, **no se almacenan**" (off-site).
- El **80 %** de los planes **fallan la primera vez** que se prueban, a menudo por desconocer las **interdependencias empresariales**. Hoy el lugar crítico es **la oficina** (desktops, LAN), no la sala de cómputos.
- **Todos los enfoques de desarrollo de los IS deben ofrecer puntos de recuperación** (módulos tipo "caja negra" con entradas identificadas que puedan reunirse incluso a mano).
- Durante el **respaldo** desaparecen muchos controles (otra sede, estrés) → hay que **detectar las amenazas que surgen del propio proceso de recuperación**, y conservar la seguridad legal y los procedimientos de auditoría. **El plan mismo debe estar protegido** (hubo planes que se quemaron en el desastre).

## Soluciones de respaldo (mantenimiento) — Robson
| Tipo | Descripción |
|---|---|
| **Instalaciones de emergencia** | Todo lo que posibilita el funcionamiento ya está instalado → **operatividad inmediata** (si hay backups) |
| **Instalaciones intermedias** | Centro de datos **vacío pero equipado**; de propósito general → **menos costosas**, pero **más lentas** en ponerse en marcha |
| **Instalaciones móviles** | Provisión desde **vehículos** o **edificaciones prefabricadas semimóviles**; muy aceptadas porque pueden compartirse rápido |

El apunte asocia esta clasificación con la "**disponibilidad de hardware alternativo**" de Lardent (hot / warm / cold sites) → [[Hardware alternativo y sitios de respaldo]].

## Estructura del documento de recuperación (Hill, 1992, citado por Robson — Fig. 13.18)
Introducción/índice · **Definición de desastre informático** (y niveles: Robson sugiere identificar **cinco niveles**, desde un incendio pequeño hasta la destrucción total del área) · Supuestos · Exclusiones · **Inventarios** (hardware, software, datos, comunicaciones, aplicaciones críticas, niveles de servicio) · Presupuestos de emergencia · **Alarma** (cuándo activar el plan, equipos de recuperación) · Logística · **Mantenimiento y puesta a prueba** · Apéndices (pólizas, contratos, resultados del análisis de riesgo).

> [!important] Sin prueba no hay plan
> "El proceso de planificación de contingencias debe brindar una **puesta a prueba, un monitoreo y una actualización regular** del plan", para que funcione con los cronogramas de prioridades **presentes, y no pasados**.

## 🔗 Relacionado
- [[Plan de contingencias]] · [[Niveles de emergencia (catástrofe, desastre y no desastre)]] · [[Metodologías de recuperación]] · [[Auditoría de la continuidad de las operaciones]] · [[Consecuencias primarias y secundarias]] · [[Líneas de defensa]] (3ª línea)
