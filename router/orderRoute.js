const express = require("express");
const {
    getOrders, 
    getOrdersById,
    createOrder,
    deleteOrder,
} = require("../controllers/ordersController");
const router = express.Router();
const { verifyUser } = require("../middleware/authUser");

router.get("/orders/:user_id", getOrders);

router.post("/orders",verifyUser, createOrder);
router.delete("/orders/:id", verifyUser, deleteOrder);

module.exports = router;
