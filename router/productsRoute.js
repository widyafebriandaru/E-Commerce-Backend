const express = require("express");
const getAccessories = require('../controllers/accessoriesController')
const {getAllproducts, createProduct, deleteProduct, updateProduct, getProductById} = require('../controllers/allProductsController')
const getDetailProducts = require('../controllers/detailProductsController')
const getPants = require('../controllers/pantsController')
const getShirt = require('../controllers/shirtController')
const getSweater = require('../controllers/sweaterController')
const getTShirt = require('../controllers/t-shirtController')

const router = express.Router();

router.get('/accessories', getAccessories);
router.get('/allProducts', getAllproducts);
router.get('/detailProducts', getDetailProducts);
router.get('/pants', getPants);
router.get('/shirt', getShirt);
router.get('/sweater', getSweater);
router.get('/t-shirt', getTShirt);

router.get('/allProducts/:id', getProductById);
router.post('/allProducts', createProduct);
router.patch('/allProducts/:id', updateProduct);
router.delete('/allProducts/:id', deleteProduct);


module.exports = router;