'use strict'
/*
//Para usar las funciones se usa la palabra reservada function
function calculadora(){
    //Instrucciones
    console.log("Prueba")
    return "Salchipapa"; //Con return la función te devuelve lo escrito || Si en la consola colocamos: calculadora(); nos devuelve "Salchipapa"
//(toda sentencia que se encuentre tras un return es ignorada).
}
//De esta forma te lo devuelve en consola directamente y si en la misma ponemos la función nos sigue devolviendo el resultado. Se puede llamar cuantas veces se quiera
//Invocar o llamar a la función
console.log(calculadora(),calculadora(),calculadora()); 


//Llamándolo de otra forma
function prueba1(){
    return "Probando";
}
var funcprub = prueba1();

console.log(funcprub);
*/

/*function calculadora(numero1, numero2){
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicación: " + (numero1*numero2));
    console.log("División: " + (numero1/numero2));
    console.log("-----------------");

    return "Soy la Calculadora";
}
calculadora(20, 10);
calculadora(50, 60);
*/
//Esto son parámetros
function calculadora(numero1, numero2){
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicación: " + (numero1*numero2));
    console.log("División: " + (numero1/numero2));
    console.log("-----------------");

    //return "Soy la Calculadora";
}
for(var i = 1; i <=10 ; i++){
    console.log(i);
    calculadora(i,8);
}