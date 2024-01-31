//alert("Hola este es mi Javascript");
//let nombre = "Ignacio";

//console.log (nombre);

//Selecionar elementos

let contenidoTitulo= "Nombre";

let titulo = document.querySelector(".logo .fuente- titulo.innerHTML = contenidoTitulo")

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Nombre") {
    titulo.innerHTML = "Otro";
} else {
    console.log ("no se cumples")
}