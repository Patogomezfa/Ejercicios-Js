// //For Loop

// const carrito = ['producto 1', 'producto 2', 'producto 3'];
// console.log();

// for (let i = 0; i < carrito.length; i++) {
//     console.log(`Producto en el carrito: ${carrito[i]}`);
// }
// // -----------------------

// //While loop

// // la condicion es evaluada antes de ejecutar el codigo - Tambien puede servir para recorrer un array

// let i = 0;

// while (i < 10) {
//     console.log(` Numero: ${i}`);
//     i++;
// }
// // -----------------------

// //Do while
// //Ejecuta aunque sea una vez -- No es tan usado en JS

// let i = 11;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// ----------------------------------------------
// Otros iteradores de JS

//un arreglo

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

//un arreglo con objetos

const carrito = [
    { id: 1, producto: "Libro" },
    { id: 2, producto: "Camisa" },
    { id: 3, producto: "Disco" },
];

//Un objeto
let automovil = {
    modelo: "Camaro",
    motor: 6.0,
    anio: 1991,
    modelo: "Chevrolet",
};

// for (let i = 0; i < pendientes.length; i++) {
//     console.log(pendientes[i]);
// }
//Otra forma de recorrer un array

// for (pendiente of pendientes) {
//     console.log(pendiente);
// }

// for (producto of carrito) {
//     console.log(producto.producto);
// }

// //iterar objetos
// for (info of Object.values(automovil)) {
//     console.log(info);
// }

//-----------------------------
//FOR EACH - nueva integracion a JS- Acceder a los valores de forma individual.

// pendientes.forEach(function(tarea) {
//     console.log(tarea);
// });
// //Compatible con arrowfuctions
// pendientes.forEach((tarea) => {
//     console.log(tarea);
// });

// //La diferencia entre el forEach(Arriba) y el Map(Abajo) es que el map crea una copia de lo que esta iterando
// pendientes.map((tarea) => {
//     console.log(tarea);
// });

// //---------Ejemplo--------
// //Los dos imprimen la iteracion de la misma forma.

// let Arreglo = pendientes.forEach((tarea) => {
//     // console.log(tarea);
// });
// //En map queda guardada la iteracion
// let Arreglo2 = pendientes.map((tarea) => tarea); //El arrowfunction da por implicito el RETURN (tarea)

// console.log(Arreglo);
// console.log(Arreglo2);

//-------------------

Object.keys(automovil).forEach((info) => {
    console.log(info);
});
console.log("---------------------");
Object.values(automovil).map((info) => {
    console.log(info);
});