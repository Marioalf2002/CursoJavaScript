/**
 *  Arrays/Arreglos son vectores o matrices
 *  estos tienen posiciones los cuales comienzan desde 0
 */

let animales = [];

animales = [
    'cerdo',
    'caballo',
];

console.log(animales);
console.log(animales[0]);

/**
 *  Podemos dar valores a cada posiciones por separado
 *  tener en cuenta que si seda a valor a una posicion mas grande
 *  ejemplo tenemos matriz de [0,1,2], y damos valor a posicion [10]
 *  las demas posiciones anterior tomaran valores nullos/vacios pero existiran
 */
animales[2] = 'dragon';
animales[10] = 'aguila';
console.log(animales);
console.log(animales[6]);

// Sale dato Object ya que se comporta como uno
console.log(typeof animales);

// Nos da el tamaño maximo del array
console.log(animales.length);