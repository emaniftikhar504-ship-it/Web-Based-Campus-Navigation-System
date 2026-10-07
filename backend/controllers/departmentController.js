const db = require("../config/db");

// Get all departments
const getDepartments = async (req, res) => {
  try {
    const [departments] = await db.query(`
      SELECT
        d.id,
        d.name,
        d.description,
        d.building_id,
        b.name AS building_name
      FROM departments d
      LEFT JOIN buildings b
        ON d.building_id = b.id
      ORDER BY d.id ASC
    `);

    res.json({
      success: true,
      count: departments.length,
      data: departments
    });
  } catch (error) {
    console.error("Error fetching departments:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch departments.",
      error: error.message
    });
  }
};

// Get single department by ID
const getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;

    const [departments] = await db.query(`
      SELECT
        d.id,
        d.name,
        d.description,
        d.building_id,
        b.name AS building_name
      FROM departments d
      LEFT JOIN buildings b
        ON d.building_id = b.id
      WHERE d.id = ?
    `, [id]);

    if (departments.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Department not found."
      });
    }

    res.json({
      success: true,
      data: departments[0]
    });
  } catch (error) {
    console.error("Error fetching department:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch department.",
      error: error.message
    });
  }
};

module.exports = {
  getDepartments,
  getDepartmentById
};