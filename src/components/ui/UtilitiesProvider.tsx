import Image from 'next/image'
import React from 'react'
import pluseIcon from "../../assets/pluse.svg"
import editBlackIcon from "../../assets/editBlack.svg"
import deleteIcon from "../../assets/delete.svg"

export default function UtilitiesProvider() {
    return (
        <div className='rounded-xl border border-[#E8E8E8]'>
            <div className='flex w-full items-center justify-between overflow-hidden rounded-tl-xl rounded-tr-xl border-b border-[#E8E8E8] px-6 py-3'>
                <p className='text-lg font-semibold text-[#272B35]'>
                    <span>Utilities provider</span>
                    <span className='text-[#6F6C6A]'>(optional but recommended)</span>
                </p>
                <div className='text-[#316eed] text-[16px] font-semibold underline flex items-center gap-1 justify-center cursor-pointer'>
                    <Image src={pluseIcon} alt='add Icon' width={16} height={16} />
                    <span>Add</span>
                </div>
            </div>
            <div className='px-6 py-6'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center justify-between gap-2 '>
                        <div className='text-[16px] font-medium text-[#272B35] w-full'>
                            <span>Internet-Utilities company name</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={editBlackIcon} className='cursor-pointer' width={24} height={24} alt='Edit Icon' />
                            <Image src={deleteIcon} className='cursor-pointer' width={24} height={24} alt='Delete Icon' />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 max-w-full my-1'></div>
                    <div className='flex items-center justify-between gap-3'>
                        <div className='text-[16px] font-medium text-[#272B35] w-full'>
                            <span>Cable-Utilities company name</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={editBlackIcon} className='cursor-pointer' width={24} height={24} alt='Edit Icon' />
                            <Image src={deleteIcon} className='cursor-pointer' width={24} height={24} alt='Delete Icon' />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 max-w-full my-1'></div>
                    <div className='flex items-center justify-between gap-2 '>
                        <div className='text-[16px] font-medium text-[#272B35] w-full'>
                            <span>Internet-Utilities company name</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={editBlackIcon} className='cursor-pointer' width={24} height={24} alt='Edit Icon' />
                            <Image src={deleteIcon} className='cursor-pointer' width={24} height={24} alt='Delete Icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
