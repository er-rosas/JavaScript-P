// 1. ¿Qué es JavaScript?
// JavaScript es un lenguaje de programación de alto nivel que se utiliza principalmente para hacer que las páginas web sean interactivas. Puede ejecutarse en el lado del cliente (navegador) y, más recientemente, en el lado del servidor (Node.js).

// 2. Variables y Tipos de Datos:
// Variables: Se utilizan para almacenar valores. Se declaran con var, let, o const.
// var nombre = "Juan";
// let edad = 25;
// const PI = 3.1416;

// Tipos de Datos:
//     String: Texto.
//     Number: Números.
//     Boolean: Verdadero o Falso.
//     Array: Colección ordenada.
//     Object: Colección no ordenada de pares clave-valor.

// 3. Operadores:
//     Aritméticos: +, -, *, /, %.
//     Comparación: ==, ===, !=, !==, <, >, <=, >=.
//     Lógicos: && (and), || (or), ! (not).

// 4. Estructuras de Control:
//     Condicional (if-else):
//         if (condicion) {
//             // código si la condición es verdadera
//         } else {
//             // código si la condición es falsa
//         }
//
//    Bucle (for):
//        for (let i = 0; i < 5; i++) {
//            // código a ejecutar en cada iteración
//        }

// 5. Funciones:
//     Las funciones son bloques de código reutilizables.
//         function saludar(nombre) {
//             return "Hola, " + nombre + "!";
//         }
//
//         let mensaje = saludar("Juan");
//         console.log(mensaje);

// 6. Objetos:
//     Los objetos son colecciones de propiedades (clave-valor).

//     let persona = {
//         nombre: "Juan",
//         edad: 25,
//         estudios: ["Ing. Informática", "Matemáticas"]
//     };

// 7. Eventos:
//     JavaScript se utiliza comúnmente para manejar eventos del navegador.

//     document.getElementById("boton").addEventListener("click", function() {
//         alert("¡Botón clickeado!");
//     });

// 8. DOM (Document Object Model):
//     Representación de la estructura de un documento HTML/XML que JavaScript puede manipular.

//     // Cambiar el contenido de un elemento HTML
//     document.getElementById("miElemento").innerHTML = "Nuevo Contenido";

// 9. AJAX (Asynchronous JavaScript and XML):
//     Permite realizar solicitudes asíncronas al servidor y actualizar la página sin recargarla.

//     // Ejemplo con la librería fetch
//     fetch('https://api.example.com/data')
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error('Error:', error));

// 10. Async/Await:
//     Para manejar promesas de forma más legible.

//     async function obtenerDatos() {
//         let respuesta = await fetch('https://api.example.com/data');
//         let datos = await respuesta.json();
//         console.log(datos);
//     }