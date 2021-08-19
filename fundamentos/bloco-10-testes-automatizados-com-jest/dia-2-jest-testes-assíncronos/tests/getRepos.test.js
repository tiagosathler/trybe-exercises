const { getRepos } = require("../script/getRepos");

describe("'getRepos' at fetch promise", () => {
  it("Teste se existem dois repositórios", () => {
    expect.assertions(1);
    const url = "https://api.github.com/orgs/tryber/repos";
    const repo1 = "sd-01-week4-5-project-todo-list";
    const repo2 = "sd-01-week4-5-project-meme-generator";
    return getRepos(url)
      .then((repositories) => {
        // outra forma usando outro matcher, mas aqui serão 2 assertions
        // expect(repositories).toContain(repo1);
        // expect(repositories).toContain(repo2);
        return repositories.includes(repo1) && repositories.includes(repo2);
      })
      .then((condition) => {
        expect(condition).toBe(true);        
      });
  });
});
