'use strict'

var nombres = ["Juan","Pepito","Lorca","Juancho","Chichilla"]; //Esto es un Array
var lenguajes = new Array("PHP","JS","GO","PYTHON"); //array en forma de objeto

for(let lenguas in lenguajes){ //Itera como el for each pero es incluso más limpio
    document.write("<li>" + lenguajes[lenguas] + "</li>");
}

document.write("</ul>");