// Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.

const numeros =[2,4,6,8,10];

function sumaArray(numeros){
    let suma = 0;
    for (let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    return suma;
}
console.log(sumaArray(numeros));

// Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.

function promedioArray(sumaArray){
    let promedio = sumaArray / numeros.length;
return promedio;
}

console.log(promedioArray(sumaArray(numeros)));

//Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.

const nombres = ["vicente", "javier", "makarena", "alejandra"];

function MayusArray(nombres){
    let nombresMayus = [];
    for (let i = 0; i < nombres.length; i++){
        nombresMayus.push(nombres[i].toUpperCase());
    }
    return nombresMayus;
}  

console.log(MayusArray(nombres));

//Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.

const numeros1 = [1,2,3,4,5,6,7,8,9,10];

function paresArray(numeros1){
    let numerosPares = [];
    for (let i = 0; i < numeros1.length; i++){
        if (numeros1[i] % 2 === 0){
            numerosPares.push(numeros1[i]);
        }
    }
    return numerosPares;
}

console.log (paresArray(numeros1));