import { useEffect, useState } from "react";
import api from "../services/api";
import PageLayout from "../components/PageLayout";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/jobs");
        setJobs(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <PageLayout
      title="Job Opportunities"
      subtitle="Discover placement openings and apply to roles that match your skillset."
    >
      <div className="row g-4">
        {jobs.length === 0 ? (
          <div className="col-12">
            <div className="card py-5 text-center">
              <p className="mb-0 text-muted">No job opportunities are listed yet.</p>
            </div>
          </div>
        ) : (
          jobs.map((job) => (
            <div key={job._id} className="col-md-6 col-lg-4">
              <div className="card card-glow h-100 p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h5 className="mb-1">{job.title}</h5>
                    <p className="mb-1 text-muted">{job.company}</p>
                  </div>
                  <span className="badge bg-success">{job.type || "Full-time"}</span>
                </div>
                <p className="text-muted mb-3">{job.description}</p>
                <div className="text-secondary small">Location: {job.location || "Remote"}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </PageLayout>
  );
}

export default Jobs;