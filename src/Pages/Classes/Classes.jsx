import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const Classes = () => {
  const instance = UseAxiosSecure();
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    instance.get("/classes").then((data) => setClasses(data));
  }, []);
  console.log(classes);
  return (
    <div>
      <h1>From Classes component</h1>
    </div>
  );
};

export default Classes;
