'use strict'
//Arrays o arreglos o matrices

var nombres = ["Juan","Pepito","Lorca","Juancho","Chichilla"]; //Esto es un Array
var lenguajes = new Array("PHP","JS","GO","PYTHON"); //array en forma de objeto
/*
var elemento = parseInt(prompt("Qué elemento del Array quieres?"));

console.log(nombres[2]); //Buscar lo que hay en la posición x del array
console.log(nombres.length); // Ver cuántos elementos hay en el Array

if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que " + nombres.length);
}else{
    alert(nombres[elemento]);
}
*/

//Recorriendo el Array con un bucle
document.write("<h1>Lenguajes de programación</h1>");
document.write("<ul>");

for(var i = 0; i < lenguajes.length; i++){ //Con el array nombres tmb funciona, es lo mismo
    document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");