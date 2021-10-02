const User = require('../models/UsersModel');

const createUser = async (name, email, password) => User.createUser(name, email, password);

module.exports = { createUser };