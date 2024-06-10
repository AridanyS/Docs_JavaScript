'use strict'

//Probar diferencias entre var y let

// Ejemplo con Var
var numero = 100;
console.log(numero); // value = 100

if(true){
    var numero = 50;
    console.log(numero); // value = 50
}
console.log(numero); // value = 50

// Ejemplo con Let
var texto = "Ejemplo uso global var"
console.log(texto);

if(true){
    let texto ="Ejemplo local con Let"
    console.log(texto);
}
console.log(texto);