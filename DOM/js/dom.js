"use strict"
//DOM - Document Object Model

function cambiaColor(color){
    caja.style.background = color; //Probar a llamar la función en la consola y cambiar el color (cambiaColor("green");)
}

var caja = document.getElementById("micaja"); //Buscamos el elemento "id" que queremos

caja.innerHTML = "¡Texto modificado en JavaScript!"; //Modificamos el html
caja.style.background = "red"; //añadimos estilo desde JavaScript
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "NuevaCaja"; //Añadir clases. Hay más propiedades que se pueden modificar, todas las que hay en html

var pruebita = document.querySelector(".prueba"); //Buscar elemento Class(.) o ID (#)

pruebita.style.background = "orange";

console.log(caja);

// Conseguir elementos por su etiqueta
//También se pueden seleccionar todos los elementos de esta forma: document.querySelectorAll('div');
var todosLosDivs = document.getElementsByTagName('div'); //Te muestra todos los elementos en forma de array con su index

var contenidoEnTexto = todosLosDivs[2]; //Muestra lo que hay en el array antes mencionado que está en la posición "X"

contenidoEnTexto.innerHTML = "Cambio de texto con el innerHTML";
contenidoEnTexto.style.background = "green";

console.log(todosLosDivs);
console.log(contenidoEnTexto);
// Conseguir elementos por su clase css

//Utilizando métodos
document.querySelector('html').lang = "es";
document.querySelector('title').innerHTML = 'Aprendiendo DOM';
//Diferencia entre innerText e innerHTML
//innertText introduce texto
document.querySelector('section').innerText = "<h1>Haciendo cambios en el section</h1>";
//Modifica elemento html (reemplaza etiqueta)
document.querySelector('article').innerHTML = "<h1>Haciendo cambios en el article</h1>";

//Seleccionar elementos ID y CLASS
//Seleccionamos la clase
document.getElementsByClassName('tercerDiv'); //Revisar
//Seleccionamos el ID
document.getElementById("cuartoDiv");
//Seleccionamos el que queramos
document.querySelector('.tercerDiv');
//Seleccionamos todos los que existan
document.querySelectorAll('#cuartoDiv');

//Agrupando en Variables
var div3 = document.querySelector('.tercerDiv');
//Crear elemento dentro del div, por ejemplo un botón
var btn = document.createElement('button')
//Agregar el elemento creado a la variable (div) anterior usando APPEND
div3.append(btn);
//Cambios al elemento creado
btn.innerText = "botón de prueba";
//Agregar una clase al botón
//Si los dejásemos así: btn.classList; Nos daría como resultado valor '' porque no tiene clase.
btn.classList.add('claseBoton');

//Pruebas con addEventListener
const eventos = document.querySelector(".evente");
eventos.addEventListener("mouseover", function() { /*Probar cambiar a click, dblclick*/
    this.innerHTML = "<h1>Hola</h1>Cambia"; /*IMPORTANTE el this. hace referencia a la variable que se está usando */
});

//Llamando a la función desde HTML
var clicks = 0
function countFunc() {
    clicks += 1;
    document.querySelector(".btn").innerHTML = clicks;
}