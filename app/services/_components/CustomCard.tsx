import React from 'react'
import IconPencilRuler from './svgs/IconPencilRuler'

const CustomCard = ({desc, heading} : {desc : string, heading: string}) => {
  return (
     <div className=' p-[24px]'>
    <div className=" bg-white p-12 border border-[#e5e5e5] rounded-sm max-lg:p-2">
      <div className='w-[96px]'><IconPencilRuler/></div>
     
    <h2 className="text-3xl font-bold my-6">{heading}</h2>
    <p className="mb-4">
      {desc}
    </p>
  </div>
  </div>
  )
}

export default CustomCard