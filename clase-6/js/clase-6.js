// Definimos arrays
/* 
const arrayA = [];
const arrayB = [1,2,3,5,10.4];
const arrayC = ["C1", "C2", "C3", "C4"];
const arrayD = [true, false, false, true];
const arrayE = [1, true, "CA"];

console.log(arrayA);
console.log(arrayB);
console.log(arrayC);
console.log(arrayD);
console.log(arrayE);
 */

// Acceso al array

/* const numeros = [1,2,3,4,5,6];
let resultado1 = numeros[0] + numeros[2];
let resultado2 = numeros[1] + numeros[5];
let resultado3 = numeros[3] - numeros[4];
console.log(resultado1); //4
console.log(resultado2); //8
console.log(resultado3); //-1
console.log("El valor es: " + numeros[5])

const personas = ["Wanda Nara", "China Suarez", "Mauro Icardi"];
let nueva_pareja = personas[0] + " y " + personas[2];
console.log(nueva_pareja); */
/* 
// Recorrido del array
const numeros = [1,2,3,4,5];
const persona = ["Mauro", "Wanda", "Zaira"];
const frutas = ["Banana", "Manzana"];
//Ejemplo 1
for (let i=0; i < 5; i++) {
    console.log("Numero: " + numeros[i]);
}
console.log("Elementos: " + numeros.length);
// Ejemplo 2
// De esta manera asignamos correctamente la cantidad de elementos a iterar
for (let i=0; i < numeros.length; i++) {
    console.log("Numero: " + numeros[i]);
}
// Ejemplo 3
let total = frutas.length;
console.log("Elementos: " + total);
for (let i=0; i < total; i++) {
    console.log("Fruta: " + frutas[i]);
}
// Ejemplo 4
for(let i in persona){
    console.log("Persona: " + persona[i]);
} */
/* 
// Metodos y Propiedades de los arrays
const miArray = ["marca", 3, "Palabra"];
console.log("Longitud: " + miArray.length);
let texto = miArray.toString();
console.log("Convertir a string: " + texto.toLocaleUpperCase());

var var1 = miArray.toString();
var var2 = var1.toLowerCase();
console.log("Var1: " + var2);
console.log(miArray[0].toUpperCase() +  ", " + miArray[2].toLowerCase());
 */

/* // Agregando elementos
const miArray = ["marca", 3, "Palabra"];

//Metodo push()
miArray.push("otro elemento");
var nombre = prompt("Ingrese su nombre");
miArray.push(nombre);
console.log("Longitud: " + miArray.length);

//Metodo join() ->Junta los elementos separados por un caracter
console.log("Metodo Join: " + miArray.join("-"));

//Metodo concat() -> Combina dos arrays en uno
const otroArray = ["Ford", 45];
console.log("Metodo concat: " + miArray.concat(otroArray));
console.log("Metodo concat: " + otroArray.concat(miArray)); */
/* 
// Metodo slice() -> Generar un nuevo array a partir de un rango
const nombres = ["Luciano", "Micaela", "Sofia", "Julieta", "Santiago", "Jazmin", "Joaquin"];
const hermanasMedio = nombres.slice(1,4);
const ultimo = nombres.slice(nombres.length-1, nombres.length);
const primero = nombres.slice(0,1);
console.log(nombres);
console.log(hermanasMedio);
console.log(primero);
console.log(ultimo); */
/* 
//Agregamos elementos al final con push()
const listaNombres = [];
var cantidad = 3;

do {
    let entrada = prompt("Ingresar nombre");
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres);
} while (listaNombres.length < cantidad) {
    let entrada2 = prompt("Ingresar nombre #2");
    listaNombres.push(entrada2.toUpperCase());
    console.log("Elementos " + listaNombres.length);
}
 */
// Eliminando el último elemento con pop()
/* const listaNombres = ["Lucho", "Wanda", "Timmy", "Javier"];
console.log(listaNombres);
var nombre = listaNombres.pop();
console.log("El nombre eliminado es: " + nombre);
console.log(listaNombres);
 */

/* // Funcion para elminar un elemento mediante selección de su index
function elminarElemento(miArray, valor) {
    let nuevoArray = [];
    for(let i=0; i<miArray.length; i++){
        if(i != valor){
            nuevoArray.push(miArray[i]);
        }
    }
    return nuevoArray;
}

miArray = ["Lucho", "Mica", "Sofi", "Juli"];
nuevoArray = elminarElemento(miArray, 1);
console.log(miArray);
console.log(nuevoArray);
 */

