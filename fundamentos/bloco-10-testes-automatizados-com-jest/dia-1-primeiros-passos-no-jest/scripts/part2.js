function encode(string) {
  string = string.replace(/a/ig, '1');
  string = string.replace(/e/ig, '2');
  string = string.replace(/i/ig, '3');
  string = string.replace(/o/ig, '4');
  string = string.replace(/u/ig, '5');
  return string;
}

function decode(string) {
  string = string.replace(/1/ig, 'a');
  string = string.replace(/2/ig, 'e');
  string = string.replace(/3/ig, 'i');
  string = string.replace(/4/ig, 'o');
  string = string.replace(/5/ig, 'u');
  return string;
}

function techList(array, nome) {
  let arrayObjects = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  for (let value of array) {
    arrayObjects.push({ tech: value, name: nome });
  }
  return arrayObjects;
}

function hydrate(string) {
  let count = 0;
  let result = '';
  for (let char of string) {
    if (!Number.isNaN(parseInt(char, 10))) {
      count += parseInt(char, 10);
    }
  }
  if (count > 1) {
    return result.concat(count, ' copos de água');
  }
  return result.concat(count, ' copo de água');
}

module.exports = {
  decode,
  encode,
  techList,
  hydrate,  
};