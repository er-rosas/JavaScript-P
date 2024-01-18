// Se trata de escribir un script que diga si un número es par o es impar.

// Recordemos que un número es par si al dividirlo por 2 da como resto 0.

// Si el número es 17, el programa debe decir que es impar.

let numPARoIMPAR = parseInt(prompt("Escriba un numero entero"))
let parOIMPAR = numPARoIMPAR % 2


if (parOIMPAR === 0) {
    console.log("El numero es par")
} else {
    console.log("Es impar")
}