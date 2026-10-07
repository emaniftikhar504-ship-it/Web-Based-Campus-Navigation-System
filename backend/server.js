const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const buildingRoutes = require("./routes/buildings");
const departmentRoutes = require("./routes/departments");
const serviceRoutes = require("./routes/services");
const roomRoutes = require("./routes/rooms");
const officeHoursRoutes = require("./routes/officeHours");
const searchRoutes = require("./routes/search");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");

const app = express();

const PORT = process.env.PORT || 5000;

// =========================
// Middleware
// =========================

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =========================
// API Routes
// =========================

app.use("/api/buildings", buildingRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/office-hours", officeHoursRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// =========================
// Home Route
// =========================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CampusNav Backend API is running!"
  });
});

// =========================
// API Test Route
// =========================

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "CampusNav API is working!"
  });
});

// =========================
// Database Test Route
// =========================

app.get("/api/db-test", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT DATABASE() AS database_name"
    );

    res.json({
      success: true,
      message: "Database connection is working!",
      database: rows[0].database_name
    });
  } catch (error) {
    console.error(
      "Database test failed:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Database connection failed.",
      error: error.message
    });
  }
});

// =========================
// 404 Route
// =========================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found."
  });
});

// =========================
// Start Server
// =========================

app.listen(PORT, () => {
  console.log(
    `CampusNav backend running on http://localhost:${PORT}`
  );
});