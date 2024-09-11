// Imprimir en consola los numeros del 1 al 10.
console.log("Imprimir en consola los numeros del 1 al 10");
for (let i = 1; i <= 10; i++){
    console.log(i);
}
console.log("-------------------------");
console.log("Imprimir en consola los numeros del 10 al 1");
// Imprimir en consola los numeros del 10 al 0.

for (let a = 10; a >= 1; a--){
    console.log(a);
}
console.log("-------------------------");
console.log("Imprimir en consola los numeros del 1 al 10 pero solo los pares");
//Imprimir en consola los números del 1 al 10 pero solo los pares.

for (let b = 1; b <= 10; b++){
    if (b % 2 == 0){
        console.log(b);
    }
}
console.log("-------------------------");
console.log("Imprimir en cosola los numeros del 1 al 10 pero solo los impares");
//Imprimir en consola los números del 1 al 10 pero solo los impares.

for (let c = 1; c <= 10; c++){
    if (c % 2 != 0){
        console.log(c);
    }
}

console.log("-------------------------");   
//Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
console.log("Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3");

for (let d = 1; d <= 10; d++){
    if (d % 3 == 0){
        console.log(d);
    }
}

console.log("-------------------------");
//Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
console.log("Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5");

for (let e = 1; e <= 10; e++){
    if ( e % 5 == 0){
        console.log(e);
    }
}

console.log("-------------------------");
//  Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
console.log("Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5");

for (let f = 1; f <= 10; f++){
    if (f % 3 == 0 && f % 5 == 0){
        console.log(f);
    }
}

console.log("-------------------------");
// Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.    
console.log("Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5");

for (let g = 1; g <= 10; g++){
    if (g % 3 == 0 || g % 5 == 0){
        console.log(g);
    }
}
