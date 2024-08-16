import React, { useState } from "react";
import Image from "next/image";
import Rainbow from "../../assets/images/rainbow.png";

const Home = ({ HomeData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!HomeData || HomeData.length === 0) return <div>Loading...</div>;

  const handleImageChange = (index) => {
    setCurrentIndex(index);
  };

  const currentBanner = HomeData[currentIndex];
  const { bannerImage, bannersTitle, bannerDescription, bannerButton } =
    currentBanner;

  return (
    <div className="relative w-full h-screen flex">
      <div className="w-full h-full absolute inset-0">
        <Image
          src={bannerImage.node.sourceUrl}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        <Image
          className="absolute w-full -bottom-[35%] z-10"
          src={Rainbow}
          alt="Rainbow Decoration"
        />
      </div>

      <div className="relative flex w-full h-full z-20">
        <div className="flex flex-col justify-center items-start p-10 w-1/2 text-white">
          <h1 className="text-5xl font-bold mb-2">{bannersTitle}</h1>
          <h2 className="mb-4">{bannerDescription}</h2>
          <a
            href={bannerButton.url}
            target="_blank"
            className="bg-white border-2 border-gray-600 text-gray-600 py-2 px-4 rounded-full text-xs"
          >
            {bannerButton.title}
          </a>
        </div>

        <div className="flex flex-col justify-center items-end w-1/2 p-10 space-y-4 z-30">
          <button
            className="w-1 h-20 bg-white border-2 border-white"
            onClick={() => handleImageChange(0)}
            aria-label="Image 1"
          />
          <button
            className="w-1 h-20 bg-white border-2 border-white"
            onClick={() => handleImageChange(1)}
            aria-label="Image 2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
