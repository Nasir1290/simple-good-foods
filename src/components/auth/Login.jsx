import React, { useEffect, useState } from "react";
import LoginBgImage from "../../assets/singin-bg.png"; // Replace with your actual image later
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import NavbarForLoginAndSignup from "../../shared/navbar/NavbarForLoginAndSignUp";
import AOS from "aos";
import "aos/dist/aos.css";



const Login = () => {
  // Form state
  const initialState = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const toastValue = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  };

  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // Form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // User login
      const result = await signIn(formData.email, formData.password);
      console.log("login with credential", result);

      // Navigate user to the intended route
      navigate(from, { replace: true });
      toast.success("Login Successfully", toastValue);
    } catch (err) {
      setError(err?.message || "An error occurred");
      toast.error(err?.message || "Login failed", toastValue);
    } finally {
      setIsLoading(false);
    }
  };

  // Google sign-in handler
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      console.log("ogin with google", result);

      // Navigate user to the intended route
      navigate(from, { replace: true });
      toast.success("Login Successfully", toastValue);
    } catch (err) {
      toast.error(err?.message || "Google Sign-in failed", toastValue);
    }
  };

    useEffect(() => {
      AOS.init({ duration: 1000 }); // Initialize AOS
    }, []);
  return (
    <div data-aos="fade-out">
      <NavbarForLoginAndSignup />
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
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  error ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter your email"
                aria-label="Email"
              />
              {error && (
                <p className="text-red-500 text-sm mt-1">
                  {error.includes("email") && error}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  error ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter your password"
                aria-label="Password"
              />
              {error && (
                <p className="text-red-500 text-sm mt-1">
                  {error.includes("password") && error}
                </p>
              )}
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
                <label htmlFor="rememberMe" className="text-gray-700">
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Google Sign-In Button */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-sm text-gray-500 mb-2">Or Log in with</h3>
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center py-2 px-6 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none transition duration-200"
            >
              <FcGoogle className="text-2xl mr-3" />
              <span className="text-base font-medium">Log in with Google</span>
            </button>
          </div>

          {/* Don't have an account */}
          <p className="text-center text-gray-700 mt-6">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
