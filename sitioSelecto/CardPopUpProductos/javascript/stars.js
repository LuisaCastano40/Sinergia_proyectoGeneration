// Estrellas de las reseñas
var stars = document.getElementsByClassName("star");
var selectedStar = -1; // Variable para rastrear la estrella seleccionada

for (var i = 0; i < stars.length; i++) {
    stars[i].addEventListener("click", function() {
        var clickedStar = Array.from(stars).indexOf(this);

        // Desactivamos todas las estrellas
        for (var j = 0; j < stars.length; j++) {
            stars[j].classList.remove("checked");
        }

        // Activamos las estrellas hasta la que se ha hecho clic
        for (var j = 0; j <= clickedStar; j++) {
            stars[j].classList.add("checked");
        }
        selectedStar = clickedStar;
    });
    
    // Agregamos un evento de mouseover para resaltar estrellas al pasar el mouse sobre ellas
    stars[i].addEventListener("mouseover", function() {
        var hoveredStar = Array.from(stars).indexOf(this);
        if (hoveredStar <= selectedStar) return;
        
        for (var j = 0; j <= hoveredStar; j++) {
            stars[j].classList.add("checked");
        }
    });

    // Agregamos un evento de mouseout para quitar el resaltado cuando el mouse se va
    stars[i].addEventListener("mouseout", function() {
        var hoveredStar = Array.from(stars).indexOf(this);
        if (hoveredStar <= selectedStar) return;
        
        for (var j = 0; j <= hoveredStar; j++) {
            stars[j].classList.remove("checked");
        }
    });
}

// Cerrar el Pop Up

const btnClose = document.querySelector('#btnClose');
const card = document.querySelector('#card');
const cardContainer = document.querySelector('#cardContainer');

btnClose.addEventListener('click', cerrarVentana);

function cerrarVentana(){
    card.style.visibility = "hidden";
    cardContainer.style.visibility = "hidden";
    cardContainer.style.opacity = "0";
    card.style.opacity = "0";
};

window.addEventListener('click', function(e){
    if (e.target == cardContainer){
        cerrarVentana();
    }
});
