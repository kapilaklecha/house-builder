import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <Container>
    <div className='flex  gap-6 py-12 max-lg:flex-col'>
      <div className=' w-[33.33%] max-lg:w-[100%] px-6'><h3 className=' font-bold text-[20px] mb-6'>WF Design + Build © 2024</h3>
      <p className=' text-[24px] mb-6'>Indore, Bhawarkua</p>
<a href="" className=' text-primary'>Privacy Policy</a>
      </div>
      <div className=' w-[33.33%] max-lg:w-[100%] px-6'>
        <h3 className=' font-bold text-[20px] mb-6'>
        Join Our Team
        </h3>
        <p className=' text-[24px] mb-6'>We're always open to discussing collaboration opportunities with other professional trades. Go ahead and introduce yourself.</p>
        <a href="" className=' text-primary text-[18px]'>Say Hello</a>
      </div>
      <div className=' w-[16.66%] max-lg:w-[100%] flex flex-col px-6'>
<h3 className=' font-bold text-[20px] mb-6'>Get social</h3>
<a href="" className=' text-primary text-[18px] '>Facebook</a><a href="" className=' text-primary text-[18px]'>Instagram</a><a href="" className=' text-primary text-[18px]'>LinkedIn</a>
      </div>
      <div className=' w-[16.66%] flex flex-col px-6 max-lg:w-[100%]' >
        <h3 className=' font-bold text-[20px] mb-6 '>Contact us</h3>

        <a href="" className=' text-primary text-[18px]'>Sand an email</a>
        <a href="" className=' text-primary text-[18px]'>998-877-6655</a>
      </div>
    </div>
    </Container>
  )
}

export default Footer