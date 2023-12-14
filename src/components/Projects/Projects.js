




import Work from "./work";
import { projects } from "../../constants";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
export default function Projects() {
  // const [projectData, setProjectData] = useState(null);
  const navigate = useNavigate();
  const handleModuleClick = (projectSelected) => {
    // Update the URL when a card is clicked
    // setProjectData(project)
    const project_id = projectSelected.id;
    const project_name = projectSelected.project_name.split('\n')[0].toLowerCase().replace(/\s/g, '_');
    // const project = projectSelected
    
    navigate(`/projects/${project_id}/${project_name}`);
  };
  // const handleClick = (e) => {
  //   const heading = e.currentTarget.firstElementChild.innerText.split('\n')[0].toLowerCase();
    
  // }
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
        Projects
      </div>
      {/* {
        projects.map((project,ind)=>{
          return (
            <div>
              
              <div className="text-3xl font-bold py-3">{project.project_name}</div> */}
              
              
              <div className="flex flex-wrap flex-row justify-center w-full p-4 gap-12">
                  {projects.map((project, ind) => {
                    return (
                      
                        <div
                            key={ind}
                            data-aos={"zoom-in-up"}
                            data-aos-offset="-5"
                            data-aos-delay={ind % 2 === 0 ? "0" : "700"}
                            data-aos-duration="2000"
                            onClick={() => handleModuleClick(project)}
                        >
                            <Work
                              title={project.project_name}
                              desc={project.desc}
                              img={project.img}
                              link={project.link}
                              code={project.code}
                              tags={project.tags}
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
