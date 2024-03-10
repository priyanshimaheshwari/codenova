import React from 'react'
import Link from 'next/link'

const What = () => {
  return (
     <div className='w-full h-full bg-gradient-to-r from-blue-100 via-blue-50 via-white via-blue-50 to-blue-100'>

<div className="flex">
            <div className="flex flex-col h-screen p-3  shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-lg font-bold text-blue-600 mt-14">Understanding Cancer</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                
                                    <span className='font-bold text-blue-600 hover:underline'><Link href='/components/AboutCancer/Understanding/What'>What is Cancer?</Link> </span>
                                
                            </li>
                            <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                    <span className='font-bold text-blue-600 hover:underline'><Link href='/components/AboutCancer/Understanding/Statistics'>Cancer Statistics</Link></span>
                                
                            </li>
                            <li className="rounded-sm flex items-center p-2 space-x-3 rounded-md">
                                    <span className='font-bold text-blue-600 hover:underline '><Link href='/components/AboutCancer/Understanding/Disparities'>Cancer Disparities</Link></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    <div>
    <div className='m-6'>
        <h1 className='text-4xl font-bold p-8'>How does Cancer develop</h1>
        <p className='p-4 text-lg'>
        
        Cancer develops as a result of specific alterations to genes, which are the fundamental units of inheritance and are organized into long strands of DNA called chromosomes.

This disease is primarily genetic in nature, stemming from changes to genes that regulate the functioning of cells, particularly their growth and division processes.

Genetic mutations leading to cancer can arise from various factors:

</p>
<p className='p-4 text-lg'>
Tumors can be either benign or malignant. Benign tumors remain localized and do not invade nearby tissues or spread to other parts of the body. They are generally non-life-threatening and do not recur after removal. Conversely, malignant tumors, or cancers, have the ability to infiltrate surrounding tissues and metastasize to distant organs via the bloodstream or lymphatic system. This metastatic spread is a key feature of cancer and significantly impacts prognosis and treatment.
</p>
<p className='p-4 text-lg'>
While many cancers present as solid tumors, such as those found in organs like the lungs, breast, or colon, others, like leukemia, originate in the blood or bone marrow and do not form solid masses. Despite these variations, all cancers share the fundamental characteristic of abnormal cell proliferation.h and proliferation.

        </p>
        <p className='p-4 text-lg'>
        Overall, understanding the differences between benign and malignant tumors is essential for accurate diagnosis, treatment planning, and patient management in cancer care.
        </p>
    </div>
    <div className="max-w-3xl mx-auto py-8 px-4">
  <h2 className="text-2xl font-bold mb-4">How Does Cancer Develop?</h2>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div className="flex items-center justify-center">
      <img src="credit-terese-winslow.jpg" alt="Credit: © Terese Winslow" className="w-full lg:w-auto" />
    </div>
    <div>
      <p className="text-lg mb-4">Cancer is caused by certain changes to genes, the basic physical units of inheritance. Genes are arranged in long strands of tightly packed DNA called chromosomes.</p>
      <p className="text-lg mb-4">Cancer is a genetic disease—that is, it is caused by changes to genes that control the way our cells function, especially how they grow and divide.</p>
      <p className="text-lg mb-4">Genetic changes that cause cancer can happen because:</p>
      <ul className="list-disc pl-6">
        <li className="mb-2">Errors that occur as cells divide.</li>
        <li className="mb-2">Damage to DNA caused by harmful substances in the environment, such as the chemicals in tobacco smoke and ultraviolet rays from the sun.</li>
        <li className="mb-2">Inherited mutations from parents.</li>
      </ul>
      <p className="text-lg mb-4">The body normally eliminates cells with damaged DNA before they turn cancerous. But the body’s ability to do so goes down as we age. This is part of the reason why there is a higher risk of cancer later in life.</p>
      <p className="text-lg">Each person’s cancer has a unique combination of genetic changes. As the cancer continues to grow, additional changes will occur. Even within the same tumor, different cells may have different genetic changes.</p>
    </div>
  </div>
</div></div>

</div>

</div>

  )
}

export default What
