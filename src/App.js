import './App.css';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Home from './components/home/Home';
import Project from './components/js-files/Project';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  AOS.init();
  return (
    <>
      <div className="App w-full bg-[#272b33]">
        <Home />
        <About />
        <Experience />
        <Project />
      </div>
    </>
  );
}

export default App;
