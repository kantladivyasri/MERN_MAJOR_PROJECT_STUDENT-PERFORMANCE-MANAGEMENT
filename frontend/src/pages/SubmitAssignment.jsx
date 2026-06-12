import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import PageLayout from "../components/PageLayout";

function SubmitAssignment() {
  const [formData, setFormData] = useState({
    assignment: "",
    submissionText: "",
  });
  const [assignments, setAssignments] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadAssignments = async () => {
      try {
        const res = await api.get("/assignments");
        setAssignments(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadAssignments();
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
      const res = await api.post("/submissions", formData);
      setMessage("Assignment submitted successfully.");
      setFormData({ assignment: "", submissionText: "" });
    } catch (error) {
      setError(
        error.response?.data?.message || "Unable to submit assignment. Please try again."
      );
    }
  };

  return (
    <PageLayout
      title="Submit Assignment"
      subtitle="Submit your work to the course assignment portal."
    >
      <div className="form-card">
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Select Assignment</label>
            <select
              name="assignment"
              className="form-select"
              value={formData.assignment}
              onChange={handleChange}
              required
            >
              <option value="">Choose an assignment</option>
              {assignments.map((assignment) => (
                <option key={assignment._id} value={assignment._id}>
                  {assignment.title}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label">Submission Text</label>
            <textarea
              name="submissionText"
              className="form-control"
              rows="5"
              placeholder="Paste your assignment response or summary"
              value={formData.submissionText}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Submit Assignment
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/assignments">Back to Assignments</Link>
        </div>
      </div>
    </PageLayout>
  );
}

export default SubmitAssignment;
