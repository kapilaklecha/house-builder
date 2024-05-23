import React from 'react'
import Button from './Button'
import Container from './Container'

const BottomComp = () => {
  return (
    <Container>
    <div className=' flex items-start py-12 px-6'>
        <div className='w-[50%] px-6'><img src="/prefooter.png" alt="" /></div>
        <div className=' px-12'>
    <div className=' flex  flex-col '>
        <h1 className=' text-[2rem] text-[#011e41]  font-extrabold break-words  mb-6'>If you're eager to start a new home renovation project, we're experienced, established, and ready to get to work.
        </h1>
        <div className=' text-[24px] mb-6'>
            <p>Since 2005, we've helped hundreds of Fraser Valley homeowners like you create better living spaces with forward-thinking design, experience-driven insight, and expert level craftsmanship.</p>
        </div>
         
        <div className='my-6'><Button path='/work' text="Let's work together" className={'bg-primary text-white text-[24px] font-bold py-3 px-6  hover:bg-white hover:text-primary hover:border-primary hover:border'}/></div>

    </div>
    </div>
        
    </div>
    </Container>
  )
}

export default BottomComp