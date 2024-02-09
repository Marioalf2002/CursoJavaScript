// Son Tipo de Referencia

// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer"
let edad = 16;

// Cracion Objeto
let Personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16,
};

// Imprimir Objeto
console.log(Personaje);

// Imprimir Propiedades
console.log(Personaje.nombre);
console.log(Personaje.anime);
console.log(Personaje.edad);

console.log(Personaje['nombre']);
console.log(Personaje['anime']);
console.log(Personaje['edad']);

// Modificar valor Propiedades
Personaje.edad = 13;

let llave = 'edad';
Personaje[llave] = 16;

// Eliminar Propiedades
delete Personaje.anime;
console.log(Personaje);