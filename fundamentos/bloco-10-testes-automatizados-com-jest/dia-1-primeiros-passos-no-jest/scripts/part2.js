function encode(string) {
  string = string.replace(/a/gi, "1");
  string = string.replace(/e/gi, "2");
  string = string.replace(/i/gi, "3");
  string = string.replace(/o/gi, "4");
  string = string.replace(/u/gi, "5");
  return string;
}

function decode(string) {
  string = string.replace(/1/gi, "a");
  string = string.replace(/2/gi, "e");
  string = string.replace(/3/gi, "i");
  string = string.replace(/4/gi, "o");
  string = string.replace(/5/gi, "u");
  return string;
}

function techList(array, nome) {
  return array.length !== 0
    ? array.sort().map((tec) => ({ tech: tec, name: nome }))
    : "Vazio!";
}

function hydrate(string) {
  const count = string.split(' ').reduce((acc, word) => {
    return (!isNaN(word*1))
      ? acc + word*1
      : acc;
  }, 0);
  return count > 1 ? `${count} copos de água` : `${count} copo de água`;
}

module.exports = {
  decode,
  encode,
  techList,
  hydrate,
};
