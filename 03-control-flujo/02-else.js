/**
 *  Operar con condicion if else
 * if (condicion) {
 *   código a ejecutar si la condición es verdadera
 * } else {
 *  código a ejecutar si la condición es falsa
 * }
 * Ejemplo:
 */

let edad = 17;

if (edad > 17){
    console.log('Es Mayor a 17 años');
} else {
    console.log('No es Mayor a 17 años');
}

/**
 *  if anidados
 */

if (edad > 17){
    console.log('Es Mayor a 17 años');
} else if (edad > 13) {
    console.log('Usuario necesita estar acompañado');
} else {
    console.log('No es Mayor a 17 años');
}