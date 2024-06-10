'use strict'

//parametros opcionales
function calculadora(numero1, numero2, mostrar = false){ //Mostrar viene inicializado o por defecto en false
    if(mostrar == false){
        console.log("Suma: " + (numero1+numero2));
        console.log("Resta: " + (numero1-numero2));
        console.log("Multiplicación: " + (numero1*numero2));
        console.log("División: " + (numero1/numero2));
        console.log("-----------------");
    }else{
        document.write("Suma: " + (numero1+numero2) + "<br>");
        document.write("Resta: " + (numero1-numero2) + "<br>");
        document.write("Multiplicación: " + (numero1*numero2) + "<br>");
        document.write("División: " + (numero1/numero2) + "<br>");
        document.write("-----------------");
    }
        //return "Soy la Calculadora";
}
calculadora(1,4);
calculadora(20, 10, true);