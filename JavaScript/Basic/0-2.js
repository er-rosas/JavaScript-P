//0-1

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


//0-2

// Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo

// Si num1 es 2 debe decir que num1 es positivo


let num02 = prompt("Escribir un numero positivo o negativo")

if (num02 >= 0) {
    console.log("El numero es positivo")
} else {
    console.log("El numero es negativo")
}

//0-3


// En este ejercicio debes pedri dos números enteros y devolver el cociente de dividir el primero entre el segundo, pero si este es cero no debe hacer la división, sino lanzar un mensaje de error

// Si se entran el número 8 y 2, debe resultar 4

// Si se entran 4 y 0, dbe resultar en un mensaje de error.

let dividendo03 = parseInt(prompt("Ingrese el primer numero"))
let divisor03 = parseInt(prompt("Ingrese el segundo numero"))

let cociente

if (divisor03 != 0) {
    cociente = dividendo03 / divisor03
    console.log(`El resultado de dividir ${dividendo03} entre ${divisor03} es = ${cociente}`)
} else {
    console.log(`Error al dividir entre 0`)
}


//0-4


// Este script pide al usuario que teclee una letra entre A, B, C, D. Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó...

// Si pulsa C le dará mensaj de error.

let letra = prompt("Ingrese una de estas letras A - B - C - D")
let textoEnMiusculas = letra.toLocaleLowerCase()

if (textoEnMiusculas = a) {
    console.log("Haz acertado la letra")
} else {
    console.log("Te equivocaste de letra")
}


//0-5
//0-6
//0-7
//0-8
//0-9
//1-0