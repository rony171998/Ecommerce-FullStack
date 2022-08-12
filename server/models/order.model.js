const {db , DataTypes} = require('../utils/database.util');

const Order = db.define('order',{
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
    userId:{
        foreignkey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    totalPrice:{
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active',
    }
});

module.exports = { Order };