const express = require("express");

const {
  getBuildings,
  getBuildingById
} = require("../controllers/buildingController");

const router = express.Router();

// Get all buildings
router.get("/", getBuildings);

// Get one building by ID
router.get("/:id", getBuildingById);

module.exports = router;