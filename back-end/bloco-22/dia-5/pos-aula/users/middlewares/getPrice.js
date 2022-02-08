const fetch = require('node-fetch');

module.exports = async (req, res, _next) => {
  const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  const data = await response.json();
  res.status(200).json({ data });
};