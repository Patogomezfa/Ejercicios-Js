const personas = [
    { nombre: "Pato", edad: 29 },
    { nombre: "Pablo", edad: 50 },
    { nombre: "Alejandra", edad: 20, aprendiendo: "JavaScript" },
    { nombre: "Karen", edad: 26 },
    { nombre: "Miguel", edad: 23 },
];

// console.log(personas);

//FILTER
//Obtener las personas mayores de 25 años
// const mayores = personas.filter((persona) => persona.edad > 25);
// console.log(mayores);

//FIND
//Extraer informacion de alejadra

const alejandra = personas.find((persona) => persona.nombre === "Alejandra");

let { aprendiendo } = alejandra;
console.log(aprendiendo); //Mezclando un poquito de destructuring

//REDUCE
//Trae un acumulado de los registros
let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0); // 0 es el valor inicial que se le da.

console.log(total);
console.log(total / personas.length); //Pa sacar el promedio