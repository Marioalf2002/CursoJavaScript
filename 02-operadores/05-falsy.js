/**
 *  Shot-Circuit
 */

/**
 *  Falsos/Falsy
 * 
 *  false
 *  0
 *  ''
 *  null
 *  undefined
 *  NaN
 */

let nombre = '';
let username = nombre || 'Anonimo'; 

console.log(username);

nombre = 'Mario';
username = nombre || 'Anonimo'; 

console.log(username);

function fn1() {
    console.log('Funcion 1');
    return false;
}

function fn2() {
    console.log('Funcion 2');
    return true;
}

let x = fn1() && fn2();