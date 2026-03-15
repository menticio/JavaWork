let carrito = new Carrito();

function agregarProducto(){

let nombre = document.getElementById("nombre").value;
let precio = Number(document.getElementById("precio").value);

let producto = new Producto(nombre, precio);

carrito.agregarProducto(producto);

mostrarCarrito();

}

function eliminarProducto(){

let nombre = document.getElementById("nombreEliminar").value;

carrito.eliminarProducto(nombre);

mostrarCarrito();

}

function comprar(){

let total = carrito.realizarCompra();

document.getElementById("total").innerText =
"Compra realizada. Total pagado: $" + total;

document.getElementById("lista").innerHTML = "";

}

function mostrarCarrito(){

let tabla = document.getElementById("lista");

tabla.innerHTML = "";

for(let producto of carrito.mostrarProductos()){

tabla.innerHTML += `
<tr>
<td>${producto.nombre}</td>
<td>$${producto.precio}</td>
</tr>
`;

}

let total = carrito.calcularTotal();

document.getElementById("total").innerText =
"Total de la compra: $" + total;

}