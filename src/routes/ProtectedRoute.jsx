import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const { auth } = useAuth();
  if (!auth?.email) {
    return <Navigate to="/login" replace />;
  }
  return element;
};

export default ProtectedRoute;


// protected routes 
    //  {
    //     path: "/dashboard",
    //     element: <ProtectedRoute element={<Dashboard />} />, // Protected route
    //   },