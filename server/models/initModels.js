// Models
const { User } = require('./user.model');
const { Order } = require('./order.model');
const { Cart } = require('./cart.model');
const { Category } = require('./category.model');
const { Product } = require('./product.model');
const { ProductsinCart} = require('./productsinCart.model');
const { ProductImg } = require('./productImg.model');


const initModels = () => {
    
    User.hasMany(Order, { foreignKey: 'userId' });
    Order.belongsTo(User);
    Order.belongsTo(Cart);
    Cart.belongsTo(User);
    Cart.hasMany(ProductsinCart, { foreignKey: 'cartId' });
    ProductsinCart.belongsTo(Cart);
    ProductsinCart.belongsTo(Product);
    Product.belongsTo(Category);
    Product.hasMany(ProductsinCart, { foreignKey: 'productId' });
    Product.hasMany(ProductImg, { foreignKey: 'productId' });
    ProductImg.belongsTo(Product);
    Category.hasMany(Product, { foreignKey: 'categoryId' });
    User.hasMany(Cart, { foreignKey: 'userId' });
    User.hasMany(Product, { foreignKey: 'userId' });
};

module.exports={initModels};
