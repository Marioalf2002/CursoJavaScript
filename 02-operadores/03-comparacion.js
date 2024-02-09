/**
 *  Operadores de Comparacion
 *  estos se usan para comprar valores entre variables
 */

let a = 10;

// Compara sin respetar el tipo de dato
console.log(a > 5);     // mayor que
console.log(a >= 5);    // mayor o igual que
console.log(a < 5);     // menor que
console.log(a <= 5);    // menor o igual que
console.log(a == 10);   // igual que
console.log(a != 10);   // distinto que
console.log(a == '10');  // el pregunta por los valores mas no si los tipos de dato son iguales

// Compara respetando el tipo de dato
console.log(a === '10'); 
console.log(a !== '10');