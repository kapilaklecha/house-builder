

import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonial = () => {
  return (
    <div className=' bg-[#ffda271a] font-serif'>
        <div className=' flex flex-col justify-center items-center gap-6 py-12'>
            <div className=' px-12 my-6   text-center w-[70%] max-lg:px-0 max-lg:w-[90%]' >
                <FormatQuoteIcon className=' text-[64px] text-primary'/>
            <h2 className=' text-[32px] max-lg:text-[24px]'>
           WF Design + Build managed my townhouse renovations and everything was done speedily and on budget. I would absolutely recommend them to anyone.
            </h2>
            </div>
            <div className=' flex items-center  justify-center gap-2 max-lg:flex-col '>
                <div>
                    <img src="/house1.jpg" alt="pic" className='w-[96px] h-[96px] object-cover rounded-full'/>
                </div>
                <div className=' leading-6 max-lg:text-center'>
                    <p className=' font-bold text-[24px] font-sans '>Rahul Verma</p>
                    <p className=' text-[20px]'>Indore</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Testimonial
