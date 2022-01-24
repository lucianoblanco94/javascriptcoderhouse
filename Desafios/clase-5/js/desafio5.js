
class Producto {
    constructor (nombre, largo, ancho, espesor, madera, stock, precio, costo) {
        this.nombre = nombre.toLowerCase();      
        this.largo = largo;
        this.ancho = ancho;
        this.espesor = espesor;
        this.madera = madera;
        this.stock = stock;
        this.precio = precio;
        this.costo = costo;
        this.vendido = false;
    }
    calcularIva() {
        this.precio = this.precio * 1.21;
    }
    vender(){
        if ((this.stock > 0)){
            this.vendido = true;
            this.stock -= this.stock;
            console.log("Compraste " + this.nombre + " " + this.ancho + " x " + this.espesor + " x " + this.largo + " por $" + this.precio);
        }else {
            alert("Por el momento no contamos con stock del producot " + this.nombre);
        }
    }
}

class Persona {
    constructor(nombrePersona, direccion, telefono, email, condicionIva){
        this.nombrePersona = nombrePersona.toUpperCase();
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email.toUpperCase();
        this.condicionIva = condicionIva.toUpperCase();
    }
}

function Direccion(datos){
    this.nombre_calle = datos.nombre.toUpperCase();
    this.altura_calle = datos.altura;
    this.codigo_postal = datos.cp;
    this.localidad = datos.localidad.toUpperCase();
    this.provincia = datos.provincia.toUpperCase();
}
let datos = {nombre: prompt("Ingrese la calle donde vive"), altura:prompt("Altura de la calle"), cp: prompt("Ingrese Código Postal"), localidad: prompt("Ingrese localidad de residencia"), provincia: prompt("Ingrese provicina")};
let direccion = new Direccion (datos);
const cliente1 = new Persona (prompt("Ingrese su nombre"), direccion, prompt("Ingrese su numero de telefono"), prompt("Ingrese su email"), prompt("Condicion frente a IVA"));
const producto1 = new Producto(prompt("Que producto desea comprar?"), prompt("Largo"), prompt("Ancho"), prompt("Espesor"), prompt("Tipo de madera"), prompt("Stock Disponible"), prompt("Precio del producto"), prompt("Costo del producto"));
const producto2 = new Producto(prompt("Que producto desea comprar?"), prompt("Precio del producto"), prompt("Costo del producto"), prompt("Stock Disponible"), prompt("Largo"), prompt("Ancho"), prompt("Espesor"), prompt("Tipo de madera"));

// console.log(cliente1);
producto1.calcularIva();
producto1.vender();
console.log(producto1);