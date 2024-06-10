'use strict'
// Núm introducido por el usuario y la respuesta sea par o impar
var numero = parseInt(prompt("Introduce un número para saber si es par o impar"));
/*
do {
    
    if(numero %2 !== 0){
        console.log("Este número es impar: " + numero);
        numero = parseInt(prompt("Introduce un número para saber si es par o impar"));
    }else if(numero %2 == 0){
        console.log("Este número es par: " + numero);
        numero = parseInt(prompt("Introduce un número para saber si es par o impar"));
    }
} while (numero > 0);
*/

while (isNaN(numero)) { //Mirar el isNaN
    numero = parseInt(prompt("Introduce un número para saber si es par o impar"))
}
if(numero %2 !== 0){
    console.log("Este número es impar: " + numero);
}else{
    console.log("Este número es par: " + numero);
} 





/*
for(i = 0; i < numero; i++){
    if(i %2 !== 0){
        console.log("Este número es impar: " + numero);
    }else if(i %2 == 0){
        console.log("Este número es impar: " + numero);
    }
    
}
*/