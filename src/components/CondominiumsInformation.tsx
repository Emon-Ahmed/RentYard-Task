import React from 'react'
import PropertyAddress from './ui/PropertyAddress'
import PetFees from './ui/PetFees'
import LeasingInfo from './ui/LeasingInfo'
import Charges from './ui/Charges'
import RentFrequency from './ui/RentFrequency'
import ApplicationAgreement from './ui/ApplicationAgreement'
import Parking from './ui/Parking'
import NearestEducational from './ui/NearestEducational'
import NearestStations from './ui/NearestStations'
import NearestLandmark from './ui/NearestLandmark'
import UtilitiesProvider from './ui/UtilitiesProvider'
import AboutTheProperty from './ui/AboutTheProperty'
import CommunityAmenity from './ui/CommunityAmenity'
import PropertyGallery from './ui/PropertyGallery'
import Videos from './ui/Videos'

export default function CondominiumsInformation() {
    return (
        <div className='container mx-auto pt-6 pb-36'>
            <div className='text-2xl font-bold text-primary-text-black'>Condominiums Information</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 grid-flow-row auto-rows-max">
                <div className='flex flex-col gap-6'>
                    <PropertyAddress />
                    <LeasingInfo />
                    <Charges />
                    <RentFrequency />
                    <ApplicationAgreement />
                    <AboutTheProperty />
                    <CommunityAmenity />
                </div>
                <div className='flex flex-col gap-6'>
                    <PetFees />
                    <Parking />
                    <NearestEducational />
                    <NearestStations />
                    <NearestLandmark />
                    <UtilitiesProvider />
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                <PropertyGallery />
                <Videos />
            </div>
        </div>
    )
}
