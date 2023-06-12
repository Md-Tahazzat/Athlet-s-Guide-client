import React, { useContext } from "react";
import Title from "../../Components/Title";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../Shared/Loading";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user, loading } = useContext(AuthContext);
  const instance = UseAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    if (isNaN(parseInt(data.price))) {
      setError("price", {
        type: "manual",
        message: "Please input valid amount",
      });
      return;
    } else if (isNaN(parseInt(data.availableSeats))) {
      setError("availableSeats", {
        type: "manual",
        message: "Please input valid number",
      });
      return;
    }
    Swal.fire({
      title: "processing...",
      allowOutsideClick: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const classDetails = {
      name: data.className,
      image: data.classImage,
      available_seats: parseInt(data.availableSeats),
      price: parseInt(data.price),
    };
    instance
      .post(`/addClass?email=${user.email}`, classDetails)
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.close();
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Added Successfully",
          });
          reset();
        }
      });
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="">
      <Title title="Add Class"></Title>
      <form
        className="mt-10 border md:min-w-[28rem] mx-auto md:max-w-[32rem] p-4 w-full md:py-5 md:px-20 bg-slate-300/90 dark:bg-slate-700/90 border-slate-300 dark:border-slate-600 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <div className="w-full">
          <label htmlFor="className" className="label">
            Class Name:
          </label>
          <input
            type="text"
            id="className"
            required
            {...register("className", { required: true })}
            placeholder="Enter class name"
            className="py-2 px-2 bg-slate-100/60 dark:bg-slate-500/60 rounded-md border dark:border-slate-500 border-slate-300 focus:outline-none focus:border-slate-400 w-full max-w-lg"
          />
        </div>
        <div className="w-full">
          <label htmlFor="classImage" className="label">
            Class Image URL:
          </label>
          <input
            type="text"
            id="classImage"
            required
            {...register("classImage", {
              required: true,
              pattern: {
                value: /^(http|https):\/\/[^ "]+$/,
                message: "Invalid URL format",
              },
            })}
            placeholder="Enter class URL"
            className="py-2 px-2 bg-slate-100/60 dark:bg-slate-500/60 rounded-md border dark:border-slate-500 border-slate-300 focus:outline-none focus:border-slate-400 w-full max-w-lg"
          />
          {errors.classImage && (
            <p className="pt-2 text-red-400 ml-1">
              {errors.classImage?.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label htmlFor="instructor" className="label">
            Instructor:
          </label>
          <input
            type="text"
            id="instructor"
            required
            {...register("instructorName")}
            value={user?.displayName}
            readOnly
            className="py-2 px-2 bg-slate-100/60 dark:bg-slate-500/60 rounded-md border dark:border-slate-500 border-slate-300 focus:outline-none w-full max-w-lg"
          />
        </div>
        <div className="w-full">
          <label htmlFor="instructorEmail" className="label">
            Instructor Email:
          </label>
          <input
            type="text"
            id="instructorEmail"
            required
            readOnly
            {...register("instructorEmail", { required: true })}
            value={user.email}
            className="py-2 px-2 bg-slate-100/60 dark:bg-slate-500/60 rounded-md border dark:border-slate-500 border-slate-300 focus:outline-none  w-full max-w-lg"
          />
        </div>
        <div className="w-full">
          <label htmlFor="availableSeats" className="label">
            Available Seats:
          </label>
          <input
            type="text"
            id="availableSeats"
            required
            {...register("availableSeats", { required: true })}
            placeholder="Enter available seats"
            className="py-2 px-2 bg-slate-100/60 dark:bg-slate-500/60 rounded-md border dark:border-slate-500 border-slate-300 focus:outline-none focus:border-slate-400 w-full max-w-lg"
          />
          {errors.availableSeats && (
            <p className="pt-2 text-red-400 ml-1">
              {errors.availableSeats?.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label htmlFor="price" className="label">
            Price:
          </label>
          <input
            type="text"
            id="price"
            required
            {...register("price", { required: true })}
            placeholder="Enter price"
            className="py-2 px-2 bg-slate-100/60 dark:bg-slate-500/60 rounded-md border dark:border-slate-500 border-slate-300 focus:outline-none focus:border-slate-400 w-full max-w-lg"
          />
          {errors.price && (
            <p className="pt-2 text-red-400 ml-1">{errors.price?.message}</p>
          )}
        </div>

        <input
          className="w-full mt-4 py-2 max-w-md  bg-blue-600 rounded-md text-white text-xl hover:bg-blue-700"
          type="submit"
          value="Add Class"
        />
      </form>
    </div>
  );
};

export default AddClass;
