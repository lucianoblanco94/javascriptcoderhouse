// Creacion de una tabla de productos

class Producto {
    constructor (codigo, nombre, largo, ancho, espesor, madera, stock, precio, costo) {
        this.codigo = codigo;
        this.nombre = nombre;      
        this.largo = parseFloat(largo);
        this.ancho = parseFloat(ancho);
        this.espesor = parseFloat(espesor);
        this.madera = madera;
        this.stock = parseInt(stock);
        this.precio = parseFloat(precio);
        this.costo = parseFloat(costo);
        this.vendido = false;
        this.pie = this.largo * this.ancho * this.espesor * 0.2734;
    }
   /*  calcularPie() {
        this.pie = this.largo * this.ancho * this.espesor * 0.2734;
        console.log(calcularPie())
    } */
}


//Array donde alojamos los productos
const productos = []; 

// Creamos los productos
const poste332 = new Producto(332, "Poste", 2 , 3, 3, "Quebracho Colorado", 100, 1380, 790);
const poste3322 = new Producto(3322, "Poste", 2.2, 3, 3, "Quebracho Colorado", 100, 1500, 865);
const poste3324 = new Producto(3324, "Poste", 2.4, 3, 3, "Quebracho Colorado", 100, 1650, 945);
const poste3327 = new Producto(3327, "Poste", 2.7, 3, 3, "Quebracho Colorado", 100, 1850, 1060);
const poste333 = new Producto(333, "Poste", 3, 3, 3, "Quebracho Colorado", 100, 2070, 1180);
const poste442 = new Producto(442, "Poste", 2, 4, 4, "Quebracho Colorado", 100, 2450, 1400);
const poste4422 = new Producto(4422, "Poste", 2.2, 4, 4, "Quebracho Colorado", 100, 2700, 1540);
const poste4424 = new Producto(4424, "Poste", 2.4, 4, 4, "Quebracho Colorado", 100, 2940, 1680);
const poste4427 = new Producto(4427, "Poste", 2.7, 4, 4, "Quebracho Colorado", 100, 3310, 1890);
const poste443 = new Producto(443, "Poste", 3, 4, 4, "Quebracho Colorado", 100, 3680, 2100);



// Usamos una iteracion para agregar más productos a nuestro array
/* let cant = parseInt(prompt("Ingrese la cantidad de productos a agregar"));

for (let i=0; i < cant; i++) {
    let ingreseCodigo = prompt("Ingrese el código del producto");
    let ingreseNombre = prompt("Ingrese nombre del producto");
    let ingresePrecio = parseInt(prompt("Ingrese precio del producto"));
    let ingreseAncho = parseInt(prompt("Ingrese ancho del producto"));
    let ingreseLargo = parseInt(prompt("Ingrese largo del producto"));
    let ingreseEspesor = parseInt(prompt("Ingrese espesor del producto"));
    let ingreseMadera = prompt("Ingrese tipo de madera del producto");
    let ingreseCosto = parseInt(prompt("Ingrese costo del producto"));
    let ingreseStock = parseInt(prompt("Ingrese stock disponible del producto"));
    let producto = new Producto(ingreseCodigo, ingreseNombre,ingreseAncho, ingreseEspesor, ingreseLargo, ingreseMadera, ingreseStock, ingresePrecio, ingreseCosto, this.pie);
    productos.push(producto);

} */

// Agregamos productos al array
productos.push(poste332, poste3322, poste3324, poste3327, poste333, poste442, poste4422, poste4424, poste4427, poste443);


let menuNavegable = document.createElement("header");
menuNavegable.className = "mb-3";
menuNavegable.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categorías
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">Postes</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Tablas</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Durmientes</a></li>
        </ul>
      </li>

    </ul>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="..." aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  </div>
</div>
</nav>`;

document.body.prepend(menuNavegable);



//Recorremos e imprimimos los productos
 for (const producto of productos) {
    console.log("El producto " + producto.nombre + " " + producto.ancho + "x" + producto.espesor + "x" + producto.largo + " tiene un precio de $" + producto.precio);
} 
 
let filaTabla = document.getElementById("divTabla");

let divTabla = document.createElement("div");
divTabla.className = "col-6";
filaTabla.appendChild(divTabla);

let tablaProductos = document.createElement("table")
tablaProductos.className = "table table-light table-striped table-bordered table-hover";
divTabla.appendChild(tablaProductos);

let primeraFila = document.createElement("tr");
primeraFila.innerHTML = `<th scope="col" class="text-center text-info">Codigo</th>
                        <th scope="col" class="text-center text-info">Nombre</th>
                        <th scope="col" class="text-center text-info">Largo</th>
                        <th scope="col" class="text-center text-info">Ancho</th>
                        <th scope="col" class="text-center text-info">Espesor</th>
                        <th scope="col" class="text-center text-info">Madera</th>
                        <th scope="col" class="text-center text-info">Stock</th>
                        <th scope="col" class="text-center text-info">Precio</th>
                        <th scope="col" class="text-center text-info">Costo</th>
                        <th scope="col" class="text-center text-info">Pie</th>`;
tablaProductos.appendChild(primeraFila);


for (const producto of productos) {
    let codigoProducto = producto.codigo;
    let nombreProducto = producto.nombre;
    let largoProducto = producto.largo;
    let anchoProducto = producto.ancho;
    let espesorProducto = producto.espesor;
    let maderaProducto = producto.madera;
    let precioProdcuto = producto.precio;
    let costoProducto = producto.costo;
    let stockProducto = producto.stock;
    let pieMadera = producto.pie;
    let siguienteFila = document.createElement("tr");
    siguienteFila.className = "align-item-center";
    siguienteFila.innerHTML = `<th class="p-3 text-center">${codigoProducto}</th>
                            <th class="p-3 text-center">${nombreProducto}</th>
                            <th class="p-3 text-center">${largoProducto}</th>
                            <th class="p-3 text-center">${anchoProducto}"</th>
                            <th class="p-3 text-center">${espesorProducto}"</th>
                            <th class="p-3 text-center">${maderaProducto}</th>
                            <th class="p-3 text-center">${stockProducto}u</th>
                            <th class="p-3 text-center">$${precioProdcuto}</th>
                            <th class="p-3 text-center">$${costoProducto}</th>
                            <th class="p-3 text-center">${pieMadera}</th>`;
    tablaProductos.appendChild(siguienteFila);     
}

function guardarProducto(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
    console.log("Los productos se guardaron correctamente");
}

function cargarProductos(){
  console.log("Se cargaron correctamente los productos");
  return JSON.parse(localStorage.getItem("productos"));
}
function borrarProductos() {
  localStorage.clear();
}
// guardarProducto();
//  cargarProductos();
// borrarProductos();




