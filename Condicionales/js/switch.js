'use strict'
//Switch

var edad = 18;
//var imprime = "";

switch(edad){
case 18:
    //imprime = "Cumples con la mayoría de edad"; También funcionaría de esta forma.
    console.log("Cumples con la mayoría de edad");
break;
case 25:
    console.log("Tienes 25");
break;
case 40:
    console.log("Clavicie inminente");
break;
default:
    console.log("Dato no reconocido");
}
//console.log(imprime);


/* Ejemplo con Prompt
var edad = prompt("Introduce tu edad");
switch(edad){
    //Prompt te lo pasa a string, por eso no lo reconoce sin las comillas
    case '18': 
        alert('Eres mayor de edad');
    break;
    default:
        alert('No reconocido');
}
*/