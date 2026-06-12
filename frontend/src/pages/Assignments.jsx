import { useEffect, useState } from "react";
import api from "../services/api";
import PageLayout from "../components/PageLayout";

function Assignments() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await api.get("/assignments");
        setAssignments(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <PageLayout
      title="Assignments"
      subtitle="View current tasks and deadlines for your active courses."
    >
      <div className="row g-4">
        {assignments.length === 0 ? (
          <div className="col-12">
            <div className="card py-5 text-center">
              <p className="mb-0 text-muted">No assignments are published yet.</p>
            </div>
          </div>
        ) : (
          assignments.map((assignment) => (
            <div key={assignment._id} className="col-md-6">
              <div className="card card-glow h-100 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">{assignment.title}</h5>
                  <span className="badge bg-secondary">Due soon</span>
                </div>
                <p className="text-muted mb-3">{assignment.description}</p>
                <div className="text-muted small">Course: {assignment.course?.title || "Unassigned"}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </PageLayout>
  );
}

export default Assignments;