var inputTarea  = document.getElementById('inputTarea');
var btnAgregar  = document.getElementById('btnAgregar');
var listaTareas = document.getElementById('listaTareas');

btnAgregar.addEventListener('click', function() {
  var texto = inputTarea.value.trim();

  if (texto === '') {
    return;
  }
  var li = document.createElement('li');
  li.textContent = texto;

  var btnEliminar = document.createElement('button');
  
  btnEliminar.textContent = 'Eliminar';
  btnEliminar.className = 'btn-eliminar';
  btnEliminar.addEventListener('click', function() {
    li.remove();
  });

  li.appendChild(btnEliminar);
  listaTareas.appendChild(li);

  inputTarea.value = '';
});