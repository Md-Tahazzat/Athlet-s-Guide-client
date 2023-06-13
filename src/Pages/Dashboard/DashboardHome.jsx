import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Title from "../../Components/Title";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Title
        title={
          user.role == "admin"
            ? "Admin Panel"
            : user.role === "instructor"
            ? "Instructor Dashboard"
            : "Student Dashboard"
        }
      ></Title>
    </div>
  );
};

export default DashboardHome;
