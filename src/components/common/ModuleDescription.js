import React from 'react'

export default function ModuleDescription({description}) {
  return (
    <div className="flex flex-row gap-6 ml-8 mr-8">
        
            <p className="font-medium" data-aos="fade-left">
                {description}
            </p>
       
    </div>
  )
}
