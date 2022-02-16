const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Creates a User modle
class Comments extends Model { };

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        posters_id: {
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
        }

    },
    {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments'
    }
);

module.exports = Comments;