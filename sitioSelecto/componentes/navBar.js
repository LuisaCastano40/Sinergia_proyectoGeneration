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
                        <li class="active"><a href="../4_pagServicios/servicios.html">Productos</a></li>
                    </ul>
                    <div class="logoNav">
                        <a href="../index.html"><img src="/1_pagInicio/logo/selecto-Logo-white.svg" alt="logo" /></a>
                    </div>
                    <div class="container-2navlink">
                    <ul class="nav-links" id="logged">
                        <li class="active"><a href="../8_pagIngreso/ingreso.html">Iniciar sesión</a></li>
                        <li><a class="btnAgenda" href="../6_pagReservas/reservas.html">AGENDA AHORA</a></li>
                    </ul>
                    <div class="shoppingBag" id="shoppingBag">
                        <img src="/1_pagInicio/icons/shoppingBag-white.svg" alt="shoppingBag" />
                        <span id="prodAdded">0</span>
                    </div>
                    </div>
                    <section class="carrito_compras activeCart">
                        <div class="carro_comprar">
                            <div class="header-carrito">
                                <i class='bx bx-x' id="close"></i>
                                <img src="/1_pagInicio/logo/selecto-Logo-white.svg" alt="logo" />
                            </div>
                            <p class="titulo_carrito">Bienvenido a tu carrito de compras</p>
                            <article class="contenedor-productosCart" id="container-cartProd">
                            </article>
                            <div class='seccion-total'>
                            <p class="total" id="total-carrito">TOTAL: <span id="total-valor">$0.00</span></p>
                            <button class="boton_carro" id="btn-vaciar">Vaciar carrito</button>
                            <button class="boton_carro" id="btn-pagar"><a href="https://mpago.li/15YE6UN" target="_blank">Ir a pagar</a></butoon>
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
                                <li class="active"><a href="../4_pagServicios/servicios.html">Productos</a></li>
                                <li class="active" id="change"><a href="../8_pagIngreso/ingreso.html">Regístrate</a></li>
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

window.addEventListener('load', traerLocalStorage);

//Traer local Storage y cambiar navbar
function traerLocalStorage(){
    let isLogged = localStorage.getItem('logged');
    let userLogged = localStorage.getItem('userLogged').replace(/"/g,'').split(' ');
    let user = userLogged[0];

    if(isLogged){
        console.log('entré')
        const navLink = document.getElementById('logged');
        const changeRes = document.getElementById('change');
        navLink.innerHTML = `
            <li><a class="btnAgenda" href="../6_pagReservas/reservas.html">AGENDA AHORA</a></li>
            <li class="userLogged">Hola ${user}</li>
            <i class='bx bx-log-out cerrarSesion' onclick="cerrarSesion()"></i>
        `;
        changeRes.innerHTML = `
            <a href="#" onclick="cerrarSesion()">Cerrar Sesión</a></li>
        `;
    }
    console.log(isLogged, userLogged, user);
}

//Función cerrar sesión
function cerrarSesion(){
    localStorage.removeItem('logged');
    localStorage.removeItem('userLogged');
    const navLink = document.getElementById('logged');
    const changeRes = document.getElementById('change');
        navLink.innerHTML = `
            <li class="active"><a href="../8_pagIngreso/ingreso.html">Iniciar sesión</a></li>
            <li><a class="btnAgenda" href="../6_pagReservas/reservas.html">AGENDA AHORA</a></li>
        `;
        changeRes.innerHTML = `
            <a href="../8_pagIngreso/ingreso.html">Regístrate</a></li>
        `;
}