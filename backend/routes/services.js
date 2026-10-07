const express = require("express");

const {
  getServices,
  getServiceById
} = require("../controllers/serviceController");

const router = express.Router();

// Get all services
router.get("/", getServices);

// Get one service by ID
router.get("/:id", getServiceById);

module.exports = router;