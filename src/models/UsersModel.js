const { ObjectId } = require('mongodb');
const connection = require('../database');

const createUser = async (name, email, password) => {
  const { InsertId } = await connection()
  .then((db) => db.collection('users').insertOne({ name, email, password, role: 'user' }));
  return {
    user: {
      name,
      email,
      role: 'user',
      _id: ObjectId(InsertId),
    },
  };
};

module.exports = { createUser };