import Education from './components/Education';
import About from './components/about/About';
import Experience from './components/experience';
import Home from './components/home/Home';
import Project from './components/project/Project';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
