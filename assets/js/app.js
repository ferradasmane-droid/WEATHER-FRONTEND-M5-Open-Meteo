const lugaresBase = [
  {
    id: 1,
    nombre: "Ancud",
    latitud: -41.8697,
    longitud: -73.8203,
    imagen: "/assets/img/chonchi.jpg"
  },
  {
    id: 2,
    nombre: "Castro",
    latitud: -42.4721,
    longitud: -73.7732,
    imagen: "assets/img/castro.jpg",
  },
  {
    id: 3,
    nombre: "Quellón",
    latitud: -43.1182,
    longitud: -73.6166,
    imagen: "assets/img/quellón.jpg",
  },
  {
    id: 4,
    nombre: "Quemchi",
    latitud: -42.15,
    longitud: -73.4833,
    imagen: "assets/img/quemchi.jpg",
  },
  {
    id: 5,
    nombre: "Chonchi",
    latitud: -42.6239,
    longitud: -73.775,
    imagen: "assets/img/chonchi.jpg",
  },
  {
    id: 6,
    nombre: "Dalcahue",
    latitud: -42.3785,
    longitud: -73.6501,
    imagen: "assets/img/dalcahue.jpg",
  },
  {
    id: 7,
    nombre: "Curaco de Vélez",
    latitud: -42.4389,
    longitud: -73.6012,
    imagen: "assets/img/curaco de velez.jpg",
  },
  {
    id: 8,
    nombre: "Puqueldón",
    latitud: -42.6,
    longitud: -73.6746,
    imagen: "assets/img/puqueldon.jpg",
  },
  {
    id: 9,
    nombre: "Quinchao",
    latitud: -42.5358,
    longitud: -73.427,
    imagen: "assets/img/quinchao.jpg",
  },
  {
    id: 10,
    nombre: "Queilén",
    latitud: -42.889,
    longitud: -73.4742,
    imagen: "assets/img/queilen.jpg",
  },
];

class ApiClima {
  async obtenerClimaActual(latitud, longitud) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code`;

    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      throw new Error("No se pudo obtener el clima");
    }
    return await respuesta.json();
  }
}

class WeatherApp {
  constructor(apiClima) {
    this.apiClima = apiClima;
    this.lugares = [];
    this.contenedor = document.getElementById("contenedorLugares");
    this.mensajeCarga = document.getElementById("mensajeCarga");
    this.mensajeError = document.getElementById("mensajeError");
  }
  async iniciar() {
    try {
      this.mostrarCarga();

      for (const lugar of lugaresBase) {
        const datosApi = await this.apiClima.obtenerClimaActual(
          lugar.latitud,
          lugar.longitud,
        );

        const lugarConClima = {
          ...lugar,
          tempActual: datosApi.current.temperature_2m,
          codigoClima: datosApi.current.weather_code,
          maxima: datosApi.daily.temperature_2m_max[0],
          minima: datosApi.daily.temperature_2m_min[0],
        };

        this.lugares.push(lugarConClima);
      }

      this.mostrarClima();
      this.ocultarCarga();
    } catch (error) {
      this.mostrarError();
      console.error("Error al cargar datos:", error);
    }
  }
  mostrarClima() {
    this.contenedor.innerHTML = "";

    for (const lugar of this.lugares) {
      this.contenedor.innerHTML += this.crearCard(lugar);
    }
  }

  mostrarAcerca() {
    const contenedorAcerca = document.getElementById("acerca-app");

    if (!contenedorAcerca) return;

    contenedorAcerca.innerHTML = `
    <section class="about-app card shadow-sm p-4">
     <h2 class="text-center mb-4">🌦️ App del Clima M5</h2>

     <p class="text-center fs-5 mb-4">
     Aplicación web desarrollada para consultar el clima actual y el pronóstico semanal 
     de distintas ciudades de Chiloé, <br> utilizando JavaScript moderno, POO y una API externa.
     </p>

     <div class="row g-4 mb-4">
      <div class="col-12 col-md-4">
       <div class="card h-100 text-center p-3 shadow-sm">
        <h4>⚙️ Tecnologías</h4>
        <p>HTML, Sass, Bootstrap y JavaScript ES6+</p>
       </div>
      </div>

