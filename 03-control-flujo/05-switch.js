/**
 * Switch
 * 
 * El switch es una estructura de control de flujo que nos permite evaluar una expresión y compararla con múltiples valores.
 * 
 * Ejemplo:
 */

let dia = 3;

switch(dia){
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('No es un dia de la semana');
        break;
}