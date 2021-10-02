const express = require('express');

const router = express.Router();

const controllerUser = require('../controllers/UsersController');

router.post('/users', controllerUser.createUser);

module.exports = router;