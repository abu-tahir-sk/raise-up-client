import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../Provider/ThemeProvider";
import logo from "../../../public/logo.jpg"


const Navbar = () => {

  const { signOutUser, user } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const handleLogOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result);
        navigate("/signIn");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleTheme =()=>{
    
    setTheme(theme === "dark" ? "light" : "dark");
  
  }
  return (
  <div className="">
    <div className="navbar w-[95%] lg:w-[92%] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/allCampaign">All Campaign</NavLink>
          </li>
          {user && user?.email && (
            <>
              {" "}
              <li>
                <NavLink to="/addNewCampaign">Add New Campaign</NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink to="/myCampaign">My Campaign</NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink to="/myDonations">My Donations</NavLink>
              </li>
            </>
          )}
      </ul>
    </div>
   <div className="flex items-center">
        <div className="w-16 lg:w-[75px] h-16 lg:h-[75px]">
         <img className="w-full h-full" src={logo} alt="" />
       </div>
        <h2 className="text-[24px] lg:text-[28px] font-extrabold text-[#0A7C96]">RISE <span className="font-mono text-[#1f3738]">Up</span></h2>
     </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex justify-end items-center gap-6  px-1 bg-none">
      
          <li>
           <button
              onClick={toggleTheme}
              className="text-2xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 
                   text-yellow-500 dark:text-blue-400 transition duration-300"
            >
              {theme === "light" ? <FaSun /> : <FaMoon />}
            </button>
          </li>
          <li>
            <NavLink  className={({ isActive }) =>
                  `hover:bg-none ${isActive
                    ? " border-b-3  font-bold"
                    : ""
                }`} to="/">Home</NavLink>
          </li>

          <li>
            <NavLink className={({ isActive }) =>
                  `hover:bg-none ${isActive
                    ? " border-b-3  font-bold"
                    : ""
                }`} to="/allCampaign">All Campaign</NavLink>
          </li>
          {user && user?.email && (
            <>
              {" "}
              <li>
                <NavLink className={({ isActive }) =>
                  `hover:bg-none ${isActive
                    ? " border-b-3  font-bold"
                    : ""
                }`} to="/addNewCampaign">Add New Campaign</NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink className={({ isActive }) =>
                  `hover:bg-none ${isActive
                    ? " border-b-3  font-bold"
                    : ""
                }`} to="/myCampaign">My Campaign</NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink className={({ isActive }) =>
                  `hover:bg-none ${isActive
                    ? " border-b-3  font-bold"
                    : ""
                }`} to="/myDonations">My Donations</NavLink>
              </li>
            </>
          )}
       
    </ul>
  </div>
  <div className="navbar-end">
   {user ? (
          <div>
        
            <div className="dropdown dropdown-end dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div tabIndex={0} role="button" className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || "User"} />
                  ) : (
                    <span>{user?.displayName?.[0]?.toUpperCase() || "U"}</span>
                  )}
                </div>
              </div>
              
                <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">{user && user?.displayName}</a>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            
            </div>
          </div>
        ) : (
          <ul
            className="flex justify-center items-center gap-4
          "
          >
            <li>
              <NavLink  className="btn border-none bg-[#0A7C96] text-white" to="/signIn" data-discover="true">Sign In</NavLink>
            </li>
            <li>
              <NavLink  className="btn shadow-none bg-none border-2 border-[#0A7C96] hover:bg-[#0A7C96] hover:text-white" to="/signUp">Sign Up</NavLink>
            </li>
          </ul>
        )}
  </div>
</div>
  </div>
  );
};

export default Navbar;
  