const route = require('express').Router();
const jwt = require('../utility/validation');
const busController = require('../controllers/bus');

route.post('/book',jwt.authenticate ,busController.book);
route.get('/check',jwt.authenticate ,busController.check);
// route.put('/update',UserController.update);
route.delete('/delete',jwt.authenticate ,busController.delete);

module.exports = route;