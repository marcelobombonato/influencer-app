const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../models/User');
const SocialNetwork = require('../models/SocialNetwork');

const connection = new Sequelize(dbConfig);

User.init(connection);
SocialNetwork.init(connection);

// User.associate(connection.models);
SocialNetwork.associate(connection.models);

module.exports = connection;