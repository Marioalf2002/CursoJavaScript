/**
 *  Asignar argumentos y parametros a las funciones
 *  la funcion resivira un parametro que el usario indique
 *  podemos asignar que revisa de 1 a mas parametros, de esta misma
 *  forma los argumentos
 */

function suma(a, b) {
    return a + b;
}

// Le damos los argumentos que recivira la funcion
let resultado = suma(5, 6);
console.log(resultado);
console.log(typeof suma);

// Referencias a todos los argumentos

function suma2(a, b) {
    console.log(arguments);
    return a + b;
}

let resultado2 = suma2(5, 6, 1, 2, 3);
console.log(resultado2);