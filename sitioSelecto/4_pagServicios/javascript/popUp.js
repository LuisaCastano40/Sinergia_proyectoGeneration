import { productosSelecto } from "./dbProductos.js";
let productos = productosSelecto;

window.addEventListener('load', function () {
    const hovers = document.getElementsByClassName('hover-text');

    for (let i = 0; i < hovers.length; i++) {
        let popUp = hovers[i];
        popUp.addEventListener('click', showPopUp);
    }
});

function showPopUp(evento) {
    let idPopUp = evento.target.id;
    const productoSeleccionado = productos.find((producto) => producto.id === parseInt(idPopUp));

    renderPopUp(productoSeleccionado);
}

function renderPopUp(prod) {

    let producto = prod;
    const popUpContainer = document.getElementById('popUpcontainer');
    popUpContainer.innerHTML = '';
    popUpContainer.innerHTML = `
    <div class="popUp popUpClose" id="popUp">
        <div class="containerImg">
            <img src="${producto.imagen}">
            <span class="etiqueta">${producto.etiqueta}</span>
        </div>
        <div class="containerInformation">
            <div class="close">
                <i class='bx bx-x' id="btnClose"></i>
            </div>
            <div class="containerTitulo">
                <h1 class="tituloProducto">${producto.nombre}</h1>
                <p class="subtituloProducto">${producto.subtitulo}</p>
                <!--<p class="descuento">Antes <span>$60.000</span></p> -->
                <p class="precio">$${producto.precio}</p>
            </div>
            <div class="containerCategoria">
                <div>
                    <p class="categoria">${producto.categoria}</p>
                </div>
                <div class="rating">
                    <span class="star" id="star1">&#9733;</span>
                    <span class="star" id="star2">&#9733;</span>
                    <span class="star" id="star3">&#9733;</span>
                    <span class="star" id="star4">&#9733;</span>
                    <span class="star" id="star5">&#9733;</span>
                </div>
            </div>
            <p class="descripcion">${producto.descripcion}</p>
            <p class="stock">Stock ${producto.stock}</p>
            <div class="containerBtn">
                <button class="añadirAlCarrito">Añadir al carrito</button>
            </div>
        </div>
    </div>
    `
    eventosPopUp();
    stars();
    eventoScroll();
}

// Cerrar el Pop Up

function eventosPopUp() {
    const btnClose = document.querySelector('#btnClose');
    const popUp = document.querySelector('#popUp');
    const popUpcontainer = document.querySelector('#popUpcontainer');

    if (popUp.style.visibility === "hidden" || popUp.style.visibility === "") {
        popUp.style.visibility = "visible";
        popUpcontainer.style.visibility = "visible";
        popUpcontainer.style.opacity = "1";
        popUp.style.opacity = "1";
        window.scrollTo(0, 0);

        btnClose.addEventListener('click', function () {
            popUp.style.visibility = "hidden";
            popUpcontainer.style.visibility = "hidden";
            popUpcontainer.style.opacity = "0";
            popUp.style.opacity = "0";
        });

        window.addEventListener('click', function (e) {
            if (e.target == popUpcontainer) {
                popUp.style.visibility = "hidden";
                popUpcontainer.style.visibility = "hidden";
                popUpcontainer.style.opacity = "0";
                popUp.style.opacity = "0";
            }
        });
    } else {
        popUp.style.visibility = "hidden";
        popUpcontainer.style.visibility = "hidden";
        popUpcontainer.style.opacity = "0";
        popUp.style.opacity = "0";
    }
}


function stars() {
    // Estrellas de las reseñas
    let stars = document.getElementsByClassName("star");
    let selectedStar = -1; // letiable para rastrear la estrella seleccionada

    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener("click", function () {
            let clickedStar = Array.from(stars).indexOf(this);

            // Desactivamos todas las estrellas
            for (let j = 0; j < stars.length; j++) {
                stars[j].classList.remove("checked");
            }

            // Activamos las estrellas hasta la que se ha hecho clic
            for (let j = 0; j <= clickedStar; j++) {
                stars[j].classList.add("checked");
            }
            selectedStar = clickedStar;
        });

        // Agregamos un evento de mouseover para resaltar estrellas al pasar el mouse sobre ellas
        stars[i].addEventListener("mouseover", function () {
            let hoveredStar = Array.from(stars).indexOf(this);
            if (hoveredStar <= selectedStar) return;

            for (let j = 0; j <= hoveredStar; j++) {
                stars[j].classList.add("checked");
            }
        });

        // Agregamos un evento de mouseout para quitar el resaltado cuando el mouse se va
        stars[i].addEventListener("mouseout", function () {
            let hoveredStar = Array.from(stars).indexOf(this);
            if (hoveredStar <= selectedStar) return;

            for (let j = 0; j <= hoveredStar; j++) {
                stars[j].classList.remove("checked");
            }
        });
    }

}

function eventoScroll() {
    let containerHeight;

    function handleScroll() {
        const container = document.getElementById('popUpcontainer');
        const scrolled = window.scrollY;

        if (window.innerWidth > 1023) {
            containerHeight = container.offsetHeight * 0;
        } else if (window.innerWidth <= 1023 && window.innerWidth > 677) {
            containerHeight = container.offsetHeight * 0.2;
        } else {
            containerHeight = container.offsetHeight * 0.42;
        }

        if (scrolled >= containerHeight) {
            window.scrollTo(0, containerHeight);
        }
    }

    window.addEventListener('scroll', handleScroll);

    const btnClose = document.querySelector('#btnClose');
    btnClose.addEventListener('click', function () {
        window.removeEventListener('scroll', handleScroll);
        document.body.style.overflowY = 'scroll';
    });
}
