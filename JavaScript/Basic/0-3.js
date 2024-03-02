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

// Este script le pide al usuario que vaya tecleando números una y otra vez, pero solo números pares, en caso de que teclee un número impar el programa acabará y dirá la cantidad de números pares ingresados (el 0 cuenta como par).
// Muestra Si escribo 2,8,12,1 el script me dirá "Ha escrito 3 números pares")

let num_18 = parseInt(prompt("Ingrese un numero par."));
let try_18 = 0

while (num_18 % 2 === 0) {
    num_18 = parseInt(prompt("Ingrese un numero par."));
    try_18++;
}

console.log(`Ha escrito ${try_18} números pares.`);

// 1-9

// Este script muestra un menu de opciones: 1- Leer datos. 2- Mostrar datos 3- Fin. El usuario deberá teclear uno de ellos y el programa mostrará la opción elegida. Si teclea un valor fuera del menu se mostrará un mensaje de error y se vuelve a pedir un número de opción. El programa finaliza al teclear el 3.
// Pulso 1, mensaje Opción leeer datos. Y vuelve a pader opción. Pulso 4 : Error y vuelve a pedir opción, Pulso 3: Fin del programa y acaba.

let menu_19

while (menu_19 != 3) {
    menu_19 = parseInt(prompt("Opciones: \n 1- Leer datos. \n 2- Mostrar datos. \n 3- Fin."));
    switch (menu_19) {
        case 1:
            console.log("Opción: Leeer datos.")
            break;
        case 2:
            console.log("Opción: Mostrar datos.")
            break;
        case 3:
            console.log("Opción: Finalizar.")
            break;
        default:
            console.error("Error, opción incorrecta")
            break;
    };
};
// 2-0

// Un script pedirá al usuario que vaya tecleando números de manera repetida. cuando pulse 0, el programa muestra "La suma es " seguido de la suma de los números. Si esta suma es par el programa se repite y si es impar el programa acaba.
// Si tecleo 2,6,2, 0 Me dirá suma "10" y volverá a pedir otra serie de números, si tecleo 2,6,3 Me dirá "suma 11" y acabará.

let suma_shat = 0;

while (true) {
    let numero_shat = parseInt(prompt("Introduce un número (0 para terminar):"));
    
    if (isNaN(numero_shat)) {
        alert("Por favor, introduce un número válido.");
        continue;
    }

    if (numero_shat === 0) {
        console.log("La suma es " + suma_shat);
        if (suma_shat % 2 === 0) {
            alert("La suma es par. Vuelve a introducir números.");
            suma_shat = 0;
            continue;
        } else {
            alert("La suma es impar. Fin del programa.");
            break;
        }
    }

    suma_shat += numero_shat;
}






let sum_20 = 0
let num_20

while (sum_20 % 2 == 0) {
    num_20 = parseInt(prompt("Ingrese números enteros de manera repetida, si ingresa 0 se para el programa."));
    while (num_20 != 0) {
        sum_20 += num_20;
        num_20 = parseInt(prompt("Ingrese números enteros de manera repetida, si ingresa 0 se para el programa."));
    }
    console.log("La suma es " + sum_20);
    sum_20 = 0
};
console.log("Fin de la prueba");


let suma=0, numero;
while (suma%2==0){
    numero = parseInt(prompt("Teclear un número"));
    while(numero != 0){
        suma += numero;
        numero = parseInt(prompt("Teclear un número"));
        }
    alert("La suma es "+suma);
}
alert("Fin de la prueba");

// 2-1

// Realiza un script que le pida al usuario que teclee la letra A (en mayúscula) y mientras no lo haga se lo vuelva a pedir. Usa un bulce do..while y la ventana alert para los mensajes
// El usuario teclea b, el programa vuelve a pedirme que teclee una letra

let letra_21 = ""

do {
    letra_21 = prompt("Ingrese la letra A");
} while (letra_21 != "A");
console.log("Correcto");

// 2-2

// Este script usará un bucle do while para determinar si un número es primo o no. El numero tecleado deberá estar entre 0 y 100. Si es primo lo mostrará en una ventana alert.
// Recuerda que un número primo es el que es divisible por 1 y por sí mismo: 7 es primo (solo es deivisible entre 1 y 7), 8 no es primo (puede dividirse entre 1, 2, 4 y 8)).

