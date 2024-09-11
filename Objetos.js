// Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.

const persona = {
    nombre: "Vicente",
    edad: 25,
    genero: "Masculino",
    estatuta: 1.89,
    estado_civil: "Soltero",
    peso : 80
}

console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Genero:", persona.genero);  
console.log("Estatura:", persona.estatuta, "m");
console.log("Estado civil:", persona.estado_civil);
console.log("Peso:", persona.peso, "Kg");

console.log("----------------------");
//Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.

const caja = {
    lapices: 20,
    libreta: 1,
    plumones : 15,
    fotografias: 5,
    estado : "Buen estado"
}

console.log(caja);
console.log("lapices:", caja.lapices);
console.log("libreta:", caja.libreta);
console.log("plumones:", caja.plumones);
console.log("fotografias:", caja.fotografias);
console.log("estado:", caja.estado);

console.log("----------------------");
console.log("Tipos de datos de la caja")
console.log("caja:", typeof caja);
console.log("lapices:", typeof caja.lapices);
console.log("libreta:", typeof caja.libreta);
console.log("plumones:", typeof caja.plumones);
console.log("fotografias:", typeof caja.fotografias);
console.log("estado:", typeof caja.estado);