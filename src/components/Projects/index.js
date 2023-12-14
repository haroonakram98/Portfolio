




import Work from "./work";
import { projects } from "../../constants";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import ModuleDescription from "../common/ModuleDescription";

export default function Project() {
  
  const navigate = useNavigate();
  console.log(useParams());
  const { project_id, project_name } = useParams();
  const project = projects.find(project => parseInt(project.id, 10) === parseInt(project_id, 10));
  // const projects = projects;
  // const project = projects.find((project) => ((project.id === parseInt(project_id, 10)) && (project.project_name === project_name)));
  // console.log(project)
  // debugger
  // const project = JSON.parse(decodeURIComponent(projectData));
  // console.log('Project:', useParams());
  
  const handleModuleClick = (project_id , module) => {
    // Update the URL when a card is clicked
        
        // const projectName = project_name.replace(/_/g, ' ')
        // const project = projects.find(project => ((parseInt(project.id, 10) === parseInt(project_id, 10)) && project.project_name === projectName))
        const module_name = module.title.split('\n')[0].toLowerCase().replace(/\s/g, '_');
        navigate(`/project/${project_id}/${module_name}`);
  };
  // const handleClick = (e) => {
  //   const heading = e.currentTarget.firstElementChild.innerText.split('\n')[0].toLowerCase();
    
  // }
  // 
  
  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col justify-center text-center gap-10"
    >
      <div
        className="font-extrabold  py-5 mt-10 text-5xl"
        data-aos={"slide-up"}
        data-aos-duration={"700"}
      >
        {/* {project.project_name} */}
      </div>
      {/* {
        projectData.map((project,ind)=>{
          return (
            <div> */}
              
              <div className="text-3xl font-bold py-3">{project.project_name}</div>
              {project.project_desc && <ModuleDescription description={project.project_desc} />}
              
              <div className="flex flex-wrap flex-row justify-center w-full p-4 gap-12">
                  {project.project_modules.map((module, ind) => {
                    return (
                      
                        <div
                            key={ind}
                            data-aos={"zoom-in-up"}
                            data-aos-offset="-5"
                            data-aos-delay={ind % 2 === 0 ? "0" : "700"}
                            data-aos-duration="2000"
                            onClick={() => handleModuleClick(project.id , module)}
                        >
                            <Work
                              title={module.title}
                              desc={module.desc}
                              img={module.img}
                              link={module.link}
                              code={module.code}
                              tags={module.tags}
                            />
                        </div>
                      
                      
                    );
                  })}
              </div>
            {/* </div>
              
          )
        })
      } */}
      
    </div>
  );
}
