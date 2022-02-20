const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const bcrypt = require('bcrypt');

//Creates a User modle
class Users extends Model {
       //set up method to check password (hash) for logging in
       checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
};

//define schema for User Model
Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: { 
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //minimum length 6 chars
                len: [6]
            }
        }
    },
    {
        //hooks will run as specified by the method. In this case, to intercept the password string and make it a hash
        hooks: {
            // setup encryption of password beforeCreate (before added to DB)
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10)
                return newUserData
            },
            // setup encryption of password beforeUpdate (before updated and added to DB)
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)
                return updatedUserData
            }
        },
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'users'
    }

);

module.exports = Users;