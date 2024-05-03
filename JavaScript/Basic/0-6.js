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
// 0-3
// 0-4
// 0-5
// 0-6
// 0-7
// 0-8
// 0-9
// 1-0