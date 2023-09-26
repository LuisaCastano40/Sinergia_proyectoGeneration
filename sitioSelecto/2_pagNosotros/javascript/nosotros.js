// Obtener el elemento del navbar
const navbar = document.querySelector('.menu-navegacion');
// Definir la distancia a partir de la cual se cambia el color
const scrollDistance = 50;

// escuchamos el evento de scroll
window.addEventListener('scroll', changeNavbarColor);


//Cambiar el color del navbar al hacer scroll
function changeNavbarColor() {
    if (window.scrollY >= scrollDistance) {
        navbar.style.backgroundColor = 'black';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
}

//Efecto Navbar responsive//
function openNav() {
    document.getElementById("responsive-menu").style.width = "100%";
    document.querySelector('.d-none').style.display = 'block';
    document.getElementById('overlay-content').style.visibility = "visible";
}

function closeNav() {
    document.getElementById("responsive-menu").style.width = "0%";
    document.getElementById('overlay-content').style.visibility = "hidden";
}


