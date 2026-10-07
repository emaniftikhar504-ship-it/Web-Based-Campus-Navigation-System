const express = require("express");

const {
  getDepartments,
  getDepartmentById
} = require("../controllers/departmentController");

const router = express.Router();

// Get all departments
router.get("/", getDepartments);

// Get one department by ID
router.get("/:id", getDepartmentById);

module.exports = router;