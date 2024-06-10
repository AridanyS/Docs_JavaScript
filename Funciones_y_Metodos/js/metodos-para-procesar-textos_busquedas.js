'use strict'
//Métodos
//Trasnformación de textos 

//Concatenar con método
var uno = "Pruébame";
var dos = "Esta";
var textototal = uno.concat(" "+ dos);

console.log(textototal);

//Métodos de búsqueda

//Métodos con Strings
var prueba1 = "Texto de prueba para comprobar cosas cosas de cosas y más abalorios básicos";
//Métodos con Arrays
var prueba2 = ["Array","De","Ba","Andrés","Prueba","Wachín"];
var prueba3 = ["Prueba","Array","A","String"];
var prueba4 = ["Primero","Segundo","Tercero","Cuarto"];
var prueba5 = ["Primero","Segundo","Tercero","Cuarto"];
var prueba6 = ["Quitar","Poner","PaFuera","Padentro"];
var prueba7 = ["Madrid","Barcelona","Valencia","Girona"];
var prueba8 = ["Uno","Dos","Tres","Cuatro"];
var prueba9 = ["Nueve","Diez","Once","Doce"];
var prueba10 = ["Trece","Catorce","Quince","Dieciséis"];
var prueba11 = ["Diecisiete","Dieciocho","Diecinueve","Veinte"];

var busca = prueba1.indexOf("de"); //encontrar primera coincidencia
var busca1 = prueba1.lastIndexOf("de"); //encontrar última coincidencia
var busca2 = prueba1.search("comprobar"); //donde aparece (similar a indexOf)
var busca3 = prueba1.match("prueba"); //devuelve array con colección de datos
var busca4 = prueba1.substring(14,5); //Devuelve lo que hay entre la posición 14 y 5. Si pones olo 5 a partir de lo que hay en adelante
var busca5 = prueba1.charAt(23); //Devuelve una letra en concreto
var busca6 = prueba1.startsWith("Texto"); //Busca al comienzo del string y devuelve true o false
var busca7 = prueba1.endsWith("de"); //Busca al final del string y devuelve true o false
var busca8 = prueba1.includes("básicos"); //Te busca la palabra exacta dentro del string. ES KEYSENSITIVE, hay que poner la palabra exacta
var busca9 = prueba1.replace("T","t"); // Reemplazar valores
var busca10 = prueba1.toUpperCase(); // Convierte todo a mayúsculas
var busca11 = prueba1.split(' '); // Convierte de String a Array (Probar con simplemente ''. Hace que cada letra sea un elemento del array. Probar también ' '. Te separa cada elemento después del espacio)
var busca12 = prueba3.join(' '); //Convierte de Array a String
var busca13 = prueba4.reverse(); //Ordena el ARRAY a la inversa. Solo ARRAYS
var busca14 = prueba2.sort(); //Permite ordenar Arrays. Por defecto te ordena de forma alfabética. Es KeySensitive
prueba6.splice(1,1,"Numero"); // Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. Atento a la colocación de los índices => prueba6.splice(1,1,"Numero") => Desde el índice 1 quítame 1 (Puedes poner 0 y no quita nada, solo introduce en esa posición) elemento y añade "Numero"
var newarray = prueba7.slice(0,2); //Devuelve una copia de una parte del array. Desde el índice (0), devuelve 2 posiciones.
prueba8.push("Entra"); //Añade un elemento al final del array
prueba9.pop(); //Elimina el último elemento de un Array
prueba10.shift(); //Elimina el primer elemento de un Array
prueba11.unshift("Veintiuno"); //Añade un elemento al principio del Array

//https://dev.to/gdcodev/25-metodos-de-arrays-en-javascript-que-todo-desarrollador-debe-conocer-4a2d

console.log(busca);
console.log(busca1);
console.log(busca2);
console.log(busca3);
console.log(busca4);
console.log(busca5);
console.log(busca6);
console.log(busca7);
console.log(busca8);
console.log(busca9);
console.log(busca10);
console.log(busca11);
console.log(busca12);
console.log(busca13);
console.log(busca14);
console.log(prueba6);
console.log(newarray);
console.log(prueba8);
console.log(prueba9);
console.log(prueba10);
console.log(prueba11);


