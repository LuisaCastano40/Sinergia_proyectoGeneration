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
