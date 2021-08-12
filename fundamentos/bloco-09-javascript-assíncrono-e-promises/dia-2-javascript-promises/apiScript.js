// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const pushJoke = (joke) => {
  const jokeContainer = document.querySelector('#jokeContainer');
  jokeContainer.innerText = joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => pushJoke(data.joke));
};

const drawNumbers = new Promise((resolve, reject) => {
  let array = [];
  for (let i = 0; i < 10; i += 1) {
    array.push(Math.ceil(Math.random() * 50));
  }
  array = array.map((number) => number * number);
  const sum = array.reduce((acc, number) => number + acc);
  if (sum >= 8000) {
    return reject(sum);
  }
  resolve(sum);
})
  .then((number) => {
    console.log(`Promise resolvida: ${number}`);
    return [2, 3, 5, 10].map((num) => number / num);
  })
  .then((array) => {
    console.log(array);
    return array.reduce((acc, number) => acc + number);
  })
  .then((number) => console.log(`Soma do array: ${number}`))
  .catch((number) => console.log(`É mais de oito mil (${number})! Esta promise deve estar quebrada`));
  


window.onload = () => fetchJoke();