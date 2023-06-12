import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../Shared/Loading";

const ManageClasses = () => {
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
  console.log(users);
  return (
    <div>
      <h1>Admin</h1>
      <p>Fromm Manage classes</p>
    </div>
  );
};

export default ManageClasses;
