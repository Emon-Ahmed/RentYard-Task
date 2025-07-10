import React from 'react'

export default function BottomNavbar() {
    return (
        <>
            <div className="absolute inset-x-0 bottom-0 h-19 shadow-[var(--bottom-shadow)] bg-white z-10">
                <div className="flex justify-between items-center h-full container mx-auto">
                    <span className='text-color-black underline font-semibold text-lg'>Back</span>
                    <span className=" text-lg rounded-xl px-5 py-2 font-semibold text-white cursor-pointer bg-[#316EED]">Get Start</span>
                </div>
            </div>
        </>
    )
}
