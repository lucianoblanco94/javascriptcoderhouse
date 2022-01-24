// Metodo => localStorage.setItem(clave,valor);
// clave = nombre para identificar el elemento
// valor = valor/contenido del elemento

/* localStorage.setItem("bienvenida", "hola Coderhouse");
localStorage.setItem("esValido", true);
localStorage.setItem("unNumero", 20);
localStorage.setItem("tuNombre", prompt("Ingresá tu nombre"));
localStorage.setItem("lucho", "Mi nombre es LUCHO");

let mensaje = localStorage.getItem("bienvenida");
let bandera = localStorage.getItem("esValido");
let numero = localStorage.getItem("unNumero");
let lucho = localStorage.getItem("lucho");
alert("Como te llamas? " + lucho.toUpperCase());
localStorage.setItem("lucho", "Mi Segundo nombre es JAVIER");
lucho = localStorage.getItem("lucho");
alert("Tu segundo nombre es? " + lucho.toLowerCase());


console.log("Mensaje: " + mensaje);
console.log("Bandera: " + bandera);
console.log("Numero: " + numero);
console.log("Tu nombre es: " + localStorage.getItem("tuNombre"));
console.log(typeof mensaje);
console.log(typeof bandera);
console.log(typeof numero);
console.log(typeof localStorage.getItem("tuNombre"));
 */

// Metodo => sessionStorage.setItem(clave,valor);
// calve = nombre del elemento
// valor = contenido del elemento

/* sessionStorage.setItem("seleccionados", [1, 2, 3]);
sessionStorage.setItem("esValido", false);
sessionStorage.setItem("email", "info@coderhouse.com");
sessionStorage.setItem("numero", 123);
sessionStorage.setItem("lucho", "HOla LUCHO!");

let lista = sessionStorage.getItem("seleccionados").split(",");
let bandera = (sessionStorage.getItem("esValido") == "true");
let email = sessionStorage.getItem ("email");
let numero = parseInt(sessionStorage.getItem("numero"));

console.log("Lista: " + lista);
console.log("Bandera: " + bandera);
console.log("Email: " + email);
console.log(typeof lista);
console.log(typeof bandera);
console.log(typeof email);
console.log(typeof numero); 
alert("Nombre: " + sessionStorage.getItem("lucho").toLowerCase());
*/

/* // Acceso tipo Objetos
localStorage.setItem("numeroPrueba", 6); 
alert("Es: "+ localStorage.numeroPrueba);
localStorage.numeroPrueba = 5;
alert("ess: " + localStorage.getItem("numeroPrueba"));
let clave = "toString";
localStorage[clave] = "6";
alert("es: " + localStorage.clave);

 */

/* //Recorriendo los localSotrage
let local = localStorage.length;
alert("Tengo " + local + " localStorage");

for (let i=0; i<localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave + " - Valor: " + localStorage.getItem(clave));

}
console.log("Fin de LocalStorage");

 */
/* // Recorriendo sessionStorage
sessionStorage.setItem("hello", "Hola Mundo");
let session = sessionStorage.length;
alert("Tengo " + session + " sessionStorage");

for (let i=0; i < sessionStorage.length; i++) {
    let clave = sessionStorage.key(i);
    console.log("Clave: " + clave + " - Valor: " + sessionStorage.getItem(clave));
}
console.log("Fin de SessionStorage");
 */


// Elminar los datos de los storages
/* localStorage.setItem("bienvenida", "Hola chicos");
let local = localStorage.length;
alert("Tengo: " + local + " localStorages");
localStorage.removeItem("bienvenida");
local = localStorage.length;
alert("Tengo " + local + " localStorage");
alert(localStorage.getItem("bienvenida")); 
local = localStorage.length;
alert("Tengo: " + local + " localStorages");
localStorage.clear();
alert("Tengo: " + local + " localStorages"); */

/* sessionStorage.setItem("cookies", "Acepta todas las cookies");
let session = sessionStorage.length;
alert("Tengo " + session + " sessionStorage");
alert(sessionStorage.getItem("cookies"));
sessionStorage.removeItem("cookies");
sessionStorage.clear();
session = sessionStorage.length;
alert("Tengo ahora " + session + " sessionStorage");


sessionStorage.removeItem("prueba") // Elimina 1 item
sessionStorage.clear // Elimina todos los items

 */

/* // Ejemplo aplicado: almacenar tabla de multiplicar

const multiplicar = (a,b) => a * b;
const guardarLocal = (clave, valor) => {localStorage.setItem(clave,valor)};
let ingresarNumero = parseInt(prompt("Ingresa el número: "));

for(let i=0; i<=10; i++) {
    guardarLocal(i, multiplicar(ingresarNumero, i));
}
alert ("Valores: " + localStorage.length);
for( let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    console.log("Clave: " + clave + " - Valor: " + valor);
} */

// JSON
/* 
// Se guarda el array object Object
const producto1 = {id:1, producto:"Arroz"};
localStorage.setItem("producto1", producto1);
console.log(localStorage.getItem("producto1", producto1)); // object Object
 */

/* // Conversión de objeto a string con JSON con stringify()
const producto1 = {id:2, producto:"Leche"};
const enJSON = JSON.stringify(producto1);
console.log(producto1);
console.log(enJSON);
console.log(typeof producto1);
console.log(typeof enJSON);

localStorage.setItem("producto1", enJSON);
localStorage.setItem("producto1", JSON.stringify(producto1));
console.log(localStorage.getItem("producto1"));
 */
/* 
// Conversion mediante parse(). De JSON a js

const enJSON = '{"id":2, "producto":"Arroz", "prod_relacionados":[1, 2, 3]}';
const producto1 = JSON.parse(enJSON);
console.log(producto1);
console.log(producto1.producto);
console.log(producto1.prod_relacionados);
console.log(typeof enJSON);
console.log(typeof producto1);

console.log(localStorage.getItem("producto1"));
console.log(typeof localStorage.getItem("producto1"));

const producto2 = JSON.parse(localStorage.getItem("producto1"));
console.log("ID: " + producto2.id);
console.log("Producto: " + producto2.producto);
 */
/* 
//Ejemplo aplicado: Almacenar array de objetos

const productos = [{id:1, producto: "Arroz", precio: 125},
                    {id:2, producto: "Harina", precio: 150},
                    {id:3, producto: "Leche", precio: 100},
                    {id:4, producto: "Cacao", precio: 200}];
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
    //localStorage.setItem(producto.id, producto); =>>> Es lo mismo.
}

guardarLocal("listaProductos", JSON.stringify(productos));

console.log("Item 1: " + localStorage.getItem("1"));
console.log("Item 4: " + localStorage.getItem("4"));
console.log("Item 2: " + localStorage.getItem("2"));
console.log("Item 3: " + localStorage.getItem("3"));
console.log("Lista Productos: " + localStorage.getItem("listaProductos"));

let prods = JSON.parse(localStorage.getItem("listaProductos"));
console.log(prods);
console.log("Producto: " + prods[2].producto + " - Precio $" + prods[2].precio ); */

class Producto {
    constructor(obj) {
        this.nombre = obj.producto.toUpperCase();
        this.precio = parseFloat(obj.precio);
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
almacenados.push({id:5, producto:"Pepsi", precio:170});
const productos = [];

console.log(localStorage.getItem("listaProductos"));
console.log(typeof localStorage.getItem("listaProductos"));
console.log(almacenados);
console.log(typeof almacenados);
console.log(productos);

for(const objeto of almacenados) {
    productos.push(new Producto(objeto));
}

console.log(productos);

for (const pepe of productos){
    pepe.sumarIva();
}

console.log(productos);