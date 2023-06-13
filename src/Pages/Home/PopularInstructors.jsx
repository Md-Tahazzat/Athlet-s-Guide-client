import React, { useState } from "react";
import Title from "../../Components/Title";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading";

const PopularInstructors = () => {
  const instance = UseAxiosSecure();
  const { data: popularInstructor = [], isLoading } = useQuery(
    ["popularInstructor", 6],
    async () => {
      return instance.get("/popularInstructor").then((data) => data);
    }
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="mb-16 md:mb-24 lg:mb-44 w-full">
      <Title title="Popular Instructors"></Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-5 md:py-10 lg:py-14 gap-10 max-w-4xl mx-auto">
        {popularInstructor.map((instructor, indx) => (
          <div
            key={indx + 99}
            className="hover:-translate-y-2 duration-200 shadow-2xl border border-slate-800 dark:border-slate-200 rounded-md"
          >
            <img src={instructor.image} className="rounded-md" alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};
export default PopularInstructors;
