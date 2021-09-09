const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

// TODO: Add validations to the User model

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      // TODO: prevent null values in username
      // TODO: only allow alphanumeric characters
      validate: {
        notNull: true,
        isAlphanumeric: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      // TODO: prevent null values
      // TODO: password must have at least 8 characters
      type: DataTypes.STRING,
      allowNull: false,
      
      validate: {
        notNull: true,
        len: [8,20],
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
