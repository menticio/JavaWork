let registro = new RegistroEstudiantes();

function registrarEstudiante(){

let nombre = document.getElementById("nombre").value;
let edad = Number(document.getElementById("edad").value);
let asignatura = document.getElementById("asignatura").value;
let notaFinal = Number(document.getElementById("notaFinal").value);

let estudiante = new Estudiante(nombre, edad, asignatura, notaFinal);

registro.agregarEstudiante(estudiante);

mostrarEstudiantes();

}

function mostrarEstudiantes(){

let tabla = document.getElementById("lista");

tabla.innerHTML = "";

for(let estudiante of registro.obtenerEstudiantes()){

tabla.innerHTML += `
<tr>
<td>${estudiante.nombre}</td>
<td>${estudiante.edad}</td>
<td>${estudiante.asignatura}</td>
<td>${estudiante.notaFinal}</td>
<td>${estudiante.estado()}</td>
</tr>
`;

}

}