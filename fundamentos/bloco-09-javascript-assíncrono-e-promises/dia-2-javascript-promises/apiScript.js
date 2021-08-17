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
  setTimeout(() => {
    let array = [];
    for (let i = 0; i < 10; i += 1) {
      array.push(Math.floor(Math.random() * 50) + 1);
    }
    const sum = array.map((number) => number * number).reduce((acc, number) => number + acc);
    sum >= 8000 ? reject(sum) : resolve(sum);
    }, 2000);  
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
  .catch((number) => console.log(`É mais de oito mil (${number})! Esta promise deve estar quebrada!`));
  


window.onload = () => fetchJoke();