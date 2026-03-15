var pantalla     = document.getElementById('pantalla');
var btnIniciar   = document.getElementById('btnIniciar');
var btnDetener   = document.getElementById('btnDetener');
var btnReiniciar = document.getElementById('btnReiniciar');

var segundos  = 0;
var intervalo = null;

btnIniciar.addEventListener('click', function() {
  if (intervalo !== null) {
    return;
  }

  intervalo = setInterval(function() {
    segundos = segundos + 1;
    pantalla.textContent = segundos;
  }, 1000);
});

btnDetener.addEventListener('click', function() {
  clearInterval(intervalo);
  intervalo = null;
});

btnReiniciar.addEventListener('click', function() {
  clearInterval(intervalo);
  intervalo = null;
  segundos = 0;
  pantalla.textContent = 0;
});