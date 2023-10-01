const navBar = document.getElementById('container-navBar');

document.addEventListener('DOMContentLoaded', function() {
   mostrarNavbar();
});

function mostrarNavbar(){
    navBar.innerHTML = `
    <article class="menu-navegacion" id="navBar">
                <nav>
                    <ul class="nav-links">
                        <li class="active"><a href="../1_pagInicio/index.html">Inicio</a></li>
                        <li class="active"><a href="../2_pagNosotros/nosotros.html">Nosotros</a></li>
                        <li class="active"><a href="../3_pagContactanos/contactanos.html">Contáctanos</a></li>
                        <li class="active"><a href="../4_pagServicios/servicios.html">Servicios</a></li>
                    </ul>
                    <div class="logoNav">
                        <a href="../1_pagInicio/index.html"><img src="../logo/selecto-Logo-white.svg" alt="logo" /></a>
                    </div>
                    <ul class="nav-links">
                        <li class="active"><a href="../8_pagIngreso/ingreso.html">Iniciar sesión</a></li>
                        <li><a class="btnAgenda" href="../6_pagReservas/reservas.html">AGENDA AHORA</a></li>
                    </ul>
                    <div class="shoppingBag">
                        <img src="../icons/shoppingBag-white.svg" alt="shoppingBag" />
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
                                <li class="active"><a href="#">Inicio</a></li>
                                <li class="active"><a href="#">Nosotros</a></li>
                                <li class="active"><a href="#">Contáctanos</a></li>
                                <li class="active"><a href="#">Servicios</a></li>
                                <li class="active"><a href="#">Regístrate</a></li>
                                <li><a class="btnAgenda" href="#">AGENDA AHORA</a></li>
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