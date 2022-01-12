// Ejemplo for #1
/*
for (let i = 0; i < 10; i++) {
    console.log("El valor de 'i' es: " + i);
} 

// Ejemplo for #2
for (let i = 0; i <= 10; i++) {
    console.log("El valor de 'i' es: " + i);
} 

// Ejemplo tablas
let ingresarNumero = parseInt(prompt("Ingresar número"));
for (let i = 1; i <= 10; i++){
    let resultado = ingresarNumero * i;
    alert(ingresarNumero + " X "+ i + " = " + resultado);
}

// Ejemplo Turnos
for(let i=1; i<=5; i++){
    let ingresarNombre = prompt("Ingrese su nombre:");
    alert("Turno N° " + i + " - Nombre: " + ingresarNombre);
}

let nombres = parseInt(prompt("Ingrese la cantidad de nombres que quiera mostrar: "));

for(let i=1; i<=nombres; i++){
    let ingresarNombre = prompt("Ingrese su nombre:");
    if (ingresarNombre = "Luciano") {
        console.log("Hola Luciano");
    }
    alert("Turno N° " + i + " - Nombre: " + ingresarNombre);
}

// Sentencia break
for (let i=0; i<=10; i++){
    console.log("Hola #" + i);

    if (i == 5){
        console.log("Entré al break!");
        break;
    }
}

const maximo_permitido = parseInt(prompt("Ingrese el maximo de calorías: "));
var calorias = 0;
const comidasDiarias = parseInt(prompt("Ingrese la cantidad de comidas en el día: "));
for (let i=1; i<=comidasDiarias; i++){
    let pregunta = parseInt(prompt("Indique cuantas calorías consumió en la comida #" + i));
    calorias = calorias + pregunta;
    alert("El total de calorías es: " + calorias);
    if(calorias > maximo_permitido){
        break;
    }
}
alert("El total de calorías que consumiste es: " + calorias);



// Sentencia Continue
for (let i=1; i<=10; i++){
    console.log("Hola #" + i);

    if (i == 5){
        console.log("Entré al Continue ");
        continue;
}
    if (i == 8){
        console.log("Entré al Break");
        break;
    }
    console.log("Chau #" + i);
}

// Sentencia While

let repetir = true;
let i = 0;

while (repetir) {
    console.log("Al infinito ...");

    if (i == 5) {
        console.log("Entré al break!");
        break;
    }

    i++
}

// While con ESC

let entrada = prompt("Ingrese un dato");

while(entrada.toUpperCase() != "ESC") {
    alert ("El usuario ingresó: " + entrada);

    if ((entrada.toUpperCase() == "WANDA") || (entrada == null)){
        console.log("Ingresaste Wanda o Null!");
        break;
    }

    entrada = prompt("Ingrese otro dato: ");
}

// do while

let numero = 0;

do {
    numero = prompt("Ingrese un número: ");
    console.log(numero);
} while (parseInt(numero));


let numero = parseInt(prompt("Cual es tu edad?"));
switch(numero) {
    case 10:
        alert("Sos un niño!");
        break;
    case 15:
        alert("Sos un adolescente!");
        break;
    case 25:
        alert("Sos un adulto");
        break;
    default:
        alert("SOS UN VIEJO!");
        break;
}
*/

// Combinación Switch y While
let nombre = prompt ("Ingrese su nombre: ").toUpperCase();

while (nombre != "ESC") {
    switch(nombre) {
        case "ANA":
            alert("Hola Ana!");
            break;
        case "JUAN":
            alert("Hola Juan!");
            break;
        default:
            alert("Quien sos?");
            break;
    }
    
    if ((nombre == "ANA") || (nombre == "JUAN")){
        console.log("Salgo de la ejecución");
        break;
    }
    nombre = prompt("Ingrese un nombre: ").toUpperCase();
}