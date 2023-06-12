import React, { useContext } from "react";
import Title from "../../Components/Title";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { user } = useContext(AuthContext);
  const instance = UseAxiosSecure();
  const { data: users = [], isLoading } = useQuery(
    ["manageUsers", 20],
    async () => {
      return instance.get(`/users?email=${user?.email}`).then((data) => data);
    }
  );
  if (isLoading) {
    <Loading></Loading>;
  }

  // make instructor functionality
  const makeInstructor = (singleUser) => {
    const updateUser = {
      user: singleUser.user,
      role: "instructor",
    };
    Swal.fire({
      title: "processing...",
      allowOutsideClick: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    instance.put(`/users?email=${user.email}`, updateUser).then((data) => {
      console.log(data);
      Swal.close();
    });
  };
  console.log(users[0]);
  return (
    <div>
      <Title title="Manage All Users"></Title>
      <div className="overflow-x-auto mt-8 border border-slate-300 rounded-lg dark:border-slate-600">
        <table className="table overflow-x-auto border-collapse text-base ">
          {/* head */}
          <thead className="">
            <tr className="border border-slate-400 text-base dark:border-slate-600">
              <th># </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className=""></th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((singleUser, indx) => {
              return (
                <tr
                  key={indx}
                  className="hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-400 rounded-lg dark:border-slate-600"
                >
                  <td>{indx + 1}</td>
                  <td>{singleUser.name}</td>
                  <td>{singleUser.user}</td>
                  <td>{singleUser.role}</td>
                  <td>
                    <button
                      onClick={() => makeInstructor(singleUser)}
                      disabled={singleUser.role === "instructor"}
                      className="bg-slate-500 shadow-md hover:bg-slate-600 text-white dark:text-black dark:bg-slate-300 dark:hover:bg-slate-400 duration-150 py-0 px-2 rounded "
                    >
                      Make Instructor
                    </button>
                  </td>

                  <td>
                    <button
                      disabled={singleUser.role === "admin"}
                      onClick={() => handleAdmin(singleUser)}
                      className="bg-slate-500 shadow-md hover:bg-slate-600 text-white dark:text-black dark:bg-slate-300 dark:hover:bg-slate-400 duration-150 py-0 px-2 rounded"
                    >
                      Make Admin
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

export default ManageUsers;
