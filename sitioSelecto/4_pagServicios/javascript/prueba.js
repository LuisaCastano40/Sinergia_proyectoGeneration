import { productosSelecto } from "./Productos.js";

//Traemos los elementos necesarios del HTML
const productsContainer = document.getElementById('products');
let productos = productosSelecto;
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
    }
  }

//Esperamos que cargen correctamente los elementos
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
        renderProducts();
        eventosCarrito();
    });
}else{
    renderProducts();
    eventosCarrito();
}

window.addEventListener('load', function(){
    const btnVaciar = document.getElementById('btn-vaciar');
    btnVaciar.addEventListener('click', vaciarCarrito);
    totalCarrito();
    cargarCarritoDesdeLocalStorage();
});

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
        actualizarContador()
        renderProductosCart();
        eventosCarrito();
        totalCarrito()
    }
}

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
function sumarCantidad(e){
    let itemId = parseInt(e.target.id);
    const productSelected = carritoProducts.find(prodCart => prodCart.id === itemId);
    
    if(productSelected){
        let cantidadItem = document.getElementById(`cantidad_${itemId}`);
        if (cantidadItem) {
    
            let cantidad = parseInt(cantidadItem.textContent);;

            if(productSelected.stock > cantidad){
                cantidad++;
                productSelected.cantidad=cantidad;
                cantidadItem.textContent = productSelected.cantidad;
                localStorage.setItem('carrito', JSON.stringify(carritoProducts));
                totalCarrito();
            }else{
                alert('Ups, ya no tenemos disponible más cantidad de este producto')
            }
        }
    }
}
function restarCantidad(e){
    let itemId = parseInt(e.target.id);
    const productSelected = carritoProducts.find(prodCart => prodCart.id === itemId);

    if(productSelected){
        let cantidadItem = document.getElementById(`cantidad_${itemId}`);
        if (cantidadItem) {
            let cantidad = parseInt(cantidadItem.textContent);

            if(cantidad > 1){
                cantidad--;
                productSelected.cantidad=cantidad;
                cantidadItem.textContent = productSelected.cantidad;
                localStorage.setItem('carrito', JSON.stringify(carritoProducts));
                totalCarrito();
            }else{
                alert('¿Quieres eliminar este producto? Da click en el ícono de basura')
            }
        }
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

function actualizarContador(){
    const contador = document.getElementById('prodAdded');
    let productosEnCarrito = carritoProducts.length;
    contador.textContent = productosEnCarrito;
}