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
            <h3 className="text-xl font-semibold mb-2">Making Future Plans with Advanced Cancer</h3>
            <p>
                Thinking about the future can feel stressful, but there comes a time when it’s helpful to make certain decisions. Careful planning reduces the financial, legal, and emotional burdens your family will face after you're gone. For many people, it's hard bringing up these subjects. But talking about them now can avoid problems later.
            </p>
            <h4 className="text-lg font-semibold mt-4 mb-2">Complete Advance Directives</h4>
            <p>
                If you have not done so already, it's important to fill out advance directives. These are legal papers that tell your loved ones and doctors what to do for you if you can't tell them yourself. Making these decisions now keeps you in control of how you want to be treated, and who you choose to be in charge of your care. By filling out advance directives, you're making your wishes known for all to follow. Doing so can also give your loved ones peace of mind.
            </p>
            <h4 className="text-lg font-semibold mt-4 mb-2">Update Insurance Issues</h4>
            <p>
                Contact your health insurance company if you decide to try a new treatment or go into hospice. Most insurance plans cover hospice. They may also cover brief home visits from a nurse or a home health aide several times a week. But it's wise to ask in advance. This may prevent payment problems later.
            </p>
            <h4 className="text-lg font-semibold mt-4 mb-2">Put Your Affairs in Order</h4>
            <p>
                You can help your family by organizing records, insurance policies, documents, and instructions. You may want to call a lawyer or financial planner to make sure you have taken all the right steps in doing these things. Your bank can answer questions about how to change accounts and credit cards. Other steps to take may be:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Make a list of where your family can find important papers.</li>
                <li>Keep your papers in a fireproof box or with a lawyer.</li>
                <li>If your papers are in a safety deposit box, make sure that a family member or friend has access to the box.</li>
                <li>Although original documents are needed for legal purposes, give family members photocopies.</li>
            </ul>
            <p>
                There are many different types of papers your family will need. You may not need all of the items on this list, but here is a guide. Write down contact information and what needs to be done for the following:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Banks, savings, and loans</li>
                <li>Safety deposit box information</li>
                <li>Life insurance company</li>
                <li>Health insurance company</li>
                <li>Homeowners’ or renters’ insurance company</li>
                <li>Attorneys</li>
                <li>Accountant</li>
                <li>Pension or retirement plans</li>
                <li>Investment companies</li>
                <li>Credit card companies</li>
                <li>Employer</li>
            </ul>
            <h4 className="text-lg font-semibold mt-4 mb-2">Making Funeral Arrangements</h4>
            <p>
                If it feels right to you, you may want to help your family plan a funeral or memorial service that has meaning to you. Although doing so may seem hard, planning this ahead of time will help your loved ones after your death. It will ease the burden of their having to make these choices themselves during a time of strong emotions and stress. Some people plan services that are celebrations, while others prefer something more subdued. Talk with your family about the type of service you would like.
            </p>
        </div>
   </div>
   
</div>
  )
}

export default Diag