// Si escribo 0 o 100 el programa me seguirá pidiendo un número



let num_22 = parseInt(prompt("Teclear un numero entero entre el 0 y el 100"));
let divisor_22 = 2;
let esPrimo_22= " Si";

if(num_22 < 0 || num_22 > 100){
    console.log("Número no válido.")
    num_22 = parseInt(prompt("Teclear un numero entero entre el 0 y el 100"));
}

do {
    divisor_22++;
} while (divisor_22 <= num_22 && num_22 % divisor_22 != 0);

if(divisor_22 < num_22 || divisor_22 > num_22){
    esPrimo_22=" NO";
}

console.log("El número "+ num_22 + esPrimo_22 +" es primo");







// while ((divisor_22 <= num_22) && (num_22 % divisor_22 != 0)){
//     divisor_22++;
// }
// if(divisor_22 < num_22){
// esPrimo_22=" NO";
// }
// console.log("El número "+ num_22 + esPrimo_22 +" es primo");


// 2-3

// En este script vas a crear un menu con tres opciones: escribir, leer, salir. El usuario elegirá una opción y en un alert se le indicará la opción elegida. El programa vuelve a mostrar el menu y se repite el proceso. El script acabará cuando se pulse la opción de salir.
// El menu tiene 3 opciones, elijo la opción 2, respuesta "has elegido leer".

let menu_23 = prompt("Elija entre estas opciones del menu: 1. escribir, 2, leer y 3. salir.")

do {
    if (menu_23 == "1") {
        console.log("Has elegido escribir.")
        menu_23 = prompt("Elija entre estas opciones del menu: 1. escribir, 2, leer y 3. salir.")
    } else {
        console.log("Has elegido leer.")
        menu_23 = prompt("Elija entre estas opciones del menu: 1. escribir, 2, leer y 3. salir.")
    }
} while (menu_23 == "1" || menu_23 == "2");

console.log("Has elegido salir.")




let opcion = '';

do{
    opcion = prompt("1.- Escribir\n 2.- Leer\n 3.- Salir\n Escoge una opción:");       
switch(opcion){
    case '1':
        alert("Eliges Escribir")
        break; 
    case '2':
        alert("Eliges Leer")
        break; 
    case '3':
        alert("fin del programa");
        break;
    default:
        alert("debes elegir una de las opciones")
    }
}
while(opcion != '3');


// 2-4

// En este script se le pide al usuario que teclee dos números, el script mostrará la suma y pedirá al usuario si queire repetir. Si teclea S repite y si teclea N el programa sale. No debe aceptar otras teclas
// Por ejemplo si tecleo 3 despues 9 me dirá que la suma es 12, y luego me preguntará si quiero repetir.

let repetir_24 = "S"
let num1_24
let num2_24
let sum_24

do {
    num1_24 = parseInt(prompt("Ingrese el 1er número."))
    num2_24 = parseInt(prompt("Ingrese el 2do número."))
    sum_24 = num1_24 + num2_24
    console.log(`La suma es ${sum_24}.`)
    repetir_24 = prompt("¿Desea repetir? S o N").toLocaleUpperCase();
} while (repetir_24 == "S");

// 2-5

// Usar un bucle do..while para crear una cadena que contenga letras repetidas. Las letras se entran por teclado y solo podrán ser la X o la Z despues de elegir las letras se le ingresa el número de repeticiones que deberá estar entre 1 y 15.
// Si elijo X y luego tecleo 10 se mostrará XXXXXXXXXX. Si tecleo M me volverá a pedir letra, y si tecleo 20 me volverá a pedir el número

let letra_25 = ""
let veces_25 = 0

do {
    letra_25 = prompt("Ingrese la letra X o Z");
} while (letra_25 !== "X" && letra_25 !== "Z");

do {
    veces_25 = parseInt(prompt("Ingrese un número entre el 1 y el 15 de veces a repetir."));
} while (isNaN(veces_25) || veces_25 < 1 || veces_25 > 15);

let cadena_25 = "";

for (let index = 0; index < veces_25; index++) {
    cadena_25 += letra_25
}

console.log(cadena_25)

// 2-6

// En este script se trata de calcular el máximo común divisor de dos números. El algorimto es simple: dividimos el primer por el segundo. si el resto es cero este segundo es el mcm. Si no se desecha el primero y se repite el proceso con el segundo y el resto. Así mientras el resto no sea 0
// Si tecleo 20 y luego 10, el mcd es 10. Si tecleo 4 y luego 20 el mcd será 4. Si tecleo 20 y 8 el mcd es 4.

