const express = require("express");

const {
  searchCampus
} = require("../controllers/searchController");

const router = express.Router();

// Search campus
router.get("/", searchCampus);

module.exports = router;