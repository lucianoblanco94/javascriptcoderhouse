
let hola = "Bienvenido usuario, a continuación te pediremos tus datos.";
alert(hola);

var ano_actual = 2021;

let nombre = prompt("Ingresa tu nombre: ");
let apellido = prompt("Ingresa tu apellido: ");
let edad_ingresada = prompt("Ingresa tu año de nacimiento: ");
let ciudad = prompt("Ciudad y Provincia: ");
let codigo_postal = prompt("Código postal");
let edad = ano_actual - parseFloat(edad_ingresada);
let mensaje_final = "Que tal " + nombre + " " + apellido + "?. Tienes " + edad +  " años de edad. Y eres de " + ciudad + ", CP " + codigo_postal;
alert(mensaje_final);