let num1_26 = parseInt(prompt("Ingrese el primer número."));
let num2_26 = parseInt(prompt("Ingrese el segundo número."));
let resto_26
let mcd = 0

do {
    resto_26 = num1_26 % num2_26
    if (resto_26 == 0) {
        mcd = num2_26
    } else {
        num1_26 = num2_26;
        num2_26 = resto_26;
    }
} while (resto_26 != 0);
console.log("El mcd es el " + mcd)

// 2-7

// Este ejemplo debe pedir al usuario un  número entero y, mediante sucesivas divisiones por 10 debe escribir los digitos que lo forman de menor a mayor orden (de unidades hacia arriba) en una cadena separados por un espacio
// Si escribo 126 deberá responder  "Dígitos del número: 6 2 1"

// No vale usar cadenas (strings) se debe usar la división como dice el enunciado.

// let num_27 = parseInt(prompt("Ingrese un número entero."))
// let divisor_27 = 0
// let unidades_27
// let digitos_27 = ""

// do {
//     divisor_27 += 10
//     unidades_27 = num_27 / divisor_27
//     digitos_27 += unidades_27 + " "
// } while (divisor_27 <= num_27);

// console.log("Digitos del número: " + digitos_27)

// Pedir al usuario un número entero
let num_27 = parseInt(prompt("Ingrese un número entero:"));

let digitos_27 = []; // Array para almacenar los dígitos

// Bucle do-while para descomponer el número en sus dígitos
do {
    // Obtener el dígito menos significativo usando el operador de módulo (%)
    let digito = num_27 % 10;
    // Agregar el dígito al principio del array
    digitos_27.unshift(digito);
    // Dividir el número por 10 para "eliminar" el dígito menos significativo
    num_27 = Math.floor(num_27 / 10);
} while (num_27 > 0);

// Mostrar los dígitos en orden de menor a mayor
console.log("Dígitos del número:", digitos_27.join(' '));

let numero__27, salida__27 = '', digito__27;
numero = parseInt(prompt("teclear un número"));
do{
    digito =  numero%10;
    numero = parseInt(numero/10);
    salida += digito+'  ';
}while (numero >0)
alert("Dígitos del número "+salida);

// 2-8

// Diseñar un script que pida un número mayor que cero y devuelva la suma de todos los números pares desde cero al número introducido. Mostrará la suma y volverá a pedir otro núero hasta que el usuario teclee un 0.
// Si tecleo el 10 mostrará 30 la suma de 2+4+6+8+10

let num_28 = parseInt(prompt("Ingrese un número entero mayor a 0."))
let suma2_28 = 0
let sumapar_28 = 0

if (num_28 > 0) {
    do {
        suma2_28 += 2
        sumapar_28 += suma2_28
    } while (suma2_28 < num_28);
    console.log("Ka Sume de todos los número par es " + sumapar_28)
} else {
    num_28 = parseInt(prompt("Ingrese un número entero mayor a 0."))
}

// Otra forma
// let numero, suma;
// do{
//     suma = 0;
//     numero = parseInt(prompt("Teclear un número"));
//     contar = numero;
//     do{
//         suma += (numero%2==0)? numero:0;
//         numero--;
//   	     }while (numero >0);
// }while (contar > 0)

// 2-9

// Escribir un script usando el bucle do while para pedir que el usuario escriba dos números. Si el primero es mayor que el segundo el programa volverá a pedir que se escriban los números. Si el primero es menor o igual que el segundo el programa acaba y dice "Numeros en orden creciente"
// Si tecleo pimero un 12 y luego un 9, volverá a pedirme que escriba los datos. Si escribo un 12 y luego un 20 me dirá "Numeros ordenados"

let num1_29 = parseInt(prompt("1- Ingrese el primer número."))
let num2_29 = parseInt(prompt("2- Ingrese el segundo número."))

do {
    num1_29 = parseInt(prompt("1- Ingrese el primer número de nuevo."))
    num2_29 = parseInt(prompt("2- Ingrese el segundo número de nuevo."))
} while (num1_29 >= num2_29);
console.log("Numeros ordenados.");
// 3-0