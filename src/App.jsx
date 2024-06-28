import Education from "./components/Education";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Project from "./components/Project";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <div className="app w-full bg-[#272b33]">
      <Home />
      <About />
      <Experience />
      <Education />
      <Project />
    </div>
  );
}

export default App;
