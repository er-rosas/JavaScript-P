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
