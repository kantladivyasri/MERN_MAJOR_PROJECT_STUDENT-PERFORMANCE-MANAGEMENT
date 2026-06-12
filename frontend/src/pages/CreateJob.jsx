import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import PageLayout from "../components/PageLayout";

function CreateJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    description: "",
    location: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setMessage("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/jobs", formData);
      setMessage(`Job "${res.data.title}" posted successfully.`);
      setFormData({ title: "", company: "", description: "", location: "" });
    } catch (error) {
      setError(
        error.response?.data?.message || "Unable to create job. Please try again."
      );
    }
  };

  return (
    <PageLayout
      title="Create Job"
      subtitle="Post a new placement opportunity for active students."
    >
      <div className="form-card">
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Job Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter job title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Company Name</label>
            <input
              type="text"
              name="company"
              className="form-control"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="Enter job location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="4"
              placeholder="Describe the job role"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Publish Job
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/jobs">Back to Jobs</Link>
        </div>
      </div>
    </PageLayout>
  );
}

export default CreateJob;
