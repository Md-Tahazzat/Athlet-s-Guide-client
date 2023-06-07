import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const listItems = (
    <>
      <li>
        <NavLink to="/" onClick={() => setShowMenu(!showMenu)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/instructors" onClick={() => setShowMenu(!showMenu)}>
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink to="/classes" onClick={() => setShowMenu(!showMenu)}>
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" onClick={() => setShowMenu(!showMenu)}>
          Dashboard
        </NavLink>
      </li>
      <li>
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
              className={`menu menu-sm dropdown-content ${
                !showMenu && "hidden"
              } mt-3 p-2 shadow rounded-box w-52`}
            >
              {listItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{listItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
