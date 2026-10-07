const db = require("../config/db");

// Get all users
const getUsers = async (req, res) => {
  try {
    const [users] = await db.query(`
      SELECT
        id,
        name,
        email,
        role,
        created_at
      FROM users
      ORDER BY id ASC
    `);

    res.json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    console.error("Error fetching users:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch users.",
      error: error.message
    });
  }
};

// Get dashboard statistics
const getDashboardStats = async (req, res) => {
  try {
    const [[users]] = await db.query(
      "SELECT COUNT(*) AS count FROM users"
    );

    const [[buildings]] = await db.query(
      "SELECT COUNT(*) AS count FROM buildings"
    );

    const [[departments]] = await db.query(
      "SELECT COUNT(*) AS count FROM departments"
    );

    const [[rooms]] = await db.query(
      "SELECT COUNT(*) AS count FROM rooms"
    );

    const [[services]] = await db.query(
      "SELECT COUNT(*) AS count FROM services"
    );

    res.json({
      success: true,
      data: {
        users: users.count,
        buildings: buildings.count,
        departments: departments.count,
        rooms: rooms.count,
        services: services.count
      }
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard statistics.",
      error: error.message
    });
  }
};

module.exports = {
  getUsers,
  getDashboardStats
};