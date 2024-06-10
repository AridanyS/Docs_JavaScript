'use strict'

//Condicional IF

var edad = 83;
var nombre = "Aridany";

if(edad >= 18){ //si esto se cumple az esto
    console.log( nombre+ " tiene "+edad+" años, es Mayor de edad");
    if(edad <= 33){ //Anidar IF (Si a parte)
        console.log("Eres millenial");
    }else{ //Si no
        console.log("Ya no eres millenial");
    }
    if(edad >=80){
        console.log("Eres un anciano");
        if(edad >=90){ //Otra Anidación de IF
        console.log("Mayor de 90 años");
        }else if((edad >=81) && (edad <=89)){ //Si cumple el primer if pero no el segundo:
            console.log("Y estás entre los 81 y 89 años");
        }
    }else{
        console.log("No eres un anciano");
    }
//Si el primer IF no se cumple, se realiza esto:
}else{
    console.log( nombre+ " tiene "+edad+" años, es Menor de edad");
}




/* Este primer código también es funcional (arreglado)

if(edad >= 18){
    console.log( nombre+ " es mayor de edad, tiene "+edad+" años");
if(edad >= 40){
    console.log("Además, es generación Baby Boom");
}else if(edad <35){
    console.log("No llega a ser generación Baby Boom");
} 
}else{
    console.log( nombre+ " es menor de edad");
}

*/

