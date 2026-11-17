---
tags: [ASI-U1, robson, management-IS]
---
# SI centralizados vs no centralizados (P11)

> [!info] De dónde sale la tabla
> Robson **no trae una tabla única** de tres criterios: trata los **centralizados** (§9.2.1) y los **no centralizados** = **descentralizados + delegados** (§9.2.2) con listas de **ventajas, desventajas y "entorno"**. La tabla de P11 (control · entorno · costos) **ordena esos datos**; cada celda de abajo está en el libro (págs. del libro entre paréntesis).

| Criterio | **CENTRALIZADOS** | **NO CENTRALIZADOS** (descentralizados / delegados) |
|---|---|---|
| **a) Grado de control** | **Mayor control** sobre las operaciones de IS: producción de sistemas, **integridad del acceso a las BD**, seguridad (p. 27). **Un solo grupo al control** → sin conflictos de responsabilidad; **fija estándares** para toda la empresa (p. 26). Menor potencial de **incompatibilidad**; función central capaz de **proyectos complejos**; más fácil **reclutar especialistas** (p. 28). Da **coordinación, estandarización e integración** y evita la *suboptimización* (p. 30) | Control **disperso**: se dispersan **localización, autoridad, contabilidad y control** (p. 35). **Delegados:** el control central se **reemplaza por cooperación y coordinación** a nivel de toda la empresa (p. 37); el **usuario final tiene más autonomía** y se involucra más (p. 39). **Riesgo:** confusión sobre **quién es responsable** del mantenimiento y la **seguridad** → **automatizarlas al máximo**, igual que el **management de la red** (p. 37) |
| **b) Entorno requerido** | Funciona bien cuando los recursos de IS son **costosos** y su uso **relativamente limitado** (p. 29). Conviene si: **sistema para senior management** (EIS: complejo, información sensible); **servicio común** a las unidades (sueldos, red, contaduría); unidad de negocio **muy pequeña**; **integración vital**; **tiempo de respuesta no crítico**; objetivos de IS de **eficiencia** (p. 29-30) | **Requerimiento de velocidad y flexibilidad**; **servicio único** para una parte de la empresa (se administra y controla ahí); objetivos de IS de **efectividad** (si el objetivo es la competitividad, la relación es menos directa). **Delegados:** recursos de costo **relativamente bajo** pero uso **alto y variado** (p. 44-45) |
| **c) Costos asociados** | **Economías de escala**: menos duplicación de esfuerzo, recursos y experiencia → **ahorro general** (p. 27). ⚠️ Pueden **aumentar de forma incontrolable** (la "ley de Grosch" está amenazada por la relación costo/performance) (p. 27). **Costos de comunicación altos** (distancia huésped–cliente; las nuevas tecnologías los reducen). Riesgo de **deshonestidad** con contabilidad de usuarios (p. 29) | **Costos agregados por duplicación** (muchos grupos chicos con los mismos problemas; no se puede "suavizar" la demanda) → **ineficiencia**; **cuanto más delegados, más duplicación** y costos totales más **"ocultos"** (p. 36, 40-41). Pero la informática departamental puede **bajar los costos de comunicación de datos**; los sistemas son menos complejos; el usuario **percibe mejor el balance costo/beneficio** (p. 39-40) |

> [!warning] Ojo con los apuntes de alumnos (versión de P11 en `Todos Los Cuestionarios`)
> El PDF mezcló las celdas, y la tabla de 3 columnas (centralizado / descentralizado / delegado) **tiene afirmaciones que el libro no hace**:
> - Que el **delegado cuesta menos que el descentralizado** o tiene "ineficiencia menor": el libro dice lo **contrario** (*cuanto más delegados, más duplicación e ineficiencia*).
> - Que el delegado tiene **"mayores hostilidades"** que el descentralizado, o "equilibrio entre eficiencia y eficacia" como objetivo: **no está en el libro**.
> - Pone **"menor capacidad de respuesta"** y **"acceso lento en horas pico"** como *costos* del centralizado: son **desventajas**, no costos.
> - Para el **control** del descentralizado dice "mantiene la misma estructura pero la multiplica": eso es el **concepto** (réplicas), no un grado de control.
> - **Reparte** entre descentralizado y delegado ("dificultad ante problemas grandes", "limitación de especialistas", hostilidades) desventajas que el libro da para **todos los no centralizados** (más cuanto más delegados), sin distinguirlas.

