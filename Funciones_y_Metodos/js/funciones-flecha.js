'use strict'
/*
//Funciones flecha
function sumame(numero1, numero2, sumaYmuestra, sumapordos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumapordos(sumar);
    
    return sumar;
}
//Ejemplo aquí
sumame(5, 7, (dato) =>{
    console.log("La suma es: ", dato);
},(dato) =>{
    console.log("La suma por dos es: ", (dato*2));
});
*/

//Otro ejemplo
/*function sumar(a,b){
    return a + b;
}
*/
const sumar = (a,b) => a+b;

const saludar = () => {
    console.log("Hola Mundo");
}
console.log(sumar(5,5));
saludar();
