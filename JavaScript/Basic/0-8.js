// En este script debes pedir al usuario un programa de dos dígitos y debes devolver el número de unidades y de decenas, o sea, cada dígito del número.

// Recuerda si divides un número entre 10 el cociente entero es el número de decenas y el resto es el número de unidades

// Si ese teclea el número 45

// Unidades: 5

// Decenas: 4

let numero = parseInt(prompt("Teclea un numero"))
let decenas = parseInt(numero / 10)
let unidades = numero - decenas * 10

console.log(`Tecleaste el numero ${numero} este contiene ${decenas} decenas y ${unidades} unidades.`)