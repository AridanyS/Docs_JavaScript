'use strict'
//Funciones anónimas
function sumame(numero1, numero2, sumaYmuestra, sumapordos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumapordos(sumar);
    
    return sumar;
}

sumame(5, 7, function(dato){
    console.log("La suma es: ", dato);
},function(dato){
    console.log("La suma por dos es: ", (dato*2));
});