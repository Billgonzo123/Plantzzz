const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Creates a User modle
class UserPlants extends Model { };

UserPlants.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                modle: 'users',
                key: 'id'
            }
        },
        plant_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                modle: 'plants',
                key: 'id'
            }
        },
        initial_water_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        watering_interval: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userPlants'
    }
);

module.exports = UserPlants;