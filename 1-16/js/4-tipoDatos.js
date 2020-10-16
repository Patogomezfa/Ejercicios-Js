// //Tipos de datos en Js

// //String
// const nombre = 'Juan';

// console.log(typeof nombre);

// //Numero
// const edad = 80;
// console.log(typeof edad);

// //Boolean
// let aprendiendoJS = true;
// console.log(typeof aprendiendoJS);

// //Ejemplo con valores
// let valor;

// console.log(typeof valor);
// valor = 'Hola';
// console.log(typeof valor);
// valor = true;
// console.log(typeof valor);
// valor = 20;
// console.log(typeof valor);
// valor = "20";
// console.log(typeof valor);

// //El tipo de dato en una variable se almacena en el valor, no en la variable. Por eso es facil cambiar el tipo de dato. Diferente a Java (No es del tipo dinamico)

// Null - El null en JS es un object

// let hijos = null;
// console.log(typeof hijos);

// Arreglos tb son objetos
let lenguajes = ['HTML5', 'JS', 'PHP'];
console.log(typeof lenguajes);

//Objeto
let persona = {
    nombre: 'Pato',
    ciudad: 'Argentina'
}
console.log(typeof persona);

//Fecha tambien es objewto.. muchos objetos en JS
let fecha = new Date();
console.log(typeof fecha);