const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Creates a User modle
class Plants extends Model { }

Plants.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        common_name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        botanical_name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        light: {
            type: DataTypes.STRING,
            allowNull: false
        },
        watering_interval: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.STRING,
            allowNull: false
        },
        temp: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'plants'
    }
);


module.exports = Plants;