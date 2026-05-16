# 🌦️ App de Clima Frontend - M4

## 📌 Descripción
Este proyecto corresponde al desarrollo de una aplicación web del clima en su versión M4, enfocada en la lógica y estadísticas utilizando JavaScript.

La aplicación muestra información climática de distintas comunas de Chiloé, permitiendo visualizar el clima actual, el pronóstico semanal y estadísticas generadas dinámicamente desde JavaScript.

En esta versión se trabajó principalmente:
- Modelado de datos con arreglos y objetos.
- Manipulación del DOM.
- Uso de funciones, ciclos y condicionales.
- Generación dinámica de estadísticas semanales.
- Navegación dinámica entre páginas Home, Detalle y Acerca.

## 🎯 Objetivo

El objetivo de este proyecto es aplicar conocimientos de:

- HTML5 semántico
- Bootstrap 5
- CSS3 y SASS
- Metodología BEM
- JavaScript
- Manipulación del DOM
- Git y GitHub

## ⚙️ Funcionalidades

## ✅ Home
- Lista dinámica de lugares.
- Cards generadas desde JavaScript.
- Visualización del clima actual.
- Estilos dinámicos según el tipo de clima.
- Navegación hacia la vista de detalles.

## ✅ Vista detalle
- Imagen dinámica de cada ciudad.
- Temperatura actual.
- Estado actual del clima.
- Pronóstico semanal completo.

## ✅ Estadísticas semanales
La aplicación calcula automáticamente:

- Temperatura mínima.
- Temperatura máxima.
- Temperatura promedio.
- Cantidad de días por tipo de clima.
- Resumen textual dinámico

Ejemplos:
- "Se espera una semana mayormente soleada."
- "Se espera una semana fría con varias lluvias."
- "Se espera una semana con clima variable."

# 🧠 Lógica implementada en JavaScript

## 📦 Modelado de datos

Los datos fueron estructurados utilizando un arreglo de objetos:
```js
const lugares = [
  {
    id: 1,
    nombre: "Ancud"
    tempActual: "Nublado",
    
    pronosticoSemanal: [
      {dia: "Lunes", min: 8, max: 13, estado: "Parcial"},
      {dia: "Martes", min: 9, max: 14, estado: "Soleado"}
    ]
  }
];
```

# 🔄 Funciones principales

## buscarLugarPorId(id)
Busca y retorna un lugar según su ID.

## calcularEstadisticas(pronostico)
Calcula:
- mínima
- máxima
- promedio
- conteo de estados
- resumen textual

## mostrarHome()

Genera dinámicamente las cards del Home utilizando `innerHTML`.

## mostrarDetalle()

Genera la vista detalle y las estadísticas dinámicamente.

# 🔁 Ciclos y condicionales utilizados

## Ciclos

- `for...of`
- `for...in`

Utilizados para:
- calcular estadísticas
- evaluar tipos de clima
- generar resúmenes automáticos

# 🎨 Metodología de estilos

Se utilizó metodología BEM (Block Element Modifier).

Ejemplos:

```css
.place-card
.place-card__title
.place-card--soleado
.weather-detail__card
```

# 🧩 Estructura SASS

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
- JavaScript
- Git 
- GitHub

# 📱 Características del proyecto

- Diseño responsive
- Pronóstico dinámico semanal
- Estadísticas automáticas
- Navegación dinámica entre páginas
- Componentes reutilizables
- Arquitectura SASS 7-1.

# 🚀 Cómo usar

1️⃣ Clonar o descargar el repositorio

2️⃣ Abrir `index.html`.

3️⃣ Navegar entre las ciudades.

4️⃣ Visualizar estadísticas dinámicas.


# 🔗 Enlaces

- 💻 Repositorio: [Ver en GitHub](https://github.com/ferradasmane-droid/WEATHER-FRONTEND-M4)

- 🌐 Sitio web: [Abrir Weather](App https://ferradasmane-droid.github.io/WEATHER-FRONTEND-M4/)



# 👩‍💻 Autor

Proyecto desarrollado por Nelly Ferrada para el Bootcamp Frontend.







