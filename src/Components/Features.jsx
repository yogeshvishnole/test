import React from "react";
import Container from "./Container";

const features = [
  {
    id: 1,
    title: "80K+",
    description: "We have more than students",
    color: "text-orange-400",
  },
  {
    id: 2,
    title: "150+",
    description: "Free online tutorials videos avaialble",
    color: "text-orange-500",
  },
  {
    id: 3,
    title: "90+",
    description: "Daily updated blog post maintain",
    color: "text-pink-500",
  },
  {
    id: 4,
    title: "& 3M",
    description: "Job posted everydays with qualification",
    color: "text-fuchsia-400",
  },
];

const Feature = ({ title, description, color }) => {
  return (
    <div className="grid place-content-center w-[300px] h-80 rounded-lg shadow-[0_25px_100px_0px_rgba(69,87,157,0.08)]  ">
      <h1
        className={`text-center ${color} text-[72px] font-bold font-primary leading-[55px] tracking-tight mb-5 `}
      >
        {title}
      </h1>
      <p className=" w-[190px]  text-center text-slate-600 font-primary text-lg font-normal leading-[25.32px] opacity-70 ">
        {description}
      </p>
    </div>
  );
};
const Features = () => {
  return (
    <Container>
      <div className="my-10  flex  space-x-12">
        <div className="grid grid-cols-2 gap-11 ">
          {features.map((feature) => (
            <Feature
              key={feature.id}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
        <div className="w-[480px] h-[488px] my-28">
          <p className=" text-orange-400 text-sm w-[162px] h-10 font-primary leading-10 font-semibold ">
            CORE FEATURES{" "}
          </p>
          <h1 className="text-slate-800 font-bold w-[480px] h-[154px]  font-primary leading-[55px] text-[48px] -tracking-[1.5px] mb-10">
            Smart Jackpots <br />
            that you may love this anytime & anywhere
          </h1>
          <p className="w-[454px] h-[166px] text-slate-900 font-primary text-[18px] font-normal leading-[42px] mb-[30px]">
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
            Get your tests delivered at let home collect sample.
          </p>

          <button className="w-[150px]  h-[50px] text-orange-400 font-primary font-bold text-base rounded-[5px] bg-orange-50 -tracking-[0.16px]">
            Explore Details
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Features;
