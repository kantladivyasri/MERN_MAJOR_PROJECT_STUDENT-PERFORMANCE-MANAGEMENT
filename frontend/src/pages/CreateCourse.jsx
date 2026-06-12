import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import PageLayout from "../components/PageLayout";

function CreateCourse() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    trainer: "",
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
      const res = await api.post("/courses", formData);
      setMessage(`Course "${res.data.title}" created successfully.`);
      setFormData({ title: "", description: "", trainer: "" });
    } catch (error) {
      setError(
        error.response?.data?.message || "Unable to create course. Please try again."
      );
    }
  };

  return (
    <PageLayout
      title="Create Course"
      subtitle="Publish a new course so students can enroll and trainers can teach."
    >
      <div className="form-card">
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Course Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter the course title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="4"
              placeholder="Write a short course description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Trainer Name</label>
            <input
              type="text"
              name="trainer"
              className="form-control"
              placeholder="Enter instructor name"
              value={formData.trainer}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Create Course
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/courses">Back to Courses</Link>
        </div>
      </div>
    </PageLayout>
  );
}

export default CreateCourse;
