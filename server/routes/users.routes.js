const express = require('express');


const {
	getMeProducts,
	createUser,
	login,
	getUserById,
	updateUser,
	deleteUser,
	getUserOrdersAll,
	getUserOrderById,
	getAllorders
} = require('../controllers/users.controller');


const {
	createUserValidators
} = require('../middlewares/validators.middleware');

const { userExists } = require('../middlewares/users.middleware');
const {
	protectSession,
	protectUserAccount,
} = require('../middlewares/auth.middleware');
const { orderExists } = require('../middlewares/orders.middleware');

const usersRouter = express.Router();

usersRouter.post('/', createUserValidators, createUser);

usersRouter.post('/login', login);

usersRouter.get('/ordersAll', getAllorders);

usersRouter.use(protectSession);

usersRouter.get('/me', getMeProducts);

usersRouter.get('/orders', getUserOrdersAll);

usersRouter.get('/:id',userExists, getUserById);

usersRouter.get('/orders/:id',orderExists, getUserOrderById);

usersRouter
	.use('/:id', userExists)
	.route('/:id')
	.get(getUserById)
	.patch(protectUserAccount, updateUser)
	.delete(protectUserAccount, deleteUser);

module.exports = { usersRouter };
