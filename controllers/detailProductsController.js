const express = require('express');
const router = express.Router();
const { sequelize, DetailProduct } = require('../models');

router.get('/detailProducts/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const [product] = await sequelize.query(
      'SELECT * FROM detailProducts WHERE id = :productId;',
      {
        replacements: { productId },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    return res.status(200).json({ data: product });
  } catch (error) {
    console.error('Error retrieving product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
