const JobApplication = require("../models/JobApplication");

// Apply Job

const applyJob = async (req, res) => {
  try {
    const student = req.user.id;
    const { job } = req.body;

    const existingApplication = await JobApplication.findOne({ student, job });
    if (existingApplication) {
      return res.status(400).json({ message: "Job already applied for" });
    }

    const application = await JobApplication.create({
      student,
      job,
    });

    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// View Applications

const getApplications = async (req, res) => {
  try {
    const query = {};

    if (req.user.role === "student") {
      query.student = req.user.id;
    }

    const applications = await JobApplication.find(query)
      .populate("student")
      .populate("job");

    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  applyJob,
  getApplications,
};