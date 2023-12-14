import React from 'react'
import ModuleDescription from '../../../common/ModuleDescription'
import { Carousel } from 'react-responsive-carousel'
export default function SubModuleView({viewData}) {
    
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col items-center justify-center text-center gap-5 text-black text-sm lg:text-lg font-normal"
    >
      <div className="head text-3xl lg:text-5xl  font-bold" data-aos="slide-down">
        {viewData.name}
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
      {viewData.carausalData?.map((imgDetail, index) => {
        
        let imagePath = require(`../../../../assets/images/${imgDetail.imgName}`);
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
      {viewData.desc && <ModuleDescription description={viewData.desc} />}
    </div>
  )
}
