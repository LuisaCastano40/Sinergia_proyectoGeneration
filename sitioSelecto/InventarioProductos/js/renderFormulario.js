
const section = document.querySelector('#data-table')
const datos = localStorage.getItem('datosRecibidos');
let datosRecibidos = JSON.parse(datos);


if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
        if(datosRecibidos){
            renderizarProducto();
        }
    });
}else{
    if(datosRecibidos){
        renderizarProducto();
    }
}

function renderizarProducto(){
    
    datosRecibidos.forEach((dato) => { 
        section.innerHTML += `
        <tr>
            <td> <img class="productImg" src="assestsInventario/ejemploProduct.svg" alt="Img product 1" />
            </td>
            <td> ${dato.nombreProducto} </td>
            <td> ${dato.descripcionProducto}</td>
            <td> $${dato.precioProducto} </td>
            <td> ${dato.cantidadProducto} </td>
            <td> 
                <div class="icons">
                    <a href="#"><img class="editIcon" src="assestsInventario/icons/editIcon.svg"
                    alt="icono edición" /></a>
                    <a href="#"><img class="viewIcon" src="assestsInventario/icons/viewIcon.svg"
                    alt="icono ver/ojo" /></a>
                    <a href="#"><img class="deleteIcon" src="assestsInventario/icons/deleteIcon.svg"
                    alt="icono borrar" /></a>
                </div>
            </td>
        </tr>
        `

    });
    
};