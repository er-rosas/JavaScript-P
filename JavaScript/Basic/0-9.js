// Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias

// .5 comensales,

// Se necesitará:

// 1 kg de papas

// 5 huevos

// 300 gr de cebolla

let comensales = parseInt(prompt("Numero de comensales"))

let patatasPersona = 200 * comensales

let huevos = (parseInt(patatasPersona) / 1000) * 5
let cebolla = (parseInt(patatasPersona) / 1000) * 300

console.log(`Por ${comensales} comensales se necesitan en total ${patatasPersona} patatas, ${huevos} huevos y ${cebolla} gramos de ceolla`)