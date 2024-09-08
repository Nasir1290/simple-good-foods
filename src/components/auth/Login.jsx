import React, { useState } from "react";
import LoginBgImage from "../../assets/singin-bg.png"; // Replace with your actual image later
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // Form state
  const initialState = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const [formData, setFormData] = useState(initialState);
  const { auth, setAuth } = useAuth();
  const toastValue = {
    position: "top-right",
    autoClose: 2000, // Time in milliseconds (3000ms = 3 seconds)
    hideProgressBar: true, // Hides the progress bar
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined, // Hides the progress bar
  };
  console.log(auth);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth.email === formData.email) {
      if (auth.password === formData.password) {
        console.log("true");
        navigate("/");
        toast.success("Successfully Loged in",toastValue);
      } else {
        toast.error("Invalid Password !", toastValue);
      }
    } else {
      toast.error("Invalid Email Address !",toastValue );
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${LoginBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-md z-10">
        <h2 className="text-2xl font-bold text-center mb-3">Login</h2>
        <p className="mb-1 text-center text-sm text-gray-400">
          Welcome Back! Please Log In.
        </p>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember me and Forgot password */}
          <div className="mb-4 flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-gray-700">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Don't have an account */}
        <p className="text-center text-gray-700 mt-6">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
