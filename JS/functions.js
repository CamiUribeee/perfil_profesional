// TIPOS DE VARIABLES
// const para constantes 
const pi = 3.1416;
const pul = 2.54; 
// var para variables globales 
var cant_days = 10;
var name = "Camila Uribe";
// let para variables de bloque o locales 
let count = 5; 
let i = 0;

// FORMAS DE IMPRESIÓN O SALIDA EN PANTALLA 
// alert 
// alert (name);
// console 
console.log(cant_days);
console.log("10");
// body - pantalla 
document.write(name);
document.getElementById("text_one").innerHTML = ""
document.getElementById("text_two").innerText = ""
// librerias por sweetalert (pagina de internet)
Swal.fire({
    icon: 'success',
    title: 'Camila Uribe',
    text: 'Estudiante de la ufpso',
    footer: name,
    showConfirmButton: false,
    timer: 2000
})
// TIPOS DE DATOS 
// numericos 
let number_one = 10;
let number_two = 5.5;
// string 
let text = "soy un texto";
// booleanos
let bolean = true; //false
// array 
let array_num = [1,2,3,4,5,6];
let array_tex = ["lunes", "martes", "miercoles", "jueves", "viernes"];
let array_mix = [1.5, "a", 10, "b"];
let array_mul = [
    {name:"Camila",last_name:"Uribe",age:17},
    {name:"Jeimmy",last_name:"Uribe",age:26},
    {name:"Fabio",last_name:"Uribe",age:30},
    {name:"Daniel",last_name:"Uribe",age:34},
]
// OPERADORES BÁSICOS 
// suma +
var suma = number_one + number_two;
console.log("suma =" + suma);
// resta -
var resta = number_one - number_two;
console.log("resta =" + resta);
// multiplicación *
var multi = number_one * number_two; 
console.log("multi =" + multi);
// división 
var divi= number_one / number_two;
// divi = divi.toFixed(2);



// módulo 