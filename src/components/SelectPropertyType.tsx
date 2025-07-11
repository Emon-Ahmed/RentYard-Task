import React from 'react'
import PropertyBox from './ui/PropertyBox'
import rightIcon from "../assets/right-symbol.svg";
import uploadIcon from "../assets/upload.svg";
import Image from 'next/image'

export default function SelectPropertyType() {
    return (
        <div className='container mx-auto py-6'>
            <div className='py-1'>
                <div className='text-2xl font-bold text-primary-text-black'>Property type</div>
                <div className='my-3 flex-wrap grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <PropertyBox active={false} />
                    <PropertyBox active={false} />
                    <PropertyBox active={true} />
                </div>
            </div>
            <div className='py-1'>
                <div className='text-2xl font-bold text-primary-text-black'>Select your role</div>
                <div className='my-3 flex-wrap grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <PropertyBox active={true} />
                    <PropertyBox active={false} />
                    <PropertyBox active={false} />
                </div>
            </div>
            <div className="py-1">
                <div className='rounded-xl border border-[#E8E8E8] my-2'>
                    <div className='flex w-full items-center justify-between overflow-hidden rounded-tl-xl rounded-tr-xl border-b border-[#E8E8E8] bg-[#F4F4F4] px-6 py-3'>
                        <p className='text-lg font-medium text-[#272B35]'>Proof of ownership</p>
                    </div>
                    <div className='px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <p className="text-[16px] font-medium text-[#272B35]">Ownership doc*</p>
                            <div className="flex items-center">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#f6f6f6]  hover:bg-gray-100">
                                    <div className="flex items-center justify-center gap-2">
                                        <Image src={uploadIcon} alt='Home Icon' width={20} height={20} />
                                        <p className="text-sm font-semibold text-gray-500 "><span className="font-semibold">(Pdf Only)</span></p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2 my-4'>
                    <Image src={rightIcon} alt='Home Icon' width={20} height={20} />
                    <span>Accept RentYard property adding terms & condition</span>
                </div>
            </div>
        </div>
    )
}
