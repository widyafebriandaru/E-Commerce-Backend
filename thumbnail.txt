'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class thumbnail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  thumbnail.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    thumbnailName: {
      allowNull: false,
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
    modelName: 'thumbnail',
    
  });
  return thumbnail;
};