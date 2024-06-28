import Container from '@/components/Container'
import React from 'react'
import CustomCard from './_components/CustomCard'

const page = () => {
  return (
    <div>
        <div className='bg-[url("/wood-pattern.svg")] bg-[#011e41] pt-12 pb-24 text-white'>
            <Container>
                <div className='flex flex-col items-center'>
            <div className='  w-[75%]  text-center '>

            <h1 className=' text-[48px] font-bold mb-6'>Always at your service</h1>
           <p className=' text-[24px] mb-6 '>From project exploration to design concepts to finishing touches, we handle every aspect of the home renovation process. With everything under one roof, we set an extremely high bar for quality and efficiency.
          </p>
            </div>
            </div>
            </Container>
        </div>
        <Container>
         
        <div className=' grid grid-cols-2 max-lg:grid-cols-1 p-12 mt-[-128px] max-lg:p-6'>
          <CustomCard heading={`Custom design + build
`} desc='From the beginning, we listen, brainstorm, and discuss ideas to bring out the full potential of spaces and areas that are important to you. This step informs and educates you on what project ideas are possible and what budget you will need to complete them.'/>
          <CustomCard heading='Architecture + engineering' desc="From ideas to drawn plans, we present the project in printed form with the help of our architect. Once the final draft is representative of your goals, we move on to engineering. And if building permit applications are required, we'll take care of them for you.

"/>
          <CustomCard heading='Interior + exterior design' desc="This final stage is all about attention to detail. Our designer will walk you through finishing selections, color coordination, window design, flooring, trim, and much much more. It's easy to feel overwhelmed, but we're here to help make it stress free and fun."/>
          <CustomCard heading='Project management' desc="Once you give the green light on all the planning and design decisions, we're ready to start building. We supply and operate all trades, materials and supplies, as well as site operations. Our goal is always to keep the project on time and on budget"/>
        </div>
        </Container>
    </div>
  )
}

export default page