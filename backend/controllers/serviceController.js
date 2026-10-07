const db = require("../config/db");

// Get all services
const getServices = async (req, res) => {
  try {
    const [services] = await db.query(`
      SELECT
        s.id,
        s.name,
        s.description,
        s.location,
        s.building_id,
        b.name AS building_name
      FROM services s
      LEFT JOIN buildings b
        ON s.building_id = b.id
      ORDER BY s.id ASC
    `);

    res.json({
      success: true,
      count: services.length,
      data: services
    });
  } catch (error) {
    console.error("Error fetching services:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch services.",
      error: error.message
    });
  }
};

// Get single service by ID
const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;

    const [services] = await db.query(`
      SELECT
        s.id,
        s.name,
        s.description,
        s.location,
        s.building_id,
        b.name AS building_name
      FROM services s
      LEFT JOIN buildings b
        ON s.building_id = b.id
      WHERE s.id = ?
    `, [id]);

    if (services.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Service not found."
      });
    }

    res.json({
      success: true,
      data: services[0]
    });
  } catch (error) {
    console.error("Error fetching service:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch service.",
      error: error.message
    });
  }
};

module.exports = {
  getServices,
  getServiceById
};