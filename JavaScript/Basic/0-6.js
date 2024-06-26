// 0-1

// Para comenzar vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTML, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones
// Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Juan 8

const infoAlumno01 = {
    Nombre: "Juan",
    Ingles: 9,
    Programacion: 8,
    Html: 7
}
function media(infoAlumno01) {
    let notaMedia = (infoAlumno01.Ingles + infoAlumno01.Programacion + infoAlumno01.Html) / 3;
    return notaMedia
}

console.log(`La nota media de ${infoAlumno01.Nombre} es ${media(infoAlumno01)}`);

// 0-2

// Define un objeto, mediante una expresión, que tenga dos propiedades: precio y descuento y un método neto. El método calculará el precio con el descuento aplicado. Los valores se pedirán por teclado
// Por ejemplo objeto vestido, precio 400 y descuento 10. El método devolverá como resultado 360 (400 - 10*400/100).

// const {
//     precio,
//     descuento,
//     calcularDesc
// } = objeto02

// //const calcularDesc = (precio, descuento) => precio * 100 / descuento;
// function calcularDesc(precio, descuento) {
//     return precio * 100 / descuento;
// }

const objeto02 = {
    precio: 400,
    descuento: 10,
    neto: () => {
        return objeto02.precio * (100 - objeto02.descuento) / 100;
    }
}

console.log(`El precio neto es $${objeto02.neto()}`);


var vestido, dato;
vestido = {
    precio: 0,
    descuento: 0,
    neto: function(){ 
            return this.precio*(1 - this.descuento/100)
    }
}
vestido.precio = parseInt(prompt("Precio bruto "));
vestido.descuento = parseInt(prompt("Precio bruto "));
console.log("El precio neto es "+vestido.neto()+"€");

// 0-3

// En esta propuesta debes crear una clase de nombre piedra (con class o con function) con dos propiedades: masa, volumen y un método densidad que calcule este valor (masa/volumen). Luego instancia al menos un objeto de esta clase, dale un valor a su masa y a su volumen y ejecuta el método densidad.
// Por ejemplo objeto oro, masa de la muestra 194 gr y volumen 10 cc. Densidad deberá devolver 19,4.

// Definición de la clase Piedra
class piedra {
    // Constructor para inicializar masa y volumen
    constructor(masa, volumen){
        this.masa = masa;
        this.volumen = volumen
    }

    // Método para calcular la densidad
    densidad(){
        return this.masa / this.volumen
    }
}

// Creación de una instancia de la clase Piedra
let muestraOro = new piedra(194, 10);

// Asignación de valores de masa y volumen
// muestraOro.masa = 194; // Masa de la muestra en gramos
// muestraOro.volumen = 10; // Volumen de la muestra en centímetros cúbicos

// Llamada al método densidad y visualización del resultado
console.log("La densidad de la muestra de oro es:", muestraOro.densidad(), "g/cm³");

class piedra {
    constructor(m,v){
       this.masa = m;
       this.volumen = v;
    }
   densidad = function(){return this.masa/this.volumen}
}
var oro = new piedra(194,10);
console.log("densidad "+oro.densidad());

// 0-4

// Construye una clase usando function para implementar una cuenta de efectivo. Poseerá dos propiedades: nombre del titular y saldo. Además debe tener dos métodos: ingresar() y retirar(). El primero incrementa el saldo en la cantidad indicada en el argumento y el segundo lo reduce. No se puede sacar más de lo que exista en el saldo. .
// A los métodos los invocaremos con las llamadas ingresar(1000) o retirar(100) Tras ingresar el saldo será 1000 y trs retirar el saldo será 900..

function CuentaEfectivo(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
    
    this.ingresar = function(cantidad) {
    if (cantidad > 0) {
        this.saldo += cantidad;
        console.log(`Se ingresaron ${cantidad} unidades. Saldo actual: ${this.saldo}`);
    } else {
        console.log("La cantidad a ingresar debe ser mayor que cero.");
    }
    };
    
    this.retirar = function(cantidad) {
    if (cantidad > 0) {
        if (cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log(`Se retiraron ${cantidad} unidades. Saldo actual: ${this.saldo}`);
        } else {
        console.log("No se puede retirar más de lo que hay en el saldo.");
        }
    } else {
        console.log("La cantidad a retirar debe ser mayor que cero.");
    }
    };
}

// Ejemplo de uso:
const miCuenta = new CuentaEfectivo("Juan", 1000);
miCuenta.ingresar(100);
miCuenta.retirar(200);



//Otra forma
cuenta004 = function(nombre, saldo){
    this.titular = nombre;
    this.saldo = saldo;
    this.ingresar= function(cantidad){
        this.saldo += cantidad
    }
    this.retirar = function(cantidad){
        if(cantidad <= this.saldo){
            this.saldo -= cantidad
        }
    }
}
var micuenta004 = new cuenta004('Juan', 0);
micuenta004.ingresar(1000);
console.log("El saldo actual es "+micuenta004.saldo);
micuenta004.retirar(100);
console.log("El saldo actual es "+micuenta004.saldo);

