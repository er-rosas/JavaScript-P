// 0-1

// Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.  
// Si el usuario entra por teclado el número 5 el script devolverá la secuencia  0, 1, 2, 3, 4, 5

let contar_01
let max_01
let msg_01='';
max_01 = parseInt(prompt("Teclear un número entero"));

for(contar_01 = 0; contar_01 < max_01;  contar_01++){
    msg_01 += contar_01 + ", ";
}

msg_01 += contar_01;   //Evita la coma al final
console.log(msg_01);

// 0-2

// Se trata de que dado un número entero el script muestre una cuenta atrás, es decir, una lista de numeros separados por comas desde el número tecleado hasta el 0.
// Si tecle o número 5 deberá mostarar 5,4,3,2,1.

let contar_02
let min_02 = parseInt(prompt("Ingrese un numero entero"))
let msg_02 = '';

for (contar_02 = min_02; contar_02 > 0; contar_02--) {
    msg_02 += contar_02 + ", ";
}
msg_02 += contar_02;
console.log(msg_02);

// 0-3

// Se quiere un bucle que genere una lista con todos los números pares positivos por debajo del número tecleado por el usuario. Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n').
// Si tecleo el número el número 9 deberá mostrar cinco lineas con los números 0 2 4 6 8

let contar_03
let max_03 = parseInt(prompt("Teclear un número entero"));
let par_03 = 0
let msg_03 = '';
for(contar_03 = 1;  par_03 < max_03;  contar_03 ++){
    msg_03 += par_03 + "\n";
    par_03 = contar_03*2;
}
console.log(msg_03);


// 0-4

// Este script debe escribir la tabla de multiplicar del número que el usuario teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.

// Recuerda que el salto de linea es el carácter "\n"

// Si el usuario teclea el 4 la tabla mostrará diez líneas en la forma

// 4 x 1 = 4

// 4 x 2 = 8...

let contar_04
let tabla_04 = parseInt(prompt("Escribir un numero entero"))
let msg_04 = '';

for (contar_04 = 0; contar_04 < 11; contar_04++) {
    resilt_04 = tabla_04 * contar_04
    msg_04 += tabla_04 + " * " + contar_04 + " = " + resilt_04 + "\n";
}

console.log(msg_04)

// 0-5

// En este ejercicio mezclamos bucles con condicionales: el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.

// Recuerda: un número es múltiplo de N cuando el dividirlo por N el resto es 0.

// Por ejemplo si tecleas el 14, obtendré la lista 2, 5, 8 y 11

let numero_05 = parseInt(prompt("Escriba un numero entero"))
let divEnTRES_05 = '';
let resto_03

for (numero_05 = 0; numero_05 > 0; numero_05--) {
    resto_03 = numero_05 % 3
    // console.log(resto_03);
    if (resto_03 === 2) {
        divEnTRES_05 += numero_05 + ", "
    }
}
console.log(divEnTRES_05);

// let contar_05
// for (contar_05 = 0; contar_05 < numero_05; contar_05++)
// {
//     if( contar_05 % 3 == 2){
//         console.log(contar_05);
//     }
// }

// 0-6

// Este script el usuario deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.
// Si el usuario teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x

let letra_06 = prompt("Ingresar una letra.")
let num_06 = parseInt(prompt("Ingrese un número"))
let cadena_06 = '';

for (index = 0; index < num_06; index++) {
    cadena_06 += letra_06 + ", "
}
console.log(cadena_06);

// 0-7

// Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. El contador debe deternerse cuando alcancemos el valor 1:4
// Usamos el console log para ir imprimiendo los valores de los dígitos, deberá quedar algo así:

// 0:0
// 0:1
// 0:2
// ...
// ...
// 1:4 será el final del conteo

// let letra_07
// let num_07
// let cadena_07 = '';
// cadena_06 += letra_06 + ", "

