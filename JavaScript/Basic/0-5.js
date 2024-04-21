// 0-1
// En este script deberás crear un array para guardar los nombres de los días de la
// semana, empezando por 0 para el domingo. Para comprobar el funcionamiento
// pide al usuario un número entre 0 y 6 y devuelve el nombre del día. Se supone que
// el dato tecleado estará entre 0 y 6

// Si tecleo el número 4 me deberá decir que el día de la semana es jueves

let semana01 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
let dia01 = parseInt(prompt("Ingrese un numero para mostrar un dia de la semana del 0 al 6"))
const numerodia01 = semana01[dia01]
console.log(numerodia01)


//Otra forma de hacerlo
// Array para almacenar los nombres de los días de la semana
const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

// Pedir al usuario un número entre 0 y 6
const numeroDia = parseInt(prompt("Por favor, ingresa un número entre 0 y 6:"));

// Verificar si el número está dentro del rango permitido
if (numeroDia >= 0 && numeroDia <= 6) {
    // Obtener el nombre del día correspondiente al número ingresado
    const nombreDia = diasSemana[numeroDia];
    // Mostrar el nombre del día
    alert("El día de la semana es " + nombreDia);
} else {
    // Mostrar un mensaje de error si el número está fuera del rango
    alert("El número ingresado está fuera del rango permitido.");
}

// 0-2

// Crea un array booleano con dos valores 'verdadero' y 'falso'. Este array te sirve para traduicr los valores true y false. Usalo para que el script muestre un alert con el nombre vedadero si un usuario teclea un valor entre 0 y 9 y falso en el caso contrario.
// Por ejemplo al teclear 10 deberá devolver falso

let bolleano02 = ['verdadero', 'falso']
let num02 = parseInt(prompt('Escriba un numero entero del 0 al 9'))
let respuesta
if (num02 >= 0 && num02 < 10) {
    respuesta = bolleano02[0]
} else {
    respuesta = bolleano02[1]
}
console.log('La respuesta es ' + respuesta);

// manera mas acortada
let booleano = ['falso', 'verdadero'], test, indice;
test = parseInt(prompt("Teclear un número"));
indice = (test <= 9 && test >= 0 )? 1:0;
alert(booleano[indice]);

// 0-3

// Sin usar métodos del objeto array, diseña una función llamada sumaLista() capaz de sumar todos los números que forman el array que se le pase como argumento.
// Si ejecuto sumaLista([2,4,5,1,2]) deberá devolver como resultado 14

function sumaLista(lista){
    let ind, suma=0;
    for(ind=0; ind < lista.length; ind++)
        {
        suma += lista[ind];
        }
    return suma;
}
alert(sumaLista([2,3,1,4,6]))    //resultado 16
// 0-4

// Diseña un script que vaya leyendo números y guardándolos en un array. Una vez lleno mostrará el array y deberá decir cuantos números son pares y cuantos son impares. La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico.
// Intenta resolverlo sin usar métodos del objeto array, solo indices y longitudes de arrays.
// No debe aceptar valores no numéricos (isNaN(valor) permite detectar valores no numéricos).
// Por ejemplo si tecleo: 3,5,4,6,7,8, 11el script me dirá que el array de entrada es [3,5,4,6,7,8, 11] y que hay 3 pares y 4 impares.

let num04
let list04 = []
let pares04 = 0
let impares04 = 0
while (num04 != 0) {
    num04 = parseInt(prompt("Teclee una serie de números."))
    if (num04 === 0) {
        console.log("Tecleó el número 0 programa terminado")
        break;
    }
    if (isNaN(num04)) {
        console.log("Ese no es un número")
        break;
    }

    list04.push(num04)
}
for(let ind=0; ind < list04.length; ind++){
    if (list04[ind]%2==0) 
        pares04++
    else 
        impares04++
}

console.log(`El array de entrada es ${list04} y que hay ${pares04} pares y ${impares04} impares.`)

// Otra solución
let lista=[], ind=0, pares=0, impares=0, numero;
do{
    numero= parseInt(prompt("Número "));
    if(numero !=0 && !isNaN(numero)){
        lista[ind] = numero
        ind++;
    }
}while (numero !=0 && !isNaN(numero));
alert("Lista de números "+lista);
for(ind=0; ind < lista.length; ind++){
    if (lista[ind]%2==0) 
        pares++
    else 
        impares++
}
console.log("pares " + pares);
console.log("Impares " + impares);

