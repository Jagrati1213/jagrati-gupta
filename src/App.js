import './App.css';
import About from './components/js-files/About';
import Experience from './components/js-files/Experience';
import Home from './components/js-files/Home';
import Project from './components/js-files/Project';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  
  AOS.init();
  return (
     <>
         <div className="App">
              <Home/>
              <About/>
              <Experience/>
              <Project/>
    </div>
     </>
  );
}

export default App;
