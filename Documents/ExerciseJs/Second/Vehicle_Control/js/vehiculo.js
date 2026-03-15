class Vehiculo {

constructor(placa){

this.placa = placa;
this.velocidad = 0;

}

acelerar(){

this.velocidad += 10;

}

frenar(){

if(this.velocidad > 0){

this.velocidad -= 10;

}

}

mostrarEstado(){

return "Vehículo " + this.placa + " - Velocidad: " + this.velocidad + " km/h";

}

}