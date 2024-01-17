// 1. ¿Qué es JavaScript?
// JavaScript es un lenguaje de programación de alto nivel que se utiliza principalmente para hacer que las páginas web sean interactivas. Puede ejecutarse en el lado del cliente (navegador) y, más recientemente, en el lado del servidor (Node.js).

// 2. Variables y Tipos de Datos:
// Variables: Se utilizan para almacenar valores. Se declaran con var, let, o const.
// var nombre = "Juan";
// let edad = 25;
// const PI = 3.1416;

// Tipos de Datos:
//     String: Texto.
//     Number: Números.
//     Boolean: Verdadero o Falso.
//     Array: Colección ordenada.
//     Object: Colección no ordenada de pares clave-valor.

// 3. Operadores:
//     Aritméticos: +, -, *, /, %.
//     Comparación: ==, ===, !=, !==, <, >, <=, >=.
//     Lógicos: && (and), || (or), ! (not).

// 4. Estructuras de Control:
//     Condicional (if-else):
//         if (condicion) {
//             // código si la condición es verdadera
//         } else {
//             // código si la condición es falsa
//         }
//
//    Bucle (for):
//        for (let i = 0; i < 5; i++) {
//            // código a ejecutar en cada iteración
//        }

// 5. Funciones:
//     Las funciones son bloques de código reutilizables.
//         function saludar(nombre) {
//             return "Hola, " + nombre + "!";
//         }
//
//         let mensaje = saludar("Juan");
//         console.log(mensaje);

// 6. Objetos:
//     Los objetos son colecciones de propiedades (clave-valor).

//     let persona = {
//         nombre: "Juan",
//         edad: 25,
//         estudios: ["Ing. Informática", "Matemáticas"]
//     };

// 7. Eventos:
//     JavaScript se utiliza comúnmente para manejar eventos del navegador.

//     document.getElementById("boton").addEventListener("click", function() {
//         alert("¡Botón clickeado!");
//     });

// 8. DOM (Document Object Model):
//     Representación de la estructura de un documento HTML/XML que JavaScript puede manipular.

//     // Cambiar el contenido de un elemento HTML
//     document.getElementById("miElemento").innerHTML = "Nuevo Contenido";

// 9. AJAX (Asynchronous JavaScript and XML):
//     Permite realizar solicitudes asíncronas al servidor y actualizar la página sin recargarla.

//     // Ejemplo con la librería fetch
//     fetch('https://api.example.com/data')
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error('Error:', error));

// 10. Async/Await:
//     Para manejar promesas de forma más legible.

//     async function obtenerDatos() {
//         let respuesta = await fetch('https://api.example.com/data');
//         let datos = await respuesta.json();
//         console.log(datos);
//     }



// 0-1

// Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.
// Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100.

// Precio 100€

// Iva: 21%

// El total son 121 €.

let precio = 100;
let iva = 21;
let precioTotal = precio + precio * iva / 100;
console.log("El precio total de la compra es " + precioTotal);


// 0-2

// En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
// El area la calculas como lado multiplicado por lado. El perémetro es la suma de los cuatro lados.

// Lado 40

// El area es 1600

// El perímetro es 169

let ladoCuadrado = 40

let area = ladoCuadrado * ladoCuadrado
let perímetro = ladoCuadrado + ladoCuadrado + ladoCuadrado + ladoCuadrado

console.log("El lado del cuadrado es " + ladoCuadrado)
console.log("El area del cuadrado es " + area)
console.log("El perimetro del cuadrado es " + perímetro)


// 0-3

// Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.

// Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"

// Aparecerá el prompt y el usuario escribirá su nombre:

// Usuario escribe juan

// Hola Juan.

let nombre = prompt("escribe tu nombre");
let saludo = "Hola "+nombre;
console.log(saludo);



// Solicitar al usuario que escriba su nombre usando prompt
var nombreUsuario = prompt("Escribe tu nombre");

// Saludar al usuario con un mensaje que incluya su nombre
alert("Hola " + nombreUsuario + ".");


// 0-4

// En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.

// Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.

// Si el usuario teclea:

// 3
// 2
// 4

// La media de los números es 3.

let a = parseInt(prompt("Ingrese el primer numero"))
let b = parseInt(prompt("Ingrese el segundo numero"))
let c = parseInt(prompt("Ingrese el tercer numero"))

let media = (a + b + c)/3
console.log("La media de los números es " + media)

// Pedir al usuario la cantidad de números a ingresar
let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números:"));

// Validar que la cantidad ingresada sea un número positivo
while (isNaN(cantidadNumeros) || cantidadNumeros <= 0) {
    cantidadNumeros = parseInt(prompt("Ingrese una cantidad válida de números (mayor a 0):"));
}

// Inicializar la variable para la suma
let suma = 0;

// Pedir al usuario los números y calcular la suma
for (let i = 1; i <= cantidadNumeros; i++) {
    let numero = parseInt(prompt("Ingrese el número " + i + ":"));

    // Validar que se ingrese un número
    while (isNaN(numero)) {
        numero = parseInt(prompt("Ingrese un número válido para el número " + i + ":"));
    }

    suma += numero;
}

// Calcular el valor medio
let valorMedio = suma / cantidadNumeros;

// Mostrar el resultado
console.log("El valor medio de los números ingresados es: " + valorMedio);


// 0-5

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


// 0-6

// Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.

// Recuerda una hora son 6o minutos y cada minuto son 60 segundos.

// horas : 2

// minutos 30

// Resultado 2*60*60 + 30*60 = 9000 segundos

let horas = 2
let minutos = 30


let segundos = horas*60*60 + minutos*60

console.log("En este ejercicio hay " + segundos)


// 0-7

// En este script debes pedir al usuario un programa de dos dígitos y debes devolver el número de unidades y de decenas, o sea, cada dígito del número.

// Recuerda si divides un número entre 10 el cociente entero es el número de decenas y el resto es el número de unidades

// Si ese teclea el número 45

// Unidades: 5

// Decenas: 4

let numero = parseInt(prompt("Teclea un numero"))
let decenas = parseInt(numero / 10)
let unidades = numero - decenas * 10

console.log(`Tecleaste el numero ${numero} este contiene ${decenas} decenas y ${unidades} unidades.`)


// 0-8

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


// 0-9

// Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes estar seguro: entiendes las variables.

// Teiens que escribir un prograa que intercambie el valor de dos variables. Al final la primera variable debe terner el valor de la sgudna y la segunda el valor de la primera.

// Antes:

// varUno vale 10, varDos vale 30

// Al final

// varUno vale 30, varDos vale 10


let varUno = 10
let varDos = 30
console.log(`varUno es ${varUno} y varDos es ${varDos}`)

let varTres = varUno
varUno = varDos
varDos = varTres
console.log(`Luego del cambio varUno es ${varUno} y varDos es ${varDos}`)


// 1-0

// No todo van ser números. Escribe un código que dado un número nos devuelva true si es un número par y false si es un número impar. No usar condiconales.

// numero: 50

// ¿Es par? : true

let numeroPARoIMPAR = parseInt(prompt("Escribe un numero entero"))

let res = numeroPARoIMPAR % 2;
console.log(res)
let par = res == 0;

console.log("¿Es par? " + par);


