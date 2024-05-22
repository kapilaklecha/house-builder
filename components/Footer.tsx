import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <Container>
    <div className='flex  gap-6 py-12'>
      <div className=' w-[33.33%] px-6'><h3 className=' font-bold text-[20px] mb-6'>WF Design + Build © 2024</h3>
      <p className=' text-[24px] mb-6'>4432 Wilson Rd.
Chilliwack, BC V2R 5C5</p>
<a href="" className=' text-primary'>Privacy Policy</a>
      </div>
      <div className=' w-[33.33%] px-6'>
        <h3 className=' font-bold text-[20px] mb-6'>
        Join Our Team
        </h3>
        <p className=' text-[24px] mb-6'>We're always open to discussing collaboration opportunities with other professional trades. Go ahead and introduce yourself.</p>
        <a href="" className=' text-primary'>Say Hello</a>
      </div>
      <div className=' w-[16.66%] flex flex-col px-6'>
<h3 className=' font-bold text-[20px] mb-6'>Get social</h3>
<a href="" className=' text-primary'>Facebook</a><a href="" className=' text-primary'>Instagram</a><a href="" className=' text-primary'>LinkedIn</a>
      </div>
      <div className=' w-[16.66%] flex flex-col px-6' >
        <h3 className=' font-bold text-[20px] mb-6'>Contact us</h3>

        <a href="" className=' text-primary'>Sand an email</a>
        <a href="" className=' text-primary'>998-877-6655</a>
      </div>
    </div>
    </Container>
  )
}

export default Footer