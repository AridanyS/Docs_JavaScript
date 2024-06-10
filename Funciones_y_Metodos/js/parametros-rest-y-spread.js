'use strict'
//parametros rest y spread. Parámetros indefinidos
function listafrutas(fruta1, fruta2, ...restodefrutas){ //tipo rest: Capturas el resto de parámetros indefinidos en un array
    console.log("Fruta1 es: ", fruta1);
    console.log("Fruta2 es: ", fruta2);
    console.log(restodefrutas);
}
listafrutas("Naranja","Manzana","Pera","Limón","sandia");

var frutas = ["Naranja","Manzana"];
listafrutas(...frutas,"Pera","Limón","sandia"); //spread
