// Variables de paginación
const limite = 6;
let paginaActual = 1;
let cards; // Declaración de cards para un ámbito más amplio

// Carga inicial
window.addEventListener('load', function(){
    cargarProducto();
    paginacion();
});

window.addEventListener('resize', paginacion);

// Establecer la cantidad de productos a mostrar por página
function cargarProducto(){
    cards = document.querySelectorAll('.card');
    let primerIndice = limite * (paginaActual - 1);
    let ultimoIndice = limite * paginaActual - 1;
    cards.forEach((card, index) => {
        if (index >= primerIndice && index <= ultimoIndice && cards.length > 0) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    paginacion();
}

// Función de paginación
function paginacion() {
    const maxVisibleLinks = calculateMaxVisibleLinks();
    let count = Math.ceil(cards.length / limite);
    let listPage = document.querySelector('.listPage');
    listPage.innerHTML = '';

    // prev
    if (paginaActual > 1) {
        let prev = document.createElement('li');
        prev.innerHTML = ` <i class='bx bx-chevrons-left'></i>`;
        prev.addEventListener('click', () => changePage(paginaActual - 1));
        listPage.appendChild(prev);
    }

    // nueva
    const startPage = Math.max(1, paginaActual - Math.floor(maxVisibleLinks / 2));
    const endPage = Math.min(count, startPage + maxVisibleLinks - 1);

    for (let i = startPage; i <= endPage; i++) {
        let nextPage = document.createElement('li');
        nextPage.innerHTML = i;

        if (i === paginaActual) {
            nextPage.classList.add('active');
        }
        nextPage.addEventListener('click', () => changePage(i));
        listPage.appendChild(nextPage);
    }

    // next
    if (paginaActual < count) {
        let next = document.createElement('li');
        next.innerHTML = `<i class='bx bx-chevrons-right'></i>`;
        next.addEventListener('click', () => changePage(paginaActual + 1));
        listPage.appendChild(next);
    }
}

// Función para cambiar de página
function changePage(i) {
    paginaActual = i;
    cargarProducto();
}

// Función de paginación responsive
function calculateMaxVisibleLinks() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        return 3; 
    } else if (screenWidth < 1024) {
        return 5; 
    } else {
        return 7;
    }
}
