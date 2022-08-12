const express = require('express');


const {
	
	createProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
	getProductById,

} = require('../controllers/products.controller');

const {
	getAllCategories,
	postCategories,
	getCategoriesbyid,
	patchCategories,
	deleteCategories,

} = require('../controllers/categories.controller');

const {
	createProductValidators, createCategoryValidators
} = require('../middlewares/validators.middleware');

const {
	protectSession,
	protectProductAccount,
} = require('../middlewares/auth.middleware');
const { upload } = require('../utils/upload.util');
const { productExists } = require('../middlewares/products.middleware');
const { categoryExists } = require('../middlewares/categories.middleware');

const productsRouter = express.Router();

productsRouter.get('/', getAllProduct);

productsRouter.get('/categories', getAllCategories);

productsRouter.get('/categories/:id', categoryExists ,getCategoriesbyid)

productsRouter.use(protectSession);

productsRouter.post('/categories', createCategoryValidators, postCategories);

productsRouter.post('/', upload.array('productImg',5),createProductValidators , createProduct);

productsRouter.get('/categories', getAllCategories)

productsRouter.patch('/categories/:id', categoryExists ,patchCategories)

productsRouter.delete('/categories/:id', categoryExists ,deleteCategories);

productsRouter
	.use('/:id', productExists)
	.route('/:id')
	.get(getProductById)
	.patch(protectProductAccount, updateProduct)
	.delete(protectProductAccount, deleteProduct);
	
module.exports = { productsRouter };