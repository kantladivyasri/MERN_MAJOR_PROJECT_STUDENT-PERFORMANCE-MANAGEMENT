// src/components/Navbar.jsx

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm py-3 navbar-glass">
      <div className="container">
        <Link className="navbar-brand fw-bold navbar-brand-gradient" to="/">
          Smart Learning
        </Link>

        <div className="collapse navbar-collapse show justify-content-end align-items-center">
          <div className="navbar-nav me-auto gap-3">
            <Link className="nav-link" to="/courses">
              Courses
            </Link>
            <Link className="nav-link" to="/assignments">
              Assignments
            </Link>
            <Link className="nav-link" to="/jobs">
              Jobs
            </Link>
            <Link className="nav-link" to="/applications">
              Applications
            </Link>
          </div>

          <div className="d-flex align-items-center gap-3 ms-lg-4 nav-profile-group">
            <div className="d-flex align-items-center gap-2 text-white nav-user-info">
              <div className="avatar">
                {user?.name
                  ? user.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()
                  : "US"}
              </div>
              <div className="text-end d-none d-md-block">
                <div className="small text-muted">Signed in as</div>
                <div className="fw-semibold">{user?.name || user?.role?.toUpperCase() || "Guest"}</div>
              </div>
            </div>

            {user && <div className="small badge-role">{user.role}</div>}

            <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;