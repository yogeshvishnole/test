import React from "react";

const Courses = () => {
  return (
    <div className="my-4">
      <p>QUALITY FEATURES</p>
      <h1>Popular Designing Course</h1>
      <CourseDetails />
    </div>
  );
};

const CourseDetails = () => {
  return (
    <div>
      <div className="flex my-4">
        <div>
          {" "}
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

        <h1 className="mx-2">
          Professional graphic design tutorial full course with exercise file
        </h1>
        <button>7 video classes | 4 hrs</button>
      </div>
      <p>
        Get your tutorials delivered at let home collect sample from the victory
        of the managments.
      </p>
    </div>
  );
};

export default Courses;
