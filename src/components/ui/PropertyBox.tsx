import React from 'react'
import Image from 'next/image'
import homeIcon from './../../assets/home.svg' // Adjust the path as necessary

export default function PropertyBox() {
    return (
        <div className='border border-gray-300 rounded-xl p-6 flex'>
            <div className="bg-blue-light w-15 h-15 rounded-lg inline-flex items-center justify-center    ">
                <Image src={homeIcon} alt='Home Icon' width={28} height={28} />
            </div>
            <div className='pl-3 text-lg flex flex-col font-semibold'>
                <span className='text-primary-text-black'>Single House Property</span>
                <span className='text-secondary-text-black'>Single unit house for single family</span>
            </div>
        </div>
    )
}
