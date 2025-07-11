import Image from 'next/image'
import React from 'react'
import editIcon from "../../assets/edit.svg"

export default function RentFrequency() {
    return (
        <div className='rounded-xl border border-[#E8E8E8]'>
            <div className='flex w-full items-center justify-between overflow-hidden rounded-tl-xl rounded-tr-xl border-b border-[#E8E8E8] px-6 py-3'>
                <p className='text-lg font-semibold text-[#272B35]'>
                    <span>Rent frequency & payment reminder </span>
                    <span className='text-[#ff6a62]'>(Required)</span>
                </p>
                <div className='text-[#316eed] text-[16px] font-semibold underline flex items-center gap-1 justify-center cursor-pointer'>
                    <Image src={editIcon} alt='Edit Icon' width={18} height={18} />
                    <span>Edit</span>
                </div>
            </div>
            <div className='px-6 py-6'>
                <div className='flex flex-col gap-2'>
                    <p className="text-[16px] font-medium text-[#272B35]">
                        <span>Application fee: $100(All 18+ applicant), </span> <span>Admin fee: $15</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
