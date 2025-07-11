import Image from 'next/image'
import React from 'react'
import editIcon from "../../assets/edit.svg"
export default function LeasingInfo() {
    return (
        <div className='rounded-xl border border-[#E8E8E8]'>
            <div className='flex w-full items-center justify-between overflow-hidden rounded-tl-xl rounded-tr-xl border-b border-[#E8E8E8] px-6 py-3'>
                <p className='text-lg font-semibold text-[#272B35]'>Leasing info <span className='text-[#ff6a62]'>(Required)</span> </p>
                <div className='text-[#316eed] text-[16px] font-semibold underline flex items-center gap-1 justify-center cursor-pointer'>
                    <Image src={editIcon} alt='Edit Icon' width={18} height={18} />
                    <span>Edit</span>
                </div>
            </div>
            <div className='px-6 py-6'>
                <div className='flex flex-col gap-2'>
                    <p className="text-[16px] font-medium text-[#272B35]">
                        <span>Leasing manager: Alex Johan fitex, </span> <span>leasing@rentyeard.com</span>
                        <br />
                        <span>8801632177501</span> <span className='text-[#6F6C6A]'>Address(same as property)</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
