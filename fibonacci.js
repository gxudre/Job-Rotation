// Definindo o número a ser verificado na sequência de Fibonacci
const numeroVerificado = 13;

// Iniciando a sequência de Fibonacci
let fibonacci = [0, 1];

// Calculando a sequência até que o último número seja menor ou igual ao número verificado
while (fibonacci[fibonacci.length - 1] <= numeroVerificado) {
  let proximoNumero =
    fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(proximoNumero);
}

// Verificando se o número verificado está presente na sequência
if (fibonacci.includes(numeroVerificado)) {
  console.log(numeroVerificado + " pertence à sequência de Fibonacci.");
} else {
  console.log(numeroVerificado + " não pertence à sequência de Fibonacci.");
}
