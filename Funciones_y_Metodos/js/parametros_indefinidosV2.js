"use strict"

//Sumar todos los números

function sumar(...arr){
    var total = 0;
    /*arr.forEach(function(a){
        total += a;
    }); Funciona de igual forma pero sin función flecha*/
    arr.forEach(elemento => total += elemento);
    console.log(total);
}
sumar(40,50,70,82,90);