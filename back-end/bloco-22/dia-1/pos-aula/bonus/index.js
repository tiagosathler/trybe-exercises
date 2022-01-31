const read = require('readline-sync');
const { factorial, fibonacci } = require('./services');

const fac = read.questionInt('Calcule o fatorial de n: ');
console.log(`Fatorial de ${fac}`,factorial(fac));

const fib = read.questionInt('Calcule o n-ésimo número Fibonacci: ');
console.log(`Fibonacci de ${fib}`, fibonacci(fib));