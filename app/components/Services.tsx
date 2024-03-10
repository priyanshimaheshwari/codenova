import React from 'react'
import { FaRibbon } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";
import { GiMedicines } from "react-icons/gi";
import { LiaHospitalSolid } from "react-icons/lia";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const Services = () => {
  return (
    <div className='h-screen '>
        <div className=''>
        <h1 className='mt-28 text-center font-bold text-6xl'>Our Services </h1>
        <h1 className='mt-6 text-center font-bold text-3xl'>Your Pathway to Compassionate Care</h1>
        <div className='flex'>
        <div className='mt-20 ml-96 '>
        <div className='bg-blue-200 h-40 w-80 rounded-xl  text-xl font-bold text-center flex mt-2 hover:shadow-xl hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 '>
        <FaRibbon color='blue' size={90} className='ml-8 mt-8'/>
    <div className='flex flex-col mt-10'>Cancer Care
    <span className='text-md font-normal flex pl-6 text-blue-900 mt-2 hover:underline cursor-pointer'>Learn More
            <LuArrowRight color='blue' size={30} className=''/>
            </span>
    </div>
    
        </div>
        <div className='bg-blue-200 h-40 w-80 rounded-xl  text-xl font-bold text-center flex mt-10 hover:shadow-xl hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 '>
        <GiMedicines  color='blue' size={90} className='ml-8 mt-8'/>
    <div className='flex flex-col mt-10'>Medicines
    <span className='text-md font-normal flex pl-6 text-blue-900 mt-2 hover:underline cursor-pointer'>Learn More
            <LuArrowRight color='blue' size={30} className=''/>
            </span>
    </div>
    
        </div>
        </div>
        <div className='mt-20 ml-40 '>
        <div className='bg-blue-200 h-40 w-80 rounded-xl  text-xl font-bold text-center flex mt-2 hover:shadow-xl hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 '>
        <LiaHospitalSolid color='blue' size={90} className='ml-8 mt-8'/>
    <div className='flex flex-col mt-10'>Hospitals
    <span className='text-md font-normal flex pl-6 text-blue-900 mt-2 hover:underline cursor-pointer'>Learn More
            <LuArrowRight color='blue' size={30} className=''/>
            </span>
    </div>
    
        </div>
        <div className='bg-blue-200 h-40 w-80 rounded-xl  text-xl font-bold text-center flex mt-10 hover:shadow-xl hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 '>
        <IoChatboxEllipsesOutline color='blue' size={90} className='ml-8 mt-8'/>
    <div className='flex flex-col mt-10'>Chat Support
    <span className='text-md font-normal flex pl-6 text-blue-900 mt-2 hover:underline cursor-pointer'>Learn More
            <LuArrowRight color='blue' size={30} className=''/>
            </span>
    </div>
    
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Services