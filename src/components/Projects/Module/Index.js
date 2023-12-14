import "../../../App.css";
import { useEffect , useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { useParams } from 'react-router-dom';
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";
import * as LottiePlayer from "@lottiefiles/lottie-player";

import { projects } from "../../../constants";
import ModuleData from "./ModuleData";

export default function Module() {
    
    const [moduleData , setModuleData] = useState(null);
    const {id,module_value} = useParams();
    useEffect(() => {
        // Get the current URL
        const module_name = module_value.replace(/_/g, ' ')
        const project = projects.find(project => parseInt(project.id, 10) === parseInt(id, 10))
        const module = project.project_modules.find((module) => module.title.toLowerCase() === module_name.toLowerCase())
        setModuleData(module)
        
    }, []);

  return (
    <>
    {moduleData !== null && <ModuleData moduleData={moduleData}/>}
    </>
  );
}
