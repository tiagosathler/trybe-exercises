const jokes = (app) => {
  app.get('/ping', (_req, res) => {
    res.status(200).json({ message: 'pong' });
  });
  
  app.post('/hello', (req, res) => {
    const { name } = req.body;
    res.status(200).json({ message: `Hello, ${name}` });
  });
  app.post('/greetings', (req, res) => {
    const { name, age } = req.body;
    if (+age <= 17 || age === undefined) return res.status(401).json({ message: 'Unauthorized' });
    res.status(200).json({ message: `Hello, ${name}` });
  });
  
  app.put('/users/:name/:age', (req, res) => {
    const { name, age } = req.params;
    res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} de idade` });
  });
};

module.exports = { jokes };