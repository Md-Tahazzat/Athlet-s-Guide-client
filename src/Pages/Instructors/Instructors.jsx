import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Title from "../../Components/Title";
import { FaEnvelope } from "react-icons/fa";
import Loading from "../Shared/Loading";
import UpdateTitle from "../../Hooks/UpdateTitle";

const Instructors = () => {
  const [loading, setLoading] = useState(true);
  const instance = UseAxiosSecure();
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    instance.get("/instructors").then((data) => {
      setInstructors(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-10">
      <UpdateTitle title="Instructors"></UpdateTitle>
      <Title title="Our Instructors"></Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:my-20 md:mx-20">
        {instructors.map((instructor, index) => (
          <div
            key={index}
            className="card card-compact my-8 md:my-0 bg-base-100 shadow-xl border border-slate-300 dark:border-slate-600 hover:-translate-y-2 duration-200"
          >
            <figure>
              <img src={instructor.image} className="w-full h-64" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.name}</h2>
              <p className="flex items-center text-base gap-2">
                <FaEnvelope></FaEnvelope> {instructor.user}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
