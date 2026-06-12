import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import PageLayout from "../components/PageLayout";

function CreateAssignment() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    course: "",
  });
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const res = await api.get("/courses");
        setCourses(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadCourses();
  }, []);

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
      const res = await api.post("/assignments", formData);
      setMessage(`Assignment "${res.data.title}" created successfully.`);
      setFormData({ title: "", description: "", course: "" });
    } catch (error) {
      setError(
        error.response?.data?.message || "Unable to create assignment. Please try again."
      );
    }
  };

  return (
    <PageLayout
      title="Create Assignment"
      subtitle="Add a new assignment and assign it to a course."
    >
      <div className="form-card">
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Assignment Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter assignment title"
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
              placeholder="Describe the assignment"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Select Course</label>
            <select
              name="course"
              className="form-select"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Choose a course</option>
              {courses.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Create Assignment
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/assignments">Back to Assignments</Link>
        </div>
      </div>
    </PageLayout>
  );
}

export default CreateAssignment;
