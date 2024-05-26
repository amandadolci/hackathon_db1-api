const Product = require('../models/productModel');

async function createMockDatabase(request, response) {
	const data = request.body;
	try {
		for (let i = 0; i < data.length; i++) {
			await Product.create(data[i]);
		}
		response.status(201).json('Product inserted!');
	} catch (error) {
		console.log(error);
		response.status(400).send(error);
	}
}

async function listProducts(request, response) {
	try {
		const products = await Product.findAll();
		response.status(200).json(products);
	} catch (error) {
		console.log(error);
		response.status(400).send(error);
	}
}

async function listProductById(request, response) {
	const id = request.params.id;
	try {
		const product = await Product.findOne({ where: { id } });
		if (!product) return response.status(400).json('Product not found.');

		response.status(200).json(product);
	} catch (error) {
		console.log(error);
		response.status(400).send(error);
	}
}

async function favoriteProductById(request, response) {
	const id = request.params.id;
	const favorite = request.body.favorite;
	try {
		const product = await Product.findOne({ where: { id } });
		if (!product) return response.status(400).json('Product not found.');
		const updatedProduct = { ...product, favorite: favorite };
		await Product.update(updatedProduct, { where: { id } });

		response
			.status(200)
			.json(favorite ? 'Product added to favorites' : 'Product deleted from favorites');
	} catch (error) {
		console.log(error);
		response.status(400).send(error);
	}
}

module.exports = { createMockDatabase, listProducts, listProductById, favoriteProductById };
