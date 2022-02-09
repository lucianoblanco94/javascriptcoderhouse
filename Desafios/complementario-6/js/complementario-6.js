const arrayProductos = [];

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }
}

// Creamos objetos y los pusheamos al array
arrayProductos.push(new Producto(1242, "Leche", 100.5));
arrayProductos.push(new Producto(3143, "Arroz", 90));
arrayProductos.push(new Producto(3525, "Polenta", 100));
arrayProductos.push(new Producto(5636, "CocaCola", 225));
arrayProductos.push(new Producto(1452, "Mermelada", 200));
arrayProductos.push(new Producto(2466, "Carne kg", 970));
//Mostramos cantidad de productos dentro del array
console.log("Cantidad de productos en lista: " + arrayProductos.length);

// Mostramos la información de cada elemento dentro del array
for (let producto of arrayProductos) {
    console.log("ID: " + producto.id + ", Nombre: " + producto.nombre + " Precio: $" + producto.precio);
}

//  



