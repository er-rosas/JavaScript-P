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

// En este ejemplo el usuario entrará dos números. Debe devvolver la diferencia entre el mayor y el menor

// Si el usuario entre el 5 y el 8, el programa devolverá 3 (8 - 5)

let num05_01 = parseInt(prompt("Ingrese el primer numero"))
let num05_02 = parseInt(prompt("Ingrese el segundo numero"))

let diferencia05
if (num05_01 < num05_02) {
    diferencia05 = num05_02 - num05_01
} else {
    diferencia05 = num05_01 - num05_02
}

console.log(`La diferencia entre ${num05_01} y ${num05_02} es ${diferencia05}`)


//0-6

// Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, cerveza, refresco, agua. Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.

// Un cliente ellige vino, aparecerá el mensaje vaya a la barra, en caso contrarío dirá que vaya a la tienda.

let dirigirCliente = prompt("Por favor elija una bebida vino, cerveza, refresco, agua.")
let dirCliMinusculas = dirigirCliente.toLocaleLowerCase()

if (dirCliMinusculas === "vino" || dirCliMinusculas === "cerveza") {
    console.log("Diríjase a la barra de bebidas")
} else {
    console.log("Diríjase a la tienda")
}


//0-7

// Este programa te ayuda a viajar. El programa pide al usuario si va a viajar con coche, tren, bicicleta o autobús. Si va en tren o autobus le recordará que lleve dinero para el billete.

// El cliente pide ir en tren, aparecerá el mesnaje "lleva dinero para el ticket"

let viajar06 = prompt("En que medio de transporte viajara coche, tren, bicicleta o autobús")
let viajarMinusculas = viajar06.toLocaleLowerCase()

if (viajarMinusculas === "tren" || viajarMinusculas === "autobús") {
    console.log(`Lleve dinero para el billete de ${viajar06}`)
} else {
    console.log(`Muy bien que tenga un lindo viaje en ${viajar06}`)
}

//0-8

// En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.

// Ejemplo si recorre 100 km en 4 horas, ha ido a una velocidad de 100/4 que son 25km/h. Estaría descalificado.

let kilometros08 = parseInt(prompt("Cantidad de kilometros recorridos"))
let horas08 = parseInt(prompt("Cantidad de horas hechas en el total del recorrido"))
let velocidad08 = kilometros08 / horas08

if (velocidad08 >= 40 && velocidad08 <= 60) {
    console.log("Ha pasado la prueba correctamente")
} else {
    console.log("Usted ha sido descalificado por no promediar la velocidad estipulada")
}


//0-9
//1-0