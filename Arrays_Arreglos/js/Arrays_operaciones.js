'use strict'

var categorias = ["Comedia","Miedo","Acción"];
var peliculas = ["Risas","Pium Pium","Caca Incoming"];
var cine = [categorias,peliculas];

/*
var elemento = ""; //Se puede omitir esta variable y definirla en el bucle, pero se recomiendo hacerlo así

//peliculas.push("Spiderman"); //Añadir un nuevo elemento al final del array

do{
    elemento = prompt("Añade películas:"); //Aquí colocas las películas a añadir
    peliculas.push(elemento); // Aquí las añade con el método push
}while(elemento != "Acabar"); // Finalización del bucle

peliculas.pop(); //Quita el último elemento del Array con el método pop. Quitaría siempre acabar
//peliculas[0] = undefined; // Cambiamos el valor dentro de la posición x de una propiedad o elemento del Array
*/


//Eliminar un elemento de un Array
var indice = peliculas.indexOf("Pium Pium");
//console.log(indice);//Localizar la posición del elemento a "eliminar"
if(indice = 1){
    peliculas.splice(indice,1); //Elimina elemento dentro del Array. Importante poner la posición a eliminar. Importante tmb hacer primero el indexOf, si no te borra a partir de la posición 1 (incluida).
}
var convertir_string = peliculas.join(); // Convertir array a string. No lo procesa directamentee, hay que introducirl opreviamente en una variable
console.log(convertir_string);
console.log(peliculas);

//Convertir de String a Array

var cadena = "Tontito, Tontito2, Tontito3";
var convierte_array = cadena.split(", "); //Convierte a array todo lo que esté separado por comas y espacios. Importante añadir (", ")
console.log(convierte_array);

//Ordenar Arrays
var juegos = ["Mario Bros","Pillars of Eternity","Stardew Valley","LoL"];
var aguas = ["Fontbella","Teror","Firgas"];
juegos.sort(); //Te ordena alfabéticamente el Array
aguas.reverse();// Te lo ordena pero al revés

console.log(juegos);
console.log(aguas);

/* Prueba con splice
var pruebas = ["Prueba1","Prueba2","Prueba3","Prueba4","Prueba5"];

pruebas.splice(2);

console.log(pruebas);
*/

/*
push
pop
splice
join // convierte array a String
indexOf
split //convertir de string a array
sort //Permite ordenadar Arrays. Por defecto te ordena de forma alfabética
reverse //Permite ordenar arrays pero te lo coloca a la inversa
*/