// Mimanera
let count_07
let hora_07 = 0
for (count_07 = 0; count_07 < 5; count_07++) {
    if (count_07 == 4 && hora_07 !== 1) {
        count_07 = 0
        hora_07 += 1
        console.log("0:4")
    }
    console.log(hora_07+":"+count_07)
}

// Manera correcta
let izq, der;
for(izq = 0; izq < 2; izq++){
    for(der=0; der < 5; der++){
        console.log(izq+" : "+der)
    }
}

// 0-8

// Se trata de dibujar un triángulo rectángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.

// Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.

// Le tecleamos el valor 5. El resultado será:

// *
// **
// ***
// ****
// *****

let num_08 = parseInt(prompt("Ingrese un número"))
let num2_08

for (let index2 = 0; index2 < num_08; index2++) {
    let asterisc_08 = ""
    for (let index3 = 0; index3 <= index2; index3++) {
        asterisc_08 += "*"
    }
    console.log(asterisc_08 + "\n");
}


// 0-9

// Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario. El resultado será de la fomra "Los números enteros de 0 a n  suman suma"
// Si tecleo el 5 obtendré "Los enteros enteros de 0 a n suman 15" (1+2+3+4+5 ).

let num_09 = parseInt(prompt("Ingrese un numero entero"))
let suma_09 = 0


for (let index_09 = 0; index_09 <= num_09; index_09++) {
    suma_09 += index_09
}
console.log("Los enteros enteros de 0 a " + num_09 + " suman " + suma_09)
// 1-0

// Programa un script que pida al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4
// El progrma pide 4 veces al usuario que telcee un número y este escribe 5,9,10,12. El programa dirá "La media es 9"

let num_10
let max_10 = 4
let suma_10 = 0
let promedio_10


for (let index_10 = 0; index_10 < max_10; index_10++) {
    num_10 = parseInt(prompt("Ingrese un numero entero"))
    suma_10 += num_10
}
promedio_10 = suma_10 / 4
console.log("La media es " + promedio_10)

// 1-1

// Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado. Luego deberá sacar esa lista con un alert. Los números se separarán por comas.  
// Si le doy el número 5 pues deberá contar 0,1,2,3,4,5

let num_11 = parseInt(prompt("Ingrese un numero entero"))
let contar_11 = 0;
lista_11 ='';

while (contar_11 < num_11) {
    lista_11 += contar_11 + ', ';
    contar_11++;
}
lista_11 += contar_11;
console.log(lista_11);

// 1-2

// Se trata de pedir al usuario que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número
// Si tecleo 0 me dirá Por favor teclee un número entre 1 y 5.

let num_12 = 0

while (num_12 < 1 || num_12 > 5) {
    num_12 = parseInt(prompt("Ingrese un numero entre el 1 y el 5."))
}

// 1-3

// Un script que preguntará al usuario si desea continuar con el programa. Si el usuario pulsa una letra n (mayúscla o minúscula), el programa finalizará. Cualquier otra entrada repetirá la pregunta
// El usuario teclea Si, como no es la letra s pues dirá Error, ¿Desa seguir con el programa?


let num_13 = "a"

while (num_13.toLocaleLowerCase() !== "n") {
    num_13 = prompt("¿Desea continuar con el programa? s | n")
}
console.log("Programa finalizado.");

// 1-4

// Determinar si el número que teclea el usuario es primo o no. Recordar que un número primo es el que solo puede dividirse por si mismo y por la unidad.
// Si el usuario telcea el 3: dirá que 3 es primo. Si telcea el 4 dirá que 4 no es primo.




let num_14 = parseInt(prompt("Teclear un numero entero"));
let divisor_14 = 2;
let esPrimo_14 = " Si";

while ((divisor_14 <= num_14) && (num_14 % divisor_14 != 0)){
    divisor_14++;
}
if(divisor_14 < num_14){
esPrimo_14=" NO";
}
console.log("El número "+ num_14 + esPrimo_14 +" es primo");


