import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading";
import Title from "../../Components/Title";
import Swal from "sweetalert2";

const MyClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const instance = UseAxiosSecure();
  const {
    data: userInfo = {},
    isLoading,
    refetch,
  } = useQuery(["myClasses", 10], async () => {
    return instance.get(`/myClasses?email=${user.email}`).then((data) => data);
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleUpdate = (classDetails) => {
    Swal.fire({
      icon: "warning",
      title: "Cooming Soon",
      text: "This features is not available yet",
    });
  };
  return (
    <div>
      <Title title="My Classes"></Title>
      <div className="overflow-x-auto mt-8 border border-slate-300 rounded-lg dark:border-slate-600">
        <table className="table overflow-x-auto border-collapse text-base ">
          {/* head */}
          <thead className="">
            <tr className="border border-slate-400 text-base dark:border-slate-600">
              <th># </th>
              <th>name</th>
              <th>Total Students</th>
              <th>Status</th>
              <th className="">Feedback</th>
              <th className="">update</th>
            </tr>
          </thead>
          <tbody>
            {userInfo[0].classes?.map((singleClass, indx) => {
              return (
                <tr
                  key={indx}
                  className="hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-400 rounded-lg dark:border-slate-600"
                >
                  <td>{indx + 1}</td>
                  <td>{singleClass.name}</td>
                  <td>{singleClass.students}</td>
                  <td>{singleClass.status}</td>
                  <td>{singleClass.feedback}</td>
                  <td>
                    <button
                      onClick={() => handleUpdate(singleClass)}
                      className={`bg-slate-500 shadow-md hover:bg-slate-600 text-white dark:text-black dark:bg-slate-300 dark:hover:bg-slate-400 duration-150 py-0 px-2 rounded `}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
