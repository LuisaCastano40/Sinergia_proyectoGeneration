import { serviciosSelecto } from "./dbServicios.js";

//Traemos los elementos necesarios del HTML
const servicesContainer = document.getElementById('containerServicios');
let servicios = serviciosSelecto;
let serviciosSelected = [];

//Esperamos que cargen correctamente los elementos
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        renderServicios();
    });
} else {
    renderServicios();
}


//Funciones
function renderServicios(){
    servicesContainer.innerHTML = '';
    servicios.forEach((servicio) => {
        servicesContainer.innerHTML += `
        <div class="swiper-slide swiper-slide-Servicios" id="${servicio.id}">
        <img src="${servicio.imagen}" alt="reserva">
        <div class="swiperInformation swiperInformation-Servicios">
            <p class="swiperTitle swiperTitle-Servicios">${servicio.nombre}</p>
            <h2 class="swiperText swiperText-Servicios">$${servicio.precio}</h2>
            <h2 class="swiperText swiperText-Servicios">Tiempo: ${servicio.tiempo}</h2>
            <p class="swiperIcon swiperIcon-Servicios"><i class='bx bx-plus-circle'></i></p>
        </div>
        `
    });
}