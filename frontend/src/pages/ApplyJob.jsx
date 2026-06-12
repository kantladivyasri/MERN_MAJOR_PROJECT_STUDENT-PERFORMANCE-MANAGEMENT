import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import PageLayout from "../components/PageLayout";

function ApplyJob() {
  const [formData, setFormData] = useState({ job: "" });
  const [jobs, setJobs] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const res = await api.get("/jobs");
        setJobs(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadJobs();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/job-applications", formData);
      setMessage("Job application submitted successfully.");
      setFormData({ job: "" });
    } catch (error) {
      setError(
        error.response?.data?.message || "Unable to apply for this job. Please try again."
      );
    }
  };

  return (
    <PageLayout
      title="Apply for Job"
      subtitle="Select a placement opportunity and submit your application."
    >
      <div className="form-card">
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label">Select Job</label>
            <select
              name="job"
              className="form-select"
              value={formData.job}
              onChange={handleChange}
              required
            >
              <option value="">Choose a job</option>
              {jobs.map((job) => (
                <option key={job._id} value={job._id}>
                  {job.title} – {job.company}
                </option>
              ))}
            </select>
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Apply Now
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/jobs">Back to Jobs</Link>
        </div>
      </div>
    </PageLayout>
  );
}

export default ApplyJob;
