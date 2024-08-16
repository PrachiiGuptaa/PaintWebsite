
import React from 'react'
import Image from "next/image";
import BlogColour from "../../assets/images/BlogColour.png"
import BlogImage from "../../assets/images/BlogImage.png"

const Blog = ({ Data, BlogData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };
  return (
    <>
      <div className="pr-12 mt-16">
        <p className='text-xl'>{Data?.blogSubtitle}</p>
        <div className="flex gap-2 items-center">
          <h2 className="font-bold text-3xl mt-3 mb-6">{Data?.blogTitle}</h2>
          <Image src={BlogColour} alt="" />
        </div>
      </div>

      <div className="flex justify-between gap-5" >
        <div className="flex flex-col w-full gap-4">
          <div className="w-full">
            <img src={BlogData[0]?.featuredImage?.node?.sourceUrl} alt="" className="w-full object-cover aspect-[16/9]" />
            <div className='relative w-full'>
              <div className="absolute bottom-0 w-full bg-transparent p-4 text-white">
                <p className="text-sm">{formatDate(BlogData[0]?.date)}</p>
                <p className="mt-1 mb-2 text-xl font-semibold">{BlogData[0]?.title}</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <img src={BlogData[1]?.featuredImage?.node?.sourceUrl} alt="" className="w-full object-cover aspect-[16/9]" />
            <div className='relative w-full'>
              <div className="absolute bottom-0 w-full bg-transparent p-4 text-white ">
                <p className="text-sm">{formatDate(BlogData[1]?.date)}</p>
                <p className="mt-1 mb-2 text-xl font-semibold ">{BlogData[1]?.title}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Image src={BlogImage} alt="" className="w-full h-full object-cover aspect-square" />
          <div className='relative w-full'>
            <div className="absolute bottom-0 w-full bg-transparent p-4 text-white">
              <p className="text-sm">20 Jan 2024</p>
              <p className="mt-2 mb-2 text-xl font-semibold ">10 stylish cream colour <br />
                combination for your home</p>
              <button className="text-xs rounded-full bg-white text-[#00C1DE] border-2 border-[#00C1DE] py-2 px-6 mb-2">
                Read More 
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-4">
          <div className="w-full">
            <img src={BlogData[2]?.featuredImage?.node?.sourceUrl} alt=""  className="w-full h-full object-cover aspect-[16/9]" />

            <div className='relative w-full'>
              <div className="absolute bottom-0 w-full bg-transparent p-4 text-white">
                <p className="text-sm">{formatDate(BlogData[0]?.date)}</p>
                <p className="mt-1 mb-2 text-xl font-semibold">{BlogData[2]?.title}</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <img src={BlogData[3]?.featuredImage?.node?.sourceUrl} alt="" className="w-full h-full object-cover aspect-[16/9]" />
            <div className='relative w-full'>
              <div className="absolute bottom-0 w-full bg-transparent p-4 text-white">
                <p className="text-sm">{formatDate(BlogData[0]?.date)}</p>
                <p className="mt-1 mb-2 text-xl font-semibold">{BlogData[3]?.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog

