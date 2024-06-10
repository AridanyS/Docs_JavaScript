'use strict'

var nombres = ["Juan","Pepito","Lorca","Juancho","Chichilla"]; //Esto es un Array
var lenguajes = new Array("PHP","JS","GO","PYTHON"); //array en forma de objeto

for(let lenguas in lenguajes){ //Itera como el for each pero es incluso más limpio
    document.write("<li>" + lenguajes[lenguas] + "</li>");
}

document.write("</ul>");

//Búsquedas
//Estamos llamando a la Función lenguas
/*
var busqueda = lenguajes.find(function(lenguas){ //devuelve el primer elemento de un array, si no lo encuentra devuelve undefined. Si lo defines te devuelve dependiendo del elemento buscado y limitaciones añadidas
    return lenguas == "PHP";
});
console.log(busqueda);
*/

//Con esto sabemos donde se encuentra el elemento del Array (posicion) y nos lo muestra
//Lo mismo que arriba pero usando flechas. Código más limpio
var busqueda = lenguajes.find(lenguas => lenguas == "PHP");
console.log(busqueda);

var busqueda = lenguajes.findIndex(lenguas => lenguas == "PHP"); //Permite ver la posición donde se encuentra
console.log(busqueda);

//Encontrar diferentes tipos de valores dentro de un Array

var precios = [10,20,50,82];

var busca1 = precios.some(precio => precio = 10); //Comprueba si algún valor es el aportado. Devuelve true or false

console.log(busca1);