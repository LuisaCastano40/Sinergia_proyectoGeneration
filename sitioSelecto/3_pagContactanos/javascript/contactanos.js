
//Traemos los elementos del HTML//
const form = document.querySelector('.contact-form');
const selectRol = document.getElementById("rol");
let isWorker = false;

//Eventos
selectRol.addEventListener("change", mostrarInput);
form.addEventListener('submit', verificarInput);
// document.addEventListener('DOMContentLoaded', function(){
//     form.reset();
// })

//Funciones
function mostrarInput(){

    const seleccion = selectRol.value;
    const divCurriculum = document.querySelector(".curriculum");
    const inputEmail = document.querySelector('.datos-email');

    if (seleccion === "cliente") {
        divCurriculum.style.display = "none";
        inputEmail.style.width = "100%";
        isWorker = false;
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
            <input id="file" type="file" name = "file">
        </div>`;
        isWorker = true;
    }
    validarFile();
}
function validarFile(){

    if(isWorker){
        const cvInput =document.getElementById('file');
        cvInput.addEventListener('change', function(){
            // Obtiene el primer archivo seleccionado
            const selectedFile = cvInput.files[0];

            // Verifica si el archivo tiene la extensión .pdf
            if (!selectedFile.name.toLowerCase().endsWith('.pdf')) {
                alert('Solo se admiten archivos PDF');
                cvInput.value = '';
            } else {
                alert('Se cargó el archivo correctamente');
            }
        });
    }
}

function verificarInput(e){
    const cvInput =document.getElementById('file');
    // Verifica si se seleccionó un archivo
    if(isWorker && cvInput.files.length === 0){
        alert('No se seleccionó ningún archivo');
        e.preventDefault();
    }
}