// 0-5

// Crea una clase Ficha, con su constructor, que se usará para almacenar el número de kilómetros recorridos por una persona en cada sesión de ejercicios. Las propiedades de la clase serán
// nombre
// sesiones
// numsesioens
// El nombre es el de la persona, en los sesiones se almacenará el número de kilometros recorridos en cada sesión y numsesiones contiene el número de sesiones anotadas.

// Tiene dos métodos:

// anotar: anota los kilómetros
// media: calcula la media de kilómetros recorridos
// Cada persona tendrá su ficha construída con esta clase.

// Si ejecuto anotar(8), anotar(10), anotar(6), en las sesiones se anotarán 8, 10, 6.

// Si escribo media() devolverá 8 ((8+10+6)/3).

// En la solución se usa el camino má primitivo posible: arrays y bucles básicos

class ficha05{
    constructor(nombre, sesiones, numsesiones){
        this.nombre = nombre;
        this.sesiones = sesiones;
        this.numsesiones = [numsesiones];
    }
    anotar(kilometros){
        return this.numsesiones += kilometros
    }
    media(){
        this.numsesiones.forEach(element => {
            element
        });
        return this.numsesiones
    }
}

class Ficha {
    constructor(nombre) {
    this.nombre = nombre;
    this.sesiones = [];
    this.numsesiones = 0;
    }

    anotar(kilometros) {
    this.sesiones.push(kilometros);
    this.numsesiones++;
    }

    media() {
    if (this.numsesiones === 0) {
        return 0;
    }

    let totalKilometros = 0;
    for (let i = 0; i < this.numsesiones; i++) {
        totalKilometros += this.sesiones[i];
    }

    return totalKilometros / this.numsesiones;
    }
}

// Ejemplo de uso
const persona = new Ficha("Juan");

persona.anotar(8);
persona.anotar(10);
persona.anotar(6);

console.log(persona.media()); // Output: 8



//otro

class Ficha{
    constructor(n){
        this.nombre = n;
        this.sesiones = [];
        this.numsesiones = 0
    }
    anotar= function(km){
            this.sesiones[this.numsesiones] = km;
            this.numsesiones++;
        }
    media = function(){
            var media = 0;
        
for(let i=0; i< this.sesiones.length;i++){
                media += this.sesiones[i];
            }
        return media/this.numsesiones
    }
}
var fichaJuan = new Ficha('Juan');
fichaJuan.anotar(10);
fichaJuan.anotar(8);
fichaJuan.anotar(6);
console.log("Media de kilómetros "+fichaJuan.media());


// 0-6

// Crea una clase que lamaremos Bus. Sus atributos serán:

// capacidad: número máximo de pasajeros
// pasajeros: número de pasajeros (inicialmente 0)
// conductor: objeto conductor.
// Sus métodos

// subir(pasajeros): aumenta el numero de pasajeros
// bajar(pasajaeros): disminuye el número de pasajeros
// conductor: asigna un objeto conductor.
// El ojeto conductor es de una clase (Conductor) cuyos atributos son:

// nombre: nombre del conductor
// licencia: un número que identifica al condcutor.
// Al crear el objeto se asigna también el conductor

// No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.

// El autobús linea1 puede llevar 40 pasajeros y su conductor se llama José su licencia es la 1234.

// Si se pide subir(25) , el atributo pasajeros valdrá 25.

// Si a continuación se pide subir(35) solo subirán 15, (25 + 15 son los 40 de máximo)

// Si pedimos bajar 45, el autobús se queda vacío.

// Si teniendo 35 pasajeros se pide que bajen 40 el autobús se queda vacío.

class bus06 {
    constructor(conductor, cap){
        this.conductor = conductor;
        this.capacidad = cap;
        this.pasajeros = 0;
    };

    subir(num){
        if (this.pasajeros + num < this.capacidad) {
            this.pasajeros += num;
        } else {
            this.pasajeros = this.capacidad;
        }
    }
    bajar(num){
        if (num <= this.capacidad) {
            this.pasajeros -= num;
        } else {
            this.pasajeros = 0;
        }
    }
}
class conductor{
    constructor(nomb, lice){
        this.nombre = nomb;
        this.licencia = lice;
    }
}

var cond1 = new conductor("Juan", 1234);
var linea1 = new bus06(cond1, 40);
console.log("conductor es "+linea1.conductor.nombre);
linea1.subir(30);
console.log("Pasajeros al subir 30:  " + linea1.pasajeros);
linea1.subir(20);
console.log("Pasajeros al subir 20:  "+linea1.pasajeros);
linea1.bajar(30);
console.log("Pasajeros al bajar 30:  "+linea1.pasajeros);
// 0-7
// 0-8
// 0-9
// 1-0