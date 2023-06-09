import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Registration/Login";
import Register from "../Pages/Registration/Register";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import ManageClasses from "../Pages/AdminDashboard/ManageClasses";
import ManageUsers from "../Pages/AdminDashboard/ManageUsers";
import AddClass from "../Pages/InstructorDashboard/AddClass";
import MyClasses from "../Pages/InstructorDashboard/MyClasses";
import MySelectedClasses from "../Pages/StudentDashboard/MySelectedClasses";
import MyEnrolledClasses from "../Pages/StudentDashboard/MyEnrolledClasses";
import Payment from "../Pages/StudentDashboard/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/instructors", element: <Instructors></Instructors> },
      { path: "/classes", element: <Classes></Classes> },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard></Dashboard>
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <DashboardHome></DashboardHome>,
          },
          {
            path: "manageClasses",
            element: <ManageClasses></ManageClasses>,
          },
          {
            path: "manageUsers",
            element: <ManageUsers></ManageUsers>,
          },
          {
            path: "addClass",
            element: <AddClass></AddClass>,
          },
          {
            path: "myClasses",
            element: <MyClasses></MyClasses>,
          },
          {
            path: "mySelectedClasses",
            element: <MySelectedClasses></MySelectedClasses>,
          },
          {
            path: "myEnrolledClasses",
            element: <MyEnrolledClasses></MyEnrolledClasses>,
          },
          {
            path: "payment",
            element: <Payment></Payment>,
          },
        ],
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);

export default router;
