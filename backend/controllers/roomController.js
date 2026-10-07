const db = require("../config/db");

// Get all rooms
const getRooms = async (req, res) => {
  try {
    const [rooms] = await db.query(`
      SELECT
        r.id,
        r.room_number,
        r.room_name,
        r.floor,
        r.building_id,
        r.room_type,
        b.name AS building_name
      FROM rooms r
      LEFT JOIN buildings b
        ON r.building_id = b.id
      ORDER BY r.id ASC
    `);

    res.json({
      success: true,
      count: rooms.length,
      data: rooms
    });
  } catch (error) {
    console.error("Error fetching rooms:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch rooms.",
      error: error.message
    });
  }
};

// Get single room by ID
const getRoomById = async (req, res) => {
  try {
    const { id } = req.params;

    const [rooms] = await db.query(`
      SELECT
        r.id,
        r.room_number,
        r.room_name,
        r.floor,
        r.building_id,
        r.room_type,
        b.name AS building_name
      FROM rooms r
      LEFT JOIN buildings b
        ON r.building_id = b.id
      WHERE r.id = ?
    `, [id]);

    if (rooms.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Room not found."
      });
    }

    res.json({
      success: true,
      data: rooms[0]
    });
  } catch (error) {
    console.error("Error fetching room:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch room.",
      error: error.message
    });
  }
};

module.exports = {
  getRooms,
  getRoomById
};