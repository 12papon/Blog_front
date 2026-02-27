import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import LoginPage from "../pages/LoginPage";

// ১. প্রাইভেট রাউট: যারা লগইন করা নেই, তাদের প্রোফাইল বা সেটিংসে যেতে দেবে না

export const PrivateRoute = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

// ২. পাবলিক রাউট: যারা লগইন করা আছে, তাদের নতুন করে লগইন বা সাইনআপ পেজে যেতে দেবে না
export const PublicRoute = () => {
  const { user } = useAuth();

  return user ? <Navigate to="/" replace /> : <Outlet />;
};
