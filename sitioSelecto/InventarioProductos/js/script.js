
//Previsualizacion de imagen en Formulario
console.log('holi');
const defaulFile = "../assestsInventario/ejemploProduct.svg";

const file = document.getElementById('imagenProducto');
const img = document.getElementById('img');
file.addEventListener('change', e =>{
    if(e.target.files[0]){
        const reader = new FileReader();
        alert("Archivo cargado Exitosamente")
        reader.onload = (e) =>{
            img.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0])
    }else{
        img.src = defaulFile;
    };
});
