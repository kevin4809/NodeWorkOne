const { db } = require('../utils/database.util')
const { DataTypes } = require('sequelize')

const User = db.define('User', {
    id: {
        primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
    },
    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    exitTime: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    
    },

});

module.exports = { User };