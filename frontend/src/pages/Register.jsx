import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import PageLayout from "../components/PageLayout";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
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
      const res = await api.post("/auth/register", formData);
      setMessage(res.data.message);
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "student",
      });
    } catch (error) {
      setError(
        error.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <PageLayout
      showNavbar={false}
      title="Create your account"
      subtitle="Register as a student, trainer, or admin to start using the portal."
    >
      <div className="row gy-4 justify-content-center align-items-center">
        <div className="col-lg-6 order-lg-2">
          <div className="hero-panel p-5 overflow-hidden mb-4 mb-lg-0">
            <div className="hero-badge">Campus-ready placement hub</div>
            <h2 className="display-6 fw-bold text-white mb-3">
              Build your learning profile and manage placements effortlessly.
            </h2>
            <p className="lead text-white-75 mb-4">
              Register quickly and start using the platform's assignment tracking, course management, and job application workflows.
            </p>

            <div className="feature-pill-group">
              <div className="feature-pill">
                <span>🎯</span>
                Simple onboarding
              </div>
              <div className="feature-pill">
                <span>📚</span>
                Course & assignment hub
              </div>
              <div className="feature-pill">
                <span>💼</span>
                Career-ready job board
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5 order-lg-1">
          <div className="form-card p-5 shadow-glow">
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Select Role</label>
                <select
                  name="role"
                  className="form-select"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="student">Student</option>
                  <option value="trainer">Trainer</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <button className="btn btn-primary w-100 btn-glow" type="submit">
                Register
              </button>
            </form>

            <div className="text-center mt-4 text-muted">
              Already have an account? <Link to="/">Login now</Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Register;