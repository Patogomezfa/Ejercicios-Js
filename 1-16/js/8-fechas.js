// //new date es igual a MES, DIA Y AÑO
// const diaHoy = new Date();

// let valor = diaHoy;
// //Retorna el numero del mes = 0 = Enero
// valor = diaHoy.getMonth();

// //Retorna el numero del dia: 0 = Domingo
// valor = diaHoy.getDay();

// //retorna el numero de dia del mes
// valor = diaHoy.getDate();

// //año actual
// valor = diaHoy.getFullYear();

// //minutos de las horas
// valor = diaHoy.getMinutes();

// //las horas del dia
// valor = diaHoy.getHours();

// //timestamp
// valor = diaHoy.getTime();

// //modificar año actual
// valor = diaHoy.setFullYear(1991);
// valor = diaHoy.getFullYear();

// console.log(valor);
// //----------------

const unDia = new Date('1-8-1991');

let valor;

valor = unDia.getDay();

console.log(valor);

//Lee la hora y fecha desde el rejos del usuario. Para mayor seguridad hacer validacion tambien desde el servidor.