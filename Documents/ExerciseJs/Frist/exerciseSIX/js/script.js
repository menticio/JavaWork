var formulario   = document.getElementById('miFormulario');
var inputNombre  = document.getElementById('nombre');
var inputCorreo  = document.getElementById('correo');
var inputEdad    = document.getElementById('edad');
var parrafoError = document.getElementById('mensaje');
var parrafoExito = document.getElementById('exito');

formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  var nombre = inputNombre.value;
  var correo = inputCorreo.value;
  var edad   = inputEdad.value;

  if (nombre === '' || correo === '' || edad === '') {
    parrafoError.textContent = 'Debe completar todos los campos';
    parrafoExito.textContent = '';
  } else {
    parrafoError.textContent = '';
    parrafoExito.textContent = 'Formulario enviado correctamente';
  }
});