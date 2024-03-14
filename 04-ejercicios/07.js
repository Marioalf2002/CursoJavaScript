/**
 * Crea algoritmo que deuvelva el precio
 * del producto mas impuesto
 */

function precioMasImpuesto(precio, impuesto){
    return precio + (precio * impuesto / 100);
}

let resultado = precioMasImpuesto(19.90, 0.15);
console.log(resultado); // 22.885