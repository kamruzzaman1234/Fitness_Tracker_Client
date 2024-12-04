import React, { useState } from "react";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Welcome to Fitness Tracker!",
      });
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <div className="min-h-screen py-20 flex items-center justify-center bg-gradient-to-tl from-gray-900 via-purple-800 to-gray-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-pink-500 opacity-20 blur-3xl"></div>
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-gradient-to-t from-green-300 to-blue-500 opacity-30 blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-t from-pink-400 to-orange-300 opacity-40 blur-2xl"></div>

      {/* Form Container */}
      <div className="bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-10 w-full max-w-lg border border-gray-700/50 relative z-10">
        <h1 className="text-5xl font-bold text-center text-white mb-4">
          Create an Account
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Join <span className="text-pink-400 font-medium">Fitness Tracker</span> and start your journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="text-gray-300 block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-5 py-3 rounded-xl bg-gray-800/40 text-gray-100 focus:ring focus:ring-pink-500 transition ${
                errors.name ? "border-red-500 border" : "border-transparent"
              }`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

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
              className={`w-full px-5 py-3 rounded-xl bg-gray-800/40 text-gray-100 focus:ring focus:ring-pink-500 transition ${
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
              className={`w-full px-5 py-3 rounded-xl bg-gray-800/40 text-gray-100 focus:ring focus:ring-pink-500 transition ${
                errors.password ? "border-red-500 border" : "border-transparent"
              }`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="text-gray-300 block mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`w-full px-5 py-3 rounded-xl bg-gray-800/40 text-gray-100 focus:ring focus:ring-pink-500 transition ${
                errors.confirmPassword ? "border-red-500 border" : "border-transparent"
              }`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl text-white font-bold text-lg hover:from-pink-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-300 mt-6 text-sm">
          Already have an account?{" "}
          <a href="/userLogin" className="text-pink-400 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
