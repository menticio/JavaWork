class SistemaVehiculos {

constructor(){

this.vehiculos = [];

}

agregarVehiculo(vehiculo){

this.vehiculos.push(vehiculo);

}

buscarVehiculo(placa){

return this.vehiculos.find(
vehiculo => vehiculo.placa === placa
);

}

}