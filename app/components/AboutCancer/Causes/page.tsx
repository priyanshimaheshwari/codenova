import React from 'react'
import Link from 'next/link'

const Diag = () => {
  return (
    <div className='w-full h-full bg-gradient-to-r from-blue-100 via-blue-50 via-white via-blue-50 to-blue-100'>

        <div className="flex">
            <div className="flex flex-col h-screen p-3  shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-lg font-bold text-blue-600 mt-14"><Link href='/'>Causes and Prevention</Link> </h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-600 hover:underline'><Link href='/components/AboutCancer/Causes/Risk'>Risk Factors</Link> </span>
                                
                            </li>
                            <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                    <span className='font-bold text-blue-600 hover:underline'><Link href='/components/AboutCancer/Causes/Genetics'>Genetics</Link></span>
                                
                            </li>
                            <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                    <span className='font-bold text-blue-600 hover:underline'><Link href='/components/AboutCancer/Causes/Cancer'>Cancer Prevention Overview</Link></span>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Causes and Prevention</h3>
                <p>
                    Cancer prevention involves taking actions to reduce the risk of developing cancer. Here are some key strategies:
                </p>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Maintain a Healthy Lifestyle</h3>
                <ul className="list-disc pl-6 mb-4">
                    <li>Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins.</li>
                    <li>Avoid tobacco in all forms, including smoking and smokeless tobacco.</li>
                    <li>Maintain a healthy weight through regular exercise and portion control.</li>
                    <li>Limit alcohol consumption.</li>
                    <li>Protect your skin from excessive sun exposure and avoid indoor tanning.</li>
                </ul>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Avoid Exposure to Known Carcinogens</h3>
                <p>
                    Minimize your exposure to substances that are known to increase the risk of cancer, such as:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Tobacco smoke</li>
                    <li>Ultraviolet (UV) radiation</li>
                    <li>Hazardous chemicals in the workplace or environment</li>
                    <li>Radiation from medical imaging tests (when possible)</li>
                    <li>Arsenic in drinking water</li>
                </ul>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Medicines and Vaccines</h3>
                <p>
                    Certain medicines and vaccines can help prevent specific types of cancer. Consider the following:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>HPV vaccine to prevent cervical cancer and other HPV-related cancers</li>
                    <li>Hepatitis B vaccine to reduce the risk of liver cancer</li>
                    <li>Tamoxifen or raloxifene for women at high risk of breast cancer</li>
                    <li>Aspirin to reduce the risk of colorectal cancer (for some individuals)</li>
                </ul>
            </div>
            <p>
                By incorporating these strategies into your lifestyle and healthcare routine, you can take proactive steps to lower your risk of developing cancer.
            </p>
        </div>
       </div>
       
    </div>
  )
}

export default Diag