/* // Array de objetos
const objeto1 = {id:1, producto:"Arroz"};
console.log(objeto1);
const array = [objeto1, {id:2, producto:"Fideos"}];
console.log(array);
array.push({id:3, producto:prompt("Ingrese producto:")});
console.log(array);
 */

/* 
// Recorriendo un array de objetos
const productos = [{id:1, nombre:"Arroz"}, {id:2, nombre:"Polenta", precio:120}, {id:3, nombre:"Leche"}];
const nombres = ["Wande", "Mauro", "Maxi"];
const gaseosas = [{id:1, nombre:"CocaCola", precio:220}, {id:2, nombre:"Pepsi", precio:210}, {id:3, nombre:"Sprite", precio:210}];
 for (const producto of productos) {
     console.log("ID: " + producto.id + " - Producto: " + producto.nombre);
 }

 for(let beto of productos) {
     console.log("ID: " + beto.id + " - Producto: " + beto.nombre + " - Precio: " + beto.precio);
 }

 for (let pepe of gaseosas) {
     console.log("ID: " + pepe.id + " - Nombre: " + pepe.nombre);
 }

 console.log("Muestro el 2: " + gaseosas[2].nombre + " - Precio: " + gaseosas[2].precio);
 */
/* 
 // typeOf

 let miFuncion = (a,b) => a+b;
 let forma = "redonda";
 let tamano = 1;
 console.log (typeof miFuncion);
 console.log(typeof forma);
 console.log(typeof tamano);
 let valor =(prompt("Ingrese nombre"));
 console.log(typeof valor);

 if (typeof valor == "string") {
     alert("El valor ingresado es String!");
 } else {
     alert("El valor no es ingresado es String!");
 }
 */
/* 
 // Ejemplo aplicando: objetos, producto y array

 class Producto {
     constructor(nombre, precio, costo) {
         this.nombre = nombre.toUpperCase();
         this.precio = parseFloat(precio);
         this.costo = parseFloat(costo);
         this.iva = 1.21;
         this.precio_iva = this.precio * this.iva;
     }
     sumaIva() {
         this.precio = this.precio * this.iva;
     }
 }

const productos = [];
productos.push(new Producto("Arroz", 120, 35));
productos.push(new Producto("Leche", 90, 45));
productos.push(new Producto("Cerveza", 200, 70));
console.log(productos);

for (const producto of productos) {
    console.log(producto.sumaIva());
}

console.log(productos);
console.log(productos[1].nombre + " " + productos[1].precio_iva);
 */
/* 
// Metodo find()
const numeros = [1,2,3,4,5,6,7];
console.log(numeros);
const encontrado = numeros.find(x => x > 3);
console.log(encontrado);
//Metodo filter()
const encontrado2 = numeros.filter(y => y >=3);
console.log(encontrado2); 
// Metodo map()
const porDos = numeros.map(z => z * 2);
const masCien = numeros.map(a => a + 100);
console.log(porDos);
console.log(masCien); */

/* 
const nombres = ["Ana", "Ana Maria", "Wanda", "Mauro"];
console.log(nombres);
const encontrado = nombres.find(nombres => nombres == "Wanda");
const encontrado2 = nombres.find(nombres => nombres == "WAnda");
console.log(encontrado);
console.log(encontrado2);
const enconrado3 = nombres.filter(nombres => nombres == 123);
const encontrado4 = nombres.filter(nombres => nombres == "Ana");
const lista_nombres = nombres.map(nombres => nombres.includes("n"));
console.log(enconrado3);
console.log(encontrado4);
console.log(lista_nombres) */

//Ejemplo aplicado: buscando y filtrando objetos

const productos = [{id:1, producto:"Arroz", precio:125}, {id:2, producto:"Leche", precio: 100}, {id:3, producto:"Pan", precio: 200}];

const buscarPan = productos.find(productos => productos.id === 3);
console.log(buscarPan);

const baratos = productos.filter(productos => productos.precio < 130);
console.log(baratos);

const aumentos = productos.map(productos => productos.precio += 30);
console.log(aumentos);
