      <div class="col-12 col-md-4">
       <div class="card h-100 text-center p-3 shadow-sm">
        <h4> API externa</h4>
        <p>Los datos climáticos se obtienen <br> desde Open-Meteo</p>
       </div>
      </div>

      <div class="col-12 col-md-4">
       <div class="card h-100 text-center p-3 shadow-sm">
        <h4>📊 Estadísticas</h4>
        <p>Calcula mínima, máxima, promedio <br> y resumen semanal.</p>
       </div>
      </div>
     </div>

     <div class="card p-4 shadow-sm mb-4">
       <h4 class="mb-3">Características principales</h4>
        <ul class="list-group list-group-flush">
         <li class="list-group-item">✔️ Consumo de API con fetch y async/await</li>
         <li class="list-group-item">✔️ Programación Orientada a Objetos con clases</li>
         <li class="list-group-item">✔️ Renderizado dinámico del Home y Detalle</li>
         <li class="list-group-item">✔️ Pronóstico semanal y estadísticas automáticas</li>
         <li class="list-group-item">✔️ Diseño responsive con Bootstrap y Sass</li>
        </ul>
     </div> 

     <div class="text-center">
       <a href="index.html" class="btn btn-primary px-4 py-2">
         Volver al inicio
       </a>
     </div>
    </section>
    `;
  }

  crearCard(lugar) {
    return `
    <article class="col-12 col-sm-6 col-lg-4 mb-4">
      <div class="place-card card h-100 text-center shadow-sm ${this.obtenerClaseClima(lugar.codigoClima)}">
        <div class="card-body">
         <h3 class="place-card__title">${lugar.nombre}</h3>
         <p class="place-card__temperature fs-3 fw-bold">${lugar.tempActual} °C</p>
         <p><strong>Mínima:</strong> ${lugar.minima}°C</p>
         <p><strong>Máxima:</strong> ${lugar.maxima}°C</p>
         <P><strong>Estado:</strong> ${this.obtenerDescripcionClima(lugar.codigoClima)}</P> 
         
         <a href="detalle.html?id=${lugar.id}" class="btn btn-primary">
          Ver detalle
         </a>
         </div>
      </div>
    </article>
    `;
  }

  async cargarDetalle(lugarBase) {
    try {
      const datosApi = await this.apiClima.obtenerClimaActual(
        lugarBase.latitud,
        lugarBase.longitud,
      );
      const detalle = {
        ...lugarBase,
        tempActual: datosApi.current.temperature_2m,
        codigoClima: datosApi.current.weather_code,
        maxima: datosApi.daily.temperature_2m_max[0],
        minima: datosApi.daily.temperature_2m_min[0],
      };

      const contenedorDetalle = document.getElementById("detalle-lugar");

      let pronosticoHTML = "";

      for (let i = 0; i < datosApi.daily.time.length; i++) {
        const fechaOriginal = datosApi.daily.time[i];
        const fechaFormateada = new Date(fechaOriginal).toLocaleDateString(
          "es-CL",
          { weekday: "long", day: "numeric", month: "long" },
        );
        const minima = datosApi.daily.temperature_2m_min[i];
        const maxima = datosApi.daily.temperature_2m_max[i];
        const lluvia = datosApi.daily.precipitation_probability_max[i];
        const codigoClima = datosApi.daily.weather_code[i];

        pronosticoHTML += `
      <article class="col-12 col-md-6 col-lg-4">
       <div class="place-card card h-100 text-center shadow-sm p-3 ${this.obtenerClaseClima(codigoClima)}">
        <div class="card-body">
        <h4>${fechaFormateada}</h4>
        <img src="${this.obtenerImagenClima(codigoClima)}"
        alt="clima"
        class="img-clima img-fluid mb-3"
        width="100"
        />
        
        <p><strong>Mínima:</strong> ${minima}°C</p>
        <p><strong>Máxima</strong> ${maxima}°C</p>
        <p><strong>Estado:</strong> ${this.obtenerDescripcionClima(codigoClima)}</p>

