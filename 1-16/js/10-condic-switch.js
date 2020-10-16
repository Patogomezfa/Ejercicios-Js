//Cuando hay muchos else if, conviene usar switch.
//Es igual para php
//-----------------------
//CONDICIONAL SWITCH STATEMENT 

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        efectivo();
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}, revisaremos que tenga fondos `);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}, espere un momento... `);
        break;
    default:
        console.log('Método no válido, pago no realizado');
        break;
}
// EL TEMPLATE STRINGS ES CON $ no con & Boluuuuuuuuuuuu
function efectivo() {
    console.log(`Pagaste con ${metodoPago}`);
}