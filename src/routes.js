const express = require ('express');
const UserController = require('./controllers/UserController');
const SocialNetworkController = require('./controllers/SocialNetworkController');
const User = require('./models/User');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/', UserController.teste);
routes.post('/users/:user_id/social-networks', SocialNetworkController.store);
routes.get('/social-networks', SocialNetworkController.index);

module.exports = routes;