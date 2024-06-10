'use strict'

//Funciones de reemplaza para cortar, separar textos, etc

var texto1 = "   Texto de prueba para comprobar cosas    ";

var busca = texto1.replace("prueba", "funciones"); //Reemplaza un texto con otro
var busca1 = texto1.slice(16, 20); //corta el string dependiendo la posicion que asignes
var busca2 = texto1.split(" "); //divide (fragmenta) un string en dos o más sub cadenas usando un separador (divisor). El separador puede ser un solo carácter, otra cadena, o una expresión regular. Probar con: " ", "", '',
var busca3 = texto1.trim(); //Quita espacios sobrantes al principio y al final

console.log(busca);
console.log(busca1);
console.log(busca2);
console.log(busca3);