        </div>
       </div>
       </article>
    `;
     }

      const estadisticas = this.calcularEstadisticas(datosApi);

      let conteoHTML = "";

      for (let estado in estadisticas.conteoEstados) {
        conteoHTML += `
  
  <li class="list-group-item d-flex justify-content-between">
  <span>${estado}</span>
  <strong>${estadisticas.conteoEstados[estado]} días</strong>
  </li>
  `;
}

  contenedorDetalle.innerHTML = `
  <div class="card p-4 shadow-sm text-center weather-detail__card ${this.obtenerClaseClima(detalle.codigoClima)}">
  <h2>${detalle.nombre}</h2>
  
  <img src="${detalle.imagen}" alt="${detalle.nombre}" class="img-fluid rounded shadow mb-4 weather-detail__image d-block mx-auto"/>
  
  <h3>${detalle.tempActual}°C</h3>

  
  <p><strong>Mínima:</strong> ${detalle.minima}°C</p>
  <p><strong>Máxima:</strong> ${detalle.maxima}°C</p>
  <p><strong>Estado:</strong> ${this.obtenerDescripcionClima(detalle.codigoClima)}</p>

 
  </div>

  <h3 class="text-center mt-5 mb-4">Pronóstico semanal</h3>

  <div class="row g-4">
   ${pronosticoHTML}
  </div>

      <section class="container mt-5">
        <h3 class="text-center mb-4">Estadísticas de la semana</h3>

        <div class="card shadow-sm p-4 mb-4">
          <div class="row g-4 text-center mb-5">
            <div class="col-12 col-md-4">
              <div class="card weather-stat-card p-3 shadow-sm h-100">
                <h4>🌡️ Mínima</h4>
                <p class="fs-3 fw-bold">${estadisticas.minima}°C</p>
              </div>
            </div>

            <div class="col-12 col-md-4">
              <div class="card weather-stat-card p-3 shadow-sm h-100">
                <h4>🔥 Máxima</h4>
                <p class="fs-3 fw-bold">${estadisticas.maxima}°C</p>
              </div>
            </div>

            <div class="col-12 col-md-4">
              <div class="card weather-stat-card p-3 shadow-sm h-100">
                <h4>📊 Promedio</h4>
                <p class="fs-3 fw-bold">${estadisticas.promedio}°C</p>
              </div>
            </div>
          </div>

          <div class="card weather-sumary-card p-4 shadow-sm mb-4">
            <h4>Días por tipo de clima:</h4>

            <ul class="list-group list-group-flush">${conteoHTML}</ul>
          </div>

          <p class="mt-3 fs-5">
            Resumen:${estadisticas.resumen}
          </p>

