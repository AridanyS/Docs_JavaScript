"use strict"
// Hacemos factorial => Factorial es multiplicar un número entero por los números anteriores => Se simboliza así: 3! => 3 * 2 * 1 = 6
// Factorial se usa para saber cuántas veces se ordena, por ejemplo 3 iconos diferentes. En el caso de tener 3 diferentes se pueden ordenar de 6 formas distintas para que estén en distinto orden
// https://www.youtube.com/watch?v=BKHBESHjGEA&ab_channel=Matem%C3%A1ticasprofeAlex

function factorial(n){
    //Aquí hacemos como un bucle
    if (n > 1){
        //Aquí el factorial
        n = n * factorial(n - 1);
    }
    //Sin el return nos daría undefined
    return n;
}
console.log(factorial(3));