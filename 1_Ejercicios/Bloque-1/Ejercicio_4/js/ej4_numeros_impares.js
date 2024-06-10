'use strict'
// Mostrar los números impares entre 2 números que han sido introducidos por el usuario

var numero1 = parseInt(prompt("Ingrese el numero 1: "));  
var numero2 = parseInt(prompt("Ingrese el numero 2: "));

while (numero1 < numero2) {
    numero1++;
    if(numero1%2 != 0){ //módulo de algo % 2 != 0 es siempre IMPAR --> Si  fuese: n %2 != 1 --> Sería siempre par
        console.log(numero1);
    }
}
