const express = require('express');
const router = express.Router();
const { sequelize } = require("../models");
const itemsPerPage = 2; 

const getShirt = async (req, res) => {
  try {
    const page = parseInt(req.query.page || 1, 10); 

    const offset = (page - 1) * itemsPerPage;
    // http://localhost:3001/products/allproducts?page=1

    const [products] = await sequelize.query(
        "SELECT * FROM detailProducts WHERE category='Shirt';"
    );
      return res.status(200).json({
        data: products,
      })
      
    } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = getShirt;