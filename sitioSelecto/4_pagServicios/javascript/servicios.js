import { productosSelecto } from "./Productos.js";
import { serviciosSelecto } from "./dbServicios.js";

//Traemos los elementos necesarios del HTML
const productsContainer = document.getElementById('products');
const containerServicios = document.getElementById('servicios');
let productos = productosSelecto;
let servicios = serviciosSelecto;
let carritoProducts = [];

// Función para cargar el carrito desde el localStorage
function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      carritoProducts = JSON.parse(carritoGuardado);
      renderProductosCart();
      totalCarrito();
      actualizarContador();
      eventosCarrito();
      renderCantidadItems();
    }
  }

//Esperamos que cargen correctamente los elementos
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
        renderProducts();
        renderServicios();
        eventosCarrito();
    });
}else{
    renderProducts();
    renderServicios();
    eventosCarrito();
}

window.addEventListener('load', function(){
    const navBar = document.getElementById('navBar');
    navBar.style.backgroundColor = '#121212';
    const btnVaciar = document.getElementById('btn-vaciar');
    btnVaciar.addEventListener('click', vaciarCarrito);
    totalCarrito();
    cargarCarritoDesdeLocalStorage();
});

//Función para mostrar productos en la página
function renderProducts(){
    productos.forEach((producto) => {
        productsContainer.innerHTML += `
            <div class="card" id=${producto.id}>
                <div class="card-img-producto">
                    <img src="/4_pagServicios/assetsServicios/img/producto.svg" alt="Imagen producto 1">
                    <!-- Hover -->
                    <div class="hover-text">
                        <h4 class="product-name-hover">${producto.nombre}</h4>
                        <img class="logoSelectoWhite" src="/4_pagServicios/assetsServicios/icons/selecto-LogoWhite.svg" alt="Logo Selecto blanco" />
                    </div>
                </div>
                <div class="product-info-container">
                    <div class="product-info">
                        <h4 class="product-name-visible">${producto.nombre}</h4>
                        <p class="price">${producto.precio}</p>
                    </div>
                    <div class="shopping-bag container-btnAdd" id="btn-Add">
                        
                            <img class="btn-agregar" id=${producto.id} src="/4_pagServicios/assetsServicios/icons/shoppingBag-white.svg" alt="shoppingBag" />
                        
                    </div>
                </div>
            </div>
            `
    });
}

// Función para mostrar servicios en la página
function renderServicios(){
    servicios.forEach((servicio)=>{
        containerServicios.innerHTML += `
        <div class="card" id="${servicio.id}">
            <div class="card-img-producto">
                <img src="/4_pagServicios/assetsServicios/img/Servicios.svg" alt="Imagen servicio 2">
                <!-- Hover -->
                <div class="hover-text">
                    <h4 class="product-name">${servicio.nombre}</h4>
                    <img class="logoSelectoWhite" src="/4_pagServicios/assetsServicios/icons/selecto-LogoWhite.svg" alt="Logo Selecto blanco" />
                </div>
            </div>
            <div class="product-info-container">
                <div class="product-info">
                    <h4 class="product-name-visible">${servicio.nombre}</h4>
                    <p class="price">$${servicio.precio}</p>
                </div>
            </div>
        </div>
        `
    });
}

//Funcion para los eventos del carrito
function eventosCarrito(){

    //Agregamos funcionalidad al boton Agregar al carrito
    const botonesAgregarAlCarrito = document.getElementsByClassName('btn-agregar');

    for(let i=0; i<botonesAgregarAlCarrito.length;i++){
        let button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', addCarrito);
    }

     //Agregremos funcionalidad a los botones eliminar del carrito
     let botonesEliminarItem = document.getElementsByClassName('borrarItem');
     for(let i=0;i<botonesEliminarItem.length; i++){
         let button = botonesEliminarItem[i];
         button.addEventListener('click',eliminarItemCarrito);
     }
 
     //Agrego funcionalidad al boton sumar cantidad
     let botonesSumarCantidad = document.getElementsByClassName('addCantidad');
 
     for(let i=0;i<botonesSumarCantidad.length; i++){
         var button = botonesSumarCantidad[i];
         button.addEventListener('click',sumarCantidad);
     }
 
      //Agrego funcionalidad al buton restar cantidad
     let botonesRestarCantidad = document.getElementsByClassName('lessCantidad');
     for(let i=0;i<botonesRestarCantidad.length; i++){
         let button = botonesRestarCantidad[i];
         button.addEventListener('click',restarCantidad);
     }
}


