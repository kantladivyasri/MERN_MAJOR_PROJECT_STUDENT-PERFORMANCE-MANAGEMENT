import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

function TrainerDashboard() {
  return (
    <PageLayout
      title="Trainer Dashboard"
      subtitle="Manage course materials and assignment workflows with confidence."
    >
      <div className="dashboard-hero card card-glow p-4 mb-4">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-3">
          <div>
            <div className="text-muted mb-2">Trainer workspace</div>
            <h2 className="fw-bold">Create courses, assignments, and job opportunities faster</h2>
            <p className="text-muted mb-0">Use these tools to keep student progress aligned with professional placements.</p>
          </div>
          <div className="dashboard-hero-meta text-lg-end">
            <div className="dashboard-hero-stat">
              <span className="dashboard-hero-stat-value">Ready to publish</span>
              <span>New course or job</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <Link to="/courses" className="text-decoration-none">
            <div className="card dashboard-card p-4 h-100">
              <div className="dashboard-card-icon bg-sky">📚</div>
              <h4 className="mt-3">Manage Courses</h4>
              <p className="text-muted">View and maintain current course offerings.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4">
          <Link to="/create-course" className="text-decoration-none">
            <div className="card dashboard-card p-4 h-100">
              <div className="dashboard-card-icon bg-purple">➕</div>
              <h4 className="mt-3">Create Course</h4>
              <p className="text-muted">Add a new course for students to enroll in.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4">
          <Link to="/assignments" className="text-decoration-none">
            <div className="card dashboard-card p-4 h-100">
              <div className="dashboard-card-icon bg-orange">📝</div>
              <h4 className="mt-3">Assignments</h4>
              <p className="text-muted">Publish assignments and monitor student submissions.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4">
          <Link to="/create-assignment" className="text-decoration-none">
            <div className="card dashboard-card p-4 h-100">
              <div className="dashboard-card-icon bg-emerald">➕</div>
              <h4 className="mt-3">Create Assignment</h4>
              <p className="text-muted">Add a new assignment and attach it to a course.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4">
          <Link to="/jobs" className="text-decoration-none">
            <div className="card dashboard-card p-4 h-100">
              <div className="dashboard-card-icon bg-sky">💼</div>
              <h4 className="mt-3">Manage Jobs</h4>
              <p className="text-muted">Review active placement opportunities.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4">
          <Link to="/create-job" className="text-decoration-none">
            <div className="card dashboard-card p-4 h-100">
              <div className="dashboard-card-icon bg-orange">➕</div>
              <h4 className="mt-3">Publish Job</h4>
              <p className="text-muted">Add a new placement opportunity for students.</p>
            </div>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

export default TrainerDashboard;