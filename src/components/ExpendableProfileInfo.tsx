import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Image from 'next/image'
import rightBlueIcon from "./../assets/rightBlue.svg"
import creditIcon from "./../assets/credit.svg"

export default function ExpendableProfileInfo() {
    const packages = [
        {
            name: 'Monthly',
            posts: [
                {
                    id: 1,
                    title: 'Regular',
                    price: 99.99,
                    duration: "mo",
                    unit: "1-50",
                },
                {
                    id: 2,
                    title: 'Platinum',
                    price: 129.99,
                    duration: "mo",
                    unit: "1-50",
                },
                {
                    id: 3,
                    title: 'Enterprise',
                    price: 199.99,
                    duration: "mo",
                    unit: "1-50",
                },
            ],
        },
        {
            name: 'Annually (save 57%)',
            posts: [
                {
                    id: 1,
                    title: 'Regular',
                    price: 43.00,
                    duration: "mo",
                    unit: "1-50",
                },
                {
                    id: 2,
                    title: 'Platinum',
                    price: 55.90,
                    duration: "mo",
                    unit: "1-50",
                },
                {
                    id: 3,
                    title: 'Enterprise',
                    price: 86.00,
                    duration: "mo",
                    unit: "1-50",
                },
            ],
        }
    ]
    return (
        <div className='container mx-auto py-2'>
            <div className='rounded-lg bg-white my-6 ' style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 100px 5000px' }}>
                <div className='p-5'>
                    <p className='text-2xl font-bold text-primary-text-black'>Chose a plan for after 30-days free trial</p>
                    <TabGroup>
                        <TabList as="div" className="my-4 flex rounded-xl border border-[#E0E0E0] px-2 py-2 w-fit">
                            {packages.map(({ name }) => (
                                <Tab as="div" key={name} className="text-[#316EED] data-selected:bg-[#E2EBFF] font-bold px-4 py-2 rounded-lg focus:not-data-focus:outline-none data-focus:outline data-focus:outline-[#316EED] cursor-pointer">{name}</Tab>
                            ))}
                        </TabList>
                        <TabPanels>
                            {packages.map(({ name, posts }) => (
                                <TabPanel as="div" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {posts.map((post) => (
                                        <div key={post.id}>
                                            <div className='p-6 border-primary-text-blue border-2 rounded-xl bg-[#F5F8FF]'>
                                                <div className="flex justify-between ">
                                                    <div className='rounded-lg text-xl font-bold inline-flex px-4 py-2 border-[#D8D8D8] border bg-[#F4F4F4]'>
                                                        {post.title}
                                                    </div>
                                                    <div className='text-primary-text-blue rounded-lg text-xl font-bold inline-flex px-4 py-2 border-[#D8D8D8] border bg-[#F4F4F4] gap-1 items-center'>
                                                        <Image src={rightBlueIcon} alt='Right Blue Icon' width={20} height={20} /> Auto Pay
                                                    </div>
                                                </div>
                                                <div className='text-5xl font-bold text-primary-text-black mt-8 mb-4'>
                                                    ${post.price}<span className='text-lg text-[#4C4A54]'>/{post.duration}</span>
                                                </div>
                                                <p className='text-[#4C4A54]'>Price for {post.unit} unit</p>
                                            </div>
                                        </div>
                                    ))}
                                </TabPanel>
                            ))}
                        </TabPanels>
                    </TabGroup>
                </div>
            </div>
            <div className='rounded-lg bg-white my-4' style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 100px 5000px' }}>
                <div className=''>
                    <div className='p-5 flex justify-between items-center'>
                        <p className='text-2xl font-bold text-primary-text-black'>Payment option</p>
                        <p className='text-[16px] font-semibold text-primary-text-blue underline'>Add new card</p>
                    </div>
                    <div>
                        <div className='flex justify-between items-center border-b border-gray-300'>
                            <div className='flex items-center justify-start p-5'>
                                <Image src={creditIcon} alt='Right Blue Icon' width={20} height={20} />
                                <span className='px-2 font-semibold'>Alex jones(Amex card)</span>
                                <span className='text-[#4C4A54]'>*******8565</span>
                            </div>
                            <div className='cursor-pointer m-3 px-4 py-2 rounded-xl border-2 border-primary-text-blue bg-[#E2EBFF]'>
                                Select
                            </div>
                        </div>
                        <div className='flex justify-between items-center border-b border-gray-300'>
                            <div className='flex items-center justify-start p-5'>
                                <Image src={creditIcon} alt='Right Blue Icon' width={20} height={20} />
                                <span className='px-2 font-semibold'>Alex jones(Amex card)</span>
                                <span className='text-[#4C4A54]'>*******8565</span>
                            </div>
                            <div className='cursor-pointer m-3 px-4 py-2 rounded-xl border-2 border-gray-300'>
                                Select
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center justify-start p-5'>
                                <Image src={creditIcon} alt='Right Blue Icon' width={20} height={20} />
                                <span className='px-2 font-semibold'>Alex jones(Amex card)</span>
                                <span className='text-[#4C4A54]'>*******8565</span>
                            </div>
                            <div className='cursor-pointer m-3 px-4 py-2 rounded-xl border-2 border-gray-300'>
                                Select
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