// 0-5
// Escribe una función que pueda devolver el valor más pequeño de un array numérico o el índice de ese valor. El segundo parámetro de la función dirá si debe devolver el valor ("v") o el índice ("i"). No uses métodos del objeto array.
// Se supone que el primer parámetro siempre será una matriz llena con al menos 1 número y sin duplicados.
// Se suponer el segundo parámetro será una letra con uno de dos valores: 'v' 'i'
// min([4,5,7], 'v')  devolverá 4, mientras que min([4,5,7], 'i') devolverá 0.


let cont05
function array05(array_05, valor05) {
    cont05 = 0
    if (valor05 === "v") {
        cont05 = array_05[0]
        return cont05
    } else if (valor05 === "i") {
        return cont05
    }
}

console.log(array05([4,5,6], "v"))

//Otra forma

function min(lista, resp){
let min = lista[0], indMin;
for(let ind= 0; ind < lista.length; ind++){
    if( lista[ind] < min){
    min = lista[ind];
    indMin = ind;
    }
}
return (resp==="v"?min : indMin);
}
alert("valor minimo "+min([4,2,5,1,8],"v"));
alert("Posicion del mínimo "+min([4,2,5,1,8],"i"));

// 0-6

// Escribe una función que determina si la letra que se le pasa como argumento se encuentra contenida dentro de un array de letras que se le pasa como segundo argumento.

// Se trata de resolverlo sin usar métodos del objeto array, solo el dato tipo array.

// existeEn('a', ['w','e','r','i']) devolverá false porque la letra 'a' no existe en el array

function existenEn06(letra06, array06) {
    for (let index = 0; index < array06.length; index++) {
        if (letra06 === array06[index]) {
            return true
        } else{
            return false
        }
    }
}

console.log(existenEn06("a", ['w','e','r','i']));


function existeEn(letra, lista){
    let ind=0;
    while (lista[ind] != letra && ind < lista.length){
        ind++
    }
    return (ind < lista.length)
}
 console.log(existeEn("a", ["d","e","r"]));   //dará false
 console.log(existeEn("a", ["d","e","a"]));   //dará true

// 0-7

// En este ejempo debes crear una función que reciba como argumento una letra y devuelva verdadero o falso (tru o false) dependiendo de si es una vocal o no. Debe funcionar igual con mayúsculas y con minúsculas y por supuesto usando arrays.

// Solo se aceptan letras internacionales (sin acentos)
// Por ejemplo esVocal('A') dirá true, mientras que esVocal("z") dirá false.

function esVocal07(letra07) {
    letra07 = letra07.toLowerCase();
    let vocales07 = ["a","e","i","o","u"];
    return vocales07.includes(letra07);
}
console.log(esVocal07('A'));

// otra forma
function esVocal(letra){
    let vocales = ['a','e','i','o','u','A','E','I','O','U'], ind;
    for(ind=0; ind < vocales.length; ind++){
        if(letra === vocales[ind]){
            break;
        }
    }
    return (ind < vocales.length);
}
console.log(esVocal("B"));

// 0-8

// Escribe una función qeu reciba como argumento un array y que devuelva una cadena de caracteres formada por los elementos del array separados por un guión
// Si llamamos a la función como listar(["rojo", "verde", "azul") deberá devolver "rojo-verde-azul"

function listar08(array08) {
    let result = ""
    for (let index = 0; index < array08.length; index++) {
        let elemento = array08[index];
        result += elemento + ", ";
    }
    return result
}

console.log(listar08(["rojo", "verde", "azul"]))
// 0-9

// Un servicio de atención al ciente tiene establecido turnos semanales para sus empleados de manera que cada día de la semana se encarga del servicio  una persona: lunes - María, Martes - Luis, Miércoles - Antonia, Jueves - Pedro, Viernes - Marisa.

// Usa un array para almacenar los datos del servicio. En este array cada elemento será un par día - nombre.

// Crea una función que responda con el nombre de la persona encargada del servicio sabiendo el día. Si el día no existe deberá decir que no hay servicio. Los nombres de los días deben ir en minúsculas.
// Si le pido servicio('Lunes') me debería decir "Este día se encarga María" y si le pido servico(Miércoles") me daría Antonia.


// 1-0