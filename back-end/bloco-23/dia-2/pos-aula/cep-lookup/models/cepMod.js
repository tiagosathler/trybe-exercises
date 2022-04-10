const connection = require('./connection');

const serialize = (obj) => ({
  cep: obj.cep.slice(0, 5).concat('-', obj.cep.slice(5, 8)),
  logradouro: obj.logradouro,
  bairro: obj.bairro,
  localidade: obj.localidade,
  uf: obj.uf,
});

const findByCep = async (cep) => {
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?;';
  const [rows] = await connection.execute(query, [cep]);
  if (rows.length === 0) return null;
  return rows.map(serialize)[0];
};

const createCep = async (data) => {
  const { cep, logradouro, bairro, localidade, uf } = data;
  const query = 'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) '
  + 'VALUES (?, ?, ?, ?, ?);';
  const [rows] = await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
  return rows.insertId;
};

module.exports = {
  findByCep,
  createCep,
};