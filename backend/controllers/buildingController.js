const db = require("../config/db");

// Get all buildings
const getBuildings = async (req, res) => {
  try {
    const [buildings] = await db.query(
      "SELECT * FROM buildings ORDER BY id ASC"
    );

    res.json({
      success: true,
      count: buildings.length,
      data: buildings
    });
  } catch (error) {
    console.error("Error fetching buildings:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch buildings.",
      error: error.message
    });
  }
};

// Get single building by ID
const getBuildingById = async (req, res) => {
  try {
    const { id } = req.params;

    const [buildings] = await db.query(
      "SELECT * FROM buildings WHERE id = ?",
      [id]
    );

    if (buildings.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Building not found."
      });
    }

    res.json({
      success: true,
      data: buildings[0]
    });
  } catch (error) {
    console.error("Error fetching building:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch building.",
      error: error.message
    });
  }
};

module.exports = {
  getBuildings,
  getBuildingById
};