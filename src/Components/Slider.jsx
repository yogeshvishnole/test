import Card from "./Card";
import Container from "./Container";

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
    <div className="pt-12">
      <Container>
        <div className="my-10">
          <div className="text-center  mb-14">
            <p className="text-orange-400 text-center leading-10 font-semibold ">
              QUALITY FEATURES{" "}
            </p>
            <h1 className="text-slate-800 font-bold text-center leading-[58px] text-4xl">
              Tutorials that people love most
            </h1>
          </div>

          <div className="flex space-x-4">
            {staticData.map((data) => (
              <Card
                key={data.id}
                img={data.img}
                title={data.title}
                watched={data.watched}
                rating={data.rating}
                reviews={data.reviews}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Slider;
