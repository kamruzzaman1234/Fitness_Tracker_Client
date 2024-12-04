import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import Swal from "sweetalert2";

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back to Fitness Tracker!",
      });
      setFormData({ email: "", password: "" });
    }
  };

  const handleGoogleLogin = () => {
    Swal.fire({
      icon: "info",
      title: "Google Login",
      text: "Redirecting to Google authentication...",
    });
    // Add Google authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center py-20 justify-center bg-gradient-to-tl from-gray-900 via-purple-800 to-gray-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-400 opacity-20 blur-3xl"></div>
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-gradient-to-t from-pink-400 to-orange-300 opacity-40 blur-2xl"></div>

      {/* Form Container */}
      <div className="bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-10 w-full max-w-lg border border-gray-700/50 relative z-10">
        <h1 className="text-5xl font-bold text-center text-white mb-4">
          User Login
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Welcome back to <span className="text-pink-400 font-medium">Fitness Tracker</span>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-gray-300 block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-5 py-3 rounded-xl bg-gray-800/40 text-gray-100 focus:ring focus:ring-blue-500 transition ${
                errors.email ? "border-red-500 border" : "border-transparent"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="text-gray-300 block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full px-5 py-3 rounded-xl bg-gray-800/40 text-gray-100 focus:ring focus:ring-blue-500 transition ${
                errors.password ? "border-red-500 border" : "border-transparent"
              }`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl text-white font-bold text-lg hover:from-blue-600 hover:to-green-600 shadow-lg hover:shadow-xl transition"
          >
            Login
          </button>
        </form>

        <div className="relative flex items-center justify-center mt-6">
          <div className="absolute inset-0 w-full border-t border-gray-700"></div>
          <div className="bg-gray-900 px-4 text-gray-300">OR</div>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="mt-6 flex items-center gap-4 justify-center w-full py-3 bg-white text-gray-900 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
            <FaGoogle className="text-pink-500"></FaGoogle>
              
          Login with Google
        </button>

        <p className="text-center text-gray-300 mt-6 text-sm">
          Don't have an account?{" "}
          <a href="/registerPage" className="text-pink-400 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
