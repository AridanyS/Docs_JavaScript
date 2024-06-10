/*'use strict' (modo estricto) sirve para hacer un código más estricto. No permite definir variables sin antes definir el tipo de la misma (var, let, ...), etc
La sintaxis es literalmente la escrita y se pone justo antes del código a ejecutar. ECmascript 6 https://www.ecma-international.org/
*/

//VARIABLES
//Una variables es un contenedor de información (datos).
//alert('Hola Mundo');

var pais = "España";
var continente = "Europa";
var antiguedad = 2019;
var pais_y_continente = pais+' '+continente; //concatenación de 2 strings (en otros lenguajes se usa el operador ".")

pais = "Mexico";
continente = "América";
antiguedad = 2030;

console.log(pais, continente, antiguedad); 
/*console.log permite mostrar el resultado en la consola
En este caso, el alert será España y Europa porque la variables Pais y Continente se ha definido primero, no se ha sustituido el valor.
*/
alert(pais_y_continente);
//si ponemos la var pais y continente justo después de antiguedad sí que cambiaría.

/*
var tester = "hey, hola";
    
    function nuevaFuncion() {
        var hola = "hola";
        alert(hola);
    }
*/