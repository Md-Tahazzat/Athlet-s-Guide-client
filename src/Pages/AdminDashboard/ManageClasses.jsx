import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../Shared/Loading";
import Title from "../../Components/Title";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const { user } = useContext(AuthContext);
  const instance = UseAxiosSecure();
  const [feedbackData, setFeedbackData] = useState({});
  const {
    data: allClass = [],
    isLoading,
    refetch,
  } = useQuery(["manageClasses", 20], async () => {
    return instance
      .get(`/allClasses?email=${user?.email}`)
      .then((data) => data);
  });
  if (isLoading) {
    <Loading></Loading>;
  }
  const handleStatus = (item, status) => {
    const { name, image, instructor_email } = item;
    Swal.fire({
      title: "processing...",
      allowOutsideClick: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const classInfo = {
      name,
      image,
      instructor_email,
      status,
    };
    instance.put(`/allClasses?email=${user.email}`, classInfo).then((data) => {
      if (data.modifiedCount > 0) {
        Swal.close();
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Modified Successfull",
        });
        refetch();
      }
    });
  };
  const handleFeedback = (item) => {
    const feedbackText = document.getElementById("feedbackText").value;
    Swal.fire({
      title: "Sending...",
      allowOutsideClick: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    feedbackData.feedback = feedbackText;
    instance
      .post(`/addFeedback?email=${user.email}`, feedbackData)
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.close();
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Feedback Sent",
          });
        }
      });
  };

  return (
    <>
      <Title title="Manage Classes"></Title>
      <div className="overflow-x-auto mt-8 border border-slate-300 rounded-lg dark:border-slate-600">
        <table className="table px-10 table-md max-w-4xl overflow-x-auto text-base ">
          {/* head */}
          <thead className="">
            <tr className="border border-slate-400 text-base dark:border-slate-600">
              <th className="px-16">#</th>
              <th>Class</th>
              <th>Instructor</th>
              <th className="">Instructor_email</th>
              <th className="">Available Seats</th>
              <th className="">Price</th>
              <th className="">Status</th>
              <th className=""></th>
              <th className=""></th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>
            {allClass?.map((el, indx) => {
              return (
                <tr
                  key={indx}
                  className="hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-400 rounded-lg dark:border-slate-600"
                >
                  <td className="w-96 h-32">
                    <img className="w-ful h-full" src={el.image} alt="" />
                  </td>
                  <td>{el.name}</td>
                  <td>{el.instructor}</td>
                  <td>{el.instructor_email}</td>
                  <td>{el.available_seats}</td>
                  <td>{el.price}</td>
                  <td>{el.status}</td>
                  <td>
                    <button
                      onClick={() => handleStatus(el, "approved")}
                      disabled={
                        el.status === "approved" || el.status === "denied"
                      }
                      className={`${
                        el.status === "approved" || el.status === "denied"
                          ? "bg-slate-300 text-slate-400 dark:bg-slate-700"
                          : "bg-slate-700 hover:bg-slate-800 duration-100 dark:bg-slate-300 dark:hover:bg-slate-200 text-white rounded-lg font-bold dark:text-black"
                      }  py-0 px-2 rounded `}
                    >
                      Approve
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleStatus(el, "denied")}
                      disabled={
                        el.status === "approved" || el.status === "denied"
                      }
                      className={`${
                        el.status === "approved" || el.status === "denied"
                          ? "bg-slate-300 text-slate-400 dark:bg-slate-700"
                          : "bg-slate-700 hover:bg-slate-800 duration-100 dark:bg-slate-300 dark:hover:bg-slate-200 text-white rounded-lg font-bold dark:text-black"
                      }  py-0 px-2 rounded `}
                    >
                      Deny
                    </button>
                  </td>
                  <td>
                    <label
                      onClick={() => setFeedbackData(el)}
                      htmlFor="feedbackModal"
                      className={`btn bgn-ghost bg-slate-700 hover:bg-slate-800 duration-100 dark:bg-slate-300 dark:hover:bg-slate-200 text-white rounded-lg font-bold dark:text-black py-0 px-2 `}
                    >
                      Send Feedback
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="feedbackModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-slate-100 dark:bg-slate-700">
          <textarea
            id="feedbackText"
            className="w-full md:h-44 rounded-lg resize-none p-4 focus:outline-none bg-slate-200/50 border-slate-300/50 border dark:border-slate-500/50 dark:bg-slate-600/50 text-black text-base dark:text-white"
            placeholder="Write your feedback"
          ></textarea>
          <div className="flex items-center gap-20 justify-center mt-4">
            <label
              className="py-1 px-3 bg-slate-700 hover:bg-slate-800 duration-100 dark:bg-slate-300 dark:hover:bg-slate-200 text-white rounded-lg font-bold dark:text-black"
              htmlFor="feedbackModal"
              onClick={handleFeedback}
            >
              Send
            </label>
            <label
              className="py-1 px-3 bg-slate-700 hover:bg-slate-800 duration-100 dark:bg-slate-300 dark:hover:bg-slate-200 text-white rounded-lg font-bold dark:text-black"
              htmlFor="feedbackModal"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageClasses;
