const fs = require('fs/promises');

const PATH_FILENAME = `${__dirname}/../models/data/users.json`;

const readFile = async () => {
  const content = await fs.readFile(PATH_FILENAME, 'utf-8');
  const { users } = await JSON.parse(content);

  return users;
};

const writeFile = async ({ username, password, admin }) => {
  try {
    const users = await readFile();

    users.push({ username, password, admin });
  
    const newContent = JSON.stringify({ users });
  
    await fs.writeFile(PATH_FILENAME, newContent, 'utf-8');

    return true;    
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = {
  readFile,
  writeFile,
};