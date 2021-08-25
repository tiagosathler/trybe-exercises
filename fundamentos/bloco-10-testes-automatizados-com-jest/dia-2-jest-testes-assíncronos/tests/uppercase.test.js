const uppercase = require("../script/uppercase");

describe("Teste função 'callback'", () => {
  it("Se a 'string' passada à função resulta no esperado", (done) => {
    uppercase("tiago", (result) => {
      try {
        expect(result).toBe("TIAGO");
        done();
      } catch (error) {
        done(error);
      }
    });    
  });  
});
