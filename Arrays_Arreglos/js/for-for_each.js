'use strict'
//forEach

//Forma de recorrer array con forEach
var nombres = ["Juan","Pepito","Lorca","Juancho","Chichilla"]; //Esto es un Array
var lenguajes = new Array("PHP","JS","GO","PYTHON"); //array en forma de objeto

document.write("<h1>Lenguajes de programación</h1>");
document.write("<ul>");

//elemento = valor; indice = índice (posición) del array q se recorre, se pone para sacar los datos del índice. Se puede excluir; arr = muestra el array completo original, puede no ponerse
lenguajes.forEach((elemento, indice, arr)=>{ 
    console.log(arr); //opcional
    document.write("<li>" + indice + " - " + elemento + "</li>");
});
document.write("</ul>");