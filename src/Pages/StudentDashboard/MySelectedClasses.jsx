import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const MySelectedClasses = () => {
  const { user } = useContext(AuthContext);
  const instance = UseAxiosSecure();
  const { data: myClasses = [], isLoading } = useQuery(
    ["myClasses", 10],
    async () => {
      return instance.get("/classes").then((data) => data);
    }
  );
  return (
    <div>
      <h1>Student</h1>
      <p>from my selected Class</p>
    </div>
  );
};

export default MySelectedClasses;
