//Eventos
window.addEventListener('load', function () {
    const navBar = document.getElementById('navBar');
    navBar.style.backgroundColor = '#121212';
});

// dropdown

const dropdownContent = document.querySelector(".dropdown-content");
const btnDropDown = document.querySelector(".dropbtn");

btnDropDown.addEventListener("click", () => {

    if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
});

// Función para manejar la selección de opciones
function selectOption(option) {
    document.getElementById("selected-option").textContent = "Opción seleccionada: " + option;
}

// Event listeners para cada opción en el menú desplegable
document.querySelector(".dropdown-content a:nth-child(1)").addEventListener("click", function () {
    selectOption("Barbero disponible");
});

document.querySelector(".dropdown-content a:nth-child(2)").addEventListener("click", function () {
    selectOption("Walas");
});

document.querySelector(".dropdown-content a:nth-child(3)").addEventListener("click", function () {
    selectOption("Valeria");
});
document.querySelector(".dropdown-content a:nth-child(4)").addEventListener("click", function () {
    selectOption("Kevin");
});

document.querySelector(".dropdown-content a:nth-child(5)").addEventListener("click", function () {
    selectOption("Miguel");
});

document.querySelector(".dropdown-content a:nth-child(6)").addEventListener("click", function () {
    selectOption("Cristian");
});

/* Dropdown Hora */

const dropdownHora = document.querySelectorAll('dropdownHora');

dropdownHora.forEach(dropdownHora => {
    const select = dropdownHora.querySelector('.select');
    const caret = dropdownHora.querySelector('.caret');
    const menu = dropdownHora.querySelector('.menu');
    const options = dropdownHora.querySelector('.menu li');


    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret.rotate');
        menu.classList.toggle('menu.open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('carpet-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});