"use strict"

//Creación de Objetos

/*const objeto = new Object();    // Evitar esta sintaxis en Javascript (no se suele usar)
https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics
https://lenguajejs.com/javascript/objetos/que-son/ 

La palabra clave thisse refiere al objeto actual en el que se está escribiendo el código.

*/

const objeto = {};    // Esto es un objeto vacío

const player = {
    name: "Manz", //Propiedad "name" y "Manz" valor
    life: 99,
    power: 10,
  };

//Instanciar
// Declaración de una clase (de momento, vacía)
class Animal {}

// Crear (instanciar) un objeto basada en una clase
const pato = new Animal();

class Animal {
  // Propiedades
  name = "Garfield";
  type = "cat";

  // Métodos
  hablar() {
    return "Odio los lunes."
  }
}