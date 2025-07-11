import Image from 'next/image'
import React from 'react'
import faqUpIcon from "../../assets/faqUpIcon.svg"
import MediumUploadFileBox from '../form/MediumUploadFile'


export default function Videos() {
    return (
        <div className='rounded-xl border border-[#E8E8E8]'>
            <div className='flex w-full items-center justify-between overflow-hidden rounded-tl-xl rounded-tr-xl border-b border-[#E8E8E8] px-6 py-3'>
                <p className='text-lg font-semibold text-[#272B35]'>
                    <span>Videos </span>
                    <span className='text-[#6F6C6A]'>(Optional)</span>
                </p>
                <Image src={faqUpIcon} alt='Faq Up Icon' width={20} height={20} />
            </div>
            <div className='px-6 py-6'>
                <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="col-span-1">
                        Property Video <span className='text-[#6F6C6A]'>(Optional)</span>
                        <MediumUploadFileBox />
                    </div>
                    <div className="col-span-1">
                        Property virtual tour <span className='text-[#6F6C6A]'>(Optional)</span>
                        <MediumUploadFileBox />
                    </div>
                    <div className="col-span-1">
                        Property arial video <span className='text-[#6F6C6A]'>(Optional)</span>
                        <MediumUploadFileBox />
                    </div>
                </div>
            </div>
        </div>
    )
}
