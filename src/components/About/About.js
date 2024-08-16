import React from "react";
import Image from "next/image";
import { FaPlay } from 'react-icons/fa';
import RedCrayon from "../../assets/images/RedCrayon.png";

const About = ({ Data }) => {
  const paragraphs = Data?.homeAboutDescription
    .split(/<\/p>\s*<p>/)
    .map((p) => p.replace(/<\/?p>/g, "").trim());

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="pr-12 w-full">
          <p className="text-xl">{Data?.homeAboutSubtitle}</p>
          <div className="flex gap-2 items-center">
            <h2 className="font-bold text-3xl mt-3 mb-6">
              {Data?.homeAboutTitle}
            </h2>
            <Image src={RedCrayon} alt="" />
          </div>
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={index === 1 ? "mt-2 mb-6" : ""}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
          <a
            href={Data?.homeAboutButton?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-xs rounded-full bg-white text-[#E70000] border-2 border-[#E70000] py-2 px-6">
              {Data?.homeAboutButton?.title}
            </button>
          </a>
        </div>
        <div className="relative flex justify-end w-full">
      <a href={Data?.homeAboutVideoUrl} target="_blank" rel="noopener noreferrer" className="relative">
        <Image 
          src={Data?.homeAboutVideoImage.node.sourceUrl} 
          alt="About Image" 
          className="w-auto h-auto" 
          width={500} 
          height={300}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <FaPlay className="text-white text-4xl transition-transform duration-300 ease-in-out transform hover:scale-125" />
        </div>
      </a>
    </div>
      </div>
    </>
  );
};

export default About;
