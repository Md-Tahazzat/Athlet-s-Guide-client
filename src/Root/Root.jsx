import React from "react";
import Navbar from "../Pages/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";

const Root = () => {
  return (
    <div className="text-slate-600 dark:text-slate-300">
      <Navbar></Navbar>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
