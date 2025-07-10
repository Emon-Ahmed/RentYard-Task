import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar({ exitTitle = "Exit" }: { exitTitle?: string }) {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center py-4'>
                <Link href='/'><Image src={"/logo.png"} alt='Logo' width={147} height={38} /></Link>
                <span className='border border-gray-300 rounded-xl px-5 py-2 font-semibold text-lg text-primary-text-black hover:bg-gray-100 cursor-pointer'>
                    {exitTitle}
                </span>
            </div>
        </div>
    )
}
