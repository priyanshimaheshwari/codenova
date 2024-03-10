import React from 'react'
import Link from 'next/link'

const Diag = () => {
  return (
    <div className='w-full h-full bg-gradient-to-r from-blue-100 via-blue-50 via-white via-blue-50 to-blue-100'>

    <div className="flex">
        <div className="flex flex-col h-screen p-3  shadow w-60">
            <div className="space-y-3">
                <div className="flex items-center">
                    <h2 className="text-lg font-bold text-blue-600 mt-14"><Link href='/'>Advanced Cancer</Link> </h2>
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                            
                                <span className='font-bold text-blue-600 hover:underline'><Link href='/components/AboutCancer/Advanced/Choices'>Choices for Care</Link> </span>
                            
                        </li>
                        <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                <span className='font-bold text-blue-600 hover:underline'><Link href='/components/AboutCancer/Advanced/Talking'>Talking to Family & Friends</Link></span>
                            
                        </li>
                        <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                <span className='font-bold text-blue-600 hover:underline'><Link href='/components/AboutCancer/Advanced/Coping'>Coping with Your Feelings During Advanced Cancer</Link></span>
                            
                        </li>
                        <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                <span className='font-bold text-blue-600 hover:underline '><Link href='/components/AboutCancer/Advanced/Future'>Making Future Plans with Advanced Cancer</Link></span>
                        </li>
                        <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                <span className='font-bold text-blue-600 hover:underline '><Link href='/components/AboutCancer/Advanced/Purpose'>Finding Purpose and Meaning with Advanced Cancer</Link></span>
                        </li>
                        <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                <span className='font-bold text-blue-600 hover:underline '><Link href='/components/AboutCancer/Advanced/Questions'>Questions to Ask Your Doctor about Advanced Cancer</Link></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Choices for Care When Treatment May Not Be an Option</h2>
            <img src="/choices_for_care_image.jpg" alt="Choices for Care" className="mb-4 rounded-lg shadow-md w-full" />
            <p className="mb-4">When dealing with advanced cancer that can no longer be treated (also called terminal or end-stage), people have different goals for their care. These goals may change over time. Some people want to look for clinical trials. Others choose options such as palliative care or hospice care, which help control the symptoms and side effects of the disease.</p>
            <h3 className="text-xl font-semibold mb-2">Decisions for Care when Cancer is Terminal</h3>
            <p className="mb-4">Decisions for care when cancer is terminal are very personal, and it's natural to want to do all you can. But you should weigh these feelings against the risks and benefits of available treatments as well as your own feelings about life and death. You should ask all the questions you need to. If you choose not to go through more active cancer treatment, you can continue to receive supportive care to keep you as comfortable as possible.</p>
            <h4 className="text-lg font-semibold mb-2">Clinical Trials for Advanced Cancer</h4>
            <p className="mb-4">People with end-stage cancer may be offered the option to take part in early-phase clinical trials. These trials are designed to look at the safety of a new treatment and to identify the best dose.</p>
            {/* Continue with the rest of the content */}
            {/* Remember to replace the image source and add any additional content */}
        </div>
   </div>
   
</div>
  )
}

export default Diag