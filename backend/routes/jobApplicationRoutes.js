const express = require("express");

const {
  applyJob,
  getApplications,
} = require("../controllers/jobApplicationController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, authorize("student"), applyJob);
router.get("/", protect, authorize("admin", "trainer", "student"), getApplications);

module.exports = router;