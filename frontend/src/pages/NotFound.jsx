import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <div className="form-card">
        <h1>404</h1>
        <p className="text-muted">
          Page not found. Return to the dashboard.
        </p>
        <Link to="/" className="btn btn-primary mt-3">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
