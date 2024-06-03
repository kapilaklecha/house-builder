import React from 'react'
import IconPencilRuler from './svgs/IconPencilRuler'

const CustomCard = () => {
  return (
     <div className=' p-[24px]'>
    <div className=" bg-white p-12 border border-[#e5e5e5] rounded-sm max-lg:p-2">
      <div className='w-[96px]'><IconPencilRuler/></div>
     
    <h2 className="text-3xl font-bold my-6">Custom Design + Build</h2>
    <p className="mb-4">
      From the beginning, we listen, brainstorm, and discuss ideas to bring out the full potential of spaces and areas that are important to you. This step informs and educates you on what project ideas are possible and what budget you will need to complete them.
    </p>
  </div>
  </div>
  )
}

export default CustomCard