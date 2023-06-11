import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaFileContract,
  FaFileImport,
  FaFileInvoice,
  FaFileMedical,
  FaFileSignature,
  FaMoneyCheckAlt,
  FaShieldAlt,
  FaUser,
  FaUserEdit,
  FaUserTie,
} from "react-icons/fa";

const Dashboard = () => {
  const { loading, user } = useContext(AuthContext);

  const uncheckedInput = () => {
    const input = document.getElementById("my-drawer-2");
    console.log(input.checked);
    input.checked = !input.checked;
  };
  return (
    <div className="min-h-[calc(100vh-456px)] overflow-hidden">
      <div className="drawer lg:drawer-open realtive">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="border ml-auto mt-3 border-slate-300 dark:border-slate-600 py-1 px-2 rounded-lg hover:text-black dark:hover:text-white text-base duration-200 drawer-button capitalize lg:hidden"
          >
            menu
          </label>
          <div className="md:p-10">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side border-r border-slate-300 dark:border-slate-600">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul
            id="menu_list"
            className="menu overflow-y-auto text-base rounded-md md:rounded-none p-4 w-auto  mt-16 lg:mt-0 bg-white/80 dark:bg-black/80 h-fulll md:min-h-[calc(100vh-456px)] text-base-content"
          >
            {/* Sidebar content here */}
            <div className="flex items-center justify-between mb-4">
              <p className="flex items-center gap-2 ">
                {user?.role === "admin" ? (
                  <>
                    <FaShieldAlt></FaShieldAlt> Admin
                  </>
                ) : user?.role === "instructor" ? (
                  <>
                    {" "}
                    <FaUserTie></FaUserTie> Instructor
                  </>
                ) : (
                  <>
                    {" "}
                    <FaUser></FaUser> Student
                  </>
                )}
              </p>
              <span onClick={uncheckedInput} className="mr-2 text-lg lg:hidden">
                x
              </span>
            </div>
            {user?.role === "admin" ? (
              <>
                <li onClick={uncheckedInput}>
                  <NavLink to="/dashboard/manageClasses">
                    <FaFileSignature></FaFileSignature> Manage Classes
                  </NavLink>
                </li>
                <li onClick={uncheckedInput}>
                  <NavLink to="/dashboard/manageUsers">
                    <FaUserEdit></FaUserEdit> Manage Users
                  </NavLink>
                </li>
              </>
            ) : user?.role === "instructor" ? (
              <>
                <li onClick={uncheckedInput}>
                  <NavLink to="/dashboard/addClass">
                    <FaFileMedical></FaFileMedical> Add a Class
                  </NavLink>
                </li>
                <li onClick={uncheckedInput}>
                  <NavLink to="/dashboard/myClasses">
                    <FaFileContract></FaFileContract> My Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li onClick={uncheckedInput}>
                  <NavLink to="/dashboard/mySelectedClasses">
                    <FaFileImport></FaFileImport> My Selected Classes
                  </NavLink>
                </li>
                <li onClick={uncheckedInput}>
                  <NavLink to="/dashboard/myEnrolledClasses">
                    <FaFileInvoice></FaFileInvoice> My Enrolled Classes
                  </NavLink>
                </li>
                <li onClick={uncheckedInput}>
                  <NavLink htmlFor="my-drawer-2" to="/dashboard/payment">
                    <FaMoneyCheckAlt></FaMoneyCheckAlt> Payment
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
