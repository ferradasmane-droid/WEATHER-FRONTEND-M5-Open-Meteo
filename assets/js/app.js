const lugares = [
  {
    id: 1,
    nombre: "Ancud",
    tempActual: 14,
    estadoActual: "Nublado",
    imagen: "assets/img/Ancud.jpg",
    pronosticoSemanal: [
      { dia: "Lunes", min: 8, max: 13, estado: "Parcial" },
      { dia: "Martes", min: 9, max: 14, estado: "Soleado" },
      { dia: "Miércoles", min: 7, max: 13, estado: "Ventoso" },
      { dia: "Jueves", min: 10, max: 15, estado: "Lluvioso" },
      { dia: "Viernes", min: 8, max: 13, estado: "Parcial" },
      { dia: "Sábado", min: 9, max: 14, estado: "Nublado" },
      { dia: "Domingo", min: 11, max: 16, estado: "Soleado" },
    ],
  },
  {
    id: 2,
    nombre: "Castro",
    tempActual: 12,
    estadoActual: "Lluvia",
    imagen: "assets/img/Castro.jpg",
    pronosticoSemanal: [
      { dia: "Lunes", min: 10, max: 15, estado: "Soleado" },
      { dia: "Martes", min: 11, max: 10, estado: "Parcial" },
      { dia: "Miércoles", min: 9, max: 12, estado: "Nublado" },
      { dia: "Jueves", min: 8, max: 11, estado: "Ventoso" },
      { dia: "Viernes", min: 10, max: 16, estado: "Lluvioso" },
      { dia: "Sábado", min: 12, max: 19, estado: "Parcial" },
      { dia: "Domingo", min: 11, max: 18, estado: "Ventoso" },
    ],
  },
  {
    id: 3,
    nombre: "Quellón",
    tempActual: 11,
    estadoActual: "Nublado",
    imagen: "assets/img/quellón.jpg",
    pronosticoSemanal: [
      { dia: "Lunes", min: 8, max: 9, estado: "Lluvioso" },
      { dia: "Martes", min: 9, max: 11, estado: "Ventoso" },
      { dia: "Miércoles", min: 7, max: 11, estado: "Parcial" },
      { dia: "Jueves", min: 10, max: 15, estado: "Lluvioso" },
      { dia: "Viernes", min: 8, max: 18, estado: "Soleado" },
      { dia: "Sábado", min: 9, max: 12, estado: "Parcial" },
      { dia: "Domingo", min: 11, max: 10, estado: "Lluvioso" },
    ],
  },

  {
    id: 4,
    nombre: "Quemchi",
    tempActual: 10,
    estadoActual: "Ventoso",
    imagen: "assets/img/quemchi.jpg",
    pronosticoSemanal: [
      { dia: "Lunes", min: 8, max: 17, estado: "Soleado" },
      { dia: "Martes", min: 9, max: 15, estado: "Nublado" },
      { dia: "Miércoles", min: 7, max: 17, estado: "Soleado" },
      { dia: "Jueves", min: 8, max: 10, estado: "Lluvioso" },
      { dia: "Viernes", min: 8, max: 15, estado: "Parcial" },
      { dia: "Sábado", min: 9, max: 13, estado: "Lluvioso" },
      { dia: "Domingo", min: 11, max: 11, estado: "Lluvioso" },
    ],
  },
  {
    id: 5,
    nombre: "Chonchi",
    tempActual: 15,
    estadoActual: "Soleado",
    imagen: "assets/img/chonchi.jpg",
    pronosticoSemanal: [
      { dia: "Lunes", min: 8, max: 14, estado: "Ventoso" },
      { dia: "Martes", min: 9, max: 16, estado: "Nublado" },
      { dia: "Miércoles", min: 7, max: 18, estado: "Soleado" },
      { dia: "Jueves", min: 10, max: 16, estado: "Ventoso" },
      { dia: "Viernes", min: 8, max: 11, estado: "Nublado" },
      { dia: "Sábado", min: 9, max: 15, estado: "Lluvioso" },
      { dia: "Domingo", min: 11, max: 11, estado: "Ventoso" },
    ],
  },
  {
    id: 6,
    nombre: "Dalcahue",
    tempActual: 12,
    estadoActual: "Nublado",
    imagen: "assets/img/dalcahue.jpg",
    pronosticoSemanal: [
      { dia: "Lunes", min: 8, max: 9, estado: "Parcial" },
      { dia: "Martes", min: 9, max: 10, estado: "Nublado" },
      { dia: "Miércoles", min: 7, max: 11, estado: "Lluvioso" },
      { dia: "Jueves", min: 10, max: 13, estado: "Ventoso" },
      { dia: "Viernes", min: 8, max: 16, estado: "Parcial" },
      { dia: "Sábado", min: 9, max: 15, estado: "Soleado" },
      { dia: "Domingo", min: 11, max: 11, estado: "Nublado" },
    ],
  },
  {
    id: 7,
    nombre: "Curaco de Vélez",
    tempActual: 10,
    estadoActual: "Lluvia",
    imagen: "assets/img/curaco de velez.jpg",
    pronosticoSemanal: [
      { dia: "Lunes", min: 8, max: 10, estado: "Lluvioso" },
      { dia: "Martes", min: 9, max: 14, estado: "Parcial" },
      { dia: "Miércoles", min: 7, max: 12, estado: "Ventoso" },
      { dia: "Jueves", min: 10, max: 15, estado: "Soleado" },
      { dia: "Viernes", min: 8, max: 13, estado: "Nublado" },
      { dia: "Sábado", min: 9, max: 14, estado: "Nublado" },
      { dia: "Domingo", min: 11, max: 16, estado: "Ventoso" },
    ],
  },
  {
    id: 8,
    nombre: "Puqueldón",
    tempActual: 11,
    estadoActual: "Soleado",
    imagen: "assets/img/puqueldon.jpg",
    pronosticoSemanal: [
      { dia: "Lunes", min: 8, max: 11, estado: "Soleado" },
      { dia: "Martes", min: 9, max: 11, estado: "Parcial" },
      { dia: "Miércoles", min: 7, max: 12, estado: "Nublado" },
      { dia: "Jueves", min: 10, max: 16, estado: "Parcial" },
      { dia: "Viernes", min: 8, max: 14, estado: "Parcial" },
      { dia: "Sábado", min: 9, max: 11, estado: "Lluvioso" },
      { dia: "Domingo", min: 11, max: 13, estado: "Soleado" },
    ],
  },
  {
    id: 9,
    nombre: "Quinchao",
    tempActual: 16,
    estadoActual: "Ventoso",
    imagen: "assets/img/quinchao.jpg",
    pronosticoSemanal: [
      { dia: "Lunes", min: 8, max: 16, estado: "Ventoso" },
      { dia: "Martes", min: 9, max: 14, estado: "Nublado" },
      { dia: "Miércoles", min: 7, max: 13, estado: "Nublado" },
      { dia: "Jueves", min: 10, max: 15, estado: "Soleado" },
      { dia: "Viernes", min: 8, max: 11, estado: "Ventoso" },
      { dia: "Sábado", min: 9, max: 12, estado: "Parcial" },
      { dia: "Domingo", min: 11, max: 14, estado: "Parcial" },
    ],
  },
  {
    id: 10,
    nombre: "Queilen",
    tempActual: 17,
    estadoActual: "Soleado",
    imagen: "assets/img/queilen.jpg",
    pronosticoSemanal: [
      { dia: "Lunes", min: 8, max: 17, estado: "Soleado" },
      { dia: "Martes", min: 9, max: 16, estado: "Parcial" },
      { dia: "Miércoles", min: 7, max: 13, estado: "Parcial" },
      { dia: "Jueves", min: 10, max: 16, estado: "Soleado" },
      { dia: "Viernes", min: 8, max: 15, estado: "Nublado" },
      { dia: "Sábado", min: 9, max: 14, estado: "Ventoso" },
      { dia: "Domingo", min: 11, max: 15, estado: "Nublado" },
    ],
  },
];

