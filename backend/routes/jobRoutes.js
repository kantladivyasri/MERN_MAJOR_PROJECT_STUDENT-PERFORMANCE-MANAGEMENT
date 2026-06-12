const express = require("express");

const {
  createJob,
  getJobs,
} = require("../controllers/jobController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, authorize("admin", "trainer"), createJob);
router.get("/", protect, getJobs);

module.exports = router;