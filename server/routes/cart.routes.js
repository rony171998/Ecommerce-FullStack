const express = require('express');


const {
	
	createproductsinCart,
    getAllproductsinCart,
    updateproductsinCart,
    deleteproductsinCart,
} = require('../controllers/cart.controller');


const {
	createproductsinCartValidators
} = require('../middlewares/validators.middleware');
const {
	protectSession,
} = require('../middlewares/auth.middleware');

const cartRouter = express.Router();

cartRouter.use(protectSession);

cartRouter.get('/', getAllproductsinCart);

cartRouter.delete('/:id', deleteproductsinCart)

cartRouter
	
	.post('/add-product', createproductsinCartValidators, createproductsinCart)
	.patch('/update-cart', updateproductsinCart)

module.exports = { cartRouter };