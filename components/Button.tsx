import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Button = ({ path, text, className} : {path : string, text : string, className? : unknown}) => {
  return (
    <div>
    <div className='flex'>
      <a href={path} className={`inline-block ${className}`}>
        <div className='flex items-center space-x-2'>
          <span>{text}</span>
          <span><ArrowForwardIcon /></span>
        </div>
      </a>
    </div>
    </div>
  )
}

export default Button