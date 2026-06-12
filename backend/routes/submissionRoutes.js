const express = require("express");

const {
  submitAssignment,
  getSubmissions,
} = require("../controllers/submissionController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, authorize("student"), submitAssignment);
router.get("/", protect, authorize("admin", "trainer", "student"), getSubmissions);

module.exports = router;