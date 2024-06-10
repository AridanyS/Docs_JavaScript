'use strict'

// Tabla de multiplicar de un número previamente introducido

/*
var numero1 = parseInt(prompt("Escribe un número para hacer la tabla"));

for(var i = 0; i <= 10; i++){ //Azme un incremento hasta que el num sea menor o igual a 10
    console.log(numero1 + " * " + i + " = " + (i*numero1));
}
*/
//Todas las tablas de multiplicar

var numero1 = parseInt(prompt("Escribe un número para hacer la tabla"));

for(var c = 0; c <= 15; c++){ 
    console.log("Tabla del " + c);
for(var i = 0; i <= 10; i++){ 
    console.log(c + " * " + i + " = " + (i*c));
}
}