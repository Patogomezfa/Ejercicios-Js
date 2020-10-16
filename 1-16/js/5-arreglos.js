// //Crear arreglo

// const numeros = [10, 20, 30, 40, 50];
// //A diferencia de JAVA no hace falta declarar el array, ni cuanto va a medir.
// console.table(numeros);

// const meses = new Array('enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio');
// console.log(meses[3]);

//METODOS PARA ARREGLOS

const arreglo = ['Hola', 10, true, "si", null, undefined];
console.log(arreglo.length);
let falsete = "Arreglooo";
//Para comprobar si es un arreglo
console.log(Array.isArray(arreglo));
console.log(Array.isArray(falsete));

//Agregar dato a array
arreglo[6] = "JULIO"
console.log(arreglo);
//O mas facil .. push, siempre agrega al final del array
arreglo.push("OTRO JULIO");
console.log(arreglo);
//Al principio
arreglo.unshift("Al principio");
console.log(arreglo);
//Eliminar del final
arreglo.pop();
console.log(arreglo);
//Eliminar del principio
arreglo.shift();
arreglo.shift();
console.log(arreglo);
//Eliminar segun un rango del arreglo
arreglo.splice(0, 2);
console.log(arreglo);
//Invertir orden
arreglo.reverse();
console.log(arreglo);
//Ordenar un arreglo
let frutas = ['Banana', 'Manzana', 'Pera', 'Anana', 'Frutilla'];
console.table(frutas);
frutas.sort();
console.table(frutas);