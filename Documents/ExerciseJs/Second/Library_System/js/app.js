
class Libro {
  constructor(titulo, autor) {
    this.titulo     = titulo;
    this.autor      = autor;
    this.disponible = true;
    this.prestadoA  = null;
  }

  prestar(usuario) {
    this.disponible = false;
    this.prestadoA  = usuario;
  }

  devolver() {
    this.disponible = true;
    this.prestadoA  = null;
  }

  getEstado() {
    return this.disponible ? 'Disponible' : 'No disponible';
  }
}


class Biblioteca {
  constructor() {
    this.libros = [];
  }

  agregarLibro(titulo, autor) {
    const libro = new Libro(titulo, autor);
    this.libros.push(libro);
    return libro;
  }

  prestarLibro(indice, usuario) {
    const libro = this.libros[indice];
    if (!libro) return false;
    if (!libro.disponible) return false;
    libro.prestar(usuario);
    return true;
  }

  devolverLibro(indice) {
    const libro = this.libros[indice];
    if (!libro) return false;
    libro.devolver();
    return true;
  }

  getDisponibles() {
    return this.libros.filter(function(libro) {
      return libro.disponible;
    });
  }

  getPrestados() {
    return this.libros.filter(function(libro) {
      return !libro.disponible;
    });
  }
}
const biblioteca = new Biblioteca();

function mostrarMensaje(texto) {
  const div = document.getElementById('mensaje');
  div.textContent = texto;
  setTimeout(function() { div.textContent = ''; }, 3000);
}

function actualizarSelects() {
  const selectPrestar  = document.getElementById('select-prestar');
  const selectDevolver = document.getElementById('select-devolver');

  selectPrestar.innerHTML  = '<option value="">-- Selecciona un libro disponible --</option>';
  selectDevolver.innerHTML = '<option value="">-- Selecciona un libro prestado --</option>';

  biblioteca.libros.forEach(function(libro, indice) {
    const opcion = document.createElement('option');
    opcion.value = indice;
    opcion.textContent = libro.titulo + ' - ' + libro.autor;

    if (libro.disponible) {
      selectPrestar.appendChild(opcion);
    } else {
      selectDevolver.appendChild(opcion.cloneNode(true));
    }
  });
}

function mostrarTabla() {
  const tbody    = document.getElementById('tbody-libros');
  const msgVacio = document.getElementById('msg-vacio');

  tbody.innerHTML = '';

  if (biblioteca.libros.length === 0) {
    msgVacio.style.display = 'block';
    return;
  }

  msgVacio.style.display = 'none';

  biblioteca.libros.forEach(function(libro) {
    const fila = document.createElement('tr');
    fila.innerHTML =
      '<td>' + libro.titulo + '</td>' +
      '<td>' + libro.autor + '</td>' +
      '<td class="' + (libro.disponible ? 'disponible' : 'prestado') + '">' +
        libro.getEstado() +
      '</td>' +
      '<td>' + (libro.prestadoA ? libro.prestadoA : '—') + '</td>';
    tbody.appendChild(fila);
  });
}

document.getElementById('btn-agregar').addEventListener('click', function() {
  const titulo = document.getElementById('input-titulo').value.trim();
  const autor  = document.getElementById('input-autor').value.trim();

  if (!titulo || !autor) {
    mostrarMensaje('Por favor ingresa el título y el autor.');
    return;
  }

  biblioteca.agregarLibro(titulo, autor);

  document.getElementById('input-titulo').value = '';
  document.getElementById('input-autor').value  = '';

  mostrarTabla();
  actualizarSelects();
  mostrarMensaje('Libro "' + titulo + '" agregado correctamente.');
});

document.getElementById('btn-prestar').addEventListener('click', function() {
  const usuario = document.getElementById('input-usuario').value.trim();
  const indice  = document.getElementById('select-prestar').value;

  if (!usuario) {
    mostrarMensaje('Ingresa el nombre del usuario.');
    return;
  }
  if (indice === '') {
    mostrarMensaje('Selecciona un libro para prestar.');
    return;
  }

  const exito = biblioteca.prestarLibro(indice, usuario);

  if (exito) {
    document.getElementById('input-usuario').value = '';
    mostrarTabla();
    actualizarSelects();
    mostrarMensaje('Libro prestado a ' + usuario + ' correctamente.');
  } else {
    mostrarMensaje('No se pudo prestar el libro.');
  }
});

document.getElementById('btn-devolver').addEventListener('click', function() {
  const indice = document.getElementById('select-devolver').value;

  if (indice === '') {
    mostrarMensaje('Selecciona un libro para devolver.');
    return;
  }

  const titulo = biblioteca.libros[indice].titulo;
  biblioteca.devolverLibro(indice);

  mostrarTabla();
  actualizarSelects();
  mostrarMensaje('Libro "' + titulo + '" devuelto correctamente.');
});