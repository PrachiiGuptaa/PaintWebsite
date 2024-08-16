import React from "react";
import FooterBg from "../../assets/images/FooterBg.png";
import Pipes from "../../assets/images/Pipes.png";
import Adhesives from "../../assets/images/Adhesive.png";
import Bathware from "../../assets/images/Bathware.png";
import Bond from "../../assets/images/Bond.png";
import Gem from "../../assets/images/Gem.png";
import Logo from "../../assets/images/Logo.png";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF , FaInstagramSquare , FaYoutube  } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${FooterBg.src})`,
      }}
    >
      <div className="text-white">
        <h2 className="text-xl font-bold p-8 text-center">Group Company</h2>
        <div className="flex justify-center gap-4">
          <Image src={Pipes} alt="" height={50} width={100} />
          <Image src={Adhesives} alt="" height={50} width={100} />
          <Image src={Bond} alt="" height={50} width={100} />
          <Image src={Bathware} alt="" height={50} width={100} />
          <Image src={Gem} alt="" height={50} width={100} />
        </div>
        <hr className=" w-[80%] mx-auto border-gray-300 pb-10 mt-6" />

        <div className="grid grid-cols-[0.7fr_1fr] w-[80%] mx-auto justify-center items-center">
          <div>
            <Image
              src={Logo}
              alt="Company Logo"
              width={100}
              height={50}
              className="h-auto"
            />
          </div>
          <div className="grid grid-cols-[0.7fr_1fr] gap-4">
            <div className="flex flex-col justify-center items-start">
              <p className="text-[#EEDBB1] text-sm">Sign Up To Our Newsletter</p>
              <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-3 block w-full text-white rounded-full shadow-sm sm:text-sm pr-24 bg-transparent border border-white focus:outline-none focus:border-white"
                placeholder="Enter Email Address"
              />
              <button className="absolute right-0 top-7 transform -translate-y-1/2 translate-x-1/2 bg-[#0060AF] text-white py-3 px-4 rounded-full">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
        
              <div className="grid grid-cols-[0.7fr_1fr] w-[80%] mx-auto justify-center items-center mt-10">
   <div>
        <h3 className="text-sm font-semibold text-[#EEDCB2]">Reach Us</h3>
        <div className="mt-4 space-y-2 text-xs mr-20">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-white w-4 h-4 mr-2" />
            <p>#417/418, 11th Cross, 4th Phase, Peenya Industrial Area, Bangalore - 560 058</p>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="text-white w-4 h-4 mr-2" />
            <p className='my-2'>+91 – 80 – 42552555</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-white w-4 h-4 mr-2" />
            <p>contact@example.com</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 items-start justify-start">
  <div>
    <h4 className="text-[#EEDCB2] mb-2 text-sm font-semibold">About</h4>
    <ul className="space-y-2 text-white text-xs">
      <li>About astrals</li>
      <li>Paint journey</li>
      <li>Group Companies</li>
    </ul>
  </div>
  <div>
    <h4 className="text-[#EEDCB2] mb-2 text-sm font-semibold">Category</h4>
    <ul className="space-y-2 text-white text-xs">
      <li>Interior paints</li>
      <li>Exterior paints</li>
      <li>Undercoats</li>
      <li>Painting tools</li>
      <li>Water proofing</li>
    </ul>
  </div>
  <div>
    <h4 className="text-[#EEDCB2] mb-2 text-sm font-semibold">Services</h4>
    <ul className="space-y-2 text-white text-xs">
      <li>Wall painting</li>
      <li>Water Solution</li>
      <li>Painting</li>
      <li>Colour shades</li>
    </ul>
  </div>
 
   <div>
    <h4 className="text-[#EEDCB2] mb-2 text-sm font-semibold">Downloads</h4>
    <ul className="space-y-2 text-xs text-[#EEDCB2]">
      <li>Become a dealer</li>
      <li>Blogs</li>
      <li>Contact</li>
      <li className="grid grid-cols-4 mt-5 gap-2">
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <FaInstagramSquare />
  </a>
  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
    <FaYoutube />
  </a>
  <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
    <FaXTwitter />
  </a>
</li>

    </ul>
  </div>
</div>

</div>


        <div className="bg-[#0060AF] flex justify-between px-9 py-2 mt-10">
          <p>Terms and conditions</p>
          <p>All Rights Reserved</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
