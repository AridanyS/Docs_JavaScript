'use strict'

var categorias = ["Comedia","Miedo","Acción"];
var peliculas = ["Risas","Pium Pium","Caca Incoming"];
var cine = [categorias,peliculas]; // Array Multidimensional

//console.log(cine);
console.log(cine[0][1]); //Queremos ir al array multidimensional(cine), después quiero ir al array categorias que está en la posición 0 de cine y dentro de categorías quiero ir al valor acción que está en la posición 1.
console.log(cine[1][2]); //Accedemos a otra dimensión dentro de la multidimensión