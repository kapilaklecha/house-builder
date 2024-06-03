'use client'

import Container from '@/components/Container'
import { useState } from 'react'

const Page = () => {
  const [budget, setBudget] = useState(''); // State to manage the selected value

  const handleBudgetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBudget(event.target.value);
  }

  return (
    <Container>
      <div className='flex justify-center items-center'>
        <div className='w-[66.66%] max-lg:w-full max-lg:px-6'>
          <div className='pt-[96px] pb-[50px] py-6 mb-6'>
            <h1 className='text-[2rem] font-bold'>{"Let's build something great together"}</h1>
            <p className='text-[1.5rem]'>{"Whatever your ambition, we'd love to design and build your next big home addition or lend a hand with a major renovation."}</p>
          </div>
          <div>
            <form action="">
              <div className='flex gap-4 mb-6 max-lg:flex-col'>
                <div className='flex flex-col w-[50%] max-lg:w-full'>
                  <label htmlFor="fullName" className='font-bold'>Full name</label>
                  <input type="text" name='fullName' className='border border-[#bebebe] rounded-md p-3 text-[1.5rem]' required />
                </div>
                <div className='flex flex-col w-[50%] max-lg:w-full'>
                  <label htmlFor="email" className='font-bold'>Email Address</label>
                  <input type="email" name='email' className='border border-[#bebebe] rounded-md p-3 text-[1.5rem]' required />
                </div>
              </div>
              <div className='flex gap-4 mb-6 max-lg:flex-col'>
                <div className='flex flex-col w-[50%] max-lg:w-full'>
                  <label htmlFor="phoneNumber" className='font-bold'>Phone number</label>
                  <input type="text" name='phoneNumber' className='border border-[#bebebe] rounded-md p-3 text-[1.5rem]' required />
                </div>
                <div className='flex flex-col w-[50%] max-lg:w-full'>
                  <label htmlFor="physicalAddress" className='font-bold'>Physical address (optional)</label>
                  <input type="text" name='physicalAddress' className='border border-[#bebebe] rounded-md p-3 text-[1.5rem]' />
                </div>
              </div>
              <div className='flex gap-4 mb-6 max-lg:flex-col'>
                <div className='flex flex-col w-[50%] max-lg:w-full'>
                  <label htmlFor="hearAboutUs" className='font-bold'>How did you hear about us?</label>
                  <input type="text" name='hearAboutUs' className='border border-[#bebebe] rounded-md p-3 text-[1.5rem]' required />
                </div>
                <div className='flex flex-col w-[50%] max-lg:w-full'>
                  <label htmlFor="budget" className='font-bold'>Budget</label>
                  <select name="budget" value={budget} onChange={handleBudgetChange} className='custom-select'>
                    <option value="" disabled>Select One...</option>
                    <option value="less 10 Lakh">Less than 10,00,000</option>
                    <option value="less 15 Lakh">Less than 15,00,000</option>
                    <option value="less 20 Lakh">Less than 20,00,000</option>
                    <option value="more 20 Lakh">More than 20,00,000</option>
                  </select>
                </div>
              </div>
              <label htmlFor="help" className='font-bold'>How can we help?</label>
              <textarea name="help" id="help" className='w-[100%] h-[200px] border border-[#bebebe] resize-none'></textarea>
              <button type='submit' className='my-6 px-12 py-2 bg-primary font-bold text-[1.5rem] text-white hover:bg-white hover:border hover:border-primary hover:text-primary'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Page
