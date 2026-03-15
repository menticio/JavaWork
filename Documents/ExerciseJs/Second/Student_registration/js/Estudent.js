class Estudiante {

constructor(nombre, edad, asignatura, notaFinal){

this.nombre = nombre;
this.edad = edad;
this.asignatura = asignatura;
this.notaFinal = notaFinal;

}

estado(){

if(this.notaFinal >= 3){

return "Aprobó";

}else{

return "Reprobó";

}

}

}