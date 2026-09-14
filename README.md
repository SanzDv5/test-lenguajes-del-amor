# Test de los Cinco Lenguajes del Amor

Aplicación web estática en español para descubrir qué lenguaje del amor tiene mayor presencia según las respuestas del cuestionario.

## Características

- Pantalla inicial con instrucciones y leyenda de los cinco lenguajes.
- Cuestionario de 30 preguntas.
- Posibilidad de seleccionar una afirmación, ambas o ninguna en cada pregunta.
- Cálculo automático de la puntuación de cada lenguaje.
- Identificación del lenguaje con mayor puntuación.
- Gestión de empates entre dos o más lenguajes.
- Mensaje específico cuando no se selecciona ninguna opción.
- Vista detallada con la puntuación obtenida en cada lenguaje.
- Opción para repetir el cuestionario.
- Diseño responsive para dispositivos móviles y escritorio.

## Lenguajes evaluados

| Código | Lenguaje del amor |
| --- | --- |
| A | Palabras de Afirmación |
| B | Tiempo de Calidad |
| C | Recibir Regalos |
| D | Actos de Servicio |
| E | Toque Físico |

## Cómo utilizarlo

1. Abre `index.html` en un navegador.
2. Lee las instrucciones y pulsa **Descubre tu lenguaje del amor**.
3. En cada pregunta, selecciona la afirmación que mejor te represente. También puedes seleccionar ambas o ninguna.
4. Pulsa **Ver mi resultado** para consultar el resultado y las puntuaciones.
5. Pulsa **Repetir cuestionario** para comenzar de nuevo.

## Ejecución local

El proyecto no necesita instalación de dependencias ni compilación. Puede abrirse directamente desde el explorador de archivos o ejecutarse con un servidor local.

Por ejemplo, con Python:

```bash
python -m http.server 8000
```

Después, visita [http://localhost:8000](http://localhost:8000) en el navegador.

## Funcionamiento

Las preguntas y sus opciones están definidas en `app.js`. Cada opción aporta un punto al lenguaje asociado:

- Las selecciones se leen al enviar el formulario.
- Se cuentan los valores `A`, `B`, `C`, `D` y `E`.
- Se muestra el lenguaje o los lenguajes con la puntuación máxima.
- Las puntuaciones completas se presentan al final del cuestionario.

Las respuestas no se guardan en un servidor ni en el navegador; el cálculo se realiza únicamente durante la sesión actual.

## Estructura del proyecto

```text
.
├── index.html   # Instrucciones y acceso al cuestionario
├── form.html    # Formulario y sección de resultados
├── app.js       # Preguntas, cálculo y comportamiento de la interfaz
├── style.css    # Estilos, diseño responsive y estados visuales
└── README.md    # Documentación del proyecto
```

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla
- Fuente Space Grotesk mediante Google Fonts

## Nota

Este cuestionario tiene un propósito orientativo y de reflexión personal. No es una evaluación psicológica ni sustituye el asesoramiento profesional.