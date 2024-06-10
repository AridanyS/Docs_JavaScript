'use strict'
/*
    Mostrar todos lo num divisores de 1 num introducido por el usuario
*/

let numero = parseInt(prompt("Introduce un número"));
let divisor = 0;
 
while(divisor < numero){
    divisor++;
 
    if(numero%divisor == 0){
        console.log(divisor)
    }
}

/*
var numero = parseInt(prompt("Introduce un número"));
for(var i = 0; i <= numero; i++){
    if(numero%i == 0){
        console.log("Divisor: " + i);
    }

}
*/