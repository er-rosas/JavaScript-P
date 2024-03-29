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

function sumaLista(params) {
    let lista = []
}
// 0-4
// 0-5
// 0-6
// 0-7
// 0-8
// 0-9
// 1-0