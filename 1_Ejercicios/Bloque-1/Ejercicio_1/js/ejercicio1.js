'use strict'
/*
    Programa que nos lea 2 números y nos diga cual es menor y cual es mayor y si son iguales.
    Plus: Si los número no son un número o son menores o iguales a cero, nos los vuelva a pedir.
*/
var num1 = parseInt(prompt("Escribe algún número"));
var num2 = parseInt(prompt("Escribe otro número"));

//Plus
while(num1 <=0 || num2 <=0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Escribe dos número"));
    num2 = parseInt(prompt("Escribe otro número"));
    alert("Tienes que poner un núm > a 0 en los 2 recuadros");
}
if(num1 > num2){ //Ej sin Plus
        alert(" El número "+ num1+ " es Mayor que el número  "+ num2);}
            else if(num1 < num2){
                alert("El número "+ num1+ " es Menor que el número  "+ num2);}
            else if(num1 == num2){
                alert("El número "+ num1+ " es Igual que el número  "+ num2);}
    else{
        alert("Estos valores no son números, vuelve a introducir los datos");}

/* Intenté anidando if pero me doy cuenta que no funciona porque el siguiente debería ser también > , porque 
if(num1 > num2){
    alert(" El número "+ num1+  " es Mayor que el número  "+ num2);
    if(num1 < num2){
        alert("El número "+ num1+  " es Menor que el número  "+ num2);
        if(num1 == num2){
        alert("El número "+ num1+  " es Igual que el número  "+ num2);
        }
    }
}else{
    alert("Estos valores no son leídos");}
*/
