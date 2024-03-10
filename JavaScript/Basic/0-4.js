// 0-1

// Crea una función que tenga dos argumentos: num1, num2, y que devuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos, no letras o símbolos.  
// Llamo a la función como sumar(3,5) deberá devolver 8.

function sumar(num1, num2) {
    return num1 + num2
}
a = parseInt(prompt("Ingrese el primer número"))
b = parseInt(prompt("Ingrese el segundo número"))
console.log(sumar(a,b))
// 0-2

// Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos.
// Por ejemplo al llamarla como esPar(5) me dará false, mientras que con esPar(6) me dará true.

let num_02a
let result

function esPar(num_02) {
    if (isNaN(num_02)) {
        return alert("Por favor, introduce un número válido.");
    }
    result = num_02 % 2
    if (result === 0) {
        return console.log("Es par")
    } else {
        return console.log("Es impar")
    }
}
num_02a = parseInt(prompt("Ingrese un número"))
console.log(esPar(num_02a))

// function esPar(num){
//     return (num%2 == 0);
// }
// dato = parseInt(prompt("Escribir un número"));
// alert(esPar(dato));


// 0-3
// 0-4
// 0-5
// 0-6
// 0-7
// 0-8
// 0-9
// 1-1