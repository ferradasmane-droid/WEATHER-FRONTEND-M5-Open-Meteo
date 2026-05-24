# 🌦️ App de Clima Frontend - M5 Open Meteo

## 📌 Descripción
Este proyecto corresponde al desarrollo de una aplicación web del clima en su versión M5, enfocada en el consumo de API externa utilizando JavaScript.

La aplicación muestra información climática de distintas comunas de Chiloé, permitiendo visualizar el clima actual, el pronóstico semanal y estadísticas generadas dinámicamente desde datos obtenidos desde la API Open-Meteo.

En esta versión se trabajó principalmente:
- Consumo de API externa con fetch.
- Uso de async/await.
- Programación Orientada a Objetos (POO).
- Estadísticas automáticas semanales.
- Navegación dinámica entre páginas Home, Detalle y Acerca.
- Integración de animaciones y estilos dinámicos.

## 🎯 Objetivo

El objetivo de este proyecto es aplicar conocimientos de:

- HTML5 semántico
- Bootstrap 5
- CSS3 y SASS
- Metodología BEM
- JavaScript ES6+
- Manipulación del DOM
- Programación Orientada a Objetos
- Git y GitHub

## ⚙️ Funcionalidades

## ✅ Home
- Lista dinámica de ciudades.
- Cards generadas desde JavaScript.
- Información climática obtenida desde API.
- Estilos dinámicos según el clima.
- Navegación hacia vista detalle.

## ✅ Vista detalle
- Imagen dinámica según clima.
- Temperatura actual.
- Estado actual del clima.
- Pronóstico semanal completo.
- Resumen climático automático.

## ✅ Estadísticas semanales
La aplicación calcula automáticamente:

- Temperatura mínima.
- Temperatura máxima.
- Temperatura promedio.
- Cantidad de días por tipo de clima.
- Resumen textual dinámico

Ejemplos:
- "Se espera una semana mayormente soleada."
- "Se espera una semana lluviosa."
- "Se espera una semana con clima variable."

## Consumo de API
La aplicación obtiene datos desde:

[Open-Meteo](https://open-meteo.com)

Utilizando:
```js
fetch()
async / await
try / catch
```

# 🧠 Lógica implementada en JavaScript

## 📦 Modelado de datos
Se utilizaron:

- Clases
- Arreglos
- Objetos
- Métodos dinámicos

# 🔄 Funciones principales

## iniciar()

Inicializa la aplicación y carga ciudades dinámicamente.

## obtenerDatosClima()

Consume datos desde Open-Meteo.

## crearCard()

Genera dinámicamente las cards del Home.

## cargarDetalle()

Renderiza la vista detalle y estadísticas.

## calcularEstadisticas()

Calcula:
- mínima
- máxima
- promedio
- conteo de estados
- resumen semanal


# 🔁 Ciclos y condicionales utilizados

## Ciclos

- `for`
- `for...of`
- `for...in`

Utilizados para:
- recorrer pronósticos
- calcular estadísticas
- generar contenido dinámico

# 🎨 Metodología de estilos

Se utilizó metodología BEM (Block Element Modifier).

Ejemplos:

```css
.place-card
.place-card__title
.place-card--soleado
.weather-detail__card
```

# 🧩 Arquitectura SASS 7-1

```bash
sass/
│
├── 📁 abstracts/
│   ├── _variables.scss
│   └── _mixins.scss
│
├── 📁 base/
│   ├── _reset.scss
│   └── _base.scss
│
├── 📁 components/
│   ├── _cards.scss
│   ├── _navbar.scss
│   └── _button.scss
│
├── 📁 layout/
│   ├── _header.scss
│   ├── _footer.scss
│   └── _content.scss
│
├── 📁 pages/
│   ├── _home.scss
│   ├── _detalle.scss
│   └── _about.scss
│
├── 📁 themes/
│   └── _theme.scss
│
└── main.scss
```

Cada carpeta cumple una función específica:

- **abstracts**: variables y mixins
- **base**: estilos globales
- **components**: elementos reutilizables como cards, botones y navbar
- **layout**: estructura general
- **pages**: estilos por página

## 🏗️ Metodologías utilizadas

- **Variables**: (colores, tamaños, transiciones)
- **Anidaciones (nesting)**: permite organizar los estilos dentro de un mismo bloque, siguiendo la estructura del HTML, mejorando la legibilidad y mantenimiento del código.
- **Mixins**: reutilización de estilos (por ejemplo,efectos hover) 
- **Metodología BEM**: organización de clases mediante bloques, elementos y modificadores para un código más claro y escalable
- **Componentes reutilizables**: uso de elementos como cards, botones y navbar que permiten mantener un diseño consistente en toda la aplicación.


# 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- SASS 
- Bootstrap 5
- JavaScript ES6+
- Git 
- GitHub

# 📱 Características del proyecto

- Diseño responsive
- Pronóstico dinámico semanal
-Consume de API externa
- Estadísticas automáticas
- Navegación dinámica entre páginas
- Animaciones CSS
- Componentes reutilizables

# 🚀 Cómo usar

1️⃣ Clonar o descargar el repositorio.

2️⃣ Abrir el proyecto en Visual Studio Code.

3️⃣ Ejecutar Live Server.

4️⃣ Compilar Sass:

```bash
sass --watsch sass/main.scss assets/css/main.css
```

# 🔗 Enlaces

- 💻 Repositorio: [Ver en GitHub](https://github.com/ferradasmane-droid/WEATHER-FRONTEND-M5-Open-Meteo.git)

- 🌐 Sitio web: [Abrir Weather App](https://ferradasmane-droid.github.io/WEATHER-FRONTEND-M5-Open-Meteo/)


# 👩‍💻 Autor

Proyecto desarrollado por Nelly Ferrada para el Bootcamp Frontend.







