'use strict'
// Mostrar números entre 2 números seleccionados por el usuario

/*var numero1 =  parseInt(prompt("Coloca un número"));
var numero2 =  parseInt(prompt("Coloca otro número"));

do {
    if(numero1 > numero2){
        --numero1; //decremento **Contador
        console.log("Hay estos números " + numero1);

    }else if(numero1 < numero2){
        ++numero1; //incremento **Contador
        console.log("Hay estos número: " + numero1);
    }
} while (numero1 !== numero2);
*/

var numero1 = parseInt(prompt("Ingrese el numero 1: "));  
var numero2 = parseInt(prompt("Ingrese el numero 2: "));
   for(var i=numero1; i < numero2; i++){     
    if(i == numero1){ // Si i es = que número 1 (al final) azle un incremento (solo va a ocurrir 1 vez)
        i++;
    }     
    console.log("Te muestro los numeros: " + i); 
}