const express = require("express");

const {
  getRooms,
  getRoomById
} = require("../controllers/roomController");

const router = express.Router();

// Get all rooms
router.get("/", getRooms);

// Get one room by ID
router.get("/:id", getRoomById);

module.exports = router;