const {db , DataTypes} = require('../utils/database.util');

const Product = db.define('product', 
    {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    userId: {
        foreignkey: true,
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    categoryId:{
        foreignkey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },   
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active',
    }
    }
)
module.exports = { Product };
