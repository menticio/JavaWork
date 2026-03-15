class Inventario {

constructor(){

this.productos = [];

}

agregarProducto(producto){

this.productos.push(producto);

}

mostrarProductos(){

return this.productos;

}

buscarProducto(nombre){

for(let producto of this.productos){

if(producto.nombre.toLowerCase() === nombre.toLowerCase()){
return producto;
}

}

return null;

}

calcularValorInventario(){

let total = 0;

for(let producto of this.productos){

total += producto.obtenerValorTotal();

}

return total;

}

}