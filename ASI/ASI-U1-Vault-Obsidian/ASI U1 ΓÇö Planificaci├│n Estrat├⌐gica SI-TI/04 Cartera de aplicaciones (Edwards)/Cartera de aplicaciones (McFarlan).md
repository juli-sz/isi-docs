---
tags: [ASI-U1, edwards, cartera]
aliases: [Cartera de aplicaciones, Matriz de McFarlan]
---
# Análisis de la cartera de aplicaciones (McFarlan)

> [!quote] Definición
> "Esquema de clasificación, desarrollado originalmente por **McFarlan**, que permite **evaluar y administrar el conjunto de sistemas de información** de una empresa —actuales, planificados y potenciales— **basándose en la contribución que hacen al éxito del negocio**, en lugar de enfocarse meramente en la forma en que se suministran operativamente."

## La matriz (fila superior = FUTURO · fila inferior = PRESENTE)

| 🎯 [[Aplicaciones estratégicas\|ESTRATÉGICAS]]<br/>críticas para ejecutar la **estrategia futura** | 🚀 [[Aplicaciones de alto potencial\|DE ALTO POTENCIAL]]<br/>pueden ser importantes para el **éxito futuro** |
|---|---|
| 🔑 [[Aplicaciones clave para las operaciones\|CLAVE PARA LAS OPERACIONES]]<br/>de ellas depende el **éxito actual** | 🧰 [[Aplicaciones de apoyo\|DE APOYO]]<br/>**valiosas pero no críticas** |

## Ideas clave
- Las aplicaciones se gestionan como **activos** de una cartera (igual que productos, clientes o inversiones), según sus **valores comerciales presentes y futuros**, *tal como los percibe la dirección*.
- Entran todas: existentes, en desarrollo o simples ideas.
- Permite ver el **equilibrio de las inversiones** (recursos y fondos): si no se ajusta a los objetivos, se reasignan.
- Su mayor fuerza: **vehículo para una discusión constructiva** entre alta dirección, mandos medios y profesionales de SI.
- En el alineamiento se usa dos veces: **diagnóstico** de los sistemas actuales y **formulación/priorización** de los nuevos.

## Migración entre cuadrantes (la cartera evoluciona)

```mermaid
flowchart LR
    AP["🚀 Alto potencial"] -->|"se logra el potencial"| E["🎯 Estratégica"]
    E -->|"se pierde la ventaja<br/>(el sistema se estabiliza)"| CO["🔑 Clave p/ operaciones"]
    AP -->|"solo beneficios locales"| A["🧰 De apoyo"]
    CO -->|"deja de ser crítica"| A
    A -->|"obsolescencia"| X["🗑️ Eliminación"]
```

> [!tip] Palabras clave para identificar cuadrante
> "integrar datos", "evitar desventajas" → **Clave** · "tareas localizadas", "requisitos legales", "paquetes de costo ínfimo" → **Apoyo** · "prototipos", "oportunidad tecnológica" → **Alto potencial** · "presiones competitivas externas", "FCE", "desarrollo rápido" → **Estratégica**.

**Cuestionario:** responde la **P4**.

## 🔗 Relacionado
- [[Aplicaciones estratégicas]] · [[Aplicaciones de alto potencial]] · [[Aplicaciones clave para las operaciones]] · [[Aplicaciones de apoyo]]
- [[Estrategias genéricas de gestión (Parsons)]] — qué estrategia le calza a cada cuadrante
- [[Prioridades de las aplicaciones]] · [[Clasificación de las inversiones en IS]]
