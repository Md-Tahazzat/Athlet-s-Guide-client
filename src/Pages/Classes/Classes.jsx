import React, { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Loading from "../Shared/Loading";
import Title from "../../Components/Title";
import { FaEnvelope, FaUserTie } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { json, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import UpdateTitle from "../../Hooks/UpdateTitle";

const Classes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const instance = UseAxiosSecure();

  // get all the instructors data
  const {
    data: allClasses = [],
    isLoading,
    refetch,
  } = useQuery(["classes", 8], async () => {
    return instance.get("/classes").then((data) => data);
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleSelect = (el) => {
    if (!user) {
      Swal.fire({
        title: "Please login to continue!!",
        icon: "warning",
        showCancelButton: false,
      });
      navigate("/login", { state: { from: location?.pathname } });
    } else {
      Swal.fire({
        title: "processing...",
        allowOutsideClick: false,
        showConfirmButton: false,
      });
      Swal.showLoading();
      const { instructor, instructor_email, name, price, image, _id } = el;
      const classDetails = {
        user: user.email,
        instructor,
        instructor_email,
        class_name: name,
        class_image: image,
        price,
        class_id: _id,
      };
      instance
        .put(`/selectedClasses?email=${user?.email}`, classDetails)
        .then((data) => {
          Swal.close();
          if (data.alreadySelected) {
            Swal.fire({
              icon: "warning",
              title: "Already Selected!",
            });
          } else if (data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Successfully selected",
            });
            refetch();
          }
        });
    }
  };
  return (
    <div className="my-10 text-lg">
      <UpdateTitle title="Classes"></UpdateTitle>
      <Title title="All Classes"></Title>
      <div className="md:my-20 md:mx-20">
        {allClasses.map((el, index) => (
          <div
            key={index}
            className={`flex  flex-col md:flex-row gap-5 md:items-center md:justify-between my-6 ${
              el.sets_available == 0
                ? "dark:bg-red-600 bg-red-300"
                : "bg-base-100"
            } shadow-lg border md:mx-10 border-slate-300 rounded-lg dark:border-slate-600 md:hover:mx-8 duration-200`}
          >
            <img
              src={el.image}
              className="md:w-32 md:h-32 rounded-md"
              alt="Shoes"
            />

            <h2 className="text-2xl ml-4 md:ml-0">{el.name}</h2>
            <div className="ml-4 md:ml-0">
              <p className="flex items-center gap-2">
                <FaUserTie></FaUserTie> {el.instructor}
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope></FaEnvelope> {el.instructor_email}
              </p>
            </div>
            <div className="ml-4 md:ml-0">
              <p>Available Seats: {el.available_seats}</p>
              <p>Price: ${el.price}</p>
            </div>
            <button
              disabled={
                user?.role === "admin" ||
                user?.role === "instructor" ||
                el.sets_available == 0
              }
              className={`block py-1 ${
                user?.role === "admin" ||
                user?.role === "instructor" ||
                el.sets_available == 0
                  ? "bg-slate-300 text-slate-400 dark:text-slate-500 dark:bg-slate-700"
                  : "bg-orange-light hover:bg-orange-dark"
              } duration-100 px-4 mx-4 rounded-lg mb-4 md:mb-0 text-slate-50`}
              onClick={() => handleSelect(el)}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
