import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-10 bg-slate-400 dark:bg-slate-600 text-slate-900 dark:text-slate-100 border-t border-t-slate-300 dark:border-t-slate-600 md:h-72 lg:h-96   md:py-10  bg-gradient-to-b from-slate-200/90 dark:from-black/95 dark:to-black/70 backdrop:blur-md to-slate-200/60 md:relative md:pb-20">
      <div className="w-full  md:h-72 lg:h-96 absolute bottom-0 left-0 -z-10"></div>
      <div className="max-w-[90rem] py-10 md:py-0 bg-slate-300 dark:bg-slate-700 md:bg-transparent md:dark:bg-transparent footer  mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-base">
          <h1 className="text-2xl md:text-3xl">Athlete's Guide Academy </h1>
          <p>
            Transforming Skills
            <br />
            Inspiring Success since 2008
          </p>
          <div className="flex items-center gap-3 text-base justify-evenly">
            <FaFacebook className=" md:text-[1.5rem] hover:scale-110 duration-200"></FaFacebook>
            <FaTwitter className=" md:text-[1.5rem] hover:scale-110 duration-200"></FaTwitter>
            <FaGithub className=" md:text-[1.5rem] hover:scale-110 duration-200"></FaGithub>
            <FaLinkedin className=" md:text-[1.5rem] hover:scale-110 duration-200"></FaLinkedin>
          </div>
        </div>
        <div className="text-base">
          <span className="footer-title md:text-lg font-bold">
            Important links
          </span>
          <Link
            to="/instructors"
            className="hover:text-slate-900 dark:hover:text-slate-50"
          >
            Instructors
          </Link>
          <Link
            to="/classes"
            className="hover:text-slate-900 dark:hover:text-slate-50"
          >
            Classes
          </Link>
          <Link
            to="/dashboard"
            className="hover:text-slate-900 dark:hover:text-slate-50"
          >
            Dashboard
          </Link>
        </div>
        <div className="text-base">
          <span className="footer-title md:text-lg font-bold">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">athlete.guide@gmail.com</a>
          <a className="link link-hover">+98989232</a>
        </div>
        <div className="text-base">
          <span className="footer-title md:text-lg font-bold">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
