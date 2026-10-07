const db = require("../config/db");

// Get all office hours
const getOfficeHours = async (req, res) => {
  try {
    const [officeHours] = await db.query(`
      SELECT
        oh.id,
        oh.department_id,
        d.name AS department_name,
        oh.day_of_week,
        oh.opening_time,
        oh.closing_time
      FROM office_hours oh
      LEFT JOIN departments d
        ON oh.department_id = d.id
      ORDER BY oh.department_id, oh.id ASC
    `);

    res.json({
      success: true,
      count: officeHours.length,
      data: officeHours
    });
  } catch (error) {
    console.error("Error fetching office hours:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch office hours.",
      error: error.message
    });
  }
};

// Get office hours by department ID
const getOfficeHoursByDepartment = async (req, res) => {
  try {
    const { departmentId } = req.params;

    const [officeHours] = await db.query(`
      SELECT
        oh.id,
        oh.department_id,
        d.name AS department_name,
        oh.day_of_week,
        oh.opening_time,
        oh.closing_time
      FROM office_hours oh
      LEFT JOIN departments d
        ON oh.department_id = d.id
      WHERE oh.department_id = ?
      ORDER BY oh.id ASC
    `, [departmentId]);

    res.json({
      success: true,
      count: officeHours.length,
      data: officeHours
    });
  } catch (error) {
    console.error("Error fetching department office hours:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch department office hours.",
      error: error.message
    });
  }
};

module.exports = {
  getOfficeHours,
  getOfficeHoursByDepartment
};