const { Category } = require('../models/category.model');
const { Product } = require('../models/product.model');

const {catchAsync} = require('../utils/catchAsync.util');


const getAllCategories = catchAsync(async (req, res, next) => {
	const categories = await Category.findAll({ 
		where: { status: 'active' },
		include: {
			model: Product,
		}
	});

	res.status(200).json({
		status: 'success',
		categories,
	});
});

const postCategories = catchAsync(async (req, res, next) => {
	const { name } = req.body;
	
	const newCategory = await Category.create({
		name,
	});

	res.status(201).json({
		status: 'success',
		newCategory,
	});
});

const getCategoriesbyid = catchAsync(async (req, res, next) => {
	const { category } = req;

	res.status(200).json({ status: 'success', category });
})

const patchCategories = catchAsync(async (req, res, next) => {
	const { category } = req;
	const { name } = req.body;

	await category.update({ name });

	res.status(200).json({ status: 'success', category });
})

const deleteCategories = catchAsync(async (req, res, next) => {
	const { category } = req;

	await category.update({ status: 'deleted' });

	res.status(200).json({ status: 'success' });
})

module.exports = {
	getAllCategories,
	postCategories,
	getCategoriesbyid,
	patchCategories,
	deleteCategories,
}