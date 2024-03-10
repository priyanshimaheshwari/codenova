import React from 'react'
import Image from 'next/image'
import bg from '/public/bg.png'
import bg1 from '/public/bg1.png'




const Hero = () => {
  return (
    <div className='w-full h-full'>
      <div className="bg-cover  " style={{ backgroundImage: "url('/bg4.png')" }}>
      <div className='grid grid-cols-3 '>
      <Image src={bg} alt='hero' width={450} height={450} className='mr-auto animate-spin-y-linear pt-10' />
      <div className='mt-32 ml-32'>
        <p className='font-bold text-8xl text-[#b1b2ba] '>Support. Educate. Advocate.</p>
        <h4 className='font-bold text-[#99cdf2] text-lg py-6'>Cancer   hi   toh   h   darna   kya!!</h4>
      </div>

      </div>
    </div>
    </div>
    
  )
}

export default Hero
