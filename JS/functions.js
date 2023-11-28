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



// OPERADORES LÓGICOS Y ESTRUCTURAS CONDICIONALES 
// AND && con if 
var bool = false;
var numeric = 5;
if (!bool && numeric == "5"){ //practicar parametros en programación 
    console.log("Ingresa if: " + bool);
}
else{
    console.log("Ingresa else" + bool);
}
//OR || con if 
var age = 31;
if (age==31 || numeric=="5"){
    console.log("Ingresa if: " + bool);
    age++;
}
else{
    console.log("Ingresa else: " + bool);
    age--;
}
console.log(age);

// FOR
console.log(array_tex.length)
for(let i=0; i<array_tex.length; i++){ //poner i<=7 no nos sirve de nada y para no poner i<7 solamente ponemos en lenght 
    console.log(array_tex[i] + (i+1)); //jugar con la variable que incrementa, por eso el i dentro de los []
}
console.log ("WHILE");

//WHILE Acordate que los tres pasos son: inicialización, comparación, contador 
let j=0;
while(j<array_tex.length){
    console.log(array_tex[j] + (j+1));
    j++;
} 

// DO WHILE 
do{
    console.log(array_tex[w] + (w+1));
    w++;
}while(w<array_tex.length)

// CREAR FUNCIONES (crear un evento con una función y controlar la experiencia de un usuario)
function load_page(){
    alert("Bienvenido a mi sitio web")
}

var color="#fff"
function change_color(){
    document.body.style.backgroundColor="red";
    document.body.style.color="red"; //dentro de comillas porque eso lo sabe css no js
    document.body.style.color=color;
}
const btn_clear=document.querySelector("#limpiar")
btn_clear.addEventListener("click", ()=>{
    document.body.style.backgroundColor="white";
    document.body.style.color="#000";
});

// EJERCICIO FORMULARIO DE REGISTRO 
const form_register = document.getElementById("form_register");
const nombres       = document.getElementById("nombres");
const apellidos     = document.getElementById("apellidos");
const information   = document.getElementById("information");

form_register.addEventListener("submit", name_event => {
    name_event.preventDefault();
    let info = ""
    if(nombres.value.length <=2 || apellidos.value.length <3 ){
        info += "Nombres y apellidos deben ser mayores o iguales a 3 caracteres"
        information.style.color = "red"
    }
    else{
        alert("INFORMACIÓN CORRECTAMENTE")
    }
    information.innerText = info;
    // information.innerText == "HOLA"
});

function accion(){
    let accion = document.getElementById("accion");
    if(accion.value.length == 0){
        accion.style.backgroundColor = "red";
    }
    else{
        accion.style.backgroundColor = "green";
    }
}

function load_page(){
    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disabled = true;
    let date = new Date();
    console.log(date.getFullYear());

    for(let a=0;a<array_mul.length;a++){
        console.log(array_mul[a].name);
    }
}

function validate(){
    let nombres = document.getElementById("nombres").value;
    console.log(nombres.length);
    if(nombres.length > 2){
        document.getElementById("apellidos").disabled = false;
        document.getElementById("apellidos").focus(); 
        alert(nombres.split(""));      
    }

}

function limpiar(){
    let nombres = document.getElementById("nombres").value;
}