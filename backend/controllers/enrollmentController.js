const Enrollment = require("../models/Enrollment");

// Enroll Student

const enrollCourse = async (req, res) => {
  try {
    const { course } = req.body;
    const student = req.user.id;

    const existingEnrollment = await Enrollment.findOne({ student, course });
    if (existingEnrollment) {
      return res.status(400).json({ message: "Already enrolled in this course" });
    }

    const enrollment = await Enrollment.create({
      student,
      course,
    });

    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Enrollments

const getEnrollments = async (req, res) => {
  try {
    const query = {};

    if (req.user.role === "student") {
      query.student = req.user.id;
    }

    const enrollments = await Enrollment.find(query)
      .populate("student")
      .populate("course");

    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  enrollCourse,
  getEnrollments,
};