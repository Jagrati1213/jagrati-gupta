import { FaCloudDownloadAlt } from "react-icons/fa";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Resume from "../src/images/Jagrati Gupta.pdf";
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
