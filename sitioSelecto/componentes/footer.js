const footer = document.getElementById('footer');

document.addEventListener('DOMContentLoaded', function() {
   mostrarFooter();
});

function mostrarFooter(){
    footer.innerHTML = `
        <section class="container-footer">
        <article class="socialMedia">
            <h3>¡HABLEMOS!</h3>
            <div class="redes">
            <a href="#"><img src="/1_pagInicio/icons/whatsapp-white.svg" alt="whatsapp-icon" /></a>
            <a href="#"><img src="/1_pagInicio/icons/instagram-white.svg" alt="instagram-icon" /></a>
            <a href="#"><img src="/1_pagInicio/icons/email-white.svg" alt="email-icon" /></a>
            </div>
        </article>
        <article class="logo">
            <a href="index.html"><img src="/1_pagInicio/logo/selecto-Logo-white.svg" alt="logo" /></a>
            <a class="btn" href="../6_pagReservas/reservas.html">AGENDA AHORA</a>
        </article>
        <article class="map">
            <h3>¡VISÍTANOS!</h3>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248.51822666078849!2d-74.1106697!3d4.7193227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85798ec29299%3A0x30afc4a2a8ec4944!2sSelecto%20Barber%20Shop!5e0!3m2!1ses-419!2sco!4v1695652551410!5m2!1ses-419!2sco"
            width="400" height="200" style="border: 0" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p>Cl. 86 #103D 22, Engativá, Bogotá, Cundinamarca</p>
        </article>
        <article class="navegation">
            <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="../2_pagNosotros/nosotros.html">Nosotros</a></li>
            <li><a href="../3_pagContactanos/contactanos.html">Contáctanos</a></li>
            <li><a href="../4_pagServicios/servicios.html">Servicios</a></li>
            <li><a href="../8_pagIngreso/ingreso.html">Iniciar sesión</a></li>
            </ul>
        </article>
        </section>
        <section class="copyright">
        <p>© POWERED BY SINERGIA</p>
        </section>
    `
}