/**
 *  Funciones que tendran un proceso definido por el programador
 *  que se podra reusar
 */

// Se crean con la palabra reservada de fuction despues de este se coloca nombre
function saludar() {
    console.log('hola mundo');
}

// Para ejecutar solo llamamos el nombre de la funcion
saludar();

function suma() {
    return 2 + 2;
}

// Podemos imprimir directamente o guardar lo que nos retorna la funcion
console.log("Suma(): " + suma());

let resultado = suma();
console.log("Resultado: " + resultado);