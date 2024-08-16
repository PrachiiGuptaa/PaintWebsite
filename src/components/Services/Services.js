import React from 'react'
import Image from "next/image";
import ServiceColour from "../../assets/images/ServiceColour.png"
import Service1 from "../../assets/images/Service1.png"
import Service2 from "../../assets/images/Service2.png"
import Service3 from "../../assets/images/Service3.png"

const Services = ({Data}) => {
  return (
    <>
      <div className="pr-12 mt-16">
        <p className='text-xl'>{Data?.homeServicesSubtitle}</p>
        <div className="flex gap-2 items-center">
          <h2 className="font-bold text-3xl mt-3 mb-6">{Data?.homeServicesTitle}</h2>
          <Image src={ServiceColour} alt=""/>
        </div>
      </div>

      <div className='flex justify-between items-center gap-5'>
      <div className='relative w-full'>
          <Image src={Service1} alt="" className="w-full h-auto object-cover"/>
          <div className="absolute bottom-0 w-full bg-opacity-50 bg-[#FFE71099] p-4">
            <p className="text-xl font-semibold">Wall Painting</p>
            <p className="mt-1 mb-2">Lorem ipsum dolar sit</p>
            <button className="text-xs rounded-full bg-white text-black py-2 px-6 mb-2">
            Read More
          </button>
            </div>
        </div>
        <div className='relative w-full'>
          <Image src={Service2} alt="" className="w-full h-auto object-cover"/>
          <div className="absolute bottom-0 w-full bg-opacity-50 bg-[#FFE71099] p-4">
            <p className="text-xl font-semibold">Wall Painting</p>
            <p className="mt-1 mb-2">Lorem ipsum dolar sit</p>
            <button className="text-xs rounded-full bg-white text-black py-2 px-6 mb-2">
            Read More
          </button>
            </div>
        </div>
        <div className='relative w-full'>
          <Image src={Service3} alt="" className="w-full h-auto object-cover"/>
          <div className="absolute bottom-0 w-full bg-opacity-50 bg-[#FFE71099] p-4">
            <p className="text-xl font-semibold">Wall Painting</p>
            <p className="mt-1 mb-2">Lorem ipsum dolar sit</p>
            <button className="text-xs rounded-full bg-white text-black py-2 px-6 mb-2">
            Read More
          </button>
            </div>
        </div>
       
        
      </div>
    </>
  )
}

export default Services