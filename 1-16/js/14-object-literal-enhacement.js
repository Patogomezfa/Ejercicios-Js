//Object literal enhacement ---- Sirve para unir datos a un objeto

const banda = "Metallica",
    genero = "Heavy Metal",
    canciones = ["Master of Puppets", "Seek & Destroy", "Enter Sandman"];

// //Forma anterior de hacerlo
// const metallica = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones,
// };

// console.log(metallica);

// //Forma mejorada de hacerlo
const metallica = { banda, genero, canciones };

console.log(metallica);