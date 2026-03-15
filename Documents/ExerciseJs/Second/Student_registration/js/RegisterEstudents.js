class RegistroEstudiantes {

constructor(){

this.estudiantes = [];

}

agregarEstudiante(estudiante){

this.estudiantes.push(estudiante);

}

obtenerEstudiantes(){

return this.estudiantes;

}

}