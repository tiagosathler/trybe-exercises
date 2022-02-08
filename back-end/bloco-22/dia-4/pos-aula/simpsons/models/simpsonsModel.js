const fs = require('fs/promises');

const readSimpsons = async () => {
  try {
    const content = await fs.readFile('./data/simpsons.json', 'utf-8');
    const simpsons = JSON.parse(content);
    return { response: true, content: simpsons, message: 'Read successfuly!' };
  } catch (err) {
    return { response: false, content: [], message: 'Impossible to read file!' };
  }
};

const writeSimpsons = async (simpsons) => {
  try {
    const content = JSON.stringify(simpsons);
    await fs.writeFile('./data/simpsons.json', content);
    return { response: true, message: 'Wrote in file successfuly!' };
  } catch (err) {
    return { response: false, message: err.message };
  }
};

module.exports = {
  readSimpsons,
  writeSimpsons,
};