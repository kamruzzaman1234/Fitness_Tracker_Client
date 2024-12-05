import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const {user} = useContext(AuthContext)
  return (
    <div className="min-h-screen bg-gradient-to-tr py-20 from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-lg overflow-hidden">
        {/* Cover Section */}
        <div className="relative h-40 bg-blue-500">
          <img
            src={user?.reloadUserInfo?.photoUrl || user?.photoURL || "https://via.placeholder.com/150"}
            alt="Cover"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-60"></div>
        </div>

        {/* Profile Picture */}
        <div className="relative -mt-16 flex justify-center">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* User Information */}
        <div className="text-center p-6">
          <h2 className="text-2xl font-semibold text-gray-800">{user?.displayName || "User Name"}</h2>
          <p className="text-sm text-gray-500">{user?.email || "user@example.com"}</p>
          <p className="text-sm text-gray-500 mt-2">
            <span className="font-medium text-gray-700">User ID:</span> {user?.uid}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium text-gray-700">Email Verified:</span> {user?.emailVerified ? "Yes" : "No"}
          </p>

         <div className="mt-4">
         <Link to="/editProfile" className=" px-6 py-2 bg-blue-500 text-white text-sm font-medium 
          rounded-full shadow hover:bg-blue-600 transition">
            Edit Profile
          </Link>
         </div>
        </div>

        {/* Additional Details */}
        <div className="px-6 pb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Additional Information</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <span className="font-medium text-gray-700">Access Token:</span>{" "}
              <span className="block truncate">{user?.stsTokenManager?.accessToken}</span>
            </li>
            <li>
              <span className="font-medium text-gray-700">Provider:</span> {user?.providerId || "Not available"}
            </li>
            <li>
              <span className="font-medium text-gray-700">Last Sign-In:</span>{" "}
              {new Date(user?.metadata?.lastLoginAt).toLocaleString() || "Not available"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
