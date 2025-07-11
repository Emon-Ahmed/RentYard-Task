import React from 'react'
import BottomNavbar from "@/components/BottomNavbar";
import Navbar from "@/components/Navbar";
import CondominiumsInformation from '@/components/CondominiumsInformation';

export default function StepTwo() {
    return (
        <div className="relative h-screen">
            <Navbar exitTitle="Save & Exit" />
            <div className="border-b-1 border-gray-300"></div>
            <CondominiumsInformation />
            <BottomNavbar previous='/' next='/step-three' nextTitle="Next" />
        </div>
    )
}
