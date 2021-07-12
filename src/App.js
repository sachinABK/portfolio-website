import React from "react";
import "./App.css";
import About from "./components/About/About";
import CircleText from "./components/CircleText/CircleText";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div>
      <Home />
      <Projects />
      <About />
      <Contact />
      {/* <CircleText /> */}
    </div>
  );
};

export default App;
