/* // Acceso por Object

console.dir(document);
console.dir(document.head);
console.dir(document.body); */

/* 
Métodos para acceder a los elementos del DOM

.getElementById();
.getElementsByClassName();
.getElementsByTagName();
*/

/* 
let div = document.getElementById("app");
let parrafo1 = document.getElementById("parrafo1");
let texto = parrafo1.innerHTML;
console.log(div);
console.log(parrafo1);
console.log(parrafo1.innerHTML);
parrafo1.innerHTML = "Hola <i>Mundo</i>";
console.log(parrafo1.innerHTML); // HTML
console.log(parrafo1.innerText); // Texto plato
console.log("El titulo es: " + texto);
 */

//Agregando data desde JS
/* let resultado = document.getElementById("resultado");
resultado.innerHTML = "Clase 8 de <b>Javascript</b>";
console.log(resultado);

document.getElementById("resultado").innerHTML = "Clase 8 de <b>Javascript</b> agregado en una sola linea";
 */

// ELementos mediante clase
/* 
var paises = document.getElementsByClassName("paises"); //Obtenemos los objetos mediante clases
console.log(paises);
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML.length); //Cuantos caracteres tiene
console.log(paises[2].innerHTML);
 */
/* 
// Elemenos mediante etiquetas
var contenedores = document.getElementsByTagName("div");
console.log(contenedores);
console.log(contenedores[0].innerHTML);
console.log(contenedores[2].innerHTML);
console.log(contenedores[3].innerHTML);
 */
/* 
// Recorrer los HTMLCollection
var paises = document.getElementsByClassName("paises");
var contenedores = document.getElementsByTagName("div");
for (const pais of paises) {
    console.log(pais.innerHTML);

}
console.log("----");

for (const contenedor of contenedores) {
    console.log(contenedor.innerHTML);
}
 */

/* //Crear nodo de tipo Elemento, etiqueta p
let parrafo = document.createElement("p");
let parrafo2 = document.createElement("p");

// Insertar HTML interno
parrafo.innerHTML = "<h2>¡Hola Coder Luciano Blanco!</h2>";
parrafo.id = "parrafo";
parrafo2.innerHTML = "Sos estudiante de Coderhouse";
parrafo2.id = "parrafo2"; // crear ID de un elemento

// Añadir el nodo Element como hijo del body
document.body.appendChild(parrafo);
document.body.appendChild(parrafo2);

// Podemos agregar adentro de un section o div
var noticias = document.getElementById("noticias");
noticias.appendChild(parrafo2);
//console.log(document.body.innerHTML);
 */

/*
// Agregando elemento 1
var paises = document.getElementById("paises");
var li = document.createElement("li");
li.innerHTML = "Brasil";
paises.appendChild(li);

// Agregando elemento 2
var li2 = document.createElement("li");
li2.innerHTML = "Venezuela";
paises.appendChild(li2); */

/* // Eliminando elementos
let parrafo_eliminar = document.getElementById("parrafo");
parrafo_eliminar.parentNode.removeChild(parrafo_eliminar);

let paises = document.getElementById("paises");
paises.parentNode.removeChild(paises);
 */

// Otra forma de eliminar
//Ej 1
/* let paises = document.getElementById("paises");
var padre = paises.parentNode;
padre.removeChild(paises);
 */
/* //Ej 2
let paises = document.getElementsByClassName("paises");
paises[1].parentNode.removeChild(paises[1]); */

// Plantillas literales
/* let producto = {id:1, nombre:"Arroz", precio:120};
let concatenado = "#1 - ID: " + producto.id + " - Producto: " +producto.nombre + " - $" + producto.precio;
let plantilla = `#2 - ID: ${producto.id} - Producto: ${producto.nombre} - $${producto.precio}`;
// El valor es identico pero la construccion de la plantilla es más fácil
console.log(concatenado);
console.log(plantilla); */

// Plantillas literales e innerHTML
/* let producto = {id:14341, nombre:"Arroz", precio:120};
let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p style=" color:red; background-color: black; padding: 10px;"> Producto: ${producto.nombre}</p>
                        <b> Precio: $ ${producto.precio}</b>`;
// Agregamos el contenedor creado al body
document.body.appendChild(contenedor);
 */


const  productos = [{id:14341, nombre:"Arroz", precio:120},
                    {id:34242, nombre:"Cacao", precio:80},
                    {id:35264, nombre:"Cerveza", precio:230},
                    {id:87245, nombre:"Whisky", precio:5344},
                    {id:43263, nombre:"Cereal", precio:300}];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p> Producto: ${producto.nombre}</p>
                            <b> Precio: $ ${producto.precio}</b>
                            <hr>`;
    document.body.appendChild(contenedor);
}

