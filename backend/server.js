const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/courses", require("./routes/courseRoutes"));

app.use(
  "/api/enrollments",
  require("./routes/enrollmentRoutes")
);

app.use(
  "/api/assignments",
  require("./routes/assignmentRoutes")
);

app.use(
  "/api/submissions",
  require("./routes/submissionRoutes")
);

app.use("/api/jobs", require("./routes/jobRoutes"));

app.use(
    "/api/job-applications",
    require("./routes/jobApplicationRoutes")
);

app.get("/", (req, res) => {
  res.send("Smart Student Learning API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});