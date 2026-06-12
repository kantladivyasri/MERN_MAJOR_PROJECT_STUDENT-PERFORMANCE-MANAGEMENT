const express = require("express");

const {
  createCourse,
  getCourses,
} = require("../controllers/courseController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, authorize("admin", "trainer"), createCourse);
router.get("/", protect, getCourses);

module.exports = router;