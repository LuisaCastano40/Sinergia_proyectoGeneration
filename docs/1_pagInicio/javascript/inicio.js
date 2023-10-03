document.addEventListener('load', function() {
    window.addEventListener('scroll', cambiarNavbar);
 });

function cambiarNavbar() {
    const navBar = document.getElementById('container-navBar');
    // Verifica la posición actual del scroll
    if (window.scrollY > 100) { 
        navBar.style.backgroundColor = '#00000080'; 
    } else {
        navBar.style.backgroundColor = '#000000'; 
    }
};