/**
 *  loops/Ciclos
 * 
 *  while
 *  do while
 *  for
 *  for in
 *  for of
 */

console.log('while');

let i = 0;

while(i < 10){
    console.log(i);
    i++;
}

console.log('do while');

let j = 0;

do{
    console.log(j);
    j++;
}while(j < 10);

console.log('for');

let k = 0;

for(k; k < 10; k++){
    console.log(k);
}

console.log('for in');

let person = { name: 'John', age: 25, weight: 75, height: 1.75 };

for(let key in person){
    console.log(key, person[key]);
}

console.log('for of numbers');

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let number of numbers){
    console.log(number);
}

console.log('for of text');

let text = 'Hello World';

for(let letter of text){
    console.log(letter);
}