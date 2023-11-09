const daysTag = document.querySelector(".days"),  // Selecciona el elemento HTML con la clase "days".
currentDate = document.querySelector(".current-date"),  // Selecciona el elemento HTML con la clase "current-date".
prevNextIcon = document.querySelectorAll(".icons span");  // Selecciona todos los elementos HTML con la etiqueta "span" dentro de elementos con la clase "icons".

// Obteniendo la nueva fecha, el año actual y el mes actual.
let date = new Date(),  // Crea una nueva instancia de la fecha actual.
currYear = date.getFullYear(),  // Obtiene el año actual.
currMonth = date.getMonth();  // Obtiene el mes actual.

// Almacena el nombre completo de todos los meses en un array.
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),  // Obtiene el primer día del mes.
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),  // Obtiene el último día del mes.
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),  // Obtiene el último día del mes.
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();  // Obtiene el último día del mes anterior.
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {  // Creando elementos "li" para los últimos días del mes anterior.
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {  // Creando elementos "li" para todos los días del mes actual.
        // Agregando la clase "active" a los elementos "li" si el día actual, el mes y el año coinciden.
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {  // Creando elementos "li" para los primeros días del mes siguiente.
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;  // Estableciendo el texto de "currentDate" con el mes y año actuales.
    daysTag.innerHTML = liTag;  // Insertando los elementos "li" en "daysTag".
}
renderCalendar();

prevNextIcon.forEach(icon => {  // Obteniendo los iconos de anterior y siguiente.
    icon.addEventListener("click", () => {  // Agregando un evento de clic a ambos iconos.
        // Si el icono clickeado es el icono "anterior", disminuye el mes actual en 1; de lo contrario, aumenta en 1.
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) {  // Si el mes actual es menor que 0 o mayor que 11.
            // Crear una nueva fecha con el año y el mes actual y establecerla como el valor de "date".
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();  // Actualizar el año actual con el año de la nueva fecha.
            currMonth = date.getMonth();  // Actualizar el mes actual con el mes de la nueva fecha.
        } else {
            date = new Date();  // Usar la fecha actual como valor de "date".
        }
        renderCalendar();  // Llamar a la función "renderCalendar".
    });
});
