class Persona {
    constructor(idCliente, nombrePersona, direccion, telefono, email, condicionIva){
        this.idCliente = idCliente;
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

class Producto {
    constructor (codigo, nombre, largo, ancho, espesor, madera, stock, precio, costo) {
        this.codigo = codigo;
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
}

let datos = {nombre: "Siemprevivas", altura: "13479", cp: "2344", localidad: "Spring", provincia: "Ioha"};
let direccion = new Direccion (datos);

const cliente1 = new Persona (1,"Luciano", direccion, "155357454", "luciano@gmail.com", "Monotributisa");
const cliente2 = new Persona (2,"Silvina", direccion, "155596053", "silvina@gmail.com", "Responsable Inscripto");  
const cliente3 = new Persona (3,"Javier", direccion, "15340534", "javier@gmail.com", "Iva Exento");


const poste332 = new Producto(332, "Poste", "200", "3", "3", "Quebracho Colorado", 100, 1380, 790);
const poste3322 = new Producto(3322, "Poste", "220", "3", "3", "Quebracho Colorado", 100, 1500, 865);
const poste3324 = new Producto(3324, "Poste", "240", "3", "3", "Quebracho Colorado", 100, 1650, 945);


const productos = [];
const clientes = [];
productos.push(poste332, poste3322, poste3324);
clientes.push(cliente1, cliente2, cliente3);
let lista_clientes = clientes.toString();
console.log(lista_clientes);
// Cuantos clientes y productos tenemos en la cartera
console.log("Tenemos " + productos.length + " productos en la lista");
console.log("El número de clientes registrados es de: " + clientes.length);


function buscarPrecio(){
    let valor = prompt("Ingrese el precio máximo dispuesto a pagar")
    const baratos = productos.filter(productos => productos.precio < valor);
    console.log(baratos);
}
function buscarCliente() {
    const buscarCliente = clientes.find(clientes => clientes.idCliente === 1);
    console.log(buscarCliente);
}
buscarCliente();

let aumentoPrecio = prompt("Desea aumentar los precios? Responda Y/N");
if (aumentoPrecio == "Y") {
    const monto = prompt("Ingrese el % a aumentar en decimales. Ej: 1.21(IVA)");
    const aumentos = productos.map(productos => productos.precio * monto);
    console.log(aumentos)
} else {
    console.log("No hay aumentos aplicados.")
}

for (const cliente of clientes) {
    console.log("ID: " + cliente.idCliente + " - Cliente: " + cliente.nombrePersona);
}

for (const producto of productos) {
    console.log("El producto " + producto.nombre + " " + producto.ancho + "x" + producto.espesor + "x" + producto.largo + " tiene un precio de $" + producto.precio);
}
buscarPrecio();