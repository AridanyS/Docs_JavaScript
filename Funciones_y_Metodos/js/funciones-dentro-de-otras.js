'use strict'
//funciones dentro de otras funciones
/*Estas 2 primeras funciones estaban en calculadora pero solo el código. De esta forma no está todo
dentro de una misma función*/
function consola(numero1, numero2){
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicación: " + (numero1*numero2));
    console.log("División: " + (numero1/numero2));
    console.log("-----------------");
}
function pantalla(numero1, numero2){
    document.write("Suma: " + (numero1+numero2) + "<br>");
    document.write("Resta: " + (numero1-numero2) + "<br>");
    document.write("Multiplicación: " + (numero1*numero2) + "<br>");
    document.write("División: " + (numero1/numero2) + "<br>");
    document.write("-----------------");
}
//Las dos funciones anteriores están dentro de esta función
function calculadora(numero1, numero2, mostrar = false){ 
    if(mostrar == false){
        consola(numero1, numero2);
    }else{
        pantalla(numero1, numero2);
    }
}
calculadora(1,4);
calculadora(20, 10, true);