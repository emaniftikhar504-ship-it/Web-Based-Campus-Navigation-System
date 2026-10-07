const db = require("../config/db");

// Search across buildings, departments, rooms and services
const searchCampus = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q || q.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Search query is required."
      });
    }

    const searchTerm = `%${q.trim()}%`;

    const [buildings] = await db.query(
      `
      SELECT
        id,
        name,
        type,
        description,
        location
      FROM buildings
      WHERE name LIKE ?
         OR type LIKE ?
         OR description LIKE ?
         OR location LIKE ?
      ORDER BY id ASC
      `,
      [searchTerm, searchTerm, searchTerm, searchTerm]
    );

    const [departments] = await db.query(
      `
      SELECT
        d.id,
        d.name,
        d.description,
        d.building_id,
        b.name AS building_name
      FROM departments d
      LEFT JOIN buildings b
        ON d.building_id = b.id
      WHERE d.name LIKE ?
         OR d.description LIKE ?
      ORDER BY d.id ASC
      `,
      [searchTerm, searchTerm]
    );

    const [rooms] = await db.query(
      `
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
      WHERE r.room_number LIKE ?
         OR r.room_name LIKE ?
         OR r.floor LIKE ?
         OR r.room_type LIKE ?
      ORDER BY r.id ASC
      `,
      [searchTerm, searchTerm, searchTerm, searchTerm]
    );

    const [services] = await db.query(
      `
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
      WHERE s.name LIKE ?
         OR s.description LIKE ?
         OR s.location LIKE ?
      ORDER BY s.id ASC
      `,
      [searchTerm, searchTerm, searchTerm]
    );

    res.json({
      success: true,
      query: q.trim(),
      results: {
        buildings,
        departments,
        rooms,
        services
      }
    });
  } catch (error) {
    console.error("Error searching campus:", error.message);

    res.status(500).json({
      success: false,
      message: "Campus search failed.",
      error: error.message
    });
  }
};

module.exports = {
  searchCampus
};