const express = require("express");

const {
  getOfficeHours,
  getOfficeHoursByDepartment
} = require("../controllers/officeHoursController");

const router = express.Router();

// Get all office hours
router.get("/", getOfficeHours);

// Get office hours for one department
router.get("/department/:departmentId", getOfficeHoursByDepartment);

module.exports = router;