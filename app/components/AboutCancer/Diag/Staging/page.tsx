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
            
            <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Cancer Staging</h2>
            <img src="/cancer_staging_image.jpg" alt="Cancer Staging" className="mb-4 rounded-lg shadow-md w-full" />
            <p className="mb-4">To determine the stage of your disease, your doctor may order x-rays, lab tests, and other procedures. The stage of cancer refers to its extent, including the size of the tumor and whether it has spread.</p>
            <p className="mb-4">Understanding the stage of your cancer is crucial for:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Assessing the seriousness of your cancer and your chances of survival</li>
                <li>Planning the most effective treatment</li>
                <li>Identifying clinical trials as potential treatment options</li>
            </ul>
            <p className="mb-4">Cancer is always referred to by the stage assigned at diagnosis, even if it progresses or metastasizes. Additional information about any changes in the cancer's status over time is added to the original stage.</p>
            <h3 className="text-xl font-semibold mb-2">How Stage Is Determined</h3>
            <p className="mb-4">The stage of cancer is determined through various tests and procedures, including x-rays, lab tests, and imaging studies. Refer to the section on how cancer is diagnosed to learn more about these diagnostic techniques.</p>
            <h3 className="text-xl font-semibold mb-2">Systems That Describe Stage</h3>
            <p>There are numerous staging systems used for cancer, including general systems like the TNM staging system and those specific to certain types of cancer. Most staging systems consider factors such as the tumor's location, size, lymph node involvement, and metastasis.</p>
        </div>
       </div>
       
    </div>
  )
}

export default Diag