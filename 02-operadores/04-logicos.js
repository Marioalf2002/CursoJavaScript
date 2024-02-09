/**
 *  Operadores logicos
 *  AND, OR, NOT
 */

// AND
console.log(true && true); // && se debe cumplir en ambos lados
console.log(true && false); // ya que no se cumplen ambos lados retorna false

let mayor = false;
let suscrito = true;
console.log('operador AND', mayor && suscrito);

// OR
console.log('operador OR', mayor || suscrito); // devuelve true si se cumple al menos uno

// NOT
console.log('operador NOT', !mayor); // Se niega una variable