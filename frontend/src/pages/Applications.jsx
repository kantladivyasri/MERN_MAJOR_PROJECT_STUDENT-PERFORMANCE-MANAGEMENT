import { useEffect, useState } from "react";
import api from "../services/api";
import PageLayout from "../components/PageLayout";

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await api.get("/job-applications");
        setApplications(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <PageLayout
      title="My Applications"
      subtitle="Track the status of every job application you have submitted."
    >
      <div className="row g-4">
        {applications.length === 0 ? (
          <div className="col-12">
            <div className="card py-5 text-center">
              <p className="mb-0 text-muted">You have not applied to any jobs yet.</p>
            </div>
          </div>
        ) : (
          applications.map((app) => (
            <div key={app._id} className="col-md-6">
              <div className="card card-glow p-4 h-100">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h5 className="mb-1">{app.job?.title || "Job opportunity"}</h5>
                    <p className="mb-1 text-muted">{app.job?.company || "Company not set"}</p>
                  </div>
                  <span className={`badge ${app.status === "accepted" ? "bg-success" : app.status === "rejected" ? "bg-danger" : "bg-warning text-dark"}`}>
                    {app.status || "Pending"}
                  </span>
                </div>
                <div className="text-secondary small mb-2">Submitted by: {app.student?.name || "N/A"}</div>
                <p className="text-muted mb-0">{app.job?.description || "No details available."}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </PageLayout>
  );
}

export default Applications;