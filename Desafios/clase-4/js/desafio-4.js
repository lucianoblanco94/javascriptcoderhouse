/* 
Programa que pide nombre del producto y calcula el costo total de la compra según cantidad.
Calcula también la ganancia obtenida por ventas

No vimos aún como agregar varios valores a una variable y almacenar toda la informacion
*/


const iva = (x) => { return x * 0.21};
const suma = (a,b) => {return a + b};
const resta = (a,b) => {return a - b};
const multiplicar = (a,b) => { return a*b};

function venta() {
    
    let productoCompra = prompt("Ingrese el producto que el cliente desea comprar: ");
    if (productoCompra == "poste332") {

        let precioProducto = parseInt(prompt("Ingrese el precio del producto: "));
        let cantidadProducto = parseInt(prompt("Ingrese la cantidad del producto solicitado: "));
        let descuentoProducto = parseInt(prompt("Ingrese el valor del descuento del producto: "));
        let costoProducto = parseInt(prompt("Ingrese el costo del producto"));
        let ventaTotal = multiplicar(resta(suma(precioProducto, iva(precioProducto)), descuentoProducto), cantidadProducto);
        let costoTotal = multiplicar(cantidadProducto,costoProducto);
        let ganancia = resta(multiplicar(precioProducto,cantidadProducto), costoTotal);
        alert("El resultado de la venta es de $" + ventaTotal + ". Obtuviste una ganancia de $" + ganancia + " por la venta.");
    } else if (productoCompra == "poste442"){
        let precioProducto = parseInt(prompt("Ingrese el precio del producto: "));
        let cantidadProducto = parseInt(prompt("Ingrese la cantidad del producto solicitado: "));
        let descuentoProducto = parseInt(prompt("Ingrese el valor del descuento del producto: "));
        let costoProducto = parseInt(prompt("Ingrese el costo del producto"));
        let ventaTotal = multiplicar(resta(suma(precioProducto, iva(precioProducto)), descuentoProducto), cantidadProducto);
        let costoTotal = multiplicar(cantidadProducto,costoProducto);
        let ganancia = resta(multiplicar(precioProducto,cantidadProducto), costoTotal);
        alert("El resultado de la venta es de $" + ventaTotal + ". Obtuviste una ganancia de $" + ganancia + " por la venta.");
        
    }

}
venta();




