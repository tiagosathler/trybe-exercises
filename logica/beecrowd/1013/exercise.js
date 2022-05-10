const fs = require('fs');
const input = fs.readFileSync('./dev/stdin', 'utf8');
const numbers = input.trim().split(' ');

const sorted = numbers.sort((a, b) => b - a);

const result = sorted[0];

console.log(`${result} eh o maior`);