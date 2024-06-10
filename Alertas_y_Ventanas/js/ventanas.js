'use strict'

//Esto es una alerta
alert("ventanas");
//Alerta de confirmación
var resultado = confirm("Quieres continuar?"); //Te devuelve true o false
console.log(resultado);

//Ingreso de Datos
var resultado2 = prompt("Qué edad tienes?", "Ingresa aquí la edad");
console.log(typeof resultado2); //IMPORTANTE El resultado siempre será un string, se puede cambiar con parseInt, etc.