//Crea una función que reciba un string y retorne el string en mayúsculas.
const nombre = "vicente";

function Mayus (nombre){
    return nombre.toUpperCase();
}
console.log(Mayus(nombre));
// Crea una función que reciba un string y retorne el string en minúsculas.
const nombre1 = "JAVIER";

function Minus (nombre1){
    return nombre1.toLowerCase();
}
console.log(Minus(nombre1));
// Crea una función que reciba dos números y retorne la resta de los dos números.
const numero1 = 7;
const numero2 = 4;

function resta(numero1, numero2){
    return numero1 - numero2;
}

console.log(resta(numero1, numero2));
// Crea una función que reciba dos números y retorne la division de los dos números.
function dividir(numero1, numero2){
    return numero1 / numero2;
}

console.log(dividir(numero1, numero2));
// Crea una función que reciba dos números y retorne la multiplicación de los dos números.
function multiplicar(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplicar(numero1, numero2));
// Crea una función que reciba un string y retorne la cantidad de caracteres que tiene.
function tamaño(nombre){
    return nombre.length;
}   

console.log(tamaño(nombre)); 