
import { useEffect , useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { useParams } from 'react-router-dom';
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";
import * as LottiePlayer from "@lottiefiles/lottie-player";

import { projects } from "../../../constants";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../../../App.css";
import { Carousel } from 'react-responsive-carousel';
import Card from "../../cards/Index";
import { charts } from "../../../constants";
import ModuleDescription from "../../common/ModuleDescription";
import Feature from "../../common/Feature";

export default function ModuleData({moduleData}) {
  
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col items-center justify-center text-center gap-5 text-black text-sm lg:text-lg font-normal"
    >
      <div className="head text-3xl lg:text-5xl  font-bold" data-aos="slide-down">
        {moduleData.title || ""}
      </div>
    
      <Carousel
      className="slider-carousel"
      autoPlay
      infiniteLoop
      useKeyboardArrows={true}
      centerMode
      interval={2000}
      showThumbs={false}
      showIndicators={false} // Hide the indicators
    >
      {moduleData.carausalData.map((imgDetail, index) => {
        let imagePath = require(`../../../assets/images/${imgDetail.imgName}`);
        return (
          <div className="slide" key={index}>
            <img
              src={imagePath}
              alt={imgDetail.imgTitle}
              style={{
                width: "100%",
                height: "300px", // Set the desired fixed height
                objectFit: "cover",
              }}
            />
            <p className="legend">{imgDetail.imgTitle}</p>
          </div>
        );
      })}
      </Carousel>

      
      
      {moduleData.module_desc && <ModuleDescription description={moduleData.module_desc} />}
        
      {/* {
        moduleData.features.map((feature) => {
          return(
            <Feature feature = {feature} />
          )
          
        })
      } */}

       {
        moduleData.features.length && <Card charts = {moduleData.features}/>
       }
    
    </div>
  );
}