function addCarrito(e){
    console.log('holi, agregaste algo');
    let idButton = e.target.id;

    // Busca el objeto correspondiente en la lista de productos
    const productoSeleccionado = productos.find((producto) => producto.id === parseInt(idButton));

    //verifica que el producto no esté en el carrito de compras
    const cartProd = carritoProducts.find(prodCart => prodCart.id === parseInt(idButton));
    if(cartProd){
        alert('Este artículo ya se encuentra en el carrito');
    } else{
        alert('El producto ha sido agregado satisfactoriamente');
        carritoProducts.push(productoSeleccionado);
        localStorage.setItem('carrito', JSON.stringify(carritoProducts));
        renderProductosCart();
        eventosCarrito();
        actualizarContador();
        totalCarrito();
    }

}

//Función para mostrar los productos en el carrito
function renderProductosCart(){
    const productsCart = document.getElementById('container-cartProd');
    productsCart.innerHTML='';

    carritoProducts.forEach((prod)=>{
        productsCart.innerHTML += `
        <article class="cartProductos" id="${prod.id}">
            <div class="producto">
                <div class="cart-image">
                    <img src="${prod.imagen}" alt="producto-selecto">
                </div>
                <div class="cart-infoProducto">
                    <h3>${prod.categoria}</h3>
                    <h4>$ ${prod.precio}</h4>
                </div>
            </div>
            <div class="accionesProducto">
            <i class='bx bx-plus-circle addCantidad' id="${prod.id}"></i>
            <span id="cantidad_${prod.id}">1</span>
            <i class='bx bx-minus-circle lessCantidad' id="${prod.id}"></i>
            <i class='bx bxs-trash borrarItem' id="${prod.id}"></i>
          </div>
        </article>`;
    });
}

//Función para actualizar contador
function actualizarContador(){
    const contador = document.getElementById('prodAdded');
    let productosEnCarrito = carritoProducts.length;
    contador.textContent = productosEnCarrito;
}

//Función para actualizar el total
function totalCarrito(e){

    let total = 0;
    carritoProducts.forEach(prod =>{
        let precioProd = parseFloat(prod.precio.replace('.', ''));
        let cantidadItem = document.getElementById(`cantidad_${prod.id}`);
        let cantidad = parseInt(cantidadItem.textContent);
        total += (precioProd*cantidad);
    });
    const verTotal = document.getElementById('total-carrito');
    verTotal.textContent = '$'+total.toLocaleString("es") + ",00";
}

function eliminarItemCarrito(e){
    let seguro = confirm('¿Está seguro de eliminar este item de sus compras?');
    if(seguro){
        let itemId = e.target.id;
        const indexProd = carritoProducts.findIndex(prodCart => prodCart.id === parseInt(itemId));
        
        if (indexProd !== -1) {
            carritoProducts.splice(indexProd, 1);
            renderProductosCart();
            totalCarrito();
            actualizarContador();
            localStorage.setItem('carrito', JSON.stringify(carritoProducts));
        }
        eventosCarrito();
    }
}

//Sumar cantidad de ítems en el carrito
function sumarCantidad(e){
    let itemId = parseInt(e.target.id);
    const productSelected = carritoProducts.find(prodCart => prodCart.id === itemId);
    let cantidadItem = document.getElementById(`cantidad_${itemId}`);
    let cantidad = productSelected.cantidad;
        if(productSelected.stock > cantidad){
            cantidad++;
            productSelected.cantidad=cantidad;
            cantidadItem.textContent = cantidad;
            localStorage.setItem('carrito', JSON.stringify(carritoProducts));
            totalCarrito();
        } else{
            alert('Ups, ya no tenemos disponible más cantidad de este producto')
        }
}

//Restar cantidad de items en el carrito
function restarCantidad(e){
    let itemId = parseInt(e.target.id);
    const productSelected = carritoProducts.find(prodCart => prodCart.id === itemId);
    let cantidadItem = document.getElementById(`cantidad_${itemId}`);
    let cantidad = productSelected.cantidad;
        if(cantidad > 1){
            cantidad--;
            productSelected.cantidad=cantidad;
            cantidadItem.textContent = cantidad;
            localStorage.setItem('carrito', JSON.stringify(carritoProducts));
            totalCarrito();
        } else{
            alert('Ups, ya no tenemos disponible más cantidad de este producto')
        }
}

function vaciarCarrito(){
    let seguro = confirm('¿Está seguro de eliminar su carrito?');
    if(seguro){
        carritoProducts =[];
        localStorage.setItem('carrito', JSON.stringify(carritoProducts));
        renderProductosCart();
        totalCarrito();
        actualizarContador();
    }
    eventosCarrito()
}

//me muestra la cantidad seleccionada por el cliente
function renderCantidadItems(){
    carritoProducts.forEach(prod =>{
        let cantidadItem = document.getElementById(`cantidad_${prod.id}`);
        cantidadItem.textContent = prod.cantidad;
    });
}