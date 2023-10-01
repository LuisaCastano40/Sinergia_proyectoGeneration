//Efecto Navbar responsive//
// function openNav() {
//     document.getElementById("responsive-menu").style.width = "100%";
//     document.querySelector('.d-none').style.display = 'block';
//     document.getElementById('menuResponsive-content').style.visibility = "visible";
//     document.querySelector('.close').style.visibility = "visible";
// }

// function closeNav() {
//     document.getElementById("responsive-menu").style.width = "0%";
//     document.getElementById('menuResponsive-content').style.visibility = "hidden";
//     document.querySelector('.close').style.visibility = "hidden";
// }

//Traemos los elementos del HTML//
const selectRol = document.getElementById("rol");
isCliente = false;

//Eventos
selectRol.addEventListener("change", mostrarInput);

//Funciones
function mostrarInput(){

    const seleccion = selectRol.value;
    const divCurriculum = document.querySelector(".curriculum");
    const inputEmail = document.querySelector('.datos-email');

    if (seleccion === "cliente") {
        divCurriculum.style.display = "none";
        inputEmail.style.width = "100%";
    } else if (seleccion === "proveedor" || seleccion === "barbero") {
        divCurriculum.style.display = "block";
        divCurriculum.style.width = "50%";
        inputEmail.style.width = "50%";

        divCurriculum.innerHTML = '';
        divCurriculum.innerHTML =`
        <div class="inputCV">
            <label for="file">
                <i class='bx bx-cloud-upload' ></i>
                Hoja de vida
            </label>
            <input id="file" type="file">
        </div>`;
    }
}