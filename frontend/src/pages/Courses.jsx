import { useEffect, useState, useContext } from "react";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import PageLayout from "../components/PageLayout";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get("/courses");
        setCourses(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourses();
  }, []);

  const handleEnroll = async (courseId) => {
    setMessage("");
    setError("");

    try {
      await api.post("/enrollments", { course: courseId });
      setMessage("Enrolled successfully in the selected course.");
    } catch (error) {
      setError(
        error.response?.data?.message || "Unable to enroll in this course."
      );
    }
  };

  return (
    <PageLayout
      title="Courses"
      subtitle="Browse available courses and discover the skills you can gain today."
    >
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row g-4">
        {courses.length === 0 ? (
          <div className="col-12">
            <div className="card py-5 text-center">
              <p className="mb-0 text-muted">No courses are available yet.</p>
            </div>
          </div>
        ) : (
          courses.map((course) => (
            <div key={course._id} className="col-md-6 col-lg-4">
              <div className="card card-glow h-100 p-4 d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge bg-primary">Course</span>
                  <span className="text-muted small">Trainer</span>
                </div>
                <h5 className="mb-2">{course.title}</h5>
                <p className="text-muted mb-3">{course.description}</p>
                <div className="text-secondary small mb-4">Instructor: {course.trainer || "TBD"}</div>
                {user?.role === "student" && (
                  <button
                    className="btn btn-outline-primary mt-auto"
                    type="button"
                    onClick={() => handleEnroll(course._id)}
                  >
                    Enroll
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </PageLayout>
  );
}

export default Courses;