/**
 * Crear algoritmo que devuelva numero menor
 * y mayor de un array
 */

let array = [1, 2, 3, 4, 5, 6, 7, 8, -9];

function getMenorMayor(array){
    let menor = array[0];
    let mayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor) {
        menor = array[i];
        }
        if (array[i] > mayor) {
        mayor = array[i];
        }
    }
    return {menor, mayor};
}

let numero = getMenorMayor(array);
console.log(numero); // {menor: 1, mayor: -9}