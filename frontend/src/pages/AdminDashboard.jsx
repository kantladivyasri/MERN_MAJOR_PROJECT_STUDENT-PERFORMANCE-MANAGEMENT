import { useEffect, useState } from "react";
import api from "../services/api";
import PageLayout from "../components/PageLayout";

function AdminDashboard() {
  const [users, setUsers] = useState(0);
  const [courses, setCourses] = useState(0);
  const [jobs, setJobs] = useState(0);
  const [applications, setApplications] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await api.get("/auth/users");
        const coursesRes = await api.get("/courses");
        const jobsRes = await api.get("/jobs");
        const applicationsRes = await api.get("/job-applications");

        setUsers(usersRes.data.length);
        setCourses(coursesRes.data.length);
        setJobs(jobsRes.data.length);
        setApplications(applicationsRes.data.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <PageLayout
      title="Admin Dashboard"
      subtitle="Monitor users, courses, jobs, and application activity from one central view."
    >
      <div className="dashboard-hero card card-glow p-4 mb-4">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-3">
          <div>
            <div className="text-muted mb-2">Welcome back, Admin</div>
            <h2 className="fw-bold">Campus operations overview</h2>
            <p className="text-muted mb-0">Keep track of learning, jobs, and placement activity with a single glance.</p>
          </div>
          <div className="dashboard-hero-meta text-lg-end">
            <div className="dashboard-hero-stat">
              <span className="dashboard-hero-stat-value">{users}</span>
              <span>Active users</span>
            </div>
            <div className="dashboard-hero-stat">
              <span className="dashboard-hero-stat-value">{applications}</span>
              <span>Applications pending</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6 col-xl-3">
          <div className="card dashboard-card p-4 text-center">
            <div className="dashboard-card-icon bg-sky">👥</div>
            <div className="text-muted mb-2">Users</div>
            <h2>{users}</h2>
          </div>
        </div>
        <div className="col-md-6 col-xl-3">
          <div className="card dashboard-card p-4 text-center">
            <div className="dashboard-card-icon bg-purple">📚</div>
            <div className="text-muted mb-2">Courses</div>
            <h2>{courses}</h2>
          </div>
        </div>
        <div className="col-md-6 col-xl-3">
          <div className="card dashboard-card p-4 text-center">
            <div className="dashboard-card-icon bg-emerald">💼</div>
            <div className="text-muted mb-2">Jobs</div>
            <h2>{jobs}</h2>
          </div>
        </div>
        <div className="col-md-6 col-xl-3">
          <div className="card dashboard-card p-4 text-center">
            <div className="dashboard-card-icon bg-orange">🧾</div>
            <div className="text-muted mb-2">Applications</div>
            <h2>{applications}</h2>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default AdminDashboard;