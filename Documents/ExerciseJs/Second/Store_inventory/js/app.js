let inventario = new Inventario();

function registrarProducto(){

let nombre = document.getElementById("nombre").value;
let precio = Number(document.getElementById("precio").value);
let cantidad = Number(document.getElementById("cantidad").value);

let producto = new Producto(nombre, precio, cantidad);

inventario.agregarProducto(producto);

mostrarProductos();

}

function mostrarProductos(){

let tabla = document.getElementById("lista");

tabla.innerHTML = "";

for(let producto of inventario.mostrarProductos()){

tabla.innerHTML += `
<tr>
<td>${producto.nombre}</td>
<td>$${producto.precio}</td>
<td>${producto.cantidad}</td>
<td>$${producto.obtenerValorTotal()}</td>
</tr>
`;

}

}

function buscarProducto(){

let nombre = document.getElementById("buscar").value;

let producto = inventario.buscarProducto(nombre);

let resultado = document.getElementById("resultadoBusqueda");

if(producto){

resultado.innerText =
"Producto encontrado: " +
producto.nombre +
" | Precio: $" + producto.precio +
" | Cantidad: " + producto.cantidad;

}else{

resultado.innerText = "Producto no encontrado";

}

}

function calcularInventario(){

let total = inventario.calcularValorInventario();

document.getElementById("totalInventario").innerText =
"Valor total del inventario: $" + total;

}