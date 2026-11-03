---
tags: [ASI-U6, robson, controles]
aliases: [Ejemplos de controles, Contraseñas y encriptación]
---
# Controles y contramedidas específicos (Robson)

El apunte los lista como **ejemplos de controles**: estándares de operatividad · división de responsabilidades · medidas de seguridad de la red · contraseñas · encriptación de datos · antivirus · detección y prevención de incendios.

## Estándares de operatividad
"Una empresa **siempre paga por los estándares**, ya sea en el presente, al desarrollarlos, o en el futuro, por no tenerlos." Proveen el marco para que los IS funcionen segura y eficazmente:
- **Beneficios:** racionalización de prácticas (comunicación, management, capacitación); **compatibilidad** de software, hardware, datos, personal y comunicaciones; mejor management de proyectos (quién, qué y cuándo definidos), desarrollos estructurados, operaciones menos ambiguas, mejor calidad y documentación.
- **Ojo:** los controles también **generan amenazas** (una interfaz estándar facilita que el personal entre en áreas no autorizadas).
- Su mantenimiento lleva a definir **estándares de performance mínimos** para que la "falla de seguridad" se pueda medir.

## División de responsabilidades
Ningún individuo debe ser a la vez responsable de **configurar, implementar y vigilar los controles** y del **uso** de los sistemas → **vigilancia mutua**. Actividades a separar: **desarrollar sistemas · administrar medios de entrada · operar el sistema · administrar documentos y archivos · distribuir las salidas**. Se relaciona con la **rotación de obligaciones** y las **auditorías sorpresivas**.
- Corresponde a un management basado en la **desconfianza**, que puede resultar inadecuado en un enfoque moderno; Hinde (1993) usa *Jurassic Park* como ejemplo de desastre por **no dividir tareas**. Contramedida alternativa basada en el personal: **clima de honestidad** e involucramiento de los empleados.
- Es la base del **principio de separación de funciones** que revisa la auditoría → [[Separación de funciones]].

## Medidas de seguridad de la red
Primer paso: **diagrama de los puntos de acceso potenciales** (además ayuda a planificar capacidad). Toda actividad de red tiene: **terminal de inicio, terminal de recepción y canal de transmisión**. Medidas: **saludo** (señal predeterminada de una terminal válida), **módems de rediscado**, **identificación de usuario y contraseñas**, **encriptación**. Prevención, detección y recuperación deben aplicarse a cada elemento.

## Contraseñas
- Tres dimensiones: **identidad individual**, **acceso grupal**, **clave para decodificar** datos encriptados.
- Generadas **por el sistema** (cambian regularmente, sin palabras, pero si son confusas se anotan → suelen ser cortas) o **por el usuario** (no hace falta anotarlas, pero se eligen fáciles y no se cambian). Alternativa: secuencias de letras y números fáciles de recordar, **nunca escritas**.
- Como la **detección** también es objetivo, el sistema debe **registrar los intentos fallidos** (muchos fallos del usuario legítimo indican mala configuración).
- Solo sirven si se **administran bien**: no prestarlas, escribirlas ni revelarlas.

## Encriptación de datos
- El **canal de comunicación** suele ser el vínculo más débil. Los medios robados encriptados **carecen de valor**. Los archivos de contraseñas deben estar encriptados.
- Tres usos: **comunicación**, **contraseñas o claves**, **archivos/bases de datos**.
- Cumple tres principios: **identificación** (emisores/receptores), **control** (evitar modificación), **privacidad** (evitar intromisiones).
- Modos: **de extremo a extremo** o **de enlace a enlace** (más segura pero más lenta). Su beneficio depende de proteger la **clave**. Es barata → **alta eficacia neta**.

## Antivirus
Tres etapas: **prevenir** (monitoreo), **detectar** pronto (escaneo de medios; reduce costos de limpieza y pérdidas secundarias), **eliminar los efectos** rápido (buenos backups). Las infecciones **accidentales** (personal autorizado que usa discos/software no autorizado) son más frecuentes que las deliberadas → **los programas educativos son la medida más efectiva**. En virus, "**la prevención puede no ser mejor que la cura**": backups y recuperación pueden ser más efectivos en costo que prevenciones onerosas.

## Detección y prevención de incendios
Costos **y** probabilidad altos → conviene emplear muchas medidas. El fuego es grave porque hay material inflamable cerca, es difícil de extinguir, los conductos de aire y pisos/techos técnicos lo propagan, los cables liberan tóxicos, los sistemas de extinción causan **daños secundarios** (agua, químicos) y las salas suelen tener **una o dos salidas** (por control de acceso). Con la difusión de las desktop, hay que extender la prevención **a toda la empresa**, con sistemas no contaminantes.

## 🔗 Relacionado
- [[Controles y contramedidas]] · [[Líneas de defensa]] · [[Separación de funciones]]
