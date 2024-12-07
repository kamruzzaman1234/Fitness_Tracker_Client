import { Link } from "react-router-dom";
import { GiMuscleUp } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=> console.log(error.message))
  }
  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/allTrainer">All Trainer</Link></li>
      <li><Link to="/allClasses">All Classes</Link></li>
      <li><Link to="/dashBoard">Dashboard</Link></li>
      <li><Link to="/" className="">
      <button className="btn">
      <FaCartArrowDown></FaCartArrowDown>
      <div className="badge badge-secondary">+0</div>
      </button></Link></li>
      <li><Link to="/forumPage">Forums Pages</Link></li>
      <li>
        {user ? <>
          <details>
            <summary>
              Details
            </summary>
            <ul className="space-y-2">
                <li><Link to="/userProfile" className="bg-green-400 py-1 text-white text-[10px]">Profile</Link></li>
                <li><Link to="/editProfile" className="py-1 text-white bg-green-400 text-[10px]">Update</Link></li>
                <li><Link to="" onClick={handleLogOut} className="py-1 bg-red-500 text-white text-[10px]">Log Out</Link></li>
            </ul>
          </details>
        </> :  <details>
           <summary className="cursor-pointer">Login</summary>
          <ul className="bg-gray-800 p-2 rounded-lg shadow-lg">
            <li className="bg-gray-900 hover:bg-gray-700 text-white rounded-lg my-1">
              <Link className="px-8 py-2 block" to="/userLogin">User Login</Link>
            </li>
            <li className="bg-gray-900 hover:bg-gray-700 text-white rounded-lg my-1">
              <Link className="px-8 py-2 block" to="/trainer">Trainer Login</Link>
            </li>
            <li className="bg-gray-900 hover:bg-gray-700 text-white rounded-lg my-1">
              <Link className="px-8 py-2 block" to="/admin">Admin Login</Link>
            </li>
          </ul>
        </details>}
       
      </li>
    </>
  );

  return (
    <div className="bg-white fixed top-0 left-0 z-20 w-full">
      <div className="max-w-7xl mx-8 px-10 lg:px-0 lg:mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm z-10 dropdown-content font-medium text-black bg-gray-900 p-2 rounded-lg shadow-lg">
              {navItems}
            </ul>
          </div>
          <Link to="/" className="lg:flex gap-2 items-center hidden text-lg text-black">
            <GiMuscleUp className="text-3xl font-bold" /> Fitness Tracker
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu z-10 menu-horizontal px-1 font-medium text-black">
            {navItems}
          </ul>
        </div>
        <div className="avatar navbar-end">
          <div className="w-14 rounded-full border-4 border-white">
            {user ? <img src={user?.photoURL}/> : <img 
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User" />}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
