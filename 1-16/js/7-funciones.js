// // Function declaration

// function saludar() {
//     console.log('Hola');
// }

// saludar();

// //La diferencia entre F.Declaration y F.Expression es la sintaxis, pero tambien es que en F.D. podes usarla sin declararla y la F.E. no (como en java)

// // Function expression
// const suma = function() {
//     console.log(1 + 2);
// }

// suma();

//colocar parametros es tomar codigo que esta fuera de la funcion y agregarla a la misma.

// saludar('Pato', 'Programador');

// function saludar(nombre = 'Visitante', trabajo = 'no sabemos') {
//     console.log('Hola ' + nombre + ' tu trabajo es ' + trabajo);
// }

// saludar('Patricio', 'Diseñador grafico');
// saludar('Patricio', 'ser lider');
// saludar('Patricio');
// saludar();

// const suma = function(a = 0, b = 0) {
//     console.log(a + b);
// }
// suma();
// suma(30, 50);
// suma(100, 125);

// // IIFE --- son funciones que se invocan automaticamente

// (function(tecnologia) {
//     console.log('HOLAA! Aqui estoy aprendiendo ' + tecnologia);
// })('Javascript');


// // ----------------------------------
// // *Metodos* o Funciones dentro de los Objetos
// const musica = {
//     reproducir: function(cancion) {
//         console.log('Reproduciendo la cancion: ' + cancion);
//     },
//     pausar: function() {
//         console.log('Pausado...');
//     }
// }

// // Los metodos tambien pueden ir por fuera... como function expression
// musica.borrar = function(id) {
//     console.log('Borrando la cancion con el ID: ' + id);
// }


// musica.reproducir('Hakuna Matata');
// musica.pausar();
// musica.reproducir('Hotel California');
// musica.borrar(1890);

// // --------------------

// //FUNCIONES QUE RETORNAN UN VALOR
// //Arrow Function es nueva caracteristicas de JS => 
// const suma = (a = 0, b = 0) => {
//     return a + b;
// }
// const multiplicar = a => a * 5;
// //Si solo pasas un parametro podes sacarle los parentesis
// //Se puede sacar el return y las llaves, para que la funcion quede mas compacta
// //Si hay mas de un parametro no se sacan los ()
// let total;
// let resultadoSuma = suma(1 + 3);
// total = multiplicar(resultadoSuma);
// console.log(total);

// //Otro ejemplo de ArrowFunction
// let viajando = destino => 'Viajando a la ciudad de ' + destino;

// let viaje;
// viaje = viajando('Barcelona')
// console.log(viaje);