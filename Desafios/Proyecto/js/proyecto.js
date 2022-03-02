
// LLAMADA AJAX LOCALMENTE
// Quiero que tome los datos del objeto con el ID introducido mediante el input
$("#btn-agregar").click(() => {
  $.get("js/productos.json", function(respuesta,status){
    if (status === "success") {
      let cantidadIngresada = parseInt($("#cantidadIngresada").val());
      let codigoProducto = $("#codigo-producto").val();
      let datosProducto = respuesta;
      for (let dato of datosProducto){
        let idProducto = dato.id;
      if (codigoProducto == idProducto && codigoProducto != ""){
          let calculoPies = parseFloat(dato.pies * cantidadIngresada);
         $("table").append(`<tr class="row text-center my-3">
                                <td class="col-2"><span>${codigoProducto}</span></td>
                                <td class="col-2"><span>${cantidadIngresada}</span></td>
                                <td class="col-2"><span>${dato.nombre}</span></td>
                                <td class="col-2"><p>${dato.pies}</p></td>
                                <td class="col-2"><span>${calculoPies}</span></td>
                                <hr>
                                </tr>`);  
      } else {
        $("#errorCodigo").removeClass("d-none");
      }
      if (cantidadIngresada == "" && cantidadIngresada <= 0) {
        $("#errorCantidad").removeClass("d-none");

      }
    }
    }
  })
});

/* $("#btn-limpar").click(() =>
);
 */


















































/* // Creacion de una tabla de productos

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
} */



/* function guardarProducto(productos){
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
 */

/* function envioCodigo() {
  let idIngresado = document.getElementById("codigo-producto").value;
  if (idIngresado === idProducto) {
    for(let producto of productos){ 
      let idProducto = producto.codigo;
      var content =  document.getElementById("codigo-producto");
      var contenido = "<p class='text-white bg-black p-3'>" + content + "</p>";
      document.getElementById("resultado").innerHTML = contenido;
    }

  } else {
          let errorCodigo = document.getElementById("errorCodigo");
          let mensajeError= document.createElement("p")
          mensajeError.className = "bg-danger text-white";
          errorCodigo.appendChild(mensajeError);
  }
} */



/* //Evento change para cuando ponemos cantidad cambie la cuenta
let variable = document.getElementById("cantidadIngresada");
variable.onchange = () => {
    let variable = document.getElementById("cantidadIngresada").value;
    var contenido = "<p class='text-white bg-black p-3'>" + variable + "</p>";
    document.getElementById("resultado").innerHTML = contenido;
}

function multiplicarTotal {
    let cantidadIngresada = document.getElementById("cantidadIngresada").value;
    
} */

/* let formLiquidacion = document.getElementById("formLiquidacion");
formLiquidacion.addEventListener("submit", validarForm);

//Formulario usando event
function validarForm(e){
  e.preventDefault();
  let form = e.target;
  console.log("Valor 1:" + form.children[0].value);
  console.log("Valor 2:" + form.children[2].value);
}
 */