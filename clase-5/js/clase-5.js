// Definimos unas variables
/* let nombre = "Luciano";
let edad = 27;
let direccion = "Micheletti 7863"; */
// Defino un objeto
//let lucho = {nombre:"Luciano", edad:27, direccion:"Micheletti 7863", altura: "173 cm"};

/*console.log(lucho);
console.log("Nombre: " + lucho.nombre);
console.log("Edad: " + lucho.edad);
console.log("Dirección: " + lucho.direccion); */

// Otra forma de acceder a las propiedades
/* console.log("Mi nombre es: " + lucho["nombre"]);
console.log("Mi edad es: " + lucho["edad"]);
console.log("Mi direccion es: " + lucho["direccion"]);
console.log("Mi altura es: " + lucho["altura"]); */

/* //Asignando valores en las propiedades de mi objeto

lucho.nombre = "Luciano Javier";
lucho["edad"] = 28;
console.log(lucho); */

/* const persona1 = {nombre: prompt("Ingrese su nombre"), edad: prompt("Ingrese su edad")};
console.log("Tu nombre es: " + persona1["nombre"] + " y tu edad es de " + persona1.edad); */

// Constructores

/* function Persona(var1, var2, var3,var4, var5) {
    this.nombre = var1;
    this.edad = var2;
    this.direccion = var3;
    this.dni = var4;
    this.nacionalidad = var5;
}

function Persona2() {
    this.nombre = prompt("Ingrese su nombre");
    this.edad = prompt("Ingrese su edad");
    this.direccion = prompt("Ingrese su direccion");
}

const persona1 = new Persona(prompt("Ingrese su nombre"), prompt("Ingrese su edad"), prompt("Ingrese su direccion"), prompt("Ingrese su DNI"), prompt("Ingrese su nacionalidad"));
const persona2 = new Persona2();
console.log(persona1);
console.log(persona2);
persona2.edad = 44;
console.log(persona2.edad);
console.log("Nacionaldad: " + persona1.nacionalidad); */

// Constructor con objeto
/* function Persona(humano){
    this.nombre = humano.nombre;
    this.edad = humano.edad;
    this.direccion = humano.direccion;
    this.nacionalidad = humano.nacionalidad;
    this.pelo = humano.pelo;
    this.darNombre = function() {console.log("Mi nombre es: " + this.nombre)};
} */
/* const datos = {nombre:"Luciano", edad:27, nacionalidad:"Argentino"}
const persona1 = new Persona(datos);
console.log(persona1);
persona1.darNombre(); */

/*let people = {nombre: "Homero", edad:40, calle:"AV Siempreviva 742", nacionalidad: "Yankee"};
let people2 = {nombre: "Marge", edad:38, calle:"AV Siempreviva 742", nacionalidad: "Yankee", pelo:"Azul"};
const persona1 = new Persona(people)
const persona2 = new Persona(people2);
console.log(persona1);
console.log(persona2); */

//Ejemplo objeto dentro de un objeto
/* function Persona(humano){
    this.nombre = humano.nombre;
    this.edad = humano.edad;
    this.direccion = humano.direccion;
    this.nacionalidad = humano.nacionalidad;
    this.pelo = humano.pelo;
    this.darNombre = function() {console.log("Mi nombre es: " + this.nombre)};
}
function Direccion(datos){
    this.nombre_calle = datos.nombre;
    this.altura_calle = datos.altura;
    this.codigo_postal = datos.cp;
    this.localidad = datos.localidad;
    this.provincia = datos.provincia;
}

let datos = {nombre: "Micheletti", altura:"7863", cp:"2000", localidad: "Rosario", provincia: "Santa Fe"};
let direccion = new Direccion(datos);
let people = {nombre: "Homero", edad:40, direccion: direccion, nacionalidad: "Yankee"};

const persona1 = new Persona(people);
console.log(persona1); */

// Metodos en Objetos
/* let cadena = "Coder House";
console.log("Cadena original: " + cadena);
console.log("Longitud: " + cadena.length); //Propiedad
console.log(cadena.toLowerCase) // Metodo para todo minus
console.log(cadena.toUpperCase) // Metodo para todo mayus
 */

//Metodos personalizados
/* function Persona(var1,var2,var3){
    this.nombre = var1;
    this.edad = var2;
    this.direccion = var3;
    this.hablar = function() {
        console.log("Hola soy " + this.nombre);
    };
    this.nombreMin = function(){
        console.log(this.nombre.toUpperCase());
    };
    this.edadVerdader = () => {return this.edad +3;}
}

const persona1 = new Persona("Luciano", 27, "Micheletti 7863");
console.log(persona1.nombre);
persona1.hablar();
persona1.nombreMin();
let edad = persona1.edadVerdader();
console.log("Tu edad verdadera es: " + edad); */

/* function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.descuento = 10;
    this.precioConDescuento = function(){
        return this.precio - ((this.precio * this.descuento)/100);
    };
}

const producto = new Producto("Poste 3 x 3 x 200"," 1280");
console.log("Nombre del producto: " + producto.nombre);
console.log("Precio del producto: $" + producto.precio);
console.log("Precio c/Descuento es de $" + producto.precioConDescuento());
 */

/* const persona1 = {nombre:"Luciano", edad:27, direccion: "Micheletti 7863"};
console.log("nombre" in persona1);
console.log("edad" in persona1);
console.log("color" in persona1);

for (let valor in persona1) {
    console.log("Propiedad: " + valor + " - valor: " + persona1[valor]);
} */

/* const producto = {nombre:prompt("Ingrese el producto"), precio:prompt("Ingrese el precio del producto"), categoria:prompt("Ingrese la categoria del producto")};
console.log("- Mostramos otro producto");
for (let valor in producto) {
    console.log("Propiedad: " + valor);
    console.log("Valor: " + producto[valor]);

    if ((valor in producto) && (valor == "precio")) {
        valor = producto[valor] * 1.20;
        console.log("El nuevo valor es: " + valor)
    };
} */


// CLASES
/* 
class Persona {
    constructor(var1, var2, var3){
        this.nombre = var1;
        this.edad = var2;
        this.direccion = var3;
    }
    
    hablar() {
        console.log("Hola soy " + this.nombre);
    }
}

const persona1 = new Persona("Luciano", 27, "Micheletti 7863");
console.log(persona1);
persona1.hablar();
 */

class Producto {
    constructor (nombre, precio, stock) {
        this.name = nombre.toUpperCase();
        this.precio = precio;
        this.vendido = false;
        this.stock = stock;
    }
    iva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        if (this.stock > 0 ){
            this.vendido = true;
            this.stock = this.stock -1;
        } else {
            console.log("No hay stock del producto " + this.nombre);
        }
    }
}

const producto1 = new Producto("Poste 4x4x200", 2400,10);
const producto2 = new Producto("Poste 3x3x200", 1300,1);
console.log(producto1);
console.log(producto2);
producto1.iva();
producto2.iva();
producto1.vender();
producto2.vender();
console.log(producto1);
console.log(producto2);
producto2.vender();

















