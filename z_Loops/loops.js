//1.-*for* para Looop
console.log("*for* para Looop")
//El bucle for es uno de los más utilizados en JavaScript.
// Se emplea cuando conocemos el número exacto de iteraciones
// necesarias. Su estructura básica es:

//for (inicialización; condición; actualización) {
    // Código a ejecutar en cada iteración
//}

for (let i = 0; i < 5; i++) {
    console.log("Iteración número " + i);
}
// Salida: Iteración número 0, Iteración número 1, ..., Iteración número 4

//2.- forEach Loop
console.log("forEach Loop")
// array.forEach(function(elemento, índice, array) {
//     // Código a ejecutar con cada elemento
// });

const numeros = [1, 2, 3, 4, 5,6];
numeros.forEach(function(numero) {
    console.log("Número: " + numero);
});
// Salida: Número: 1, Número: 2, ..., Número: 5

//3.- Iteración de Strings
console.log("Iteracion de Strings")

    //ITERACIÓN CON for LOOP
    console.log("ITERACIÓN CON for LOOP")
const texto = "Hola";
for (let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
}
// Salida: H, o, l, a

    //ITERACIÓN CON for...of
    console.log("ITERACIÓN CON for...of")
//Es una alternativa más elegante y clara para iterar sobre
//los caracteres de un string.
    for (const char of texto) {
        console.log(char);
    }
    // Salida: H, o, l, a

    //ITERACIÓN CON forEach
    console.log("ITERACIÓN CON forEach")
//es un método exclusivo de arrays, podemos convertir un string
//a un array de caracteres utilizando split('') para emplearlo en strings.
texto.split('').forEach(char => console.log(char));
// Salida: H, o, l, a

console.log("1.Sumar todos los números de un array")
const sumar = [1, 2, 3, 4, 5,6];
sumar.forEach(function(sumar) {
    console.log( sumar + sumar);
});

console.log("2.Multiplicar todos los números de un array usando forEach")


console.log("3.Contar cuántas veces aparece la letra -a- en una frase")


console.log("4.Invertir un string")


console.log("5.Calcular el promedio de un array de números usando forEach")


console.log("6.Convertir cada carácter de un string en mayúsculas")


console.log("7.Crear un nuevo array con el cuadrado de cada número de un array original")


console.log("8.Filtrar los números pares de un array en un nuevo array")


console.log("9.Contar cuántas palabras contiene una oración")


console.log("10.Generar la tabla de multiplicar de un número dado")

