import "../App.css";
import Home from "./Home";
import About from "./About";
// import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import {   Routes, Route } from 'react-router-dom';

export default function Display() {
  return (
    <div className="lg:pl-[25%]    w-screen back text-white  ">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="about" element={ <About/> } />
          <Route path="contact" element={ <Contact/> } />
          <Route path="project" element={ <Projects/> } />
        </Routes>
    </div>
  );
}
