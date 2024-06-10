"use strict"
//Palíndromo

//Creamos la función
function Palindromo(){
//Usuario ingresa la palabra y lo pasamos todo a minúscula
var inserta = prompt("Inserta una palabra para comprobar si es palíndroma").toLowerCase();
//Convertimos el string en array e invertimos el orden de la palabra y la pasamos a string de nuevo
var palabraInvertida = inserta.split('').reverse().join('');
console.log(palabraInvertida);
//Comprobamos si es palíndromo
if (inserta === palabraInvertida) {
    alert("Esta palabra es palíndroma");
    
}else{
    alert("Esta palabra no es palíndroma");
}
}
Palindromo();
