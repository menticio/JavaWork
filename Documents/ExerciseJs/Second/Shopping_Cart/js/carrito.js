class Carrito {

constructor(){

this.productos = [];

}

agregarProducto(producto){

this.productos.push(producto);

}

eliminarProducto(nombre){

this.productos = this.productos.filter(
producto => producto.nombre !== nombre
);

}

mostrarProductos(){

return this.productos;

}


realizarCompra(){

let total = this.calcularTotal();

this.productos = [];

return total;

}

calcularTotal(){

let total = 0;

for(let producto of this.productos){

total += producto.precio;

}

return total;

}

}
