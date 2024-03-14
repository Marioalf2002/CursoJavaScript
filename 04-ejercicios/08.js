/**
 * Crear algoritmo que tome un array de
 * objetos y devuelva un array de pares
 */

let array = [
    {nombre: 'luis', edad: 20}, 
    {nombre: 'ana', edad: 30}, 
    {nombre: 'jose', edad: 25}
];

let pares = [
    [1, {nombre: 'luis', edad: 20}], 
    [2, {nombre: 'ana', edad: 30}], 
    [3, {nombre: 'jose', edad: 25}]
];

function toPairs(array){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push([i + 1, array[i]]); 
    }
    return result;
}

let resultado = toPairs(array);
console.log(resultado); // [ [ 1, { nombre: 'luis', edad: 20 } ], [ 2, { nombre: 'ana', edad: 30 } ], [ 3, { nombre: 'jose', edad: 25 } ] ]