function buscarLugarPorId(id) {
  return lugares.find((lugar) => lugar.id === id);
}

function calcularEstadisticas(pronostico) {
  let sumaMin = 0;
  let sumaMax = 0;
  let minima = pronostico[0].min;
  let maxima = pronostico[0].max;
  let conteoEstados = {};

  for (let dia of pronostico) {
    sumaMin += dia.min;
    sumaMax += dia.max;

    if (dia.min < minima) {
      minima = dia.min;
    }

    if (dia.max > maxima) {
      maxima = dia.max;
    }

    if (conteoEstados[dia.estado]) {
      conteoEstados[dia.estado]++;
    } else {
      conteoEstados[dia.estado] = 1;
    }
  }

  let promedio = ((sumaMin + sumaMax) / (pronostico.length * 2)).toFixed(1);

  let estadoMayor = "";
  let cantidadMayor = 0;

  for (let estado in conteoEstados) {
    if (conteoEstados[estado] > cantidadMayor) {
      estadoMayor = estado;
      cantidadMayor = conteoEstados[estado];
    }
  }

  let resumen = "";

  if (estadoMayor === "Soleado") {
    resumen = "🌅<strong>Se espera una semana mayormente soleada.</strong>🌞";
  } else if (estadoMayor === "Lluvioso") {
    resumen =
      "🌧️<strong>Se espera una semana fría con varias lluvias.</strong> ☔";
  } else if (estadoMayor === "Nublado") {
    resumen = "☁️<strong>Se espera una semana mayormente nublada.</strong>🌥️";
  } else {
    resumen = "⛅<strong>Se espera una semana con clima variable.</strong>🌧️🌞";
  }

  return {
    minima,
    maxima,
    promedio,
    conteoEstados,
    resumen,
  };
}

