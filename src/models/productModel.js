const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Product extends Model {}
Product.init(
	{
		name: {
			type: DataTypes.STRING,
		},
		price: {
			type: DataTypes.DECIMAL,
		},
		image_url: {
			type: DataTypes.STRING,
		},
		description: {
			type: DataTypes.STRING,
		},
		favorite: {
			type: DataTypes.BOOLEAN,
		},
	},
	{
		sequelize,
		modelName: 'product',
		timestamps: false,
	}
);

module.exports = Product;
