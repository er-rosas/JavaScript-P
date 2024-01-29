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

// Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales cuyo precio sea superior a 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y el precio de cada uno.

// Por ejemplo si compras 20 artículos de 10 euros se te descuenta un 15% del total pagarías 20*10 - 20*10*0.15 = 170 eruos.

let articulos09 = parseInt(prompt("Cantidad de artículos a comprar"))
let precioA09 = parseInt(prompt("Precio de artuculo"))

let descuento09 = precioA09 * articulos09
let total09

if (articulos09 > 10 && precioA09 > 40) {
    total09 = descuento09 - descuento09*0.15
    console.log(`La compra = $${descuento09} supera los $400, aplicamos descuento de 15 % y el total a pagar es $${total09}`)
} else {
    console.log(`La compra = $${descuento09} no supera los $40,el total a pagar es $${descuento09}`)
}

//1-0

// Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7.

// Para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable

let notaMes1_10 = parseInt(prompt("Nota del mes 1"));
let notaMes2_10 = parseInt(prompt("Nota del mes 2"));
let notaMes3_10 = parseInt(prompt("Nota del mes 3"));

let promedio10 = (notaMes1_10 + notaMes2_10 + notaMes3_10) / 3;
let calificacion10

if (promedio10 < 5){
    calificacion10 = "Desaprobado"
}else{
    if(promedio10 >= 5 && promedio10 <= 7){
        calificacion10 = "Aprobado"
    }else{
        calificacion10 = "Notable"
    }
}
console.log("Calificación promedio: " + calificacion10)



// 1-1

// El usuario debe introducir dos valores numéricos por teclado y la aplicación deberá indicar cual es el mayor, el primero o el segundo.

// La idea es usar las sentencias if reducidas (cond ? ture:false)

// Si el usuario entra 2 y luego 4, debe decir que el mayor es el segundo número.

let num1_11 = parseInt(prompt("Ingrese el primer número"))
let num2_11 = parseInt(prompt("Ingrese el segundo número"))

let mensaje_11 = (num1_11 > num2_11) ? `${num1_11} es mas grande que ${num2_11}` : `${num2_11} es mas grande que ${num1_11}`

console.log(mensaje_11)

// 1-2

// El usuario debe entrar un número y su cuadrado. Si es correcto el script enviará un mensja ede acierto en caso contrario dirá que se produjo un error.

// Se trata de usar el if resumido (cond?true:false)

// Por ejemplo si teclea 3 y 9 el resutlado es Correcto. Si tecleo 3 8, el resultado será Error

let num1_12 = parseInt(prompt("Ingrese un número"))
let num2_12 = parseInt(prompt("Ingrese el cuadrado de el número anterior"))

let cuadrado_12 = num1_12 * num1_12
let resultado_12 = (num2_12 == cuadrado_12) ? "Correcto" : "Incorrecto"

console.log(resultado_12)


// 1-3

// En ste caso, también usando el perador ternario o if reducido, un visitante a la página deberá teclear su edad, si es igual o mayor de 18 recibirá el mensaje de "Entra" en caso contario deberá decirle los años que tiene que estperar para entrar

// Si le digo que tengo 19 años me dirá "Puedes entrar", si le digo que tengo 14 años me dirá "Espera 4 años"

let edad_13 = parseInt(prompt("Ingrese su edad"))
let edadRestante13 = 18 - edad_13

let mensaje_13 = (edad_13 >= 18 ) ? "Usted puede entrar" : `Usted debe esperar ${edadRestante13} años para entrar`

console.log(mensaje_13)

// 1-4

// En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua

// Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.

// Por ejemplo he pedido carne, el ejercicio mostrará "¿Desea beber vino tinto?"

let menu_13 = prompt("Por favor elija menú de carne, pescado o verdura.")
let bebida_13

switch (menu_13.toLocaleLowerCase()){
    case 'carne':
        bebida_13 = "¿Desea beber vino tinto?";
        break;
    case 'pescado':
        bebida_13 = "¿Desea beber vino blanco?";
        break;
    case 'verdura':
        bebida_13 = "¿Desea agua?";
        break;
    default:
        bebida_13 = "Elija carne pescado o verdura";
    }
console.log(bebida_13);


// 1-5

// En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.

// Tecleo que pago 2 créditos, el escript me dirá que puedo acceder a las salas de consola y juegos 2D.

let sala_15 = 'Salas: '
let creditos_15 = parseInt(prompt("Cuantos creditos desea compar"))

switch (creditos_15){
    case 4:
        sala_15 += "Realidad Virtual, ";
    case 3:
        sala_15 += "Juegos 3D, ";
    case 2:
        sala_15 += "Juegos 2D, ";
    case 1:
    sala_15 += "Consolas, ";
    break;
    default:
        sala_15 += "Ninguna";
    }
console.log(sala_15);


// 1-6

// Aprtir de un número de mes tecleado por un usuario el programa debe indicar la estación del año.

// Las estaciones serán 12,1,2: Invierno. 3,4,5 primavera, 6,7,8 verano y 9,10,11 otoño.

// Si tecleo el 3 el script me responderá que estamos en Primavera

let mes_16 = parseInt(prompt("Escriba el mes del año en número"))
let season

switch (mes_16) {
    case 12:
    case 1:
    case 2:
        season = "Es Verano"
        break;
    case 3:
    case 4:
    case 5:
        season = "Es Otoño"
        break;
    case 6:
    case 7:
    case 8:
        season = "Es Invierno"
        break;
    case 9:
    case 10:
    case 11:
        season = "Es Primavera"
        break;
    default:
        season = "No es un mes valido"
        break;
}
console.log(season)

// 1-7

// En este ejercicio el usuario entra la longitud de la base y el alto de un cuadrado. Si la base y el alto son idénticos la respuesta será "Es un cuadrado", si la base es mayor que el alto dira "Rectángulo horizontal" y en caso contrario dirá "Rectángulo vertical".
// Si entro base es 10, alto es 5. Resultado rectángulo

let base_17 = parseInt(prompt("Ingrese la longitud de la base del cuadrado"))
let alto_17 = parseInt(prompt("Ingrese la altura del cuadrado"))
let cuadrado

switch (true) {
    case base_17 === alto_17:
        cuadrado = "Es un cuadrado"
        break;
    case base_17 > alto_17:
        cuadrado = "Rectángulo horizontal"
        break;
    case base_17 < alto_17:
        cuadrado = "Rectángulo vertical"
        break;
    default:
        cuadrado = "Ingrese un número valido"
        break;
}
console.log(cuadrado)

// 1-8
// 1-9
// 2-0