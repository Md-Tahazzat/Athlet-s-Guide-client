import React, { useState } from "react";
import Title from "../../Components/Title";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { FaIgloo } from "react-icons/fa";
import Loading from "../Shared/Loading";

const PopularClasses = () => {
  const instance = UseAxiosSecure();
  const [popularClass, setPopularClass] = useState([]);
  const { data = [], isLoading } = useQuery(["popularClass", 6], async () => {
    return instance.get("/popularClasses").then((data) => data);
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="my-20 md:my-32 lg:my-64">
      <Title title="Popular Classes"></Title>
      {/* TODO: have to implement dynamic img source */}
      <div
        id="img-container"
        className="flex gap-14 justify-center box-border my-10 md:my-20  flex-wrap"
      >
        {data.map((el, ind) => (
          <div
            key={ind}
            className={`w-full flex-initial overflow-hidden group ${
              ind == 0 || ind == 4 ? "md:w-5/12" : "md:w-3/12"
            } md:h-64 rounded-md shadow-lg  relative`}
          >
            <img
              className="w-full group-hover:scale-110 h-full rounded-md duration-200"
              src={el.image}
              alt=""
            />
            <div className="w-full duration-200 flex items-center justify-center h-0 absolute bottom-0 left-0 dark:bg-slate-800/70 bg-slate-300/80 rounded-md overflow-hidden">
              <h1 className="text-center text-2xl md:text-3xl font-semibold hidden text-slate-800 dark:text-slate-200 mx-8">
                {el.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
