const { body, validationResult, param } = require('express-validator');

const { AppError } = require('../utils/appError.util');

const checkResult = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		
		const errorMsgs = errors.array().map(err => err.msg);

		const message = errorMsgs.join('. ');

		return next(new AppError(message, 400));
	}

	next();
};

const createUserValidators = [
	body('name').notEmpty().withMessage('Name cannot be empty'),
	body('email').isEmail().withMessage('Must provide a valid email'),
	body('password')
		.isLength({ min: 8 })
		.withMessage('Password must be at least 8 characters long')
		.isAlphanumeric()
		.withMessage('Password must contain letters and numbers'),
	body('role')
		.notEmpty()
		.withMessage('Role cannot be empty')
		.isIn(['user', 'admin'])
		.withMessage('Role must be either user or admin'),
	checkResult,
];

const createProductValidators = [
	
	body('title').notEmpty().withMessage('Title cannot be empty'),
	body('description').notEmpty().withMessage('Description cannot be empty'),
	body('quantity')
		.notEmpty()
		.withMessage('Quantity cannot be empty')
		.isNumeric()
		.withMessage('Quantity must be a number')
		.isInt({ min: 0 })
		.withMessage('Quantity must be a positive number'),
	body('price')
		.notEmpty()
		.withMessage('Price cannot be empty')
		.isNumeric()
		.withMessage('Price must be a number')
		.isFloat({ gt: 0 })
		.withMessage('Price must be greater than 0'),
	body("categoryId").notEmpty().withMessage('categoryId cannot be empty'),
	checkResult,
	
]
const createproductsinCartValidators = [
	body('productId').notEmpty().withMessage('ProductId cannot be empty'),
	body('quantity')
		.notEmpty()
		.withMessage('Quantity cannot be empty')
		.isNumeric()
		.withMessage('Quantity must be a number')
		.isInt({ min: 0 })
		.withMessage('Quantity must be a positive number'),
	checkResult,
	
]
const createCategoryValidators = [
	body('name').notEmpty().withMessage('Name cannot be empty'),
	checkResult,
]


module.exports = { 
	createUserValidators  , 
	createProductValidators , 
	createproductsinCartValidators , 
	createCategoryValidators
};
