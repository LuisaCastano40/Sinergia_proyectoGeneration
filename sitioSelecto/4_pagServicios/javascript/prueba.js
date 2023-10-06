import { productosSelecto } from "./Productos.js";

//Traemos los elementos necesarios del HTML
const productsContainer = document.getElementById('products');
// const carrito = document.getElementById('cart');
// const cerrar = document.getElementById('close');

let productos = productosSelecto;
let carritoProducts = [];

//Esperamos que cargen correctamente los elementos
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
        renderProducts()});
}else{
    renderProducts();
}


//Funciones

//Función para mostrar productos en la página
function renderProducts(){
    productos.forEach((producto) => {
        productsContainer.innerHTML += `
            <article class="cardProductos" id=${producto.id}>
                <div class="container-producto">
                    <div class="card-image">
                        <img src="${producto.imagen}" alt="producto-papeleria">
                    </div>
                    <div class="card-infoProducto">
                        <span>${producto.categoria}</span>
                        <h3>${producto.nombre}</h3>
                        <h4>$ ${producto.precio}</h4>
                    </div>
                </div>
                <div class="container-btnAdd" id="btn-Add">
                    <button class="btn-agregar" id=${producto.id}>
                        AGREGAR AL CARRITO
                        <i class='bx bx-cart-add'></i>
                    </button>
                </div>
            </article>`
    });
}

function addCarrito(){
    const btnAdd = document.getElementById('btn-agregar');
}