import React from "react";
import Slider from "./Slider";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import SportsIntroduction from "./SportsIntroduction";
import UpdateTitle from "../../Hooks/UpdateTitle";

const Home = () => {
  return (
    <div>
      <UpdateTitle title="Home"></UpdateTitle>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      {/* <SportsIntroduction></SportsIntroduction> */}
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
