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
export function selectOptionEspecialista(optionEspecialista) {
    console.log(optionEspecialista);
    document.getElementById("dropbtnEspecialista").textContent = optionEspecialista;
    
}



// Event listeners para cada opción en el menú desplegable
document.querySelector(".dropdown-content a:nth-child(1)").addEventListener("click", function () {
    selectOptionEspecialista("Barbero disponible");
});

document.querySelector(".dropdown-content a:nth-child(2)").addEventListener("click", function () {
    selectOptionEspecialista("Walas");
});

document.querySelector(".dropdown-content a:nth-child(3)").addEventListener("click", function () {
    selectOptionEspecialista("Valeria");
});
document.querySelector(".dropdown-content a:nth-child(4)").addEventListener("click", function () {
    selectOptionEspecialista("Kevin");
});

document.querySelector(".dropdown-content a:nth-child(5)").addEventListener("click", function () {
    selectOptionEspecialista("Miguel");
});

document.querySelector(".dropdown-content a:nth-child(6)").addEventListener("click", function () {
    selectOptionEspecialista("Cristian");
});

/* Dropdown Hora */


const dropdownContentHora = document.querySelector(".dropdownContentHora");
const dropBtnHora = document.querySelector(".dropBtnHora");

dropBtnHora.addEventListener("click", () => {

    if (dropdownContentHora.style.display === "none") {
        dropdownContentHora.style.display = "block";
    } else {
        dropdownContentHora.style.display = "none";
    }
});

// Función para manejar la selección de opciones
function selectOption(optionHora) {
    document.getElementById("dropBtnHora").textContent = optionHora;
}

// Event listeners para cada opción en el menú desplegable
document.querySelector(".dropdownContentHora a:nth-child(1)").addEventListener("click", function () {
    selectOption("9:00");
});

document.querySelector(".dropdownContentHora a:nth-child(2)").addEventListener("click", function () {
    selectOption("9:30");
});

document.querySelector(".dropdownContentHora a:nth-child(3)").addEventListener("click", function () {
    selectOption("10:00");
});
document.querySelector(".dropdownContentHora a:nth-child(4)").addEventListener("click", function () {
    selectOption("10:30");
});

document.querySelector(".dropdown-content a:nth-child(5)").addEventListener("click", function () {
    selectOption("11:00");
});

document.querySelector(".dropdown-content a:nth-child(6)").addEventListener("click", function () {
    selectOption("11:30");
});
