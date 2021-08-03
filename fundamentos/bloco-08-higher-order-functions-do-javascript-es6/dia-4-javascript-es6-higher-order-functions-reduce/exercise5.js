const assert = require("assert");

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  return names.reduce(
    (counter, person) =>
      (counter += person
        .toLowerCase()
        .split("")
        .filter((char) => char === "a").length),
    0
  );
}

assert.strictEqual(containsA(), 20);
