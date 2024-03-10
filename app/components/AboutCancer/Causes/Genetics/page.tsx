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
                <h3 className="text-xl font-semibold mb-2">The Genetics of Cancer</h3>
                <p>
                    Yes, cancer is a genetic disease. It is caused by changes in genes that control the way cells grow and multiply. Cells are the building blocks of your body. Each cell has a copy of your genes, which act like an instruction manual.
                </p>
            </div>
            <p>
                Genes are sections of DNA that carry instructions to make a protein or several proteins. Scientists have found hundreds of DNA and genetic changes (also called variants, mutations, or alterations) that help cancer form, grow, and spread.
            </p>
            <p>
                Cancer-related genetic changes can occur because:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>random mistakes in our DNA happen as our cells multiply</li>
                <li>our DNA is altered by carcinogens in our environment, such as chemicals in tobacco smoke, UV rays from the sun, and the human papillomavirus (HPV)</li>
                <li>they were inherited from one of our parents</li>
            </ul>
            <p>
                DNA changes, whether caused by a random mistake or by a carcinogen, can happen throughout our lives and even in the womb. While most genetic changes aren’t harmful on their own, an accumulation of genetic changes over many years can turn healthy cells into cancerous cells. The vast majority of cancers occur by chance as a result of this process over time.
            </p>
            <h3 className="text-lg font-semibold mb-2">Is cancer hereditary?</h3>
            <p>
                Cancer itself can’t be passed down from parents to children. And genetic changes in tumor cells can’t be passed down. But a genetic change that increases the risk of cancer can be passed down (inherited) if it is present in a parent's egg or sperm cells.
            </p>
        </div>
   </div>
   
</div>
  )
}

export default Diag