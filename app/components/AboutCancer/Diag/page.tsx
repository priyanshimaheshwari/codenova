import React from 'react'
import Link from 'next/link'

const Diag = () => {
  return (
    <div className='w-full h-full bg-gradient-to-r from-blue-100 via-blue-50 via-white via-blue-50 to-blue-100'>

        <div className="flex">
            <div className="flex flex-col h-screen p-3  shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-lg font-bold text-blue-600 mt-14"><Link href='/'>Diagnosis and Staging</Link> </h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-600 hover:underline'><Link href='/components/AboutCancer/Diag/Symptoms'>Symptoms</Link> </span>
                                
                            </li>
                            <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                    <span className='font-bold text-blue-600 hover:underline'><Link href='/components/AboutCancer/Diag/Diagnosis'>Diagnosis</Link></span>
                                
                            </li>
                            <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                    <span className='font-bold text-blue-600 hover:underline '><Link href='/components/AboutCancer/Diag/Staging'>Staging</Link></span>
                            </li>
                            <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                    <span className='font-bold text-blue-600 hover:underline '><Link href='/components/AboutCancer/Diag/Questions'>Questions to Ask About Your Cancer</Link></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Cancer Diagnosis and Staging</h2>
    <img src="/diagnosis-image.jpg" alt="Cancer Diagnosis" className="mb-4 rounded-lg shadow-md w-full" />
    <p className="mb-4">Cancer can manifest with a variety of symptoms, although often these symptoms are not indicative of cancer itself, but may be caused by benign tumors or other health issues. If you experience persistent symptoms lasting for a couple of weeks, your doctor will conduct a thorough physical examination and order tests or procedures to determine the underlying cause.</p>
    <p className="mb-4">In the event that a cancer diagnosis is confirmed, additional tests or procedures will be performed to determine its stage. The stage of cancer refers to its extent, taking into account factors such as tumor size and metastasis. Once the stage of your cancer is determined, your doctor will be able to recommend appropriate treatment options and discuss your prognosis with you. Understanding your cancer and knowing what to expect can provide a sense of empowerment and help you and your loved ones better cope with the diagnosis.</p>
</div>

       </div>
       
    </div>
  )
}

export default Diag