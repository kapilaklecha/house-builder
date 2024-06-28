import React from 'react'

const ImageComponentWithDesc = ({source, heading, desc} : { source : string, heading: string, desc : string}) => {
  return (
    <div className="p-4  mx-auto">
    <div className="border border-[#f4f4f4] rounded-sm overflow-hidden shadow-sm">
      <div className="h-64  w-full overflow-hidden max-lg:h-full">
        <img src={source} alt={heading} className="h-full w-full object-cover" />
      </div>
      <div className="p-6 flex flex-col justify-center items-center">
        <h3 className="text-xl font-bold my-2">{heading}</h3>
        <p className="text-center text-gray-700">{desc}</p>
      </div>
    </div>
  </div>
  )
}

export default ImageComponentWithDesc