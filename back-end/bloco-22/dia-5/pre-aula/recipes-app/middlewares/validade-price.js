const validadePrice = (req, res, next) => {
  const { body: { price } } = req;
  if (price === undefined) return res.status(400).json({ message: 'Price is required!' });
  if (Number.isNaN(Number(price))) {
    return res.status(400).json({ message: 'Price must be a number!' });
  }
  if (+price < 0) return res.status(400).json({ message: 'Price must be a positive number!' });
  next();
};

module.exports = validadePrice;