import React from 'react'

const ImageComponentWithDesc = ({source, heading, desc} : { source : string, heading: string, desc : string}) => {
  return (
    <div className="p-4 max-w-sm mx-auto">
    <div className="border  border-[#e5e5e5] rounded-sm overflow-hidden shadow-sm">
      <img src={source} alt={heading} className=" h-60 w-full object-cover" />
      <div className="p-6 flex flex-col justify-center items-center">
        <h3 className="text-xl font-bold my-2">{heading}</h3>
        <p className="text-center text-gray-700">{desc}</p>
      </div>
    </div>
  </div>
  )
}

export default ImageComponentWithDesc