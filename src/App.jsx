import React from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Features from "./Components/Features";
import Courses from "./Components/Courses";
import Steps from "./Components/Steps";

const App = () => {
  return (
    <div>
      <Container>
        <Header />
        <Slider />
        <Features />
        <Courses />
        <Steps />
      </Container>
    </div>
  );
};

export default App;
