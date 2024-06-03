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
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
        </div>
        </Container>
    </div>
  )
}

export default page