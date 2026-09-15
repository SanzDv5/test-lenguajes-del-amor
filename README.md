# Test de los Cinco Lenguajes del Amor

Una experiencia interactiva para explorar cómo expresamos y percibimos el afecto a través de Correo formas diferentes de conectar con los demás.

El cuestionario plantea 30 situaciones en las que puedes elegir entre dos afirmaciones. Puedes identificarte con una de ellas, con las dos o con ninguna. A partir de tus elecciones, la aplicación construye un perfil de puntuaciones y muestra qué lenguaje tiene mayor presencia en tus respuestas.

# El test

## Los cinco lenguajes que se evalúan son:

| Código | Lenguaje | Se relaciona principalmente con |
| --- | --- | --- |
| A | Palabras de Afirmación | Expresar afecto mediante palabras, reconocimiento y apoyo |
| B | Tiempo de Calidad | Compartir momentos y prestar atención plena |
| C | Recibir Regalos | Expresar cariño mediante detalles y gestos significativos |
| D | Actos de Servicio | Demostrar afecto ayudando y haciendo cosas por los demás |
| E | Toque Físico | Comunicar cercanía mediante el contacto físico |

No existe una respuesta correcta. El resultado refleja únicamente el patrón de elecciones realizado durante el cuestionario.

# Cómo funciona

Cada una de las 30 preguntas contiene dos afirmaciones asociadas a diferentes lenguajes.

### La mecánica permite tres posibilidades:

* Seleccionar la primera afirmación.
* Seleccionar la segunda afirmación.
* Seleccionar ambas o ninguna.

Cada selección suma un punto al lenguaje correspondiente. Al finalizar, se comparan las cinco puntuaciones y se identifica el valor más alto.

Cuando dos o más lenguajes alcanzan la misma puntuación máxima, el resultado muestra el empate en lugar de forzar una única categoría.

Si no se selecciona ninguna opción a lo largo del cuestionario, la aplicación informa de que no hay suficientes respuestas para establecer un resultado.

# La experiencia

### El recorrido está dividido en dos momentos.

## 1. Introducción

`index.html` presenta el propósito del test, explica brevemente los cinco lenguajes y permite comenzar el cuestionario.

## 2. Cuestionario y resultado

`form.html` contiene las preguntas y gestiona el proceso completo de respuesta. Una vez finalizado el test, la misma vista presenta:

* El lenguaje o lenguajes con mayor puntuación.
* La puntuación obtenida en cada categoría.
* El resultado del cuestionario.
* La posibilidad de empezar de nuevo.

El objetivo es que el resultado no se limite a decir cuál es el lenguaje predominante, sino que permita ver cómo se distribuyen las preferencias entre las cinco categorías.

# Arquitectura

El proyecto mantiene una separación sencilla entre estructura, presentación y comportamiento:

```text
.
├── index.html
├── form.html
├── app.js
├── style.css
└── README.md
```

### `index.html`
Página de entrada. Contiene las instrucciones, la explicación de las categorías y el acceso al cuestionario.

### `form.html`
Contiene el formulario con las 30 preguntas y el espacio destinado a mostrar los resultados.

### `app.js`
Es el núcleo de la aplicación.

### Aquí se encuentran:
* Las preguntas y sus opciones.
* La asociación de cada opción con un lenguaje.
* La lectura de las respuestas.
* El cálculo de las puntuaciones.
* La detección de la puntuación máxima.
* La gestión de resultados con empate.
* El reinicio del cuestionario.

### `style.css`
Define la identidad visual de la aplicación, la composición de las pantallas, los estados de los controles y la adaptación a diferentes tamaños de pantalla.

### Datos y privacidad
Las respuestas permanecen en el contexto de la sesión y se utilizan únicamente para calcular el resultado.

No hay cuentas de usuario, base de datos ni envío de respuestas a un servicio externo. Al abandonar o reiniciar el cuestionario, el resultado deja de formar parte de la sesión activa.

# Ejecutarlo

No es necesario instalar paquetes ni configurar un entorno de desarrollo.

La forma más sencilla es abrir `index.html` directamente en el navegador.

También puede utilizarse un servidor local:

```bash
python -m http.server 8000
```

Y acceder a:
[http://localhost:8000](http://localhost:8000)

# Tecnologías

El proyecto está construido con tecnologías web estándar:

* HTML5
* CSS3
* JavaScript
* Space Grotesk, mediante Google Fonts

No depende de frameworks ni de librerías de JavaScript.

## Nota

Este cuestionario tiene un propósito orientativo y de reflexión personal. __'No es una evaluación psicológica ni sustituye el asesoramiento profesional.'__
