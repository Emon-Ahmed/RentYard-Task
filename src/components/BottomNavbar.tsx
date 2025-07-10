import Link from 'next/link'
import React from 'react'

export default function BottomNavbar({ next, previous, nextTitle }: { next?: string, previous?: string, nextTitle?: string }) {
    return (
        <>
            <div className="absolute inset-x-0 bottom-0 h-19 shadow-[var(--bottom-shadow)] bg-white z-10">
                <div className="flex justify-between items-center h-full container mx-auto">
                    {previous ? (
                        <Link href={previous}>
                            <span className='text-color-black underline font-semibold text-lg'>Back</span>
                        </Link>
                    ) : (
                        <span className='text-color-black underline font-semibold text-lg opacity-50 cursor-not-allowed'>Back</span>
                    )}
                    {next ? (
                        <Link href={next}>
                            <span className=" text-lg rounded-xl px-5 py-2 font-semibold text-white cursor-pointer bg-[#316EED]">{nextTitle}</span>
                        </Link>
                    ) : (
                        <span className=" text-lg rounded-xl px-5 py-2 font-semibold text-white bg-gray-400 opacity-50 cursor-not-allowed">{nextTitle}</span>
                    )}
                </div>
            </div>
        </>
    )
}
