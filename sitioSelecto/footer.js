function crearBarraDeNavegacion() {
    // Crear un elemento de lista desordenada (ul)
    var lista = document.createElement("ul");
  
    // Crear elementos de lista (li) para cada enlace de navegación
    var inicio = document.createElement("li");
    inicio.innerHTML = "<a href='#'>Inicio</a>";
  
    var acercaDe = document.createElement("li");
    acercaDe.innerHTML = "<a href='#'>Acerca de</a>";
  
    var servicios = document.createElement("li");
    servicios.innerHTML = "<a href='#'>Servicios</a>";
  
    var contacto = document.createElement("li");
    contacto.innerHTML = "<a href='#'>Contacto</a>";
  
    // Agregar elementos de lista a la lista desordenada
    lista.appendChild(inicio);
    lista.appendChild(acercaDe);
    lista.appendChild(servicios);
    lista.appendChild(contacto);
  
    // Agregar estilos a la barra de navegación
    lista.style.listStyleType = "none";
    lista.style.display = "flex";
    lista.style.padding = "0";
  
    // Agregar la lista a la barra de navegación
    var barraNavegacion = document.getElementById("barra-de-navegacion");
    barraNavegacion.appendChild(lista);
  }