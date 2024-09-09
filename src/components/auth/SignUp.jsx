import React, { useState } from "react";
import SigninBgImage from "../../assets/singin-bg.png"; // Replace with your actual image
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const { createUser, signInWithGoogle, updateUserProfile } = useAuth();

  const initialState = {
    username: "",
    contact: "",
    address: "",
    email: "",
    password: "",
    rememberMe: false,
    profileImage: "",
  };
  const toastValue = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const [formData, setFormData] = useState(initialState);
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
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Create user with email and password
      const result = await createUser(formData.email, formData.password);
      console.log("signup", result);
      // Update user profile with username and profile image
      await updateUserProfile(
        formData.username,
        formData.profileImage,
        formData.address,
        formData.contact
      );

      navigate("/");
      toast.success("Sign Up Successfully", toastValue);
    } catch (err) {
      toast.error(err?.message, toastValue);
    }
  };

  // Handle Google SignIn
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      navigate("/");
      toast.success("Signed in with Google successfully", toastValue);
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${SigninBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-md z-10">
        <h2 className="text-2xl font-bold text-center mb-3">Sign Up</h2>
        <p className="mb-1 text-center text-sm text-gray-400">
          Please Enter Your Personal Data
        </p>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              required
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Contact No */}
          <div className="mb-4">
            <label className="block text-gray-700">Contact No</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your contact number"
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your address"
            />
          </div>

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
              minLength={8}
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

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        {/* Google Sign-In Button */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-sm text-gray-500 mb-2">Or sign in with</h3>
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center py-2 px-6 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none transition duration-200"
          >
            <FcGoogle className="text-2xl mr-3" />
            <span className="text-base font-medium">Sign in with Google</span>
          </button>
        </div>

        {/* Already have an account */}
        <p className="text-center text-gray-700 mt-6">
          Have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
