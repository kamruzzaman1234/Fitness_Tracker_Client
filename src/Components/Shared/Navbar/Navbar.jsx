import { Link } from "react-router-dom";
import { GiMuscleUp } from "react-icons/gi";

const Navbar = ()=>{
    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allTrainer">All Trainer</Link></li>
        <li><Link to="/allClasses">All Classes</Link></li>
        <li><Link to="/dashBoard">Dashboard</Link></li>
        <li><Link to="/forumPage">Forums Pages</Link></li>
        <li><Link to="/login">Login</Link></li>
    </>
    return(
        <div className="bg-slate-900 fixed top-0 left-0 z-20 w-full ">
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
        className="menu menu-sm dropdown-content font-medium text-white ">
        {navItems}
        
      </ul>
    </div>
    <Link to="/" className="flex gap-2 items-center text-lg text-white"> <GiMuscleUp className="text-3xl font-bold"/> Fitness Tracker</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-medium  text-white ">
      {navItems}
    </ul>
  </div>
  <div className="avatar navbar-end">
         <div className="w-14 rounded-full border-4 border-white">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
  </div>
</div>
        </div>
    )
}
export default Navbar;