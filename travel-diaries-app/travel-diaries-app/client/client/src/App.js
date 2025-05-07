import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AddStory from './pages/AddStory';
import Hotels from './pages/Hotels';
import MoodTracker from './pages/MoodTracker';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Always redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/add" element={<ProtectedRoute><AddStory /></ProtectedRoute>} />
        <Route path="/hotels" element={<ProtectedRoute><Hotels /></ProtectedRoute>} />
        <Route path="/mood-tracker" element={<ProtectedRoute><MoodTracker /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
