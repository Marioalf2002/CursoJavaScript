/**
 *  Break y Continue
 */

// Break
// El break se utiliza para salir de un bucle, ya sea for, while o do-while.
// En el caso de los bucles anidados, el break solo sale del bucle más interno.
// Ejemplo:
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// Continue
// El continue se utiliza para saltar a la siguiente iteración del bucle.
// Ejemplo:
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Ejemplo de bucle anidado con break y continue
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j === 3) {
      break;
    }
    console.log(i, j);
  }
}