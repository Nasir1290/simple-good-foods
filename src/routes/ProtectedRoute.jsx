import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import Loading from "../components/general/Loading";

const ProtectedRoute = ({ element }) => {
  const toastValue = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const { user, loading } = useAuth(); // Access user and loading from useAuth

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    toast.warning("Please Login First!", toastValue);
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
