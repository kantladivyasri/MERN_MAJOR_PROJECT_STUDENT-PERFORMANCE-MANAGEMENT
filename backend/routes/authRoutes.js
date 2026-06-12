const express = require("express");

const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controllers/authController");

const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, (req, res) => {
  res.json({ user: req.user });
});
router.get("/users", protect, authorize("admin"), getUsers);

module.exports = router;