'use strict'
/*Calculadora: 
-Pida dos números por pantalla
-Si ponemos mal los números que lo vuelva a pedir
-Construcción con alert y el resultado en consola 
*/

// Calculadora
var numero1 = parseInt(prompt("Primer Número"));
var numero2 = parseInt(prompt("Segundo Número"));

while(isNaN(numero1) || isNaN(numero2)){
    alert("Por favor, introduzca solo números");
    numero1 = parseInt(prompt("Primer Número"));
    numero2 = parseInt(prompt("Segundo Número"));
}
while(isNaN!=(numero1) || isNaN!=(numero2)){
    //Mostrar resultado en pantalla
    var resultadoPantalla = ("La suma de los dos números seleccionado es: " + (numero1+numero2)) + "<br/>"+ 
                            ("La resta de los dos números seleccionado es: " + (numero1-numero2)) + "<br/>"+ 
                            ("La multiplicación de los dos números seleccionado es: " + (numero1*numero2)) + "<br/>"+ 
                            ("La división de los dos números seleccionado es: " + (numero1/numero2));
    document.write(resultadoPantalla);
    //Mostrar resultado en Alert
    var resultadoAlert = ("La suma de los dos números seleccionado es: " + (numero1+numero2)) + "\n"+ //La "\" altgr + botón a la izquierda del 1
                         ("La resta de los dos números seleccionado es: " + (numero1-numero2)) + "\n"+ //Para mostrar saltos de línea en consola o alerts se usa /n, no /br
                         ("La multiplicación de los dos números seleccionado es: " + (numero1*numero2)) + "\n"+ 
                         ("La división de los dos números seleccionado es: " + (numero1/numero2));   
    alert(resultadoAlert);
    //Mostrar resultado en console.log
    console.log("La suma de los dos números seleccionado es: " + (numero1+numero2));
    console.log("La resta de los dos números seleccionado es: " + (numero1-numero2));
    console.log("La multiplicación de los dos números seleccionado es: " + (numero1*numero2));
    console.log("La división de los dos números seleccionado es: " + (numero1/numero2));
    break;
}


