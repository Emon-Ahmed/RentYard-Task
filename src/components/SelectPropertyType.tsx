import React from 'react'
import PropertyBox from './ui/PropertyBox'
import rightIcon from "../assets/right-symbol.svg";
import Image from 'next/image'

export default function SelectPropertyType() {
    return (
        <div className='container mx-auto py-8'>
            <div className='py-1'>
                <div className='text-2xl font-bold text-primary-text-black'>Property type</div>
                <div className='my-6 flex-wrap grid grid-cols-3 gap-5'>
                    <PropertyBox />
                    <PropertyBox />
                    <PropertyBox />
                </div>
            </div>
            <div className='py-1'>
                <div className='text-2xl font-bold text-primary-text-black'>Select your role</div>
                <div className='my-6 flex-wrap grid grid-cols-3 gap-5'>
                    <PropertyBox />
                    <PropertyBox />
                    <PropertyBox />
                </div>
            </div>
            <div className="py-1 ">
                <div className='rounded-3xl border border-[#E8E8E8] my-2'>
                    <div className='flex w-full items-center justify-between overflow-hidden rounded-tl-3xl rounded-tr-3xl border-b border-[#E8E8E8] bg-[#F4F4F4] px-6 py-4'>
                        <p className='text-lg font-semibold text-[#272B35]'>Proof of ownership</p>
                    </div>
                    <div className='px-6 py-4'>
                        <div className='flex flex-col gap-4'>
                            <p className="text-lg font-semibold text-[#272B35]">Ownership doc*</p>
                            <div className='flex items-center gap-2'>
                                <Image src={rightIcon} alt='Home Icon' width={20} height={20} />
                                <span>Accept RentYard property adding terms & condition</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
