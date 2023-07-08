const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");
const router = express.Router();
const { verifyUser, adminOnly } = require("../middleware/authUser");

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", verifyUser, adminOnly, deleteUser);

module.exports = router;
