import { randomInt } from 'crypto';

function generarPassword(longitud = 16) {
  const minusculas = 'abcdefghijklmnopqrstuvwxyz';
  const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeros = '0123456789';
  const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  const todos = minusculas + mayusculas + numeros + simbolos;

  // 1. Garantizar al menos un carácter de cada tipo
  const pass = [
    minusculas[randomInt(0, minusculas.length)],
    mayusculas[randomInt(0, mayusculas.length)],
    numeros[randomInt(0, numeros.length)],
    simbolos[randomInt(0, simbolos.length)],
  ];

  // 2. Rellenar el resto de la longitud deseada
  for (let i = pass.length; i < longitud; i++) {
    pass.push(todos[randomInt(0, todos.length)]);
  }

  // 3. Mezclar aleatoriamente (Fisher-Yates) para no dejar los tipos fijos al inicio
  for (let i = pass.length - 1; i > 0; i--) {
    const j = randomInt(0, i + 1);
    [pass[i], pass[j]] = [pass[j], pass[i]];
  }

  return pass.join('');
}

// Ejemplo de uso:
console.log(generarPassword(20));