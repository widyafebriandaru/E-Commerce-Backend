'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orders.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    detail_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'detailProducts', 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
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
    modelName: 'orders',
  });
  return orders;
};