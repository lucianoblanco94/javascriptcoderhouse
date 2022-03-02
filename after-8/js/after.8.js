const modelos = [{nombre:"Like 1.6", imagen:"imagen_1654.png", precio:"2.595.000"},
                 {nombre:"Active 1.6", imagen:"imagen_1656.png", precio:"2.809.000"},
                {nombre:"Active Triptonic 1.6", imagen:"imagen_1663.png", precio:"3.028.000"},
                {nombre:"Active Triptonic 1.6", imagen:"imagen_1652.png", precio:"3.028.000"},
                {nombre:"Allure 1.6", imagen:"imagen_1665.png", precio:"3.314.000"},
                {nombre:"Allure Triptonic 1.6", imagen:"imagen_1668.png", precio:"3.314.000"},
                {nombre:"Feline Triptonic 1.6", imagen:"imagen_1675.png", precio:"3.314.000"},
                {nombre:"GT Triptonic ", imagen:"imagen_1704.png", precio:"5.296.000"}];

class Auto {
    constructor (modelo){
        this.nombre = modelo.nombre;
        this.imagen = modelo.imagen;
        this.precio = modelo.precio;
    }
    aplicarDescuento(){
        this.precio = this.precio * 0.90;
    }
} 

function guardarModelos(modelos) {
    localStorage.setItem("modelos", JSON.stringify(modelos));
    console.log("Los modelos se guardaron correctamente");
}

function cargarModelos(){
    console.log("Se cargaron correctamente los modelos");
    return JSON.parse(localStorage.getItem("modelos"));
}

// guardarModelos(modelos);
let modelos_cargados = cargarModelos();
// console.log(modelos_cargados);

function borrarModelos(){
    localStorage.clear();
}
// borrarModelos();
let contenido = "" ;

for ( let modelo_cargado of modelos_cargados) {
    let auto = new Auto(modelo_cargado);
    console.log(auto.nombre + " - $" + auto.precio);
    contenido += `<div class="col-md-4 mb-2">
    <div class="card">
        <h5 class="card-title text-primary fw-bolg text-uppercase p-3">${auto.nombre}</h5>
        <img src="img/${auto.imagen}" class="card-img-top" alt="${auto.nombre}">
    <div class="card-body">
    <div class="row mb-2">
        <div class="col-md-6 text-primary text-uppercase fw-bold"> <span>Precio Contado</span></div>
        <div class="col-md-6 text-end text-primary fw-bold">$${auto.precio}</div>
    </div>
    <div class="p-3 mb-2 bg-light text-dark text-center">Dejanos tus datos para acceder a una oferta comercial y te contactaremos a la brevedad</div>
      <div class="mb-2 p-3 d-grid gap-2"><a href="#" class="btn btn-primary">Comprar</a></div>
    </div>
  </div>
  </div>`;
}

let pagina_modelos = document.getElementById("modelos");
pagina_modelos.innerHTML = contenido;



