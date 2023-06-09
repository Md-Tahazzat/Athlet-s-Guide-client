import React from "react";
import Title from "../../Components/Title";

const PopularInstructors = () => {
  return (
    <section className="mb-16 md:mb-24 lg:mb-44 w-full">
      <Title title="Popular Instructors"></Title>
      {/* TODO: have to create dynamic user */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-5 md:py-10 lg:py-14 gap-10 max-w-4xl mx-auto">
        <div className="hover:scale-105 duration-200 shadow-2xl border border-slate-800 dark:border-slate-200 rounded-md">
          <img
            src="https://i.ibb.co/gmjQSRY/pro-football.png"
            className="rounded-md"
            alt=""
          />
        </div>
        <div className="hover:scale-105 duration-200 shadow-2xl border border-slate-800 dark:border-slate-200 rounded-md">
          <img
            src="https://i.ibb.co/gmjQSRY/pro-football.png"
            className="rounded-md"
            alt=""
          />
        </div>
        <div className="hover:scale-105 duration-200 shadow-2xl border border-slate-800 dark:border-slate-200 rounded-md">
          <img
            src="https://i.ibb.co/gmjQSRY/pro-football.png"
            className="rounded-md"
            alt=""
          />
        </div>
        <div className="hover:scale-105 duration-200 shadow-2xl border border-slate-800 dark:border-slate-200 rounded-md">
          <img
            src="https://i.ibb.co/gmjQSRY/pro-football.png"
            className="rounded-md"
            alt=""
          />
        </div>
        <div className="hover:scale-105 duration-200 shadow-2xl border border-slate-800 dark:border-slate-200 rounded-md">
          <img
            src="https://i.ibb.co/gmjQSRY/pro-football.png"
            className="rounded-md"
            alt=""
          />
        </div>
        <div className="hover:scale-105 duration-200 shadow-2xl border border-slate-800 dark:border-slate-200 rounded-md">
          <img
            src="https://i.ibb.co/gmjQSRY/pro-football.png"
            className="rounded-md"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
export default PopularInstructors;
