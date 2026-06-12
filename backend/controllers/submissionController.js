const Submission = require("../models/Submission");

// Submit Assignment

const submitAssignment = async (req, res) => {
  try {
    const { assignment, submissionText } = req.body;
    const student = req.user.id;

    const submission = await Submission.create({
      student,
      assignment,
      submissionText,
    });

    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// View Submissions

const getSubmissions = async (req, res) => {
  try {
    const query = {};

    if (req.user.role === "student") {
      query.student = req.user.id;
    }

    const submissions = await Submission.find(query)
      .populate("student")
      .populate("assignment");

    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  submitAssignment,
  getSubmissions,
};