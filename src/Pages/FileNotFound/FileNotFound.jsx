import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const FileNotFound = () => {
  const error = useRouteError();
  return (
    <div className="w-full bg-slate-100 h-screen flex flex-col justify-center items-center">
      <img
        className=" md:w-72 h-auto"
        src="https://i.ibb.co/YDP6SRL/file-Not-Found-Image.png"
        alt=""
      />
      {error?.status !== 404 && (
        <h1 className="text-2xl md:text-5xl text-bolder mt-5">
          {error?.status}
        </h1>
      )}
      <h1 className="text-xl md:text-3xl mt-4">{error?.data}</h1>
      <Link
        to="/"
        className="btn bg-slate-500 text-white hover:bg-slate-600 duration-100 mt-5"
      >
        Back to home
      </Link>
    </div>
  );
};

export default FileNotFound;
