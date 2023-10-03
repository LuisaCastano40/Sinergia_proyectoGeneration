const navBar = document.getElementById('container-navBar');

document.addEventListener('DOMContentLoaded', function() {
   mostrarNavbar();
});

function mostrarNavbar(){
    navBar.innerHTML = `
    <article class="menu-navegacion" id="navBar">
                <nav>
                    <ul class="nav-links">
                        <li class="active"><a href="../index.html">Inicio</a></li>
                        <li class="active"><a href="../2_pagNosotros/nosotros.html">Nosotros</a></li>
                        <li class="active"><a href="../3_pagContactanos/contactanos.html">Contáctanos</a></li>
                        <li class="active"><a href="../4_pagServicios/servicios.html">Servicios</a></li>
                    </ul>
                    <div class="logoNav">
                        <a href="../index.html"><img src="/3_pagContactanos/logo/selecto-Logo-white.svg" alt="logo" /></a>
                    </div>
                    <ul class="nav-links">
                        <li class="active"><a href="../8_pagIngreso/ingreso.html">Iniciar sesión</a></li>
                        <li><a class="btnAgenda" href="../6_pagReservas/reservas.html">AGENDA AHORA</a></li>
                    </ul>
                    <div class="shoppingBag">
                        <img src="/3_pagContactanos/icons/shoppingBag-white.svg" alt="shoppingBag" />
                        <span>0</span>
                    </div>
                </nav>
    
                <!-- Responsive menu -->
                <article class="container-menuResponsive">
                    <button onclick="openNav()" class="open">≡</button>
                    <div class="responsive-menu d-none" id="responsive-menu">
                        <button onclick="closeNav()" class="close">&times;</button>
                        <nav class="menuResponsive-content" id="menuResponsive-content">
                            <ul>
                                <li class="active"><a href="../index.html">Inicio</a></li>
                                <li class="active"><a href="../2_pagNosotros/nosotros.html">Nosotros</a></li>
                                <li class="active"><a href="../3_pagContactanos/contactanos.html">Contáctanos</a></li>
                                <li class="active"><a href="../4_pagServicios/servicios.html">Servicios</a></li>
                                <li class="active"><a href="../8_pagIngreso/ingreso.html">Regístrate</a></li>
                                <li><a class="btnAgenda" href="../6_pagReservas/reservas.html">AGENDA AHORA</a></li>
                            </ul>
                        </nav>
                    </div>
                </article>  
            </article>
    `
}

//Efecto Navbar responsive//
function openNav() {
    document.getElementById("responsive-menu").style.width = "100%";
    document.querySelector('.d-none').style.display = 'block';
    document.getElementById('menuResponsive-content').style.visibility = "visible";
    document.querySelector('.close').style.visibility = "visible";
}

function closeNav() {
    document.getElementById("responsive-menu").style.width = "0%";
    document.getElementById('menuResponsive-content').style.visibility = "hidden";
    document.querySelector('.close').style.visibility = "hidden";
}

//Función para cambiar el color del menú
function cambiarColorMenu() {
    if (window.location.pathname === '../1_pagInicio/index.html' && window.scrollY > 50) {
        navBar.style.backgroundColor = '#000000'; 
    } else {
        navBar.style.backgroundColor = '#00000080';
    }
}

// Llama a la función al cargar la página y cuando cambia la ubicación
window.addEventListener('load', cambiarColorMenu);
window.addEventListener('popstate', cambiarColorMenu);
window.addEventListener('scroll', cambiarNavbar);