// let num_14 = parseInt(prompt("Ingrese un número entero para verificar si es primo."))
// let contar_14 = 0;
// let contar2_14 = 9;
// let simismo_14
// let uno_14 = num_14 / 1

// if(divisor < num_14){
// while (contar_14 < num_14) {
//     simismo_14 = num_14 / contar_14
//     contar_14++;

// }

// let num_99 = parseInt(prompt("Ingrese un numero entero"))
// let contar_99 = 0;
// lista_11 ='';

// while (contar_11 < num_11) {
//     lista_11 += contar_11 + ', ';
//     contar_11++;
// }
// lista_11 += contar_11;
// console.log(lista_11);



// 1-5

// Escribir un script que pida al usuario una contraseña. Si coincide con la clave definida en el script le devolverá el mensaje "Acceso concedido" y si no coincide le devolverá el mensaje "Acceso Denegado" . Si falla tres veces se emitirá el mensaje "Alerta, intruso"
// La contrasñe es por ejemplo pasar. Tecleo tres veces otra distinta: Acceso Intruso.


let pass_15 = prompt("Escriba contraseña");
let acceso_15 = "Acceso concedido";
let try_15 = 0;

while (pass_15 != "pass123" && try_15 < 3){
    pass_15 = prompt("Escriba contraseña");
    acceso_15 = "Acceso Denegado";
    console.log(acceso_15);
    try_15++;
    if (try_15 == 3) {
        acceso_15 = "Alerta, intruso";
    };
    break;
}

console.log(acceso_15);


// let clave, veces = 0, acceso = "pasar", msg;
// while (clave != acceso && veces < 3){
//         clave = prompt("Teclee su clave");
//     if (clave == acceso){
//             alert("Acceso concedido")
//     }
//     else{
//             alert("Acceso denegado")
//         veces++;
//     }
// }
// if (veces == 3){
//         alert("Alerta Intruso");
// }

// 1-6

// En este script se pedirá al usuario que teclee un número cada vez. El proceso acaba cuando teclee un 0 en cuyo caso además mostrará la suma de todos los números tecleados.
// El usuario teclea primero el 4 luego el 5 depsués 6 y finalmente , 0. El programa se para y muestra "La suma de todos los número es 15"


let num_16 = parseInt(prompt("Escriba un número que luego sera sumado."));
let sum_16 = 0


while (num_16 != 0){
    sum_16 += num_16
    num_16 = parseInt(prompt("Escriba otro número que luego sera sumado."));
}
console.log("La suma de todos los número es " + sum_16)

// 1-7

// ste script le pide al usuario que vaya tecleando números enteros positivos hasta que el usuario ingrese el 0. En esete caso el programa acaba mostrando el valor máximo y mínimo de los números tecleados.
// El susuario teclea la sere 4,2,3,5,0, El máximo es 5 y el minimo es 2. Si telcea 2,2,2,0, máximo es 2 y minimo es 2.


let num_17
let try_17 = 0;

let numeros_17 = []

while (num_17 != 0 && try_17 < 5){
    num_17 = parseInt(prompt("Escriba un numero entero"));
    numeros_17.push(num_17)
    try_17++;
}
console.log(numeros_17);
console.log(`El máximo es ${Math.max(...numeros_17)} y el minimo es ${Math.min(...numeros_17)}`);


// let max=0, min=0, numero;
// numero = parseInt(prompt("Teclee un número"));
// min = numero;
// while (numero !=0){
//     max = (numero > max)?numero:max;
//     min = (numero < min)?numero:min;
//     numero = parseInt(prompt("Teclee un número"));
// }
// if ( max== 0){
//     alert("No ha tecleado ningún número ")
// }
// else{
//     alert("El máximo es "+ max + "\nEl mínimo es "+min);
// }


// 1-8
// 1-9
// 2-0