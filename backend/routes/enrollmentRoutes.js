const express = require("express");

const {
  enrollCourse,
  getEnrollments,
} = require("../controllers/enrollmentController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, authorize("student"), enrollCourse);
router.get("/", protect, authorize("admin", "trainer", "student"), getEnrollments);

module.exports = router;