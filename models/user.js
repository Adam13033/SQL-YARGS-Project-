const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const User = connection.define("User", {
    userName: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})


module.exports = User; 