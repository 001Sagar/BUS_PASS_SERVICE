const route = require('express').Router();

const UserController = require('../controllers/auth');
const jwt = require('../utility/validation');

route.post('/register',UserController.Register);
route.get('/login',UserController.login);
route.put('/update',jwt.authenticate ,UserController.update);
route.delete('/delete',jwt.authenticate ,UserController.delete);

module.exports = route;