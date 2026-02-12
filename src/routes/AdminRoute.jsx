import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoute({ children }) {
  const { user, loading } = useAuth();

  // Prevent redirect before auth loads
  if (loading) return <p>Loading...</p>;

  if (user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}
