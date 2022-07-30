const maxDigit = 5;
const maxSum = 21;
const rest = maxSum % maxDigit;
let division = Math.floor(maxSum / maxDigit);
console.log(maxDigit);
const decimal = [];

decimal.push(maxDigit);

if (division <= 3) {
  for (i = 1; i < division; i++) {
    decimal.push(division);
  }
}
decimal.push(rest);
console.log(decimal)
