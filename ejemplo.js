const math = require('mathjs'); 

 
 

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

  const delta_x = (b - a) / n; 

  let sum = 0; 

  for (let i = 0; i < n; i++) { 

    const x_i = a + i * delta_x; 

    sum += f(x_i) * delta_x; 

  } 

  return sum; 

} 

 
 

const a = -10; 

const b = 10; 

const n = 1000; // Puedes ajustar este valor para obtener una aproximación más precisa 

 
 

const integralResult = calculateIntegral(a, b, n); 

 
 

console.log(`El valor de la integral definida es: ${integralResult}`); 