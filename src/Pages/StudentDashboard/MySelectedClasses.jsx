import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Title from "../../Components/Title";
import { FaCreditCard, FaTrashAlt } from "react-icons/fa";
import Loading from "../Shared/Loading";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Payment from "../Payment/Payment";

const MySelectedClasses = () => {
  const { user } = useContext(AuthContext);
  const instance = UseAxiosSecure();
  const [paymentDetails, setPaymentDetails] = useState("");
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery(["myClasses", 10], async () => {
    return instance
      .get(`/selectedClasses?email=${user?.email}`)
      .then((data) => data);
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  // delete function
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const classDetails = {
          name: item.class_name,
          instructor_email: item.instructor_email,
        };
        instance
          .put(`/removeSelectedClass?email=${user?.email}`, classDetails)
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "successfully deleted",
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <div>
      <Title title="All Selected Classes"></Title>
      <div className="overflow-x-auto mt-8 border border-slate-300 rounded-lg dark:border-slate-600">
        <table className="table overflow-x-auto border-collapse text-base ">
          {/* head */}
          <thead className="">
            <tr className="border border-slate-400 text-base dark:border-slate-600">
              <th># </th>
              <th>Class</th>
              <th>Instructor</th>
              <th>Email</th>
              <th className="text-right pr-10">price</th>
              <th className="">pay</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.selectedClasses.map((el, indx) => {
              return (
                <tr
                  key={indx}
                  className="hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-400 rounded-lg dark:border-slate-600"
                >
                  <td>{indx + 1}</td>
                  <td>{el.class_name}</td>
                  <td>{el.instructor}</td>
                  <td>{el.instructor_email}</td>
                  <td className="text-right pr-10">$ {el.price}</td>
                  <td className="mt-2 ">
                    <label
                      onClick={() => setPaymentDetails(el)}
                      htmlFor="paymentModal"
                      className="flex rounded-md bg-orange-light hover:bg-orange-dark shadow-lg  text-slate-900  items-center gap-2 py-1 pl-2"
                    >
                      <FaCreditCard></FaCreditCard> <span>pay</span>
                    </label>
                  </td>
                  <td
                    className="text-right pl-10"
                    onClick={() => handleDelete(el)}
                  >
                    <FaTrashAlt className="text-red-500 hover:scale-125 text-lg duration-200"></FaTrashAlt>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <input type="checkbox" id="paymentModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-slate-300 dark:bg-slate-700 p-10 py-10">
          <Payment refetch={refetch} paymentDetails={paymentDetails}></Payment>
          <label className="float-right" htmlFor="paymentModal">
            cancel
          </label>
        </div>
      </div>
    </div>
  );
};

export default MySelectedClasses;
