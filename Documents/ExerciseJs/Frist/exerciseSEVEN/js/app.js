var inputNum1    = document.getElementById('num1');
var inputNum2    = document.getElementById('num2');
var selectOp     = document.getElementById('operacion');
var btnCalcular  = document.getElementById('btnCalcular');
var parrafoRes   = document.getElementById('resultado');

btnCalcular.addEventListener('click', function() {
  var num1 = parseFloat(inputNum1.value);
  var num2 = parseFloat(inputNum2.value);
  var op   = selectOp.value;
  var resultado;

  if (inputNum1.value === '' || inputNum2.value === '') {
    parrafoRes.textContent = 'Ingresa los dos números.';
    return;
  }

  if (op === '+') {
    resultado = num1 + num2;
  } else if (op === '-') {
    resultado = num1 - num2;
  } else if (op === '*') {
    resultado = num1 * num2;
  } else if (op === '/') {
    if (num2 === 0) {
      parrafoRes.textContent = 'No se puede dividir entre cero.';
      return;
    }
    resultado = num1 / num2;
  }

  parrafoRes.textContent = 'Resultado: ' + resultado;
});