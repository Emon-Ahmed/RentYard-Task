import Image from 'next/image'
import React from 'react'
import videoUploadIcon from "../../assets/videoUpload.svg"
export default function UploadFileBox() {
    return (

        <div className="flex items-center justify-center w-full mt-2">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-30 border-2 border-blue-400 border-dashed rounded-xl cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <div className='border-2 border-blue-400 border-dashed rounded-lg p-3 mb-2'>
                        <Image src={videoUploadIcon} alt='Upload Icon' width={24} height={24} />
                    </div>

                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
        </div>

    )
}
