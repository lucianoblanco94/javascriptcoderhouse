/* function saludar(){
    console.log("Hola gente!");
}

function despedir(){
    console.log("Chau people!");
}

function saludo(){
    saludar();
    despedir();
} */

//var nombreIngresado = prompt("Ingrese nombre:");
//alert("El nombre ingresado es: "+ nombreIngresado);

/*function pedirNombre(){
    var nombreIngresado = prompt("Ingrese nombre:");
    alert("El nombre ingresado es: "+ nombreIngresado);
}

function pedirApellido(){
    var apellidoIngresado = prompt("Ingrese Apelido:");
    alert("El apellido ingresado es: "+ apellidoIngresado);
}

function pedirNombreCompleto(){
    pedirNombre();
    pedirApellido();
}

pedirNombreCompleto();
*/

/*
function conParametros(parametro1, parametro2) {
    console.log(parametro1 + " " + parametro2);
}
*/
/*
//función con parámetros
function conParametros (param1, param2){
    console.log(param1 + " - " + param2);
}
conParametros("Luciano Blanco", "Web Developer");

function sumar(valor1, valor2, valor3){
    let resultado = valor1 + valor2 + valor3;
    console.log("El resultado es: " + resultado);
}

sumar(20,30,40);
function esPar(valor1, valor2){
    let resultado = valor1 % 2;

    if (resultado == 0){
        console.log(valor1 + " es par.");
    } else{
        console.log(valor1 + " es impar.");
    }
}

esPar(130);

function exponencial(valor1, valor2){
    let resultado = 1;
    for (let i=0; i<valor2; i++){
        resultado = resultado * valor1;
    }
    console.log("El resultado es: " + resultado);
}
exponencial(4,4);
*/
/*
let nombre = prompt("Ingrese nombre");
let apellido = prompt("Ingrese apellido");

function pedirNombreCompleto(param1, param2){
    console.log("Tu nombre: " + param1);
    console.log("Tu apellido: " + param2);
    console.log("Tu nombre completo es: " + param1 + " " + param2);
}

function pedirNombre(param1){
    console.log("TU nombre es: " + param1);
}

pedirNombreCompleto(nombre, apellido);
//pedirNombre(nombre, apellido);
*/

/*
let resultado = 0;
function sumar(param1, param2){
    resultado += param1 + param2;
}
sumar(30,20);
console.log("El resultado es: " + resultado);
sumar(0, 10);
console.log("El resultado es: " + resultado);
*/

// return en funcion
/*
function sumar(param1, param2){
    return (param1 + param2);
}

let resultado = sumar(20,30);
console.log("1- El resultado es: " + resultado);
console.log("2- El resultado es: " + sumar(40,80));
*/ 

/*function nombreCompleto(){
    let nombre = prompt("Ingrese nombre");
    let apellido = prompt("Ingrese apellido");

    return nombre + " " + apellido;
}

let nombre_completo = nombreCompleto();
console.log("Mi nombre es: " + nombre_completo);
*/
/*
// Ejemplo Calculadora
function calculadora (param1, param2, operacion){
    switch(operacion){
        case "+":
            return param1 + param2;
            break;
        case "-":
            return param1 - param2;
            break;
        case "*":
            return param1 * param2;
            break;
        case "/":
            return param1 / param2;           
        default:
            return 0;
            break;
    }
}
let operacion = calculadora(30,5, "/");
console.log("El resultado es: " + calculadora(20, 30, "*"));
console.log("El resultado es: " + operacion);
*/
// Funcion anónima
/*
const suma = function(a,b) {return a + b};
const resta = function(a,b) {return a - b};
const mensaje = function(texto) {alert(texto)}
console.log(suma(15,20));
console.log(resta(15,20));
mensaje("Hola a Todos");
*/
/*
const pedirHamburguesa = function (a,b) {console.log("La hamburguesa tiene: " + a + " y " + b)};
pedirHamburguesa("Tomates", "Cebolla Caramelizada");
*/

// Funciones flecha
 /*
const suma = (a,b) => {return a + b};
const resta = (a,b) => {return a - b};
const multiplicar = (a,b) => {return a * b};
const iva = (x) => {return x * 0.21};
const mensaje = (texto) => {alert(texto)};

console.log("Suma: " + suma(20,30));
console.log("Multiplicación: " + multiplicar(4,20));
mensaje("Hoy es 13 de enero de 2022");
console.log("El iva es de: " + iva(1210));
*/


const suma = (a,b) => {return a + b};
const resta = (a,b) => {return a - b};
const iva = (x) => {return x * 0.21};

let producto = parseInt(prompt("Ingrese precio del producto"));
let precioDescuento = 100;
let nuevoPrecio = resta(suma(producto, iva(producto)), precioDescuento);
console.log("El valor del prodcuto con el descuento es de: " + nuevoPrecio);
