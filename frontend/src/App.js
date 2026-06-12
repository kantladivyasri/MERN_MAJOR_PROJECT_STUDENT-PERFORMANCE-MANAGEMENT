import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import StudentDashboard from "./pages/StudentDashboard";
import TrainerDashboard from "./pages/TrainerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import Courses from "./pages/Courses";
import Assignments from "./pages/Assignments";
import Jobs from "./pages/Jobs";
import Applications from "./pages/Applications";
import CreateCourse from "./pages/CreateCourse";
import CreateAssignment from "./pages/CreateAssignment";
import CreateJob from "./pages/CreateJob";
import SubmitAssignment from "./pages/SubmitAssignment";
import ApplyJob from "./pages/ApplyJob";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Role Routes */}
        <Route
          path="/student"
          element={
            <ProtectedRoute roles={["student"]}>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trainer"
          element={
            <ProtectedRoute roles={["trainer"]}>
              <TrainerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Shared Content Pages */}
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/assignments"
          element={
            <ProtectedRoute>
              <Assignments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <Jobs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/applications"
          element={
            <ProtectedRoute>
              <Applications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-course"
          element={
            <ProtectedRoute roles={["admin", "trainer"]}>
              <CreateCourse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-assignment"
          element={
            <ProtectedRoute roles={["admin", "trainer"]}>
              <CreateAssignment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-job"
          element={
            <ProtectedRoute roles={["admin", "trainer"]}>
              <CreateJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/submit-assignment"
          element={
            <ProtectedRoute roles={["student"]}>
              <SubmitAssignment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/apply-job"
          element={
            <ProtectedRoute roles={["student"]}>
              <ApplyJob />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;