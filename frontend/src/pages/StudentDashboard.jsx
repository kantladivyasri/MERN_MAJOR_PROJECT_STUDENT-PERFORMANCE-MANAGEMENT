import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

function StudentDashboard() {
  return (
    <PageLayout
      title="Student Dashboard"
      subtitle="Explore courses, manage assignments, and track placement opportunities."
    >
      <div className="dashboard-hero card card-glow p-4 mb-4">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-3">
          <div>
            <div className="text-muted mb-2">Student hub</div>
            <h2 className="fw-bold">Fast track your learning and placement journey</h2>
            <p className="text-muted mb-0">Access your current courses, submit assignments, and apply to jobs from one polished workspace.</p>
          </div>
          <div className="dashboard-hero-meta text-lg-end">
            <div className="dashboard-hero-stat">
              <span className="dashboard-hero-stat-value">Most recent</span>
              <span>Courses updated today</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <Link to="/courses" className="text-decoration-none">
            <div className="card dashboard-card p-4 text-center h-100">
              <div className="dashboard-card-icon bg-sky">📚</div>
              <h4 className="mt-3">Courses</h4>
              <p className="text-muted">Browse and enroll in learning paths.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4">
          <Link to="/assignments" className="text-decoration-none">
            <div className="card dashboard-card p-4 text-center h-100">
              <div className="dashboard-card-icon bg-orange">📝</div>
              <h4 className="mt-3">Assignments</h4>
              <p className="text-muted">Submit work and review deadlines.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4">
          <Link to="/submit-assignment" className="text-decoration-none">
            <div className="card dashboard-card p-4 text-center h-100">
              <div className="dashboard-card-icon bg-emerald">📤</div>
              <h4 className="mt-3">Submit Assignment</h4>
              <p className="text-muted">Upload your work for review.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4">
          <Link to="/jobs" className="text-decoration-none">
            <div className="card dashboard-card p-4 text-center h-100">
              <div className="dashboard-card-icon bg-purple">💼</div>
              <h4 className="mt-3">Jobs</h4>
              <p className="text-muted">Explore placement opportunities tailored for you.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4">
          <Link to="/apply-job" className="text-decoration-none">
            <div className="card dashboard-card p-4 text-center h-100">
              <div className="dashboard-card-icon bg-sky">🧾</div>
              <h4 className="mt-3">Apply for Jobs</h4>
              <p className="text-muted">Submit applications to matching roles.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4">
          <Link to="/applications" className="text-decoration-none">
            <div className="card dashboard-card p-4 text-center h-100">
              <div className="dashboard-card-icon bg-orange">📋</div>
              <h4 className="mt-3">Applications</h4>
              <p className="text-muted">Track your job applications in one place.</p>
            </div>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

export default StudentDashboard;