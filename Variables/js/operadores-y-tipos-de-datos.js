'use strict'
// Operadores
var num1 = 10;
var num2 = 5;
var resultado = num1 + num2; //Puede ser también - * / %
// El operador % Devuelve el resto entero de dividir los dos operandos

//Concatenamos la variable resultado con el string "El resultado...". Sin el + daría error porque no los estaríamos concatenando"
console.log("El resultado de la operación es: "+resultado); 

// Comprobar el tipo de dato con el operador de tipo de dato: typeof
var numero = 100;
var cadena = "String";
var buleano = true;

console.log(typeof numero+" "+cadena+" "+buleano);

/*Tipos de datos:
Entero: 40
String: "Ejemplo1 'ejemplo2' Ejemplo3" --> las comillas dobles tienen una mayor prioridad que las comillas simples porque es la que utilizamos al principio y el final y las que contenga, secundarias
Coma flotante o decimal:
Booleano: True o Flase -> 1 o 0
Arrays:
Objetos:
*/

/*Algunas funciones

Number: Convertir String a num (cualquier tipo de núm, flotante, decimal etc.)
parseInt: convertir a num entero
parseFloat: convertir a num decimal
String: convertir cualquier variable a un string
.toString

*/