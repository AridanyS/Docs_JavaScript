'use strict'

//Plantillas de texto

var nombre = prompt("Tu nombre");
var apellidos = prompt("Apellidos");

//La comilla es la que está al lado de la P: ``
var texto = `<h1>Hola que tal</h1>
            <h3>Mi nombre es: ${nombre}</h3> 
            <h3>Mis apellidos son: ${apellidos}</h3>
            `;
//Te permite incluir variables dentro de trozo de código multilínea
document.write(texto);