// // El = asigna un valor 
// // El == es comparativo, mismo valor, sin importar tipo de dato
// // El === es comparativo estricto, tiene que ser mismo valor y mismo tipo de dato
// //El ultimo es el mas recomendado para JS

// //------------------

// // CONDICIONAL IF - IF ELSE
// let puntaje = 1000;
// const logueado = false;
// const edad = 18;

// // if (puntaje === '1000') {
// //     console.log('Si, es igual');
// // } else {
// //     console.log('No, no es igual');
// // }

// // ------------

// // if (logueado) {
// //     console.log('Ahora estas logueado');
// // } else {
// //     console.log('No estas logueado')
// // }

// // ------------

// // if (edad >= 18) {
// //     console.log('Si eres mayor de edad');
// // } else {
// //     console.log('No eres mayor de edad');
// // }

// //------------

// // if (puntaje) {
// //     console.log('Si hay puntaje y es de ' + puntaje);
// // } else {
// //     console.log('No hay puntaje');
// // }

// //---------------

// let dinero = 500;
// let totalCarrito = 500;
// let tarjeta = false;

// //En un if se ejecuta SOLO la primer condicion que se cumpla

// if (dinero === totalCarrito) {
//     console.log('Pago Correcto')
// } else if (tarjeta) {
//     console.log('Pagaste con tarjeta')
// } else {
//     console.log('Fondos Insuficientes')
// }

//-----------------
//Operador or y and

// let dinero = 300;
// let totalCarrito = 500;
// let tarjeta = true;


//Or se tiene que cumplir aunque sea una de las condiciones

// if (dinero >= totalCarrito || tarjeta) {
//     console.log('Pago Correcto')
// } else {
//     console.log('Fondos Insuficientes')
// }

//En and se tiene que cumplir todas las condiciones

// let hora = 24;

// if (hora > 0 && hora <= 12) {
//     console.log('Buenos dias');
// } else if (hora > 12 && hora <= 18) {
//     console.log('Buenas Tardes')
// } else if (hora > 18 && hora <= 24) {
//     console.log('Buenas noches')
// } else {
//     console.log('Horario no valido')
// }

//-----------------

//Ternario (Un if en una sola linea)

let logueado = false;

console.log(logueado ? 'Si, si se logueo' : 'No se logueo')