const express = require("express");

const {
  getUsers,
  getDashboardStats
} = require("../controllers/adminController");

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const router = express.Router();

// Admin dashboard statistics
router.get(
  "/stats",
  protect,
  adminOnly,
  getDashboardStats
);

// Get all users
router.get(
  "/users",
  protect,
  adminOnly,
  getUsers
);

module.exports = router;