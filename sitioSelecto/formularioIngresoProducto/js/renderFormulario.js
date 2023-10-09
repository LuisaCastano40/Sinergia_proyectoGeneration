const boton = document.querySelector('#subir')
const section = document.querySelector('#pruebaSection')
const datos = localStorage.getItem('datosRecibidos');
let datosRecibidos;


if (datos) {
    datosRecibidos = JSON.parse(datos);
    console.log("holi, entré" + datosRecibidos);
} else {
    console.log('No se encontraron datos en el local storage');
}

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
        renderizarProducto();
    });
}else{
    renderizarProducto();
}

function renderizarProducto(){

    
    
    datosRecibidos.forEach((dato) => { 
        section.innerHTML += `
        <article class="Card">
            <div class="divPrueba">
                <img src="/assests/servicio1.svg" class="imgPrueba"></img>
            </div>
            <div class="divPrueba">
                <h2 class="nombreProducto">${dato.nombreProducto}</h2>
            </div>
            <div class="divPrueba">
                <h3 class="subtituloProducto">${dato.subtituloProducto}</h3>
            </div>
            <div class="divPrueba">
                <h3 class="textProducto">${dato.etiquetaProducto}</h3>
            </div>
            <div class="divPrueba">
                <h3 class="descripcionProducto">Descripcion: ${dato.descripcionProducto}</h3>
            </div>
            <div class="divPrueba">
                <h3 class="textProducto">Precio: ${dato.precioProducto}</h3>
                <h3 class="textProducto">Descuento: ${dato.descuentoProducto}</h3>
                <h3 class="textProducto">Cantidad: ${dato.cantidadProducto}</h3>
                <h3 class="textProducto">Categoria: ${dato.categoriaProducto}</h3>
            </div>
        </article>`

    });

    //Estilizar productos

    dato.classList.add('sectionPrueba');
    
    
};