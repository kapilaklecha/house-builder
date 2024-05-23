import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ImageComp = ({source, text } : {source: string, text : string}) => {
  return (
    <div className=' relative p-2'>
    <a href="">
      <figure className='group relative'>
        <img src={source} alt="previous-project-image" className='w-full h-[269px]  max-lg:h-[100%] object-cover ' />
        <figcaption>
          <div className='flex justify-between p-3 bg-white absolute bottom-0 left-0 right-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-lg:opacity-100'>
            <p className='font-bold'>{text}</p>
            <ArrowForwardIcon className='text-primary'/>
          </div>
        </figcaption>
      </figure>
    </a>
  </div>
  )
}

export default ImageComp