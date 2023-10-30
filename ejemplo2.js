function f(x) {
  if (x >= -10 && x <= 3) {
    return x - 1;
  } else if (x >= 4 && x <= 9) {
    return x ** 2;
  } else if (x >= 10) {
    return 1 / (x ** 3);
  } else {
    return 0; // Fuera de los intervalos especificados
  }
}

function calculateIntegral(a, b, n) {
  if (isNaN(a) || isNaN(b) || isNaN(n) || a >= b || n <= 0) {
    return NaN;
  }

  const delta_x = (b - a) / n;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const x_i = a + i * delta_x;
    sum += f(x_i) * delta_x;
  }
  return sum;
}

function recalculateIntegral() {
  const newA = parseFloat(document.getElementById('limiteA').value);
  const newB = parseFloat(document.getElementById('limiteB').value);
  const newN = parseInt(document.getElementById('intervalos').value);

  if (isNaN(newA) || isNaN(newB) || isNaN(newN) || newA >= newB || newN <= 0) {
    document.getElementById('resultado').textContent = 'Valores incorrectos. Verifica los límites y el número de intervalos.';
    return;
  }

  const integralResult = calculateIntegral(newA, newB, newN);
  if (isNaN(integralResult)) {
    document.getElementById('resultado').textContent = 'Valores incorrectos. Verifica los límites y el número de intervalos.';
    return;
  }

  document.getElementById('integral').textContent = `Integral definida en [${newA}, ${newB}]:`;
  document.getElementById('resultado').textContent = `El valor de la integral definida es: ${integralResult.toFixed(4)}`;
}

// Evento para recalcular la integral cuando se hacen cambios
document.getElementById('calcular').addEventListener('click', recalculateIntegral);
