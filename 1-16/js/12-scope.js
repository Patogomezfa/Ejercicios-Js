//Scope es la visibilidad de una variable.. Local o Global

// la variable "var" se me modifica y puede generar problemas
var musica1 = "Rock global";
// En cambio let y const si la modifico dentro de un ambiente local, en el modo global permanece su valor global

let musica2 = "Rock local";

if ((musica1, musica2)) {
    var musica1 = "Grunge global";
    let musica2 = "Grunge local";
    console.log("Dentro del if es " + musica1);
    console.log("Dentro del if es " + musica2);
}
console.log("Fuera del if es " + musica1);
console.log("Fuera del if es " + musica2);