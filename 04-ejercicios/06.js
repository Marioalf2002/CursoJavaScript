/**
 * Crear algoritmo que deuvelva cantidad de numeros
 * positivos, negativos y ceros en un array
 */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

function cuantosPositivosNegativosCeros(array) {
  let positivos = 0;
  let negativos = 0;
  let ceros = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positivos++;
    } else if (array[i] < 0) {
      negativos++;
    } else {
      ceros++;
    }
  }

  return {
    positivos,
    negativos,
    ceros,
  };
}

let numeros = cuantosPositivosNegativosCeros(array);
console.log(numeros); // {positivos: 9, negativos: 9, ceros: 1}