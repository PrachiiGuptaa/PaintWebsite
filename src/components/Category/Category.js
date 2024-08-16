import React from "react";
import Image from "next/image";
import CategoryColour from "../../assets/images/CategoryColour.png"

const Category = ({ Data }) => {
  return (
    <>
      <div className="pr-12">
        <p className="text-xl">{Data?.homeCategorySubtitle}</p>
        <div className="flex gap-2 items-center">
          <h2 className="font-bold text-3xl mt-3 mb-6">
            {Data?.homeCategoryTitle}
          </h2>
          <Image src={CategoryColour} alt="" />
        </div>
      </div>

      <div className="flex justify-between gap-5">
        {Data?.categories?.length > 0 && (
          <div className="relative w-full">
            <a
              href={Data?.categories[0]?.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Data?.categories[0]?.image?.node?.sourceUrl}
                alt={Data?.categories[0]?.title}
                className="w-full h-auto object-cover"
                width={500}
                height={300}
              />
            </a>
            <div className="absolute bottom-0 w-full bg-opacity-50 bg-[#FF911999] text-center p-4 flex justify-between items-center">
              <p className="text-white ">{Data?.categories[0]?.title}</p>
              <button className="text-xs rounded-full bg-white text-[#FF911999] font-semibold py-2 px-6">
                Read More
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-wrap w-full gap-5">
          {Data?.categories.slice(1).map((category, index) => (
            <div key={index} className="w-[calc(50%-12.5px)] relative">
              <a
                href={category?.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-full relative h-full">
                  <img
                    src={category?.image?.node?.sourceUrl}
                    alt={category?.title}
                    className="w-full absolute top-0 left-0 h-full object-cover"
                  />
                </div>
              </a>
              <p className="absolute bottom-0 w-full text-white text-center">
                {category?.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
