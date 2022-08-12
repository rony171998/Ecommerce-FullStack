const express = require('express');


const {
	
	createproductsinCart,
    getAllproductsinCart,
    updateproductsinCart,
    deleteproductsinCart,
    postCartPurchase,
	getPurchases
} = require('../controllers/cart.controller');


const {
	createproductsinCartValidators
} = require('../middlewares/validators.middleware');
const {
	protectSession,
} = require('../middlewares/auth.middleware');

const cartRouter = express.Router();

cartRouter.get('/', getAllproductsinCart);

cartRouter.use(protectSession);

cartRouter.get('/purchases', getPurchases);

cartRouter.delete('/:id', deleteproductsinCart)

cartRouter
	
	.post('/add-product', createproductsinCartValidators, createproductsinCart)
	.patch('/update-cart', updateproductsinCart)
	.post('/purchase', postCartPurchase);

module.exports = { cartRouter };