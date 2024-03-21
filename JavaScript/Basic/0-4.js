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

// Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento.
// Si ejecuto o llamo a la función con esMultiplo(40,4) debe devolver true porque 40 es divisible por 4. Si ejecutas esMultiplo(23,4) dará false.

function esMultiplo03(multiplo03, numero03) {
    return multiplo03 % numero03 === 0
}
multiplo03 = parseInt(prompt("Ingrese un número"))
numero03 = parseInt(prompt("Ingrese un número"))
console.log(esMultiplo03(multiplo03,numero03))

// 0-4

// Definir una función que cree una cadena de letras repetidas tantas veces como le digamos. La función recibe dos argumentos: la letra y el número de repeticiones.
// Al ejecutar repetir('a', 5) deberá devover la cadena  aaaaa.

function repetir04(letra04, numero04) {
    let cadena = ''
    for (let index = 0; index < numero04; index++) {
        cadena += letra04
    }
    return cadena
}
console.log(repetir04("a",5))

// 0-5

// Usa el algoritmo de Euclides para diseñar una función que determine el máximo común divisor de dos números. Bueno este algoritmo es bien simple. Para clacular el mcd de A y B:

// Si A = 0 entonces MCD(A,B)=B, ya que el MCD(0,B)=B, y podemos detenernos.  
// Si B = 0 entonces MCD(A,B)=A, ya que el MCD(A,0)=A, y podemos detenernos.  
// Calcula el resto de A/B
// Asigna a A el valor de B
// Asigna a B el resto
// Repite hasta que A o B sean 0.
// Si me piden el MCD(10, 5) tendré 5 como solución, y el MCD( 24, 9) será 1, y el MCD(12,20) será 4

function MCD05(A, B) {
    let resto = 0
    let mcd
    do {
        resto = A % B
        A = B
        B = resto
    } while (A != 0 && B != 0);
    if (A === 0) mcd = B;
    if (B === 0) mcd = A;
    return 'El MCD es ' + mcd
}
console.log(MCD05(10,5))

// otra solucion
function mcdEuclides(a, b) {
    // Si alguno de los números es 0, el otro número es el máximo común divisor
    if (a === 0) return b;
    if (b === 0) return a;

    // Iterativamente aplicamos el algoritmo de Euclides hasta que b sea 0
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    // Cuando b se vuelve 0, el valor de a es el máximo común divisor
    return a;
}

// Ejemplos de uso
console.log(mcdEuclides(10, 5));  // Output: 5
console.log(mcdEuclides(24, 9));  // Output: 3
console.log(mcdEuclides(12, 20)); // Output: 4

// 0-6

// Diseña una función que calcule el factorial de un número, usa una función recursiva (que se llama a si misma). Recuerda que el factorial de un número es el resultado de multiplicar cada número por el anterior hasta llegar a 1. Y el factorail de 0 es por definición 1
// Si escribo factorial(3) obtendré 3*2*1 = 6,

function factorail06(num06) {
    let result06 = 0
    if(num06 === 0) {
        return result06 = 1
    }
    let mult06 = 1
    while (num06 > 0) {
        result06 = num06 * mult06
        mult06 = result06
        num06--
    }
    return result06
}
console.log(factorail06(3))

// Otra respuesta con la funcion factoial correcta

function factorial(n){
    if(n==0) {
        return 1
    }
    return n*factorial(n-1)
}
var dato;
dato = parseInt(prompt("escirbe un número"));
alert("Factorial de "+dato+" = "+ factorial(dato))

// 0-7

// Escribir una función que reciba un número como argumento y lo devuelva invertido, o sea, escrito del revés. Usar esta función para determinar si un número es capicúa (palíndromo)
// Si ejecuto invertir(123) me deberá devolver el número 321 y me diría que no es capicua. Sin embargo si hago invertir(242) el resultado sería 242, y la prueba me diría que es capicúa.

function invertir07(num07) {
// let numeroInicio__30;
let numero__30;
let salida__30 = '';
let digito__30;
let inverso__30

// num07 = parseInt(prompt("teclear un número"));
numero__30 = num07
do{
    digito__30 =  numero__30%10;
    numero__30 = parseInt(numero__30/10);
    salida__30 += digito__30
}while (numero__30 >0)
if (salida__30 != num07) {
    inverso__30 = "no es un número palíndromo"
} else {
    inverso__30 = "es un número palíndromo"
}
return num07 + " " + inverso__30;
}

console.log(invertir07(242))

// 0-8

// Escribe una función que reciba como argumento un precio y el porcentaje de impuestos. La función devolverá el valor total a pagar, teniendo en cuenta que al precio sin impuestos se le descuenta un porcentaje del 10% si es mayor de 100 euros.
// Si he comprado por valor de 200 euros con un impuesto del 5%, me descuentan un 10% por tanto pago 180 euros más los impuestos que son el 5% de 180. En total 189 euros.

function impuesto08(precio08, impuestos08) {
    let resto08
    if (precio08 > 100) {
        resto08 = precio08 * 0.1
        precio08 -= resto08
    }
    impuestos08 = (impuestos08 / 100) + 1
    precio08 = precio08 * impuestos08
    return precio08
}
console.log(impuesto08(200,5))


// otra forma de hacerlo
// function total(precio, impto){
//     var neto;
//     if (precio > 100){
//         precio = precio - 10*precio/100;
//     }
//     neto = precio + precio*impto/100;
//     return neto;
// }
// var gasto, imp;
// gasto = parseInt(prompt('Precio total'));
// imp = parseInt(prompt('Impuesto %'));
// alert("El total  pagar es "+total(gasto, imp));

// 0-9

// En esta función se trata de convertir notas a calificaciones literales de manera que menos de 5 es suspenso, un 5 es aprobado, el 6 es bine, el 7 y el 8 son notable, el 9 es sobresaliente y el 10 es matrícula.
// Por ejemplo si pido miCalificacion(5) la función me dirá tu calificación es Aprobado

function miCalificacion09(nota09) {
    if (nota09 < 0) {
        return "Ingrese un valor entre 0 y 10"
    }
    switch (true) {
        case nota09 < 5:
            return "Suspenso"
            break;
        case nota09 === 5:
            return "Aprobado"
            break;
        case nota09 === 6:
            return "Bien"
            break;
        case nota09 === 7 || nota09 === 8:
            return "Notable"
            break;
        case nota09 === 9:
            return "Sobresaliente"
            break;
        case nota09 === 10:
            return "Matrícula"
            break;
        default:
            return "Ingrese un valor entre 0 y 10"
            break;
    }
}
console.log(miCalificacion09(4))

// 1-0