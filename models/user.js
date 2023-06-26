'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fullName: {
      allowNull: false,
      length: 50,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      length: 50,
      type: DataTypes.STRING
    },
    phone: {
      allowNull: false,
      length: 30,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      length: 100,
      type: DataTypes.STRING
    },
    accountType: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      defaultValue:'CURRENT_TIMESTAMP',
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
       defaultValue:'CURRENT_TIMESTAMP',
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
  });
  return User;
};