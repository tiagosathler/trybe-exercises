const Services = require('../services');
const Schemas = require('../schemas');

const findCep = async (req, res, next) => {
  let { params: { cep } } = req;
  
  if (!Schemas.isValidCep(cep)) {
    return next({ error: { code: 'invalidData', message: 'CEP inválido' } });
  }

  cep = cep.replaceAll('-', '');
  
  const result = await Services.Cep.findByCep(cep);

  if (!result) {
    return next({ error: { code: 'notFound', message: 'CEP não encontrado' } });
  }

  return res.status(200).json(result);
};

module.exports = {
  findCep,
};
