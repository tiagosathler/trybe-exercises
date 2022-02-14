const Services = require('../services');
const Schemas = require('../schemas');

const findCep = async (req, res, next) => {
  const { params: { cep } } = req;
  
  if (!Schemas.isValidCep(cep, /\d{5}-?\d{3}/g)) {
    return next({ error: { code: 'invalidData', message: 'CEP inválido' } });
  }

  const cepReq = cep.replaceAll('-', '');

  const result = await Services.Cep.findByCep(cepReq);

  if (!result) {
    return next({ error: { code: 'notFound', message: 'CEP não encontrado' } });
  }

  return res.status(200).json(result);
};

const createCep = async (req, res, next) => {
  const { body: { cep, logradouro, bairro, localidade, uf } } = req;
  
  if (!Schemas.isValidCep(cep, /\d{5}-\d{3}/g)) {
    return next({ error: { code: 'invalidData', message: 'CEP inválido' } });
  }

  const cepReq = cep.replaceAll('-', '');
  const result = await Services.Cep.findByCep(cepReq);

  if (result) {
    return next({ error: { code: 'alreadyExists', message: 'CEP já existente' } });
  }

  const created = await Services.Cep.createCep({ cep: cepReq, logradouro, bairro, localidade, uf });

  if (!created) {
    return next({ error: { code: 'failedCreate', message: 'failed on create CEP' } });
  }
  
  return res.status(201).json({ cep, logradouro, bairro, localidade, uf });
};

module.exports = {
  findCep,
  createCep,
};
