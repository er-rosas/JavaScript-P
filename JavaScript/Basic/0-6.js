// Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche, luego le pide el número de kilómetros recorridos. El script debe mostrar el consumo de combustible por kilómetro.

// Un problme matemático muy simple numero de litros dividido por número de kilómetros.

// El usuario teclea

// Num de litros: 20

// Num de kilómetros: 80

// Has consumido 4 l/km

let numLitros = parseInt(prompt("Ingrese el número de litros"))
let numKilometros = parseInt(prompt("Ingrese el número de kilometros"))

let consumido = numLitros / numKilometros

console.log("has consumido " + consumido + " litros")