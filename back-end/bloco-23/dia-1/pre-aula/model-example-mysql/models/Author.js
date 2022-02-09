const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(" ")
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
};

const serialeze = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
}

const getAll = async () => {
  const [result] = await connection.execute('SELECT id, first_name, last_name, middle_name, last_name FROM authors');
  return result.map(serialeze).map(getNewAuthor);  
}

module.exports = {
  getAll,
}