const clases = {
  Nublado: "place-card--nublado",
  Lluvia: "place-card--lluvia",
  Soleado: "place-card--soleado",
  Ventoso: "place-card--ventoso",
  Parcial: "place-card--parcial",
  Lluvioso: "place-card--lluvia",
};

const imagenesClima = {
  Soleado: "assets/img/sol.png",
  Nublado: "assets/img/nube.jpg",
  lluvia: "assets/img/lluvia.png",
  Lluvioso: "assets/img/lluvia.png",
  Parcial: "assets/img/parcial.jpg",
  Ventoso: "assets/img/viento.jpg",
};

function mostrarHome() {
  const contenedor = document.getElementById("lista-lugares");

  if (!contenedor) return;

  for (let lugar of lugares) {
    let clasesClima = clases[lugar.estadoActual] || "";

    contenedor.innerHTML += `
      <article class="col-12 col-sm-6 col-lg-4 mb-4">
        <div class="place-card ${clasesClima} card h-100 text-center shadow-sm">
          <div class="place-card__body card-body">
              <h3 class="place-card__title"> ${lugar.nombre}</h3>
              <p class="place-card__temperature"> ${lugar.tempActual}°C</p>
              <p class="place-card__status"> ${lugar.estadoActual}</p>
              <a href="detalle.html?id=${lugar.id}" class="btn btn-primary">
                Ver detalle
              </a>
          </div>
        </div>
      </article>
    `;
  }
}

mostrarHome();

function mostrarDetalle() {
  const contenedor = document.getElementById("detalle-lugar");

  if (!contenedor) return;

  const parametros = new URLSearchParams(window.location.search);
  let id = parseInt(parametros.get("id"));

  if (isNaN(id)) {
    id = 1;
  }
  const lugar = buscarLugarPorId(id);

  if (!lugar) {
    contenedor.innerHTML = `
      <div class="alert alert-warning text-center>
        No se encontró el lugar selecionado.
      </div>
    `;

    return;
  }

  const estadisticas = calcularEstadisticas(lugar.pronosticoSemanal);
  let claseDetalle = clases[lugar.estadoActual] || "";

  let pronosticoHTML = "";

  for (let dia of lugar.pronosticoSemanal) {
    let clasesClimaDia = clases[dia.estado] || "";
    let imagenClimaDia = imagenesClima[dia.estado] || "";

    pronosticoHTML += `
     <article class= "col-12 col-sm-6 col-lg-4 mb-4">
        <div class="place-card ${clasesClimaDia} card h-100 text-center shadow-sm">
          <div class="place-card__body card-body">

          <img
            src="${imagenClimaDia}"
            alt="${dia.estado}"
            class="weather-detail__forecast-img mb-3"
           
          />
          
            <h4 class="place-card__title">${dia.dia}</h4>
            <p class="place-card__temperature"> Mínima: ${dia.min}°C</p>
            <p class="place-card__temperature"> Máxima: ${dia.max}°C</p>
            <p class="place-card__status">Estado: ${dia.estado} </p>
          </div>
        </div>
      </article>
    `;
  }

  let conteoHTML = "";

  for (let estado in estadisticas.conteoEstados) {
    conteoHTML += `
      <li class="list-group-item d-flex justify-content-between">
       <span>${estado}:</span>
       <strong>${estadisticas.conteoEstados[estado]} días</strong>
      </li>
    `;
  }

  contenedor.innerHTML = `
    <section class="weather-detail">
    <div class="weather-detail__card place-card ${claseDetalle} card mb-5 p-4 text-center shadow-sm">
 <h2 class="weather-detail__title text-center mb-4">${lugar.nombre}</h2>
<img src="${lugar.imagen}" alt="${lugar.nombre}" class="img-fluid rounded shadow mb-4 weather-detail__image d-block mx-auto">
        <div class="card-body">
         <h3 class= mb-3>Clima actual</h3>
         <p class="fs-5"><strong>Temperatura:</strong> ${lugar.tempActual}°C</p>
         <p class="fs-5"><strong>Estado:</strong> ${lugar.estadoActual}</p>
        </div>
      </div>

      <h3 class="text-center mb-4">Pronóstico semanal</h3>   
      <div class="row g-4 mb-5">
       ${pronosticoHTML}
      </div>

      <h3 class="text-center mb-4">Estadísticas de la semana</h3>
      
      <div class="card shadow-sm p-4 mb-4">
        <div class="card-body">
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
            <div class="card weather-summary-card p-4 shadow-sm mb-4">
              <h4>Días por tipo de clima:</h4>
              <ul class="list-group list-group-flush">
                  ${conteoHTML}
              </ul>
            </div>
              
              <p class="mt-3 fs-5">Resumen: ${estadisticas.resumen}</p>

              <a href="index.html" class="btn btn-primary">
                Volver al inicio
              </a>
      
          </div>
      </div>
     
    </section>  
  `;
}

mostrarDetalle();

function mostrarAcerca() {
  const contenedor = document.getElementById("acerca-app");

  if (!contenedor) return;

  contenedor.innerHTML = `
   <section class= "about-app card shadow-sm p-4">
  
     <h2 class="about-app__title text-center mb-4>
        Acerca de la aplicación
     </h2>
  
        <p class="about-app__description text-center fs-5">
         Weather App es una aplicación desarrollada para mostrar el clima actual,
         el pronóstico semanal y estadísticas de distintas ciudades de Chiloé.
        </p>

        <hr class="my-4">

        <div class="row g-4 align-items-start mt-4">
         <div class="col-12 col-md-6">
          <div class="card p-4 shadow-sm h-100">
         <h3 class="mb-4 text-center">Características</h3>

          <ul class="about-list">
           <li>Pronóstico semanal dinámico</li>
           <li>Estadísticas calculadas con JavaScript</li>
           <li>Diseño responsivo con Bootstrap</li>
           <li>Estilos personalizados con SASS</li>
          </ul>
        </div>
      </div>

        <div class="col-12 col-md-6">
          <div class="d-flex flex-wrap justify-content-center gap-3">
           <h3 class="mt-4">Tecnologías utilizadas</h3>

           <div class="d-flex flex-wrap justify-content-center gap-3">
            <span class="badge bg-primary p-3 fs-6">HTML</span>
            <span class="badge bg-warning text-dark p-3 fs-6">JavaScript</span>
            <span class="badge bg-success p-3 fs-6">Bootstrap</span>
            <span class="badge bg-danger p-3 fs-6>SASS</span>
          </div>
         </div>
       </div>  
      </div>
  </section>
 `;
}

mostrarAcerca();
