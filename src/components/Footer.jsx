 import React from 'react'
import { assets } from '../assets/assets'
 
 const Footer = () => {
   return (
     <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* ----Left-section---- */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, architecto voluptatum tempore hic molestiae cum porro, odit est ad aperiam, veniam veritatis commodi! Eum, nulla? Temp</p>
            </div>
            {/* ----Center-section---- */}
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gary-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* ----Right-section---- */}
            <div>
                <p className='text-xl font-medium mb-5'>Get in touch</p>
                <ul className='flex flex-col gap-2 text-gary-600'>
                    <li>7741526318</li>
                    <li>jagath900@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* -----Copyright text------ */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>&copy; 2025 Prescripto. All rights reserved.</p>
        </div>
     </div>
   )
 }
 
 export default Footer