const { fetchJoke  } = require("../script/joke");
const fetch = require("node-fetch");
jest.mock("node-fetch");

const someJoke = {
  "id": "R7UfaahVfFd",
  "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
  "status": 200
};

describe("Mockando 'fetch' de 'fetchJoke'", () => {

  // const fetch = jest.fn();
  fetch.mockImplementation(() => 
    Promise.resolve({
      json: () => 
        Promise.resolve(someJoke)
    })
  );

  it("... testa se retorna o mock de 'fetch' na chamada de 'fetchJoke()'", async () => {
    await expect(fetchJoke()).resolves.toEqual("My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.")    
  });
  it("... testa se a função 'fetch' foi realmente chamada", () => {
    expect(fetch).toHaveBeenCalled();
  });
});