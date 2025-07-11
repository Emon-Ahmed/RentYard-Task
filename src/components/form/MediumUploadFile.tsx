import Image from 'next/image'
import React from 'react'
import videoUploadIcon from "../../assets/videoUpload.svg"
export default function MediumUploadFileBox() {
    return (

        <div className="flex mt-2">
            <label htmlFor="dropzone-file" className="flex flex-col items-center h-1/3 w-1/2 border-2 border-blue-400 border-dashed rounded-xl cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <div className='border-2 border-blue-400 border-dashed rounded-lg p-3 mb-2'>
                        <Image src={videoUploadIcon} alt='Upload Icon' width={24} height={24} />
                    </div>
                    <p className="text-lg text-secondary-text-gray "><span className="font-semibold">Upload video</span> </p>
                    <p className="text-xs text-secondary-text-black font-semibold">(MP4, MOV only)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
        </div>

    )
}
