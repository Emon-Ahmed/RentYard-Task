import React from 'react'
import BottomNavbar from "@/components/BottomNavbar";
import Navbar from "@/components/Navbar";
import ExpendableProfileInfo from '@/components/ExpendableProfileInfo';

export default function StepThree() {
    return (
        <div className="relative h-screen">
            <Navbar exitTitle="Save & Exit" />
            <div className="border-b-1 border-gray-300"></div>
            <ExpendableProfileInfo />
            <BottomNavbar previous='/step-two' nextTitle="Pay & add property" />
        </div>
    )
}
