'use strict'
/*
    1. Pedir 6 números por pantalla y los meta en un array
    2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
    3. Ordenarlo y mostrarlo
    4. Invertir el orden y mostrarlo
    5. mostrar cuantos elementos tiene el array
    6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice
    (Si es posible utilizar funciones)
*/

//var arr_1 = ["","","","","",""]; Esta es otra forma de hacer saber que es un array con 6 valores vacíos || Tmb dejarlo vacío del todo y añadir el método push

var arr_1 = [new Array(6)];

for(var i = 0; i <= 5; i++ ){
    arr_1[i] = parseInt(prompt("Introduce un número"));
    arr_1.sort(function(a, b){return a - b}); // Explicación aquí: https://www.freecodecamp.org/espanol/news/ordenar-arreglos-en-javascript-como-usar-el-metodo-sort/
}/*para un array con la posición [i] añade el primer valor introducido por el usuario
    para la siguiente posición [i] (ahora1) añade el siguiente valor introducido por el usuario...
*/
console.log(arr_1);
console.log(arr_1.reverse());
console.log(arr_1.length);

var busqueda = parseInt(prompt("Búsqueda del valor a introducir"));
var encontrar = arr_1.findIndex(arr_1 => arr_1 == busqueda); // La función flecha es lo siguiente: function(arr_1, arr_1 == busqueda)
    if(busqueda = encontrar){
        alert("El valor ha sido encontrado en la posición: "+ encontrar);
    }else{
        alert("El valor no ha sido en contrado");
    }
