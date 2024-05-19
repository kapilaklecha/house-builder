import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from './Button';

const HeroSection = ({heading, lastWord, desc} : {heading : string, lastWord: string, desc :string}) => {
  return (
    <div className=' py-[48px] px-5'>
    <div className=' flex w-[58.33%] flex-col p-3 m-auto'>
        <h1 className=' text-[3rem] text-[#011e41]  font-extrabold break-words max-w-[680px] mb-6'>{heading} 
        <span><AddIcon className=' text-[3rem] font-extrabold text-logo '/></span>
        {lastWord}
        .
        </h1>
        <div className=' text-[24px] mb-6'>
            <p>{desc}</p>
        </div>
        <div className='my-6'><Button path='/work' text='See our work' className={'bg-primary text-white text-[24px] font-bold py-2 px-6  hover:bg-white hover:text-primary hover:border-primary hover:border'}/></div>
        
    </div>
    </div>
  )
}

export default HeroSection