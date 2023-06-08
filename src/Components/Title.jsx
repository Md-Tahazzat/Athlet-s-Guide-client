import React from "react";

const Title = ({ title }) => {
  return (
    <h1 className="my-2 text-center font-bold md:text-2xl lg:text-3xl">
      {title}
    </h1>
  );
};

export default Title;
