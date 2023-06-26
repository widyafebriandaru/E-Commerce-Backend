'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detailProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      detailName: {
        allowNull: false,
        type: Sequelize.STRING 
      },
      discount: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      review: {
        type: Sequelize.TEXT
      },
      rating: {
        type: Sequelize.INTEGER
      },
      product_quote_S: {
        type: Sequelize.INTEGER
      },
      product_quote_L: {
        type: Sequelize.INTEGER
      },
      product_quote_XL: {
        type: Sequelize.INTEGER
      },
      initialPrice: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING
      },
      link:{
        type: Sequelize.STRING
      },
      thumbnailPreview: {
        type: Sequelize.STRING
      },
      thumbnailUrl1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      thumbnailUrl2: {
        allowNull: false,
        type: Sequelize.STRING
      },
      thumbnailUrl3: {
        allowNull: false,
        type: Sequelize.STRING
      },
      
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('detailProducts');
  }
};