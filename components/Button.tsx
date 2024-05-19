import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Button = ({ path, text, className} : {path : string, text : string, className? : unknown}) => {
  return (
   <div className=' flex'>
     <a href={path} className=' shrink-0'>
        <div className={`inline-block ${className}`}>
        <span>{text}</span>
        <span><ArrowForwardIcon/></span>
        </div>
        
     </a>
     </div>
  )
}

export default Button