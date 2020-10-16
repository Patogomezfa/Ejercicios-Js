// //Object Literal (Mas estatico)

// const persona = {
//     //propiedades
//     nombre: "Patricio",
//     apellido: "Gomez",
//     edad: 29,
//     trabajo: true,
//     musica: ['Indie', 'Punk', 'Electronica', 'Grunge'],
//     hogar: {
//         ciudad: 'San Juan',
//         pais: 'Argentina'
//     }
// }

// console.log(persona.musica[3]);
// //Dos formas de acceder a las propiedadesd de un objeto
// console.log(persona.hogar.ciudad); //Mas comun
// console.log(persona['hogar']['pais']);


// //Template String

// const nombre = 'Patricio',
//     trabajo = 'Desarrollador Web';

// console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo); //Si falta un + muestra error de que falta un )

// console.log(`Nombre: ${nombre}, Trabajo: ${trabajo} `);

// const contenedorApp = document.querySelector('#mensaje');
// const contenedorApp2 = document.querySelector('#mensaje2');

// let html = '<ul>' +
//     '<li> Nombre: ' + nombre + '</li>' +
//     '<li> Trabajo: ' + trabajo + '</li>' +
//     '</ul>';

// contenedorApp.innerHTML = html;

// let html2 = `<ul>
// <li>Nombre: ${nombre}</li>
// <li>Trabajo: ${trabajo}</li>
// `;
// contenedorApp2.innerHTML = html2;

// // -------------------------------------

// //El this se usa cdo trabajamos con obj
// const persona = {
//     nombre: 'Pato',
//     edad: 29,
//     anioNac: function() {
//         return new Date().getFullYear() - this.edad;
//     }
// }
// console.log(persona.anioNac());

// // Object Constructor (Mas dinamico, Actualmente se utiliza mas)
// //Es similar a POO

// class Tarea {
//     constructor(nombre, urgencia) {
//         this.nombre = nombre;
//         this.urgencia = urgencia;
//     }
// }

// //Crear nuevas tareas

// const tarea1 = new Tarea('Aprender JavaScript', 'Urgente');
// const tarea2 = new Tarea('Preparar cafe', 'Urgente');
// const tarea3 = new Tarea('Pasear al perro', 'Media');
// const tarea4 = new Tarea('Volver al fitosanitario', '0');

// console.log(tarea1);
// console.log(tarea2);
// console.log(tarea3);
// console.log(tarea4);

// //JS en las nuevas versiones ya soporta clases