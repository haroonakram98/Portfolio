import React, {useState} from 'react'
import ChartCArd from './ChartCard';
// import { charts } from '../../constants';
import { useNavigate } from 'react-router-dom';
import FeatureModal from '../common/Modal';
export default function Card({charts}) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData , setModalData] = useState({})
  const navigate = useNavigate();
  const handleModuleClick = (module) => {
    // Update the URL when a card is clicked
    
    const url = window.location.href;
    const origin = window.location.origin;
    const path = url.substring(origin.length);
    const module_name = module.name.split('\n')[0].toLowerCase().replace(/\s/g, '_');
    // window.URL
    navigate(`${path}/${module_name}`);
  };

  // const handleModuleClick = (img,title,desc) => {
    
  //   setModalData({img: img,title: title,desc: desc})
  //   setIsOpen(true)
  // }
    return (
      <div
        id="projects"
        className="min-h-screen flex flex-col justify-center text-center gap-10"
      >
        <div
          className="font-extrabold py-5 mt-10 text-5xl"
          data-aos={"slide-up"}
          data-aos-duration={"700"}
        >
          Functionalities
        </div>
        <div className="flex flex-wrap justify-center gap-12 p-4">
          {charts.map((chart, ind) => {
                return (
                  <div
                  key={ind}
                  data-aos={"zoom-in-up"}
                  data-aos-offset="-5"
                  data-aos-delay={ind % 2 === 0 ? "0" : "700"}
                  data-aos-duration="2000"
                  onClick={() => handleModuleClick(chart)}
                  // onClick={() => handleModuleClick(chart.image[0],chart.name,chart.desc)}
                >
                  <ChartCArd
                    title={chart.name}
                    desc={chart.desc}
                    img={chart.image}
                  />
                </div>
                )
                
          }
            
          )}
        </div>
        {/* {isOpen === true ? <FeatureModal img={modalData.img} title={modalData.title} desc={modalData.desc} hide={()=> {setIsOpen(false)}}/> : ''} */}
      </div>
    );
  }
  
