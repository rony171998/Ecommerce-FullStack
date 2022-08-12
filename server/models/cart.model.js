const {db , DataTypes} = require('../utils/database.util');

const Cart = db.define('cart',
{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    userId: {
        foreignkey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active',
    }
    }
);
module.exports = { Cart };