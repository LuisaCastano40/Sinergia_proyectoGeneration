//Elemento del html
const body = document.querySelector('body');
let isClicked = false;

//Evento
body.addEventListener('click', gracias);

//función
function gracias(){
    if (isClicked) {
        body.style.backgroundImage = 'url("./assets/gracias.jpg")';
        isClicked = false;
    } else {
        body.style.backgroundImage = 'url("./assets/preguntas.jpg")';
        isClicked = true;
    }
}