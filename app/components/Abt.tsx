import React from 'react'
import Image from 'next/image'

const Abt = () => {
  return (
    <div className='w-screen h-screen'>
        <h1 className='font-extrabold text-4xl text-center my-16'>Empowering Hope, Healing, and Health: Your Cancer Companion</h1>
        <div className='grid grid-cols-2'>
            <Image src='/woman.jpg' alt='bg' width={600} height={700} className='mx-40 rounded-xl my-16'/>
            <div className='my-16 mx-40'>
                <div className='bg-[#2E8BC0] h-[400px] rounded-xl'>
                    <ul className='py-10 px-20 text-white text-lg'>
                        <li className='py-2'>Content Curation</li>
                        <li className='py-2'>Expert Review</li>
                        <li className='py-2'>Organized Structure</li>
                        <li className='py-2'>Clear Presentation</li>
                        <li className='py-2'>Multilingual Support</li>
                        <li className='py-2'>Continuous Improvement</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Abt