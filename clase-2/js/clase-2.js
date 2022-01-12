// Condicion verdadera
let valor = true;
if (valor){
    console.log("Vas a ver este mensaje!");
    let aa= 10;
    let nombre = "Ben";
    alert(nombre + aa);
}

// Condición falsa

if(false) {
    console.log("No vas a ver este mensaje");
}


let unNumero = 5;
// Comparamos el valor de la variable con 5
if (unNumero == 5){
    console.log("Vas a ver este mensaje");
}
// Comparamos el valor de la variable con 6
if (unNumero == 6) {
    console.log("No vas a ver este mensaje");
}


let unColor = "Rojo";
//Comparamos el valor de la variable con Rojo (string)
if (unColor == "Rojo") {
    console.log("El color es Rojo!");
} else {
    console.log("El color no es Rojo!");
}


let nombreUsuario = prompt("Ingrese su nombre de usuario: ");
// Ingreso de datos
if (nombreUsuario == null){
    alert("No ingresaste un nombre de usuario");
} else {
    alert("El usuario ingresado es: " + nombreUsuario);
}

let nombreUsuario = prompt("Ingrese su nombre de usuario: ");
//Distinto
if (nombreUsuario != null){
    alert("El usuario ingresado es: " + nombreUsuario);
} else {
    alert("No ingresaste un nombre de usuario");
}