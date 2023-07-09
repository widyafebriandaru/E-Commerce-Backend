const express = require("express");
const db = require("../models");
const { sequelize } = require("../models");
const itemsPerPage = 2; 

//Get All Products
const getAllproducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page || 1, 10);
    const offset = (page - 1) * itemsPerPage;
    // http://localhost:3001/products/allproducts?page=1

    const products = await db.detailProduct.findAll();
    return res.status(200).json({
      data: products,
    });
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//GET SPECIFIC Product
const getProductById = async (req, res) => {
  try {
    const response = await db.detailProduct.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Create New Product
const createProduct = async (req, res) => {
  const {
    detailName,
    discount,
    description,
    review,
    rating,
    product_quote_S,
    product_quote_L,
    product_quote_XL,
    initialPrice,
    category,
    thumbnailPreview,
    thumbnailUrl1,
    thumbnailUrl2,
    thumbnailUrl3,
  } = req.body;
  try {
    await db.detailProduct.create({
      userId: req.userId,
      detailName: detailName,
      discount: discount,
      description: description,
      review: review,
      rating: rating,
      product_quote_S: product_quote_S,
      product_quote_L: product_quote_L,
      product_quote_XL: product_quote_XL,
      initialPrice: initialPrice,
      category: category,
      thumbnailPreview: thumbnailPreview,
      thumbnailUrl1: thumbnailUrl1,
      thumbnailUrl2: thumbnailUrl2,
      thumbnailUrl3: thumbnailUrl3,
    });
    res.status(201).json({ msg: "Product Created Successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Update Existing Product
const updateProduct = async (req, res) => {
  try {
    const product = await db.detailProduct.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
    const {
      detailName,
      discount,
      description,
      review,
      rating,
      product_quote_S,
      product_quote_L,
      product_quote_XL,
      initialPrice,
      category,
      thumbnailPreview,
      thumbnailUrl1,
      thumbnailUrl2,
      thumbnailUrl3,
    } = req.body;
    if (req.accountType === "admin") {
      await db.detailProduct.update(
        {
          detailName: detailName,
          discount: discount,
          description: description,
          review: review,
          rating: rating,
          product_quote_S: product_quote_S,
          product_quote_L: product_quote_L,
          product_quote_XL: product_quote_XL,
          initialPrice: initialPrice,
          category: category,
          thumbnailPreview: thumbnailPreview,
          thumbnailUrl1: thumbnailUrl1,
          thumbnailUrl2: thumbnailUrl2,
          thumbnailUrl3: thumbnailUrl3,
        },
        {
          where: {
            id: product.id,
          },
        }
      );
    } else {
      return res.status(403).json({ msg: "Akses terlarang" });
    }
    res.status(200).json({ msg: "Product updated successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Delete Existing Product
const deleteProduct = async (req, res) => {
  try {
    const product = await db.detailProduct.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
    if (req.accountType === "admin") {
      await db.detailProduct.destroy({
        where: {
          id: product.id,
        },
      });
    } else {
        return res.status(403).json({ msg: "Akses terlarang" });
    }
    res.status(200).json({ msg: "Product deleted successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllproducts: getAllproducts,
  getProductById: getProductById,
  createProduct: createProduct,
  deleteProduct: deleteProduct,
  updateProduct: updateProduct,
};
