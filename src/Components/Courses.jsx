import Container from "./Container";
import SectionHeading from "./UI/SectionHeading";

const coursesData = [
  {
    id: 1,
    rating: 5.0,
    reviews: 392,
    watched: 2538,
    title:
      "Professional graphic design tutorial full course with exercise file",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments",
    videoClassCount: "7 video classes",
    duration: "4 hrs",
  },
  {
    id: 2,
    rating: 5.0,
    reviews: 392,
    watched: 2538,
    title: "Become ultimate photoshop expert within 30 days",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments",
    videoClassCount: "7 video classes",
    duration: "4 hrs",
  },
  {
    id: 3,
    rating: 5.0,
    reviews: 392,
    watched: 2538,
    title: "After effects animation tutorial with photoshop documents",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments",
    videoClassCount: "7 video classes",
    duration: "4 hrs",
  },
  {
    id: 4,
    rating: 5.0,
    reviews: 392,
    watched: 2538,
    title: "Adobe illustrator vector art design mockup",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments",
    videoClassCount: "7 video classes",
    duration: "4 hrs",
  },
];

const Courses = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center">
        <SectionHeading
          subheading="QUALITY FEATURES"
          heading="Popular Designing Course"
        />

        <div>
          {coursesData.map((data) => {
            return (
              <CourseDetails
                key={data.id}
                title={data.title}
                description={data.description}
                vCount={data.videoClassCount}
                duration={data.duration}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

const CourseDetails = ({ title, description, vCount, duration }) => {
  return (
    <div>
      <div className="flex my-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            <path
              d="M3.11314 31C2.23519 31 1.52338 30.2882 1.52338 29.4102V1.58968C1.52338 0.711734 2.23519 0 3.11314 0L28.9465 14.3076C28.9465 14.3076 30.1388 15.4999 28.9465 16.6923C27.7542 17.8846 3.11314 31 3.11314 31Z"
              fill="#EF9E48"
            />
          </svg>
        </div>

        <h1 className="mx-2">{title}</h1>
        <button>{`${vCount} | ${duration}`}</button>
        {/* <img src="assets/dropdown.jpg" alt="dropdown-logo" /> */}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Courses;