          <div class="text-center ">
          <a href="index.html" class="btn btn-primary px-5">
           Volver
         </a>
         </div>
        </div>
      </section>
   `;
    } catch (error) {
      console.error("Error al cargar detalle:", error);
    }
  }

  calcularEstadisticas(datosApi) {
    const minimas = datosApi.daily.temperature_2m_min;
    const maximas = datosApi.daily.temperature_2m_max;
    const codigos = datosApi.daily.weather_code;

    let suma = 0;
    let conteoEstados = {};
    let diasSoleados = 0;
    let diasLluviosos = 0;

    const minimaSemana = Math.min(...minimas);
    const maximaSemana = Math.max(...maximas);

    for (let i = 0; i < minimas.length; i++) {
      suma += minimas[i] + maximas[i];

      const estado = this.obtenerDescripcionClima(codigos[i]);

      if (conteoEstados[estado]) {
        conteoEstados[estado]++;
      } else {
        conteoEstados[estado] = 1;
      }

      if (codigos[i] === 0 || codigos[i] === 1) {
        diasSoleados++;
      }

      if (
        codigos[i] === 51 ||
        codigos[i] === 53 ||
        codigos[i] === 55 ||
        codigos[i] === 61 ||
        codigos[i] === 63 ||
        codigos[i] === 65 ||
        codigos[i] === 80 ||
        codigos[i] === 81 ||
        codigos[i] === 82
      ) {
        diasLluviosos++;
      }
    }

    const promedio = (suma / (minimas.length * 2)).toFixed(1);

    let resumen = "<strong>🌦️Se espera una semana con clima variable.</strong>";

    if (diasLluviosos >= 3) {
      resumen = "<strong>🌧️ Se espera una semana lluviosa.</strong>";
    } else if (diasSoleados >= 3) {
      resumen = "<stong>☀️ Se espera una semana mayormente soleada.</stong>";
    }

    return {
      minima: minimaSemana,
      maxima: maximaSemana,
      promedio,
      conteoEstados,
      diasSoleados,
      diasLluviosos,
      resumen,
    };
  }

  obtenerDescripcionClima(codigo) {
    const estados = {
      0: "Soleado",
      1: "Mayormente despejado",
      2: "Parcialmente nublado",
      3: "Nublado",
      45: "Niebla",
      48: "Niebla con escarcha",
      51: "Llovizna ligera",
      53: "Llovizna moderada",
      55: "Llovizna intensa",
      61: "Lluvia ligera",
      63: "Lluvia moderada",
      65: "Lluvia intensa",
      80: "Chubascos ligeros",
      81: "Chubascos moderados",
      82: "Chubascos fuertes",
    };
    return estados[codigo] || "Clima variable";
  }

  obtenerImagenClima(codigo) {
    if (codigo === 0) {
      return "assets/img/sol.jpg";
    }
    if (codigo === 1 || codigo === 2) {
      return "assets/img/parcial.jpg";
    }
    if (codigo === 3) {
      return "assets/img/nube.png";
    }
    if (
      codigo === 51 ||
      codigo === 53 ||
      codigo === 55 ||
      codigo === 61 ||
      codigo === 63 ||
      codigo === 65 ||
      codigo === 80 ||
      codigo === 81 ||
      codigo === 82
    ) {
      return "assets/img/lluvia.png";
    }
    return "assets/img/parcial.png";
  }

  obtenerClaseClima(codigo) {
    if (codigo === 0) {
      return "clima-soleado";
    }

    if (codigo === 1 || codigo === 2) {
      return "clima-parcial";
    }

    if (codigo === 3) {
      return "clima-nublado";
    }

    if (
      codigo === 51 ||
      codigo === 53 ||
      codigo === 55 ||
      codigo === 61 ||
      codigo === 63 ||
      codigo === 65 ||
      codigo === 80 ||
      codigo === 81 ||
      codigo === 82
    ) {
      return "clima-lluvia";
    }
    return "clima-variable";
  }

  mostrarCarga() {
    if (this.mensajeCarga) {
      this.mensajeCarga.classList.remove("d-none");
    }
    if (this.mensajeError) {
      this.mensajeError.classList.add("d-none");
    }
  }
  ocultarCarga() {
    if (this.mensajeCarga) {
      this.mensajeCarga.classList.add("d-none");
    }
  }
  mostrarError() {
    if (this.mensajeCarga) {
      this.mensajeCarga.classList.add("d-none");
    }
    if (this.mensajeError) {
      this.mensajeError.classList.remove("d-none");
    }
  }
}
const apiClima = new ApiClima();
const appClima = new WeatherApp(apiClima);

const contenedorHome = document.getElementById("contenedorLugares");
const contenedorDetalle = document.getElementById("detalle-lugar");
const contenedorAcerca = document.getElementById("acerca-app");

if (contenedorHome) {
  appClima.iniciar();
}

if (contenedorAcerca) {
  appClima.mostrarAcerca();
}

if (contenedorDetalle) {
  const params = new URLSearchParams(window.location.search);
  const idUrl = Number(params.get("id"));

  const lugarBase = lugaresBase.find((lugar) => lugar.id === idUrl);

  if (lugarBase) {
    appClima.cargarDetalle(lugarBase);
  } else {
    contenedorDetalle.innerHTML = `
    <div class="alert alert-warning text-center">
     No se encontró la ciudad seleccionada.
    </div>
    `;
  }
}
