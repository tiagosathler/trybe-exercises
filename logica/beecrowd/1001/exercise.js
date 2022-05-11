const fs = require('fs');
const input = fs.readFileSync('./dev/stdin', 'utf8');
const [as, bs] = input.trim().split('\n');

const a = Number(as);
const b = Number(bs);

const result = a + b;

console.log(`X = ${result}`);