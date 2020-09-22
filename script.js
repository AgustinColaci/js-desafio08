// DOM

document.getElementsByClassName("input-name").value = "Juan Perez";
document.getElementsByClassName("input-cel").value = "1122334455";

// Crear nodo de tipo Elemento
var titulo = document.createElement("h2");

var contenido = document.createTextNode("Título de prueba!"); 

titulo.appendChild(contenido);

document.body.appendChild(titulo);

