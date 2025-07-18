import React from 'react'
import { assets } from '../assets/assets'

const Contacts = () => {
  return (
    <div>
      <div className='text-xl my-4 text-gray-500 pt-10'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500'>54077 BCC Station <br />Street 350, NYC, USA</p>
          <p className='text-gray-500'>Tel : 455 990-7654 <br />Email: prescripto@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers @ PRESCRITO</p>
          <p className='text-gray-500'>Learn more about our team and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contacts