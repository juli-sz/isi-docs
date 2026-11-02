---
tags: [ASI-U1, andreu, alineamiento]
---
# Matriz de necesidades

Herramienta central del cruce estratégico: **filas = funciones de negocio por departamento**, **columnas = acciones estratégicas** de la empresa. Las intersecciones marcan **necesidades de información**.

```mermaid
flowchart LR
    M["MATRIZ<br/>Funciones de negocio ×<br/>Acciones estratégicas"] -->|"las necesidades<br/>se integran en"| P["PLAN DE TECNOLOGÍAS Y SI<br/>· elaborado por un equipo de SI<br/>· coordinado por el director de SI<br/>· aprobado por el comité ejecutivo<br/>· establece prioridades y marca políticas"]
    P --> PI["PLAN INFORMÁTICO<br/>(responsabilidad de la<br/>dirección de SI +<br/>necesidades internas)"]
    PI --> PH["Plan de hardware<br/>y software de base"]
    PI --> PR["Proyectos a desarrollar<br/>· dirigidos por SI<br/>· con colaboración de usuarios"]
```

- Los sistemas resultantes **deben servir a los departamentos** y **deben apoyar la estrategia**.
- Mecanismos de control: responsabilidad de las subdirecciones generales y del Comité de TI/SI.
- Ejemplo del cruce: estrategia "mejorar la atención al cliente" × proceso "gestión de ventas" → necesidad: *"mostrar al vendedor el historial de reclamos del cliente en tiempo real"*.

## 🔗 Relacionado
- [[Procedimiento de alineamiento (4 fases)]] · [[Alineamiento E.O. – E.SI-TI (esquema general)]]
