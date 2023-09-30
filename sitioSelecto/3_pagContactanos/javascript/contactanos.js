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