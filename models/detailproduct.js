'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detailProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detailProduct.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    detailName: {
      allowNull: false,
      type: DataTypes.STRING 
    },
    discount: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.TEXT
    },
    review: {
      type: DataTypes.TEXT
    },
    rating: {
      type: DataTypes.INTEGER
    },
    product_quote_S: {
      type: DataTypes.INTEGER
    },
    product_quote_L: {
      type: DataTypes.INTEGER
    },
    product_quote_XL: {
      type: DataTypes.INTEGER
    },
    initialPrice: {
      type: DataTypes.INTEGER
    },
    category: {
      type: DataTypes.STRING
    },
    link:{
      type: DataTypes.STRING
    },
    thumbnailPreview: {
      type: DataTypes.STRING
    },
    thumbnailUrl1: {
      allowNull: false,
      type: DataTypes.STRING
    },
    thumbnailUrl2: {
      allowNull: false,
      type: DataTypes.STRING
    },
    thumbnailUrl3: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP',
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      defaultValue:'CURRENT_TIMESTAMP',
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'detailProduct'
  });
  return detailProduct;
};