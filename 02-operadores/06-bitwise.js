/**
 *  Codigos Binarios
 * 
 *  Decimal: 0,1,2,3,4,5,6,7,8,9
 *  Binario: 0,1
 * 
 *  Bit digitos en binario = 0 o 1
 *  Byte son 8 bits se pueden almacenar caracteres, numeros y simbolos
 * 
 *  Byte: 00000000 -> 0
 *  Byte: 00000001 -> 1
 *  Byte: 00000010 -> 2
 *  Byte: 00000011 -> 3
 *  Byte: 00000100 -> 4
 *  Byte: 00000101 -> 5
 *  Byte: 00000110 -> 6
 *  Byte: 00000111 -> 7
 *  Byte: 00001000 -> 8
 *  Byte: 00001001 -> 9
 */

// Combina los byte unienod los valores 1 en uno solo asi genera un nuevo byte
console.log(1 | 3); // imprime 00000011
console.log(1 | 4); // imprime 00000101
console.log(3 | 5); // imprime 00000111

// Compara la posiciones donde compartan el 1 e imprime el byte resultante
console.log(1 & 3); // imprime 00000001
console.log(1 & 4); // imprime 00000000
console.log(3 & 5); // imprime 00000001