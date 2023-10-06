const navBar = document.getElementById('container-navBar');

document.addEventListener('DOMContentLoaded', function () {
    mostrarNavbar();
});

function mostrarNavbar() {
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
                        <a href="../index.html"><img src="/1_pagInicio/logo/selecto-Logo-white.svg" alt="logo" /></a>
                    </div>
                    <ul class="nav-links">
                        <li class="active"><a href="../8_pagIngreso/ingreso.html">Iniciar sesión</a></li>
                        <li><a class="btnAgenda" href="../6_pagReservas/reservas.html">AGENDA AHORA</a></li>
                    </ul>
                    <div class="shoppingBag" id="shoppingBag">
                        <img src="/1_pagInicio/icons/shoppingBag-white.svg" alt="shoppingBag" />
                        <span>0</span>
                    </div>
                    <section class="carrito_compras activeCart">
                        <div class="carro_comprar">
                            <div class="header-carrito">
                                <i class='bx bx-x' id="close"></i>
                                <a href="../index.html"><img src="/1_pagInicio/logo/selecto-Logo-white.svg" alt="logo" /></a>
                            </div>
                            <p class="titulo_carrito">Bienvenido a tu carrito de compras</p>
                            <article class="contenedor-productosCart" id="container-cartProd">
                            </article>
                            <div class='seccion-total'>
                                <p class="total" id="total">TOTAL: <span id="total-valor">$0.00</span></p>
                                <button class="boton_carro" id="btn-vaciar">Vaciar carrito</button>
                            </div>  
                        </div>
                    </section>
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
