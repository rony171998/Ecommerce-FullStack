const express = require('express');

const {
	
    postCartPurchase,
	getPurchases,
	getPurchasesById
} = require('../controllers/cart.controller');

const {
	protectSession,
} = require('../middlewares/auth.middleware');

const purchaseRouter = express.Router();

purchaseRouter.use(protectSession);

purchaseRouter.get('/:id', getPurchasesById);

purchaseRouter.get('/', getPurchases);

purchaseRouter.post('/', postCartPurchase);
	

module.exports = { purchaseRouter };