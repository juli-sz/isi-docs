---
tags: [ASI-U3, rendimiento, herramientas, examen]
aliases: [top, Comando top]
---
# Herramienta top (pregunta de final)

> [!warning] Fuente
> No está en el apunte de U3: aparece en **finales** ("Determinar tipo de herramienta y su clasificación. Componentes a los que realiza el seguimiento. Nombrar al menos 2 datos que muestra") y la respuesta sale de **alumnos**, contrastada con las variables del apunte.

## ¿Qué tipo de herramienta es?
Un **monitor** (técnica de **monitorización**): **monitor software por muestreo en tiempo real**, porque permite **seguir el comportamiento** de los principales elementos del sistema bajo la carga actual → [[Monitores]].

- **Magnitudes que observa:** consumo de tiempo y utilización de recursos.
- **Variables:** factor de utilización (CPU, memoria), productividad/capacidad, frecuencia de swapping.
- **Componentes que sigue:** **procesos**, **CPU**, **memoria** y **swap**, carga del servidor.

## Cómo leer la salida (ejemplo de final)

```
top - 16:38:45 up 1:05, 1 user, load average: 1.28, 1.07, 0.70
Tasks: 152 total, 2 running, 150 sleeping, 0 stopped, 0 zombie
Cpu(s): 34.4%us, 12.5%sy, 0.0%ni, 51.9%id, 1.2%wa, 0.0%hi, 0.0%si, 0.0%st
Mem:  1980080k total, 1804012k used, 176068k free, 33996k buffers
Swap: 2095100k total,    9876k used, 2085224k free, 363196k cached
```

| Pregunta del final | Dónde mirar | Respuesta con estos datos |
|---|---|---|
| Memoria física total | `Mem: … total` | **1 980 080 KB** (≈ 1,9 GB) |
| % de memoria física en uso | used / total | 1 804 012 / 1 980 080 ≈ **91 %** |
| % de utilización del procesador | 100 − %id (o us + sy + …) | 100 − 51,9 ≈ **48,1 %** (34,4 usuario + 12,5 sistema + 1,2 espera E/S) |
| Carga media de 15 min | 3er valor de *load average* | **0,70** |
| Tendencia de la carga | 1 min → 5 min → 15 min | 1,28 > 1,07 > 0,70 → **ascendente** (la carga reciente es mayor) |

**Datos por proceso:** PID · usuario · prioridad (PR, NI) · memoria virtual/residente/compartida · estado (R running, S sleeping…) · %CPU · %MEM · tiempo acumulado · comando.

> [!tip] Lectura de *load average*
> Los tres números son el promedio de carga del **último minuto**, **últimos 5** y **últimos 15**. Si el de 1 min es mayor que el de 15, la carga **está subiendo**.

> [!info] Cálculos propios
> Los porcentajes de la tabla son cálculos sobre la salida de ejemplo (no vienen resueltos en las fuentes); verificá con los datos que te den en el examen.

## 🔗 Relacionado
- [[Monitores]] · [[Magnitudes y variables de medida]] · [[Técnicas de evaluación de sistemas]]