## Desventajas de los centralizados (p. 28-29)
- IS **separados del negocio real**, de sus preocupaciones y prioridades (baja contribución al negocio, p. 27).
- **Poco campo para atender a un grupo particular**: se vuelven "mercado masivo" y se olvidan prioridades.
- **Políticas específicas de desarrollo** quizás inapropiadas, por estar el servicio separado de la acción.
- **Acceso lento en horas pico**; **planificación de capacidad** más difícil cuanto más centralizado (se atenúa con procesamiento remoto, pero es limitado).
- **Riesgo de deshonestidad** y **costos de comunicación** altos (ver tabla).

## Descentralizados vs delegados (p. 35-38)

| | **Descentralizados** | **Delegados** |
|---|---|---|
| **Qué dispersan** | Algunos servicios **geográficamente** | **Localización, autoridad, contabilidad y control** |
| **Alcance** | Mini departamentos de IS que obtienen **capacidad de respuesta y flexibilidad** | **Informática departamental** y toda la computación **manejada por el propio usuario** |
| **Ventaja** | IS más cerca del usuario: **motivan e involucran**, más **responsabilidad**; menos énfasis en costos y más en **efectividad** | Recursos **donde el negocio los necesita**; razón principal: **acercar los IS a los clientes** |
| **Desventaja principal** | **Duplicación de costos** + **aislamiento del personal** de IS | **Confusión de responsabilidades**, incompatibilidades futuras, hostilidades al delegar |
| **Efecto** | Tiende a crear **islas de tecnología** | Pone los recursos en los puntos necesarios; **opuesto real** de los centralizados |

- La **descentralización** puede ser una **etapa** hacia la delegación. El cambio cíclico entre control centralizado y flexibilidad se da **cada 5 u 8 años** (p. 36): no hay nada radicalmente distinto entre ambas.
- **Cinco tendencias** que respaldan la delegación (p. 38): **downsizing** del poder de procesamiento, **crecimiento de estándares** (plug & play), **mayor conciencia** de los IS a nivel gerencial, necesidad de **autonomía de la unidad empresarial** y necesidad de **manejar costos** (no solo reducirlos).
- **Caso:** Merrill Lynch (1990) redistribuyó **12.000 empleados** de IS a las unidades de negocio.

## Beneficios y riesgos de los no centralizados (p. 39-41)
- ✅ **Recuperación de datos** mucho más cercana al evento · **autonomía** del usuario final · informática departamental con **menos costos de comunicación** y sistemas **más fáciles de administrar** · desarrollo **integrado con el negocio** (cercanía física y emocional) · cuanto más delegados, el usuario **percibe mejor costos vs beneficios**.
- ⚠️ **Costos por duplicación** (más delegados = más) · **incompatibilidades futuras** (las más críticas no son técnicas sino de **recursos humanos e información**) · **límites ante la complejidad** (tamaño reducido) · **carrera de especialistas limitada** (se requiere personal con capacidades diversas) · **duplicación = ineficiencia** · **hostilidades** si el cambio no se maneja bien.
- **Peligro mayor de los delegados:** que la empresa **no pueda tener una visión unificada** de sí misma → conviene **mantener centralizada alguna parte** y conservar **principios rectores** (p. 43).

> [!example] Principios para usar con éxito IS no centralizados (Bacon, 1980) (p. 42-43)
> 1. Cuenta con el **apoyo de los niveles superiores**. 2. **Responsabilidad y autoridad** delegadas y vinculadas (autonomía ↔ responsabilidad de cumplir los estándares). 3. Descentralización **coordinada y controlada formalmente** (reglas consensuadas). 4. **Comités de coordinación** de senior managers (más frecuentes en los descentralizados). 5. **Retención corporativa de funciones clave**: comunicaciones, administración de datos, estrategia y política de IS, recuperación ante desastres, sistemas financieros y de sueldos. 6. **Auditoría estricta** del cumplimiento de estándares. 7. Se decide por **unidad de negocio, función y sistema** (criterios: económicos, tamaño de la unidad, impacto del sistema, capacidades). 8. El proveedor central influye por **persuasión y ejemplo**, no por coerción.

**Cuestionario:** responde la **P11**.

## 🔗 Relacionado
- [[Ubicación de los IS]] · [[Eficiencia vs Eficacia]]
- **Otras unidades:** [[SI delegados]] (U3) · [[Manejo del riesgo (4 estrategias)]] y [[Controles y contramedidas]] (U6: la ubicación condiciona la seguridad)
