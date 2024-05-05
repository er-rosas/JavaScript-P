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

class piedra {
    
}
// 0-4
// 0-5
// 0-6
// 0-7
// 0-8
// 0-9
// 1-0