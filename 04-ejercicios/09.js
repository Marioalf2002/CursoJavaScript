/**
 * Crear algoritmo que devuelva un array
 * de objetos en base a pares
 */

let pairs = [
    [1, {nombre: 'luis'}], 
    [2, {nombre: 'ana'}], 
    [3, {nombre: 'jose'}]
];

let array = [{
    id: 1,
    nombre: 'luis',
}, {
    id: 2,
    nombre: 'ana',
}, {
    id: 3,
    nombre: 'jose',
}];

function toCollection(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let obj = {
            id: array[i][0],
            nombre: array[i][1].nombre
        };
        result.push(obj);
    }
}

let resultado = toCollection(pairs);
console.log(resultado); // [{id: 1, nombre: 'luis'}, {id: 2, nombre: 'ana'}, {id: 3, nombre: 'jose'}]   
