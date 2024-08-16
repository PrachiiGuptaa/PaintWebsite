import Image from 'next/image'
import React from 'react'
import Logo from '../../assets/images/Logo.png'

const Navbar = () => {
  return (
 <>
<div className="sticky top-0 flex items-center justify-between p-4 bg-[#0060AF] z-50">
        <a href='#home' className="flex items-center">
          <Image src={Logo} alt="Company Logo" width={100} height={50} className="h-auto" />
        </a>
        <div className="flex space-x-6 text-white text-sm items-center font-semibold">
          <a href="#about">About</a>
          <a href="#category">Category</a>
          <a href="#services">Services</a>
          <a href="#colours">Colours</a>
          <a href="#downloads">Downloads</a>
          <a href="#dealer">Become a Dealer</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
          <button id="enquiry" className="text-xs rounded-full bg-white text-[#0060AF] p-2">
            Enquire Now
          </button>
        </div>
      </div>
</> 

)

}

export default Navbar