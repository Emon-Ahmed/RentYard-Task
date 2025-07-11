import Image from 'next/image'
import React from 'react'
import pluseIcon from "../../assets/pluse.svg"
import editBlackIcon from "../../assets/editBlack.svg"
import deleteIcon from "../../assets/delete.svg"

export default function Parking() {
    return (
        <div className='rounded-xl border border-[#E8E8E8]'>
            <div className='flex w-full items-center justify-between overflow-hidden rounded-tl-xl rounded-tr-xl border-b border-[#E8E8E8] px-6 py-3'>
                <p className='text-lg font-semibold text-[#272B35]'>
                    <span>Parking </span>
                    <span className='text-[#6F6C6A]'>(Optional)</span>
                </p>
                <div className='text-[#316eed] text-[16px] font-semibold underline flex items-center gap-1 justify-center cursor-pointer'>
                    <Image src={pluseIcon} alt='add Icon' width={16} height={16} />
                    <span>Add</span>
                </div>
            </div>
            <div className='px-6 py-6'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center justify-between gap-2 '>
                        <div className='text-[16px] font-semibold text-[#272B35] w-full'>
                            <span>Guest vehicle parking time </span><span>2H</span>
                            <br />
                            <div className='font-medium my-1 text-[#272B35]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        </div>

                    </div>
                    <div className='flex items-center gap-3'>
                        <Image src={editBlackIcon} alt='Edit Icon' className='cursor-pointer' width={24} height={24} />
                        <Image src={deleteIcon} alt='Edit Icon' className='cursor-pointer' width={24} height={24} />
                    </div>

                </div>
            </div>
        </div>
    )
}
