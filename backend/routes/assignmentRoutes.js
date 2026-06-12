const express = require("express");

const {
  createAssignment,
  getAssignments,
} = require("../controllers/assignmentController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, authorize("admin", "trainer"), createAssignment);
router.get("/", protect, getAssignments);

module.exports = router;