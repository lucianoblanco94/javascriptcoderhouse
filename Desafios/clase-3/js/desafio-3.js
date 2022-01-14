// Programa de venta de entradas anticipadas limitadas
// Con una capacidad máxima de 300 a $3000, 500 a $4000

let preventa1 = 300;
const preventa1_precio = 3000;
let entradasDisponibles = 300;

for(let totalVendidas = 0; totalVendidas <= preventa1; totalVendidas+entradas) {
    
    let ingresarNombre = prompt("Ingresar nombre: ");
    let ingresarDni = prompt("Ingresa tu DNI o Pasaporte: ");
    let entradas = parseInt(prompt("Ingresa cantidad de entradas: "));
    entradasDisponibles -= entradas;
    alert(ingresarNombre + " de DNI " + ingresarDni + " adquirió una cantidad de: " + entradas + " por un valor de $" + entradas*preventa1_precio);
    alert("Quedan un total de " + entradasDisponibles + " entradas disponibles");
    
    if (entradasDisponibles == 0) {
        alert("No quedan entradas disponibles de preventa 1.");
        break;
    }

    switch(totalVendidas) {
        case 100:
            alert("Compraste la entrada N°100. Te llevas un champagne de regalo!");
            break;
        case 200:
            alert("Compraste la entrada N°200.Te ganaste un combo!");
            break;
        case 300:
            alert("Compraste la entrada N°300. Te ganaste un Jaggermasteir!");
            break;
        default:
            alert("Sigue participando");
            continue;
    }
    let ingresarNombre = prompt("Ingresar nombre: ");

    
}