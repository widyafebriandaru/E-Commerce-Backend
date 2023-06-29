const express = require("express");
const allproducts = require('../controllers/allProductsController')
const router = express.Router();
router.get('/allProducts', allproducts);

module.exports = router;