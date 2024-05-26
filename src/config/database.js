const Sequelize = require('sequelize');
const sequelize = new Sequelize('hackathon-db1', 'user', 'password', {
	dialect: 'sqlite',
	host: './database.sqlite',
});

module.exports = sequelize;
