/**
 *  Indice Validar que no sea menor a cero y que el elemento exista
 *  en el array
 */

function getbyIdx(array, indice){
    if(indice < 0 || indice > array.length - 1){
        return "Indice no valido";
    }
    return array[indice];
}

let resultado = getbyIdx([1, 2, 3, 4, 5], 2);
console.log(resultado); // 3