const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.route('/').get(productController.listProducts).post(productController.createMockDatabase);
router
	.route('/:id')
	.get(productController.listProductById)
	.patch(productController.favoriteProductById);

module.exports = router;
