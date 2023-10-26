
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

//Cambio de color del navBar
window.addEventListener('load', function(){
    const navBar = document.getElementById('navBar');
    navBar.style.backgroundColor = '#00000060';

    window.addEventListener('scroll', function(){
        if(window.scrollY > 50 ){
            navBar.style.backgroundColor = '#121212';
        }else{
            navBar.style.backgroundColor = '#00000060';
        }
    });
});

