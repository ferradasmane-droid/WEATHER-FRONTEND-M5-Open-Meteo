# 🌦️ App de Clima Frontend - M3

## 📌 Descripción
Este proyecto corresponde al desarrollo de una aplicación web del clima en su versión inicial (MVP), reestructurada en el Módulo 3.

La aplicación permite visualizar información básica del clima actual y acceder a un detalle con datos más completos de distintas ciudades.
En esta versión se mejora la interfaz, organización del código y estilos, aplicando buenas prácticas de desarrollo frontend.

## 🎯 Objetivo

El objetivo de este proyecto es aplicar conocimientos de:

- HTML5 semántico
- Bootstrap para diseño responsive.
- CSS con preprocesador SASS
- Metodología BEM para organización de estilos.
- Git y GitHub para control de versiones.

## ⚙️ Funcionalidades

- ✅ Lista de ciudades con clima actual
- ✅ Vista de detalle por ciudad
- ✅ Información de:
  - Temperatura
  - Humedad
  - Viento
- ✅ Navegación entre páginas (Home, Detalle, Acerca de)
- ✅ Diseño responsive

##  🧠 Metodología de estilos

Se utilizó la metodología **BEM (Block Element Modifier)** para organizar las clases CSS, por ejemplo:

- `.weather-app__header`
- `.weather-app__main`
- `.place-card`
- `.place-card__temp`

Esto permite un código más ordenado, escalable y mantenible.

## 🎨 Estructura SASS

Se implementó una arquitectura basada en el patrón **7-1**, separando los estilos en parciales:


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
- **components**: elementos reutilizables
- **layout**: estructura general
- **pages**: estilos por página

### Características utilizadas

- **Variables**: (colores, tamaños, transiciones)
- **Anidaciones (nesting)**: permite organizar los estilos dentro de un mismo bloque, siguiendo la estructura del HTML, mejorando la legibilidad y mantenimiento del código.
- **Mixins**: (por ejemplo, efectos hover)



## Tecnologías utilizadas
- HTML5
- CSS3
- SASS (SCSS)
- Bootstrap 5
- Git / GitHub


## 🚀 Cómo usar

1️⃣ Abrir el proyecto en el navegador (index.html)

2️⃣ Navegar por las ciudades disponibles

3️⃣ Acceder al detalle de cada ciudad

4️⃣ Usar el menú para moverse entre páginas

## Responsividad

- 📱 Móvil: card en una sola columna
- 💻 Escritorio: múltiples columnas con Bootstrap grid


## ℹ️ Nota 

Este proyecto fue desarrollado sin uso de JavaScript adicional, enfocándose en la estructura, estilos y navegación.

## 👩‍💻 Autora
Nelly Ferrada


## 🔗 Enlaces


- 🌐 Sitio web:  https://ferradasmane-droid.github.io/WEATHER_FRONTEND_M3/

- 💻 Repositorio: https://github.com/ferradasmane-droid/WEATHER_FRONTEND_M3
