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
// 0-4
// 0-5
// 0-6
// 0-7
// 0-8
// 0-9
// 1-0