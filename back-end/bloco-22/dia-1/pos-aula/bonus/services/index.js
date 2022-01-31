const factorial = (n) => {
  let result = 1;
  for (i=1; i<= n; i++) {
    result *= i;
  }
  return result;
}

const fibonacci = (n) => {
  const array = [ 0, 1];
  for (i=1; i<=n; i++) {
    const element = array[i] + array[i-1];
    array.push(element);
  }
  return array[n];
}

module.exports = {
  factorial,
  fibonacci
}