const express = require("express");
const {
  getOrders,
  createOrder,
  deleteOrder,
} = require("../controllers/ordersController");
const router = express.Router();

router.get("/orders/:user_id", getOrders);
router.post("/orders", createOrder);
router.delete("/orders/:id", deleteOrder);

module.exports = router;
