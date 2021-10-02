const UsersService = require('../services/UsersService');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await UsersService.createUser(name, email, password);
  res.status(201).json(user);
};

module.exports = { createUser };