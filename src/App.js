
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Layout/Layout";
import Display from "./components/Display";
import Slidebar from "./components/SlideBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import Module from "./components/Projects/Module/Index";
import ModuleView from "./components/Projects/Module/SubModule/Index";
import Project from './components/Projects/index';
import {   Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <Layout>
      <Slidebar />

      {/* <Display /> */}

      <div className="lg:pl-[15%]    w-screen back text-white  ">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="about" element={ <About/> } />
          <Route path="contact" element={ <Contact/> } />
          <Route path="projects" element={ <Projects/> } />
          <Route path="projects/:project_id/:project_name" element={ <Project/> } />
          <Route path="project/:id/:module_value" element={ <Module /> } />
          <Route path="project/:id/:module_value/:moule_name" element={<ModuleView />} />

        </Routes>
    </div>
    </Layout>
  );
}
