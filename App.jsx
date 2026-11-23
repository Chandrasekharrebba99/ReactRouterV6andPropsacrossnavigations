import React from 'react';
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

function Learn() {
  return <Link to="/learn/react">Open the React course</Link>;
}

function Course() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h1>Course: {courseId}</h1>
      <button onClick={() => navigate('/dashboard', { state: { courseId } })}>
        Open dashboard
      </button>
      <Link to="/dashboard" state={{ courseId }}>Open dashboard by link</Link>
    </>
  );
}

function Dashboard() {
  const { state } = useLocation();
  return <h1>{state?.courseId ? `Selected course: ${state.courseId}` : 'No course selected'}</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/learn" replace />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn-apps" element={<Navigate to="/learn" replace />} />
        <Route path="/learn/:courseId" element={<Course />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
