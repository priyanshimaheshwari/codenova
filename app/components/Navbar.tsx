import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className=''>
      <div className='bg-[#3043b8]  text-center'>
      
    </div>
    <div className='w-full h-full bg-[#3043b8]'>
    <div className=' flex justify-between  '>
        <p className='flex flex-col'>
          <span className='font-bold text-blue-500 text-lg bg-[#d1d5d8] py-8 pl-10 pr-[398px]'><Link href='/'> Hopeful Heals</Link></span>
        </p>
        <div className='pr-6'>
          <p className='pt-2 font-bold text-2xl text-[#359be2]'>Fighting One Step At a Time.</p>
        <DropdownMenu >
  <DropdownMenuTrigger className='text-blue-600 hover:underline outline-none  text-white'>About Cancer</DropdownMenuTrigger>
  <DropdownMenuContent >
    <DropdownMenuLabel>Explore About Cancer</DropdownMenuLabel>
    <DropdownMenuSeparator />
     <Link href="/components/AboutCancer/Understanding" >
     <DropdownMenuItem className='hover:cursor-pointer'>
  Understanding Cancer</DropdownMenuItem></Link>
  <Link href="/components/AboutCancer/Diag" >
    <DropdownMenuItem className='hover:cursor-pointer'>Diagnosis & Staging</DropdownMenuItem></Link>
    <Link href="/components/AboutCancer/Advanced" >
    <DropdownMenuItem className='hover:cursor-pointer'>Advanced Cancer</DropdownMenuItem></Link>
    <Link href="/components/AboutCancer/Causes" >
    <DropdownMenuItem className='hover:cursor-pointer'>Causes & Prevention</DropdownMenuItem>
    </Link>
    <Link href="/components/AboutCancer/Managing" ><DropdownMenuItem className='hover:cursor-pointer'>Managing Cancer Care</DropdownMenuItem></Link>
    <Link href="/components/AboutCancer/Coping" >
    <DropdownMenuItem className='hover:cursor-pointer'>Coping</DropdownMenuItem>
    </Link>
    </DropdownMenuContent>
</DropdownMenu>
        <DropdownMenu>
  <DropdownMenuTrigger className='text-white hover:underline outline-none pl-10'>Cancer Types</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Common Cancer Types</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem className='hover:cursor-pointer'>Bladder Cancer</DropdownMenuItem>
    <DropdownMenuItem className='hover:cursor-pointer'>Skin Cancer</DropdownMenuItem>
    <DropdownMenuItem className='hover:cursor-pointer'>Pancreatic Cancer</DropdownMenuItem>
    <DropdownMenuItem className='hover:cursor-pointer'>Kidney (Renal Cell) Cancer</DropdownMenuItem>
    <DropdownMenuItem className='hover:cursor-pointer'>Breast Cancer</DropdownMenuItem>
    <DropdownMenuItem className='hover:cursor-pointer'>Lymphoma</DropdownMenuItem>
    <DropdownMenuItem className='hover:cursor-pointer'>Lung Cancer</DropdownMenuItem>
    <DropdownMenuItem className='hover:cursor-pointer'>Brain Tumor</DropdownMenuItem>
    <Link href="/components/CancerTypes" ><DropdownMenuItem className='hover:cursor-pointer'>All Types</DropdownMenuItem></Link>
  </DropdownMenuContent>
</DropdownMenu>
<button className=' text-white hover:underline pl-10'> Locate Hospitals</button> 
<button className=' text-white hover:underline pl-10'> Medicines</button> 
<button className=' text-white hover:underline pl-10'> About Us</button> 
<button className=' bg-[#1d2970] text-[#359be2] p-2 rounded-lg ml-10'> Donate Now</button> 
</div>


        </div>
        </div>
    </div>
  )
}

export default Navbar
