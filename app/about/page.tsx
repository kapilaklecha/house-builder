import React from 'react'
import Container from '@/components/Container'
import Testimonial from '@/components/Testimonial'
import ImageComponentWithDesc from '@/components/imageGrid/ImageComponentWithDesc'

const page = () => {
  return (
    <div>
    <div className='bg-[url("/wood-pattern.svg")] bg-[#011e41] pt-12 pb-24 text-white'>
        <Container>
            <div className='flex flex-col items-center'>
        <div className='  w-[75%]  text-center '>
    
        <h1 className=' text-[48px] font-bold mb-6'>Building is in our DNA</h1>
       <p className=' text-[24px] mb-6 '>
       For more than twenty years we've been working in the home renovation space. It's not just what we do — it's who we are. 2005 year founded 300+ completed projects 98.7%
      </p>
        </div>
        </div>
        </Container>
        
        </div>
        <div className=' mt-[-96px]'>
        <Container>
        <div className=' flex  '>
            <NumCard head='2005' desc='year founded'/>
            <NumCard head='300+' desc='completed projects'/>
            <NumCard head='98.3%' desc='client satisfaction'/>
            <NumCard head='75M+' desc='bricks used'/>
        </div>
        <div className=' flex justify-center'>
        <div className=' text-center w-[58.88%] p-3 my-6'>
            <h2 className=' font-bold text-[32px] mb-6'>
                Core values
            </h2>
            <p className=' text-[18px]'>We are a mission-driven company committed to transparency, accountability, sustainability and positive impact. It’s not just good business – it’s the only way we want to do business.</p>
        </div>
        </div>
        <div className='flex'>
            <ImageComponentWithDesc source='/house1.jpg' desc="There's never a stressful amount of pressure to meet unreasonable expectations. We project-manage towards specific quality goals to ensure the best possible result." heading='We do it right'/>
            <ImageComponentWithDesc source='/house1.jpg' desc="Collaboration and open lines of communication is an important part of our process. We choose to work with responsible homeowners and trades people we can trust." heading='We do it together'/>
            <ImageComponentWithDesc source='/house1.jpg' desc="Building close relationships with our clients and turning dreams into reality is a privilege. It's the reason we do what we do and why we enjoy it so much." heading='We do it with purpose'/>
        </div>
        <div>
            <Testimonial/>
        </div>

        </Container>
        </div>
        
        </div>
  )
}

export default page

const NumCard = ({head, desc} : {head: string, desc:string}) => {
    return (
        <div className=' bg-white text-[#000000] p-3 pt-12 w-full text-center'>
            <h1 className=' text-[48px] font-bold'>{head}</h1>
            <p>{desc}</p>
        </div>
    )
}