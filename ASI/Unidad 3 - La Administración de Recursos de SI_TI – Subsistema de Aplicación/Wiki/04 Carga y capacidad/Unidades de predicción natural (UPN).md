---
tags: [ASI-U3, molero, capacidad]
aliases: [UPN, NFU, Natural Forecast Unit]
---
# Unidades de predicción natural (UPN)

> [!quote] Definición (Molero)
> "Una **unidad de predicción natural** (*Natural Forecast Unit*, NFU) es una **variable de negocio** cuyo valor está **directamente relacionado con los recursos consumidos** por una o varias aplicaciones."

**En criollo (nota de clase):** es la variable del negocio que "manda" la carga. Ejemplos: **alumnos** para el Sysacad (lo que importa es su **crecimiento**: más alumnos → más inscripciones a exámenes y materias), **clientes** para un sistema de ventas, **inmuebles** para una inmobiliaria.

## Componentes de la caracterización con UPN

```mermaid
flowchart LR
    U["UPN<br/>(variable de negocio:<br/>alumnos, clientes…)"] -->|"transacciones generadas<br/>por cada UPN en el período"| T["Transacciones"]
    T -->|"recursos del sistema<br/>que consume cada transacción"| R["Recursos<br/>(CPU, disco, red…)"]
```

1. **Medidas del trabajo** solicitado al sistema usando **variables de negocio** como métrica (las UPN).
2. Relaciones que muestran el **número de transacciones generadas por cada UPN** en el período caracterizado.
3. Relaciones que indican los **recursos del sistema que consume cada transacción**.

## ¿Cuándo conviene usarlas?
*(Elaboración a partir del material — no es textual.)* Cuando el crecimiento de la demanda de prestaciones **lo explica una variable del negocio** cuya evolución la organización **conoce o planifica** (planes de negocio, metas de ventas, matrícula proyectada): permite traducir "cuántos clientes/alumnos habrá" en "cuántas transacciones" y en "cuántos recursos". Es el puente entre los **métodos cualitativos** (planes de negocio) y los **cuantitativos**, y es lo que pide el **nivel 5** de gestión de la capacidad ("criterios de las aplicaciones de negocio").

**Cuestionario:** responde la **II.11**.

## 🔗 Relacionado
- [[Planificación de la capacidad]] · [[Patrones de la carga y métodos de predicción]] · [[Caracterización de la carga]]
