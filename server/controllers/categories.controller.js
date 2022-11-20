const { Category } = require('../models/category.model');
const { Product } = require('../models/product.model');

const { AppError } = require('../utils/appError.util');

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

	const products = await Product.findAll({ where: { categoryId: category.id , status: "active"} });

	if (products.length > 0) {
		return next(new AppError('Category has products', 400));
	}

	await category.update({ name });

	res.status(200).json({ status: 'success', category });
})

const deleteCategories = catchAsync(async (req, res, next) => {
	const { category } = req;

	const products = await Product.findAll({ where: { categoryId: category.id , status: "active"} });

	if (products.length > 0) {
		return next(new AppError('Category has products', 400));
	}

	await category.update({ status: 'deleted' });

	res.status(200).json({ status: 'success' , products});
})

module.exports = {
	getAllCategories,
	postCategories,
	getCategoriesbyid,
	patchCategories,
	deleteCategories,
}