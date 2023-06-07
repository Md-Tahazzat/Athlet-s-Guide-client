import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/instructors", element: <Instructors></Instructors> },
      { path: "/classes", element: <Classes></Classes> },
      { path: "/dashboard", element: <Dashboard></Dashboard> },
    ],
  },
]);

export default router;
