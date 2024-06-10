'use strict'
/*
Utilizando un bucle, mostrar suma y media de los números introducidos hasta que el usuario introduzca
un número negativo, ahí que no lo muestre (mensaje de solo positivos)
*/

//Lo mío + el instructor
var contador = 0
var suma = 0

do {
    var numero1 = parseInt(prompt("Introduce números positivos"));
    suma += numero1; // Es igual a "suma = suma + numero1"
        alert("La suma total de los número es: " + suma);
    contador++;
    if(isNaN(numero1) || numero1 <=0){
        alert("La suma de los número es: " + suma + " Y la media es: " + suma/contador);
    }
} while (numero1 >= 0);


/*Mi forma correcta pero con mejoras
do {
   var numero1 = parseInt(prompt("Introduce números mientras no sean negativos"));
   var numero2 = parseInt(prompt("Introduce otros números mientras no sean negativos"));
   var sumaN = numero1 + numero2;
   var mediaN = sumaN/2;
if(numero1 > 0 && numero2 > 0){
    alert("Esta es la suma de los números: " + sumaN) + alert("Esta es la media de los números: " + mediaN);
}else{
    alert("Los números introducidos no son mayores a 0");
}
}while(numero1 && numero2 != 0);
*/


/*
-------Probando cosas---------

var num1 = parseInt(prompt("Escribe algún número mayor que 0"));
var num2 = parseInt(prompt("Escribe otro número mayor que 0"));
var resultadoSuma = num1 + num2;
var resultadoMedia = resultadoSuma/2
var resultadoFinal = (num1 > 0 && num2 > 0)

while(num1 > 0 && num2 > 0){
    alert("Esta es la suma de los números: " + resultadoSuma) + alert("Esta es la media de los números: " + resultadoMedia);
    while(num1 < 0 && num2 <0){
        alert("Has introducido un número menor que cero");
    break;
    }
    break
}


while(num1 > 0 && num2 > 0){
    alert("Esta es la suma de los números: " + resultadoSuma) + alert("Esta es la media de los números: " + resultadoMedia);
    num1 + num2;
}

do {
    if(resultadoFinal != true){
        alert("Valor introducido no es mayor a 0");
        break;
    }
    alert("Esta es la suma de los números: " + resultadoSuma) + alert("Esta es la media de los números: " + resultadoMedia);
    break;
    
} while (resultadoFinal);
*/
