const fetch = require("node-fetch");

const randomNumber = () => {
  return Math.round(Math.random() * 100);
};

const upperCase = (string) => {
  return string.toUpperCase();
};

const firstLetter = (string) => {
  return string.charAt(0);
};

const concat = (str1, str2) => {
  return str1 + str2;
};

const getDog = async (url) => {
  return await fetch(url).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
};

module.exports = { randomNumber, upperCase, firstLetter, concat, getDog };

// getDog("https://dog.ceo/api/breeds/image/random").then(response => console.log(response));
