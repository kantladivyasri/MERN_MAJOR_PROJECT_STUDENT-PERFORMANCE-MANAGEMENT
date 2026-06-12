import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import PageLayout from "../components/PageLayout";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", formData);
      login(res.data);

      if (res.data.role === "student") {
        navigate("/student");
      } else if (res.data.role === "trainer") {
        navigate("/trainer");
      } else if (res.data.role === "admin") {
        navigate("/admin");
      }
    } catch (error) {
      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <PageLayout showNavbar={false} title="Welcome Back" subtitle="Sign in to access your learning and placement dashboard.">
      <div className="row gy-4 justify-content-center align-items-center">
        <div className="col-lg-6">
          <div className="hero-panel p-5 overflow-hidden mb-4 mb-lg-0">
            <div className="hero-badge">Trusted campus placement suite</div>
            <h2 className="display-6 fw-bold text-white mb-3">
              Learn faster, submit smarter, and connect with top employers.
            </h2>
            <p className="lead text-white-75 mb-4">
              A unified learning portal for students, trainers, and campus admins — built to keep coursework, jobs, and applications aligned.
            </p>

            <div className="feature-pill-group">
              <div className="feature-pill">
                <span>✓</span>
                Personalized student path
              </div>
              <div className="feature-pill">
                <span>⚡</span>
                Fast assignment tracking
              </div>
              <div className="feature-pill">
                <span>🚀</span>
                Real-time job matches
              </div>
            </div>

            <div className="hero-stats mt-5">
              <div>
                <strong>98%</strong> student engagement
              </div>
              <div>
                <strong>120+</strong> live courses
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="form-card p-5 shadow-glow">
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
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

              <div className="mb-4">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="btn btn-primary w-100 btn-glow" type="submit">
                Login
              </button>
            </form>

            <div className="text-center mt-4 text-muted">
              New here? <Link to="/register">Create an account</Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Login;