import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../../Firebase/Firebase.config";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const UserLogin = () => {
  const {logIn, logOut} = useContext(AuthContext)
  const gProvider = new GoogleAuthProvider();
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"


  const [errors, setErrors] = useState({});
  const handleGoogle = () => {
    logOut(auth);
    signInWithPopup(auth, gProvider)
      .then(result => {
        const user = result.user;
        console.log("User Logged In:", user);
        toast("Login in Successfully")
        navigate(from,{ replace: true})
      })
      .catch(error => {
        console.error("Error in Google Sign-In:", error.message);
      });
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
    e.preventDefault()
    const form = e.target 
    const email = form.email.value 
    const password = form.password.value 
    console.log(email, password)
    logIn(email, password)
    .then(result=>{
      const user = result.user
      console.log(user)
      toast("Login Successfully");
      navigate(from,{ replace: true})
    })
    .catch(error=> console.log(error.message))
    
  };

  

  return (
    <div className="min-h-screen flex items-center py-20 justify-center bg-gradient-to-tl from-gray-900 via-purple-800 to-gray-900 relative">
      <ToastContainer></ToastContainer>
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
  onClick={handleGoogle}
  className="mt-6 flex items-center gap-4 justify-center w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-cyan-600 transition-transform transform hover:scale-105 active:scale-95"
>
  <FaGoogle className="text-indigo-500 text-xl bg-white p-2 rounded-full shadow-lg"></FaGoogle>
  <span className="text-lg">Login with Google</span>
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
