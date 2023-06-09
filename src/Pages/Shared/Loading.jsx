import React from "react";
import { FaFutbol } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="w-full min-h-[calc(100vh-340px)] flex items-center justify-center">
      <FaFutbol className="animate-spin text-4xl text-slate-600 dark:text-slate-400"></FaFutbol>
    </div>
  );
};

export default Loading;
