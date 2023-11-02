import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Features from "./Features";
import Courses from "./Courses";
import Steps from "./Steps";

const Container = () => {
  return (
    <div className="w-11/12 ">
      <Header />
      <Slider />
      <Features />
      <Courses />
      <Steps />
    </div>
  );
};

export default Container;
