let sistema = new SistemaVehiculos();

function registrarVehiculo(){

let placa = document.getElementById("placa").value;

let vehiculo = new Vehiculo(placa);

sistema.agregarVehiculo(vehiculo);

mostrarVehiculos();

}

function acelerar(){

let placa = document.getElementById("placaControl").value;

let vehiculo = sistema.buscarVehiculo(placa);

if(vehiculo){

vehiculo.acelerar();

mostrarVehiculos();

}

}

function frenar(){

let placa = document.getElementById("placaControl").value;

let vehiculo = sistema.buscarVehiculo(placa);

if(vehiculo){

vehiculo.frenar();

mostrarVehiculos();

}

}

function mostrarVehiculos(){

let lista = document.getElementById("lista");

lista.innerHTML = "";

for(let vehiculo of sistema.vehiculos){

lista.innerHTML += "<p>" + vehiculo.mostrarEstado() + "</p>";

}

}