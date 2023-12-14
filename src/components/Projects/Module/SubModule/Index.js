import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { projects } from '../../../../constants';
import { useParams } from 'react-router-dom';
import SubModuleView from './SubModuleView';
export default function ModuleView() {
    const {id,module_value,moule_name} = useParams();
    const [viewData ,setViewData] = useState(null)
    useEffect(() => {
        
        const moduleName = module_value.replace(/_/g, ' ')
        const subModuleName = moule_name.replace(/_/g, ' ')
        const project = projects.find(project => ((parseInt(project.id, 10) === parseInt(id, 10))))
        const module = project.project_modules.find((module) => module.title.toLowerCase() === moduleName.toLowerCase())
        const feature = module.features.find((feature) => feature.name.toLowerCase() === subModuleName.toLowerCase())
        setViewData(feature)
        
        
    }, []);
  return (
    <>
    {viewData !== null && <SubModuleView viewData={viewData}/>}
    </>
  );
}
