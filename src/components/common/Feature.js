import React from 'react'

export default function Feature({feature}) {
    let image_path = require(`../../assets/images/${feature.image}`) ;
    return(
      <div className="flex flex-col items-center">
        <div
          className="font-extrabold py-5 mt-10 text-5xl"
          data-aos="slide-up"
          data-aos-duration="700"
        >
          {feature.name}
        </div>

        <div className="flex flex-row gap-6 ml-8 mr-8 items-center">
          <p className="font-medium" data-aos="fade-left">
            {feature.desc }
          </p>

          <div>
            <img src={image_path} />
          </div>
        </div>
      </div>
    )
  }
