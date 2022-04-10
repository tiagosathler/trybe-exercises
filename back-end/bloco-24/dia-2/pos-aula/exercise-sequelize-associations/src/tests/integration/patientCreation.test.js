const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../index');

// omitir os `console.log`s dos testes gerando um `stub` pra função
// const consoleLogStub = stub(console, 'log');
// before(()=> consoleLogStub.returns(true));
// after(()=> consoleLogStub.restore());

describe('Rota POST /patients', () => {
  describe('quando os dados do `body` são válidos', () => {
    let postPatient;
    let getPatient;

    before(async () => {
      try {
        postPatient = await chai.request(app)
          .post('/patients')
          .send({
            fullname: "Rodrigo Maia",
            planId: 2,
          });

        console.log('=== postPatient', postPatient.body);

        const { patientId } = postPatient.body;
        
        getPatient = await chai.request(app)
          .get(`/patients/16`);

        console.log('--- getPatient: ', getPatient.body);

      } catch (error) {
        console.error('ERROR: ', error.message);
      }
    });

    it('retorna 201 - Created', async () => {
      const { status } = postPatient;

      expect(status).to.be.equals(201);
    });

    it('retorna um atributo `patientId`, que é um número', async () => {
      const { body: { patientId } } = postPatient;
      expect(typeof patientId).to.be.equals('number');
    });

    it('é possível consultar a pessoa criada através do `patientId` retornado', async () => {
      const { body: { patientId: postId } } = postPatient;
      const { body: { patientId: getId } } = getPatient;

      expect(postId).to.be.equals(getId);
    });

    it('essa consulta também retornou um atributo `planId` que é 2', async () => {
      const { body: { planId } } = getPatient;

      expect(planId).to.be.equals(2);
    });
  });

  describe('quando os dados do `body` não são válidos', () => {
    let postPatient;

    before(async () => {
      try{
        postPatient = await chai.request(app)
          .post('/patients')
          .send({
            fullname: "Oliveira Rodrigo",
          });
      } catch (error) {
        console.error(error.message);
      }
    });

    it('retorna 400 - Bad Request', async () => {
      const { status } = postPatient;

      expect(status).to.be.equals(400);
    });

    it("retorna uma mensagem 'body is required", async () => {
      const { body: { message } } = postPatient;

      expect(message).to.be.equals("body is required");
    });
  });
});