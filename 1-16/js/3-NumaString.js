// DE STRING A NUMERO

// Si aparece en color azul en la consola, es porque es un numero, si es negro es un String


// let num1 = 50,
//     num2 = "10",
//     num3 = "tres",
//     num4 = "20.20";

// console.log(num1 + num2);


// console.log(Number(num2) + num1);
// console.log(parseInt(num4) + num1);
// console.log(parseFloat(num4) + num1);

// -------------------------

// let dato;
// dato = Number("20");
// console.log(dato);
// dato = Number("20.20");
// console.log(dato);
// dato = Number("-20.20");
// console.log(dato);
// dato = Number(false);
// console.log(dato);
// dato = Number(true);
// console.log(dato);
// dato = Number(null);
// console.log(dato);
// dato = Number("Hola");
// console.log(dato);
// // NaN significa Not a number

// --------------------------
// To Fixed (Se usa solo para numeros, le quita los decimales o hasta ctos dc cortar)
// let numero1 = "890021215148.02186748413210564";
// let numero2 = 121354658465441.5416587874564;

// console.log(Number(numero1).toFixed(6));
// console.log(numero2.toFixed(3));

// DE NUMEROS A STRING

let dato = 1985415643218541;
let dato2 = "holaLoco"
let dato3 = [1, 2, 3, 4, 5, 6, 7, 8];

dato = String(dato);
dato = String(dato);

console.log(dato);
console.log(dato.length); //length solo sirve para strings, hay que parsear antes
console.log(dato2);
console.log(dato2.length);
console.log(dato3);
console.log(dato3.length);