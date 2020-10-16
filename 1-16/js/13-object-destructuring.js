/* Destructuring -----Sirve para Extraer
Es la forma en la que extraes valores de un objeto
La desventaja es que si un objeto es muy grande tendras que aplicar muchas variables
Pero es muy util para objetos sencillos
 */
const cliente = {
    nombre: "Alejandra",
    tipo: "Premium",
    datos: {
        ubicacion: {
            ciudad: "San Juan",
            pais: "Argentina",
        },
        cuenta: {
            desde: "31-08-20",
            saldo: 4000,
        },
    },
    gustos: {
        musica: ["trance", "rock"],
    },
};

// console.log(cliente);

//Crear la variable
// (forma antigua)

// const nombreCliente = cliente.nombre,
//     tipoCliente = cliente.tipo,
//     ubicacionCliente = cliente.datos.ubicacion;
// console.log(ubicacionCliente.pais);

// //(Forma nueva: destructuring)
//La ventaja es que te crea la variable y tambien te extrae el valor en el mismo paso
// let { nombre, tipo } = cliente;

// let {
//     datos: {
//         ubicacion: { ciudad },
//     },
// } = cliente;

// console.log(ciudad);

// console.log(nombre + " " + tipo);

// //-------------
// //Otro ejemplo
// let {
//     datos: {
//         cuenta: { saldo },
//     },
// } = cliente;

// console.log(saldo);

//En la forma vieja seria..
// const saldoCliente = cliente.datos.cuenta;
// console.log(saldoCliente.saldo);

//-------
//Ootro ejemplito
let { gustos: musica } = cliente;
console.log(musica);