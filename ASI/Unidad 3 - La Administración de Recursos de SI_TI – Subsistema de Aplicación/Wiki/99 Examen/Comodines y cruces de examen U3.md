---
tags: [ASI-U3, examen]
---
# 💡 Comodines y cruces de examen — U3

## El cruce maestro: aplicación de RRHH ↔ aplicación de SW/HW

| Etapa | RRHH (Chiavenato) | SW/HW (Puigjaner, Molero) |
|---|---|---|
| Insertar el recurso | Socialización / integración | Asignación y configuración |
| Definir qué debe hacer | Diseño, descripción y análisis de cargos | Caracterización de la carga, planificación de la capacidad |
| Hacerlo trabajar | Desempeño del cargo | Explotación |
| Medir | Evaluación del desempeño (métodos) | Evaluación de prestaciones (monitores, modelado, benchmarking) |
| Referencia | Estándares de desempeño | SLA / índices de prestaciones |
| Problema típico | Discrepancias del rol | Cuellos de botella |
| Mejorar antes de reemplazar | Enriquecimiento, capacitación | Sintonización |
| Dispara | Nueva provisión de personas | Nueva provisión de SW/HW |

## Cruce ubicación ↔ objetivos ↔ eficiencia/efectividad (U1)
- Objetivos de IS de **eficiencia** → **centralizar**. Objetivos de **efectividad** → **descentralizar/delegar** (salvo circunstancias especiales). → [[Eficiencia vs Eficacia]] · [[SI delegados]]
- Centralizar si los recursos son **caros** y de uso **limitado**; delegar si son **muy baratos** y de uso **alto y variado**.

## Cruce rol ↔ estructura
Hacerles algo a ellos → **tradicional** · para ellos → **bases de datos** · con ellos → **proyectos funcionales** · que lo hagan solos → **centro de información** · depósito de información → **externa**. → [[Rol de IS — relaciones con los usuarios y estructuras]]

## Cruce representatividad ↔ uso
Físico → **sintonizar** · virtual → **ampliar** · funcional → **seleccionar computador / planificar capacidad** · comportamiento → **validar**. → [[Modelo de carga y representatividad]]

## Cruce patrón ↔ técnica
Tendencia → **regresión** · estacionario → **medias móviles** · cíclico y estacional → **suavizado** (tabla del apunte). → [[Patrones de la carga y métodos de predicción]]

## Identificación rápida por palabras clave
- "réplicas", "Sysacad en cada regional" → **descentralizado** · "control del usuario final", "autónomas", "expedientes UTN" → **delegado** · "único acceso", "contabilidad del Estado provincial" → **centralizado**.
- "murallas chinas", "matricial", "primera por demanda" → **grupos de proyectos funcionales** · "sistemas proscriptos", "turnos", "centro de datos" → **tradicional** · "management híbrido", "computación del usuario" → **centro de información** · "acuerdos de servicio", "clientes reales" → **externas**.
- "hacer, no pensar" → **clásico** · "contexto social, moral" → **humanista** · "variedad, autonomía, significado, identidad, retroalimentación" → **situacional**.
- "efecto halo" → **elección forzada** · "especialista de staff entrevista al supervisor" → **investigación de campo** · "hechos excepcionales" → **incidentes críticos** · "doble entrada" → **escalas gráficas**.
- "analista activo, ocupante pasivo" → **observación** · al revés → **cuestionario** · ambos activos → **entrevista**.
- "load average", "%us %sy %id" → **top = monitor software** · "1/((1−f)+f/k)" → **Amdahl**.

## Respuestas blindadas
- **Todo equipo es grupo formal; no todo grupo formal es equipo.**
- **Los delegados (no los descentralizados) se oponen a los centralizados.**
- **"IS" en Robson = el área**, no las aplicaciones; RUO es **organizativo, no tecnológico**.
- **Todo índice de prestaciones va con su carga**: comparar solo con la misma carga.
- **Carga correctamente caracterizada ⇔ parámetros elegidos según los objetivos** (primero los objetivos).
- **Benchmarking compara**, no mide el rendimiento real.
- **Amdahl no es técnica de evaluación**: justifica un upgrade.
- **Antes de actualizar, sintonizar.**
- **La evaluación del desempeño no es un fin**: es un medio; y es **responsabilidad de línea, función de staff** (igual que la DyAC).
- **Capacidad adecuada = SLA + arquitectura + presupuesto** (y se cumple continuamente dentro de los costos).

## Cruces con otras unidades
- **U1:** RUO, alineamiento como marco, niveles organizacionales → [[RUO — Rol, Ubicación y Organización del área de SI-TI]].
- **U2:** provisión de RRHH y de SW/HW → [[Aplicación y provisión de RRHH]] · [[Aplicación y provisión de SI-TI]].
- **Seguimiento:** monitores, modelado y benchmarking también se usan para el seguimiento de recursos → [[Monitores]].
- **U6:** separación de funciones y auditoría de la función informática ↔ explotación y organización del área; políticas ↔ marco normativo; resultados de monitorización como evidencia → [[Auditoría de la función informática]] · [[Políticas de seguridad]] · [[Control interno]] · [[Auditoría de sistemas de información]].

## 🔗 Relacionado
- [[Cuestionario U3 (27 preguntas)]] · [[Preguntas de final U3]] · [[Diferencias que se confunden U3]] · [[00 Home — U3 Subsistema de aplicación|🏠 Home U3]]
