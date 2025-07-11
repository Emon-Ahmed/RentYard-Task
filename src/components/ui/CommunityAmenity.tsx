import Image from 'next/image'
import React from 'react'
import pluseIcon from "../../assets/pluse.svg"
import crossIcon from "../../assets/cross.svg"
import tempIcon from "../../assets/temp.svg"


export default function CommunityAmenity() {
    return (
        <div className='rounded-xl border border-[#E8E8E8]'>
            <div className='flex w-full items-center justify-between overflow-hidden rounded-tl-xl rounded-tr-xl border-b border-[#E8E8E8] px-6 py-3'>
                <p className='text-lg font-semibold text-[#272B35]'>
                    <span>Community’s amenity/features </span>
                    <span className='text-[#6F6C6A]'>(Optional but recommended)</span>
                </p>
                <div className='text-[#316eed] text-[16px] font-semibold underline flex items-center gap-1 justify-center'>
                    <Image src={pluseIcon} alt='Edit Icon' width={16} height={16} />
                    <span>Add</span>
                </div>
            </div>
            <div className='px-6 py-6'>
                <div className='flex flex-col gap-2'>
                    <div className='flex-wrap gap-2'>
                        <button type="button" className="mb-3 me-3 relative inline-flex gap-2 items-center p-2 text-sm font-medium text-center text-secondary-text-gray border-2 border-gray-300 rounded-xl hover:bg-gray-50">
                            <div className="bg-[#f4f4f4] rounded-lg p-2 inline-flex items-center justify-center    ">
                                <Image src={tempIcon} alt='temp Icon' width={18} height={18} />
                            </div>
                            <span>Air conditioning</span>
                            <div className="cursor-pointer absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary-red border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                                <Image src={crossIcon} alt='Cross Icon' width={14} height={14} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
