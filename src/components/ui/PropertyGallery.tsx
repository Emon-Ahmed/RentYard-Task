import Image from 'next/image'
import React from 'react'
import videoUploadIcon from "../../assets/videoUpload.svg"
import UploadFileBox from '../form/UploadFileBox'
import UploadFileBoxTitle from '../form/UploadFileBoxTitle'
export default function PropertyGallery() {
    return (
        <div className='rounded-xl border border-[#E8E8E8]'>
            <div className='flex w-full items-center justify-between overflow-hidden rounded-tl-xl rounded-tr-xl border-b border-[#E8E8E8] px-6 py-3'>
                <p className='text-lg font-semibold text-[#272B35]'>
                    <span>Property gallery </span>
                    <span className='text-[#6F6C6A]'>(Its not unit photo)*</span>
                </p>
            </div>
            <div className='px-6 py-6'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center justify-between gap-2'>
                        <div className='grid grid-cols-1 md:grid-cols-5 gap-8 w-full'>
                            <div className='col-span-2 text-[16px] font-medium text-[#272B35] w-full'>
                                Featured photos <span className='text-[#ff6a62]'>*</span>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div>
                                        <UploadFileBoxTitle />
                                    </div>
                                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                                        <div>
                                            <UploadFileBox />
                                            <UploadFileBox />
                                        </div>
                                        <div>
                                            <UploadFileBox />
                                            <UploadFileBox />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-3 text-[16px] font-medium text-[#272B35] w-full'>
                                More photos <span className='text-[#6F6C6A]'>(optional)</span>
                                <div className='grid grid-cols-1 md:grid-cols-6 gap-2'>
                                    <div>
                                        <UploadFileBox />
                                        <UploadFileBox />
                                    </div>
                                    <div>
                                        <UploadFileBox />
                                        <UploadFileBox />
                                    </div>
                                    <div>
                                        <UploadFileBox />
                                        <UploadFileBox />
                                    </div>
                                    <div>
                                        <UploadFileBox />
                                        <UploadFileBox />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
