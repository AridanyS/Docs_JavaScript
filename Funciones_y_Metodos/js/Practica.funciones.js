"use strict"
//Conseguir un número aleatorio entre el 1 y el 10
function getRandomNumber(){
    //Conseguimos un núm aleatorio entre 1 y 9 (0.923124212), (0.44553434). Aleatorios
    const random = Math.random(); //Puedo minimizar el código de esta forma: const random = ~~(Math.random() * 10); https://lenguajejs.com/javascript/introduccion/funciones/
    //Multiplicamos por 10 para q la parte entera en vez de ser 0,... siempre sea 4,... 7,...
    const multiplied = random * 10;
    //Truncamos para quedarnos solo con el número entero
    const rounded = Math.floor(multiplied);
    //El resultado le sumas uno para que el resultado sea entre 1 a 10. Si lo dejamos así te da resultados entre 0 y 9
    const result = rounded + 1; 
    return result
}
getRandomNumber();

//FUNCTION EXPRESSION (FUNCIÓN ANÓNIMA) o FUNCIONES LAMBDA
//Es una función a la que se le asigna una variable
//Cuidado con el Hoisting https://www.aprendejavascript.dev/clase/funciones/function-expression
const suma = function() {
}

//ARROW FUNCTIONS
const miFuncionFlecha = () => {
// código a ejecutar
}
//Se pueden omitir los paréntesis si solo tenemos un parámetro
const saludar = nombre => {
    console.log("Hola " + nombre)
}
//Más ejemplos funciones flecha
// Declaración de función regular
function sumar(a, b) {
    return a + b
  }
  // Función flecha
  const sumarFlecha = (a, b) => {
    return a + b
  }
  // Función flecha con Return Implícito. Muy útil en funciones de una sola línea
  const sumarUnaFlecha = (a, b) => a + b;

//RECURSIVIDAD https://www.aprendejavascript.dev/clase/funciones/recursividad
//Una funciones que se llama a sí misma
  function cuentaAtras(numero) {
    // Condición base: Si el número que recibe es
    // menor de 0 entonces salimos de la función
    if (numero < 0) { return }
  
    // Si el número era mayor o igual a 0, lo mostramos
    console.log(numero)
  
    // Y llamamos a la función con el número anterior
    cuentaAtras(numero - 1)
  }
  cuentaAtras(3);
//Recursividad devolviendo un valor
  function factorial(n) {
    // Condición base: Si el número es 0 o 1, devolvemos 1
    // y no llamamos a la función de nuevo
    if (n === 0 || n === 1) {
      return 1
    } else {
      // Si el número es mayor que 1, llamamos a la función
      return n * factorial(n - 1) //Aquí vuelve a llamar a la función hasta que llegue a 1 o 0 y para
    }
  }
  console.log(factorial(5)) // Resultado: 120
  console.log(factorial(3)) // Resultado: 6
//Función de ejemplo que calcula la suma de los primeros n números enteros de forma recursiva
  function sumando(A) {
    if (A === 0) {
    return 0
    }else{
    return A + sumando(A - 1);
    }
  }
  console.log(sumando(5));
  //Función que calcula la sucesión o serie de Fibonacci. En este caso sin recursividad
  //Fibonacci(6); esto sería: En la posición 6 de Fibonacci está el 8
  function Fibonacci(num){
    const fib = [0,1];
    //iteramos a partir de la posición 2 hasta el num seleccionado
    for (let i = 2; i <= num; i++){
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[num];
  }