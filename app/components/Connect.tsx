import React from 'react'

const Connect = () => {
  return (
    <div >
        
      <div className="bg-"  style={{ backgroundImage: "url('/bg3.png')" }}>
           <div className='text-white px-5 mx-20 py-10'>
                <div className='mt-6'><p className='font-bold text-4xl'>Meet Our Connected System of Hospitals, Clinics and Caregivers</p>
                    
                </div>

                <div className='flex mx-40 gap-8'>
                <ul className='py-6 '>
                        <li><button className='py-4 hover:underline'>About Us</button></li>
                        <li><button className='hover:underline'>Our Services</button></li>
                        <li><button className='pt-4 hover:underline'>Research</button></li>
                      </ul>
                    <ul className='mt-6 '>
                        <li><button className='pt-4 hover:underline'>Consult Doctor</button></li>
                        <li><button className='pt-4 hover:underline'>Medicines</button></li>
                        <li><button className='pt-4 hover:underline'>Chat</button></li>
                      </ul>
                </div>

                

               
        </div>
        </div>
    </div>
  )
}

export default Connect