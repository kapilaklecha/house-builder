import Container from '@/components/Container'
import React from 'react'

const page = () => {
  return (
    <Container>
        <div className=' flex justify-center items-center'>
        <div className=' w-[66.66%] '  >
            <div className='pt-[96px] pb-[50px] py-6 mb-6'>
            <h1 className=' text-[2rem] font-bold'>{"Let's build something great together"}</h1>
            <p className='text-[1.5rem]'>{"Whatever your ambition, we'd love to design and build your next big home addition or lend a hand with a major renovation."}</p>
            </div>
            <div>
                <form action="">
                    <div className=' flex gap-4 mb-6'>
                    <div className=' flex flex-col w-[50%]'>
                        <label htmlFor="full name" className=' font-bold'>Full name</label>
                        <input type="text" name='full name'  className='border border-[#bebebe] rounded-md p-3 text-[1.5rem]'  required/>
                    </div>
                    <div className=' flex flex-col w-[50%]'>
                        <label htmlFor="full name" className=' font-bold'>Full name</label>
                        <input type="email" name='Email Address' className='border border-[#bebebe] rounded-md p-3 text-[1.5rem]'  required/>
                    </div>
                    </div>
                    <div className=' flex gap-4 mb-6 '>
                    <div className=' flex flex-col w-[50%]'>
                        <label htmlFor="phone number" className=' font-bold'>Phone number</label>
                        <input type="text" name='phone number' className='border border-[#bebebe] rounded-md p-3 text-[1.5rem]' required />
                    </div>
                    <div className=' flex flex-col w-[50%]'>
                        <label htmlFor="full name" className=' font-bold'>Physical address (optional)</label>
                        <input type="email" name='Email Address' className='border border-[#bebebe] rounded-md p-3 text-[1.5rem]'  />
                    </div>
                    </div>
                    <div className=' flex gap-4 mb-6 '>
                    <div className=' flex flex-col w-[50%]'>
                        <label htmlFor="hear about us" className=' font-bold'>How did you hear about us?</label>
                        <input type="text" name='hear about us' className='border border-[#bebebe] rounded-md p-3 text-[1.5rem]' required />
                    </div>
                    <div className=' flex flex-col w-[50%]'>
                        <label htmlFor="full name" className=' font-bold'>Physical address (optional)</label>
                       <select name="" id="" className='custom-select'>
                        <option value="" disabled selected>Select One...</option>
                        <option value="less 10 Lakh">Less than 10,00,000</option>
                        <option value="less 15 Lakh">Less than 15,00,000</option>
                        <option value="less 20 Lakh">Less than 20,00,000</option>
                        <option value="more 20 Lakh">More than 20,00,000</option>
                       </select>
                    </div>
                    </div>
                    <label htmlFor="How can we help?" className=' font-bold'>How can we help?</label>
                    <textarea name="How can we help?" id="How can we help?" className=' w-[100%] h-[200px] border border-[#bebebe] resize-none'  >

                    </textarea>
                    <button type='submit' className='my-6 px-12 py-2 bg-primary font-bold text-[1.5rem] text-white hover:bg-white hover:border hover:border-primary hover:text-primary'>Submit</button>
                </form>
            </div>
        </div>
        </div>
    </Container>
  )
}

export default page