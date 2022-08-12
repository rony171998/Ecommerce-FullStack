const {db , DataTypes} = require('../utils/database.util');

const ProductsinCart = db.define('productsinCart',{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    
    cartId:{
        foreaningKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productId:{
        foreaningKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active',
    }
});
module.exports = { ProductsinCart };