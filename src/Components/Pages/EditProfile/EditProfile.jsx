import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const EditProfile = ({  onSave }) => {
    const {user, createUser, updateUserProfile} = useContext(AuthContext)
    

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    resizeTo()
  };

  const handleSubmit = (data) => {
    createUser(data.email, data.password)
    .then(result=>{
        const loggedUser = result.user 
        console.log(loggedUser)
        updateUserProfile(data.name, data.photURL)
        .then(()=>{
            console.log("User Profile Update")
            reset()
        })
        .catch(error=> console.log(error))
    })
     // Pass the updated data to the parent component
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        {/* Page Title */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Edit Your Profile
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture */}
          <div className="flex flex-col items-center">
            <img
              src={user?.photoURL}
              alt="Profile Preview"
              className="w-28 h-28 rounded-full shadow-lg mb-4"
            />
            <input
              type="url"
              name="photoURL"
              placeholder="Profile Picture URL"
          
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Name */}
          <div>
            <label htmlFor="displayName" className="block text-gray-600 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              placeholder="Enter your full name"
              
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              defaultValue={user?.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              readOnly // Email is usually not editable for consistency
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
