import React from "react";
import PopularColour from "../../assets/images/PopularColour.png";
import Image from "next/image";

const Colour = ({ Data, ColorData }) => {
  const repeatedColours = [
    ...ColorData,
    ...ColorData.slice(0, 6 - ColorData.length),
  ];

  const transformSlugToTitle = (slug) => {
    return slug
      .replace(/-/g, ' ') 
      .replace(/\b\w/g, char => char.toUpperCase());
  };

  return (
    <>
      <div className="pr-12">
        <p className='text-xl'>{Data?.homeColoursSubtitle}</p>
        <div className="flex gap-2 items-center justify-between">
          <div className='flex gap-2 items-center'>
            <h2 className="font-bold text-3xl mt-3 mb-6">{Data?.homeColoursTitle}</h2>
            <Image src={PopularColour} alt=""/>
          </div>
          <a href={Data?.homeColoursButton?.url} target="_blank" rel="noopener noreferrer" className="relative">
            <button className="text-xs rounded-full bg-white text-[#00AE44] border-2 border-[#00AE44] py-3 px-6 font-semibold">
              {Data?.homeColoursButton?.title}
            </button>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {repeatedColours.map((colour, index) => (
          <div 
            key={index} 
            className="relative group w-full inline-block hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="absolute top-0 left-0 right-0 bg-white text-center py-1 border-b-2 border-transparent group-hover:opacity-100 opacity-0 transition-opacity duration-300">
            Astral Paints
            </div>
            
            <div
              className="w-full h-32 mt-6"
              style={{ backgroundColor: colour?.colourInfo?.selectColor }} 
            ></div>
            
            <div className="w-full text-center bg-white py-2 border-t-2 border-transparent">
              <p className="font-semibold">{transformSlugToTitle(colour?.slug)}</p> 
              <p className="text-sm text-gray-400">{colour?.colourInfo?.selectColor}</p> 
            </div>
            
            <div className="absolute inset-0 border-2 rounded-xl border-transparent group-hover:border-gray-300 group-hover:shadow-xl transition-shadow duration-300"></div>
              </div>
        ))}
      </div>
    </>
  );
};

export default Colour;
