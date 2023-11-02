import React from "react";

const staticData = [
  {
    id: 1,
    img: "/assets/stefan.jpg",
    rating: 5.0,
    reviews: 392,
    title: "How to work with prototype design with adobe xd featuring tools",
    watched: 2538,
  },
  {
    id: 2,
    img: "/assets/avel.jpg",
    rating: 4.5,
    reviews: 524,
    title:
      "Create multiple artboard by using figma prototyping tools development",
    watched: 3532,
  },
  {
    id: 3,
    img: "/assets/corine.jpg",
    rating: 5.0,
    reviews: 392,
    title:
      "Convert your web layout theming easily with sketch zeplin extension",
    watched: 1037,
  },
];

const Slider = () => {
  return (
    <div className="my-10">
      <p>Quality features </p>
      <h1>Tutorials that people love most</h1>

      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <div>
      <img src={staticData[0].img} alt="card-img" />
      <div>
        <h1>{staticData[0].title}</h1>

        <p>{` ${staticData[0].watched} students watched `}</p>
      </div>
    </div>
  );
};
export default Slider;
