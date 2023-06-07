import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [theme, setTheme] = useState("light");

  //  Dark and Light mode functionality
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  const listItems = (
    <>
      <li className="hover:text-slate-900 dark:hover:text-slate-50">
        <NavLink to="/" onClick={() => setShowMenu(!showMenu)}>
          Home
        </NavLink>
      </li>
      <li className="hover:text-slate-900 dark:hover:text-slate-50">
        <NavLink to="/instructors" onClick={() => setShowMenu(!showMenu)}>
          Instructors
        </NavLink>
      </li>
      <li className="hover:text-slate-900 dark:hover:text-slate-50">
        <NavLink to="/classes" onClick={() => setShowMenu(!showMenu)}>
          Classes
        </NavLink>
      </li>
      <li className="hover:text-slate-900 dark:hover:text-slate-50">
        <NavLink to="/dashboard" onClick={() => setShowMenu(!showMenu)}>
          Dashboard
        </NavLink>
      </li>
      <li className="hover:text-slate-900 dark:hover:text-slate-50">
        <NavLink to="/login" onClick={() => setShowMenu(!showMenu)}>
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-300/75 dark:border-slate-50/[0.06] bg-white/75 supports-backdrop-blur:bg-white/95 dark:bg-black/75">
      <div className="navbar max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={() => setShowMenu(true)}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu lg:text-md menu-sm dropdown-content ${
                !showMenu && "hidden"
              } mt-3 p-2 shadow rounded-box w-52`}
            >
              {listItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu flex items-center lg:text-base menu-horizontal px-1">
            {listItems}
            <li className="hover:text-slate-900 dark:hover:text-slate-50">
              <button
                className="hover:scale-110 text-[1.2rem] duration-200"
                onClick={toggleTheme}
              >
                {theme === "light" ? <FaMoon></FaMoon> : <FaSun></FaSun>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
