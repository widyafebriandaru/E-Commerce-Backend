const express = require('express');
const db = require('../models');
const { sequelize } = require("../models");
const itemsPerPage = 2; // Number of items (columns) to display per page

//Get All Products
const getAllproducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page || 1, 10); // Get the page number from the query parameter, default to 1 if not provided

    // Calculate the offset based on the page number and items per page
    const offset = (page - 1) * itemsPerPage;
    // http://localhost:3001/products/allproducts?page=1

    const [products] = await sequelize.query(
      "SELECT * FROM detailProducts;"
    );
      return res.status(200).json({
        data: products,
      })
      
    } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

//GET SPECIFIC Product
const getProductById = async(req, res) =>{
  try {
      const response = await db.detailProduct.findOne({ where: 
        {id: req.params.id}
    });
      res.status(200).json(response);
  } catch (error) {
      res.status(500).json({msg: error.message});
  }
}

//Create New Product
const createProduct = async(req, res) =>{
  try {
    
  } catch (error) {
    
  }
}

//Update Existing Product
const updateProduct = async(req, res) =>{
  try {
    
  } catch (error) {
    
  }
}

//Delete Existing Product
const deleteProduct = async(req, res) =>{
  try {
    
  } catch (error) {
    
  }
}



module.exports = {
  getAllproducts:getAllproducts,
  getProductById:getProductById,
  createProduct:createProduct,
  deleteProduct:deleteProduct,
  updateProduct:updateProduct
};