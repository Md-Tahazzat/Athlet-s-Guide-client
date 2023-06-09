import React from "react";
import Slider from "./Slider";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import SportsIntroduction from "./SportsIntroduction";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <SportsIntroduction></SportsIntroduction>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
