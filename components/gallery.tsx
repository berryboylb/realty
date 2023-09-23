"use client";
import React, { useState } from "react";
import Sliderr from "./ui/slider";
import Image, { StaticImageData } from "next/image";
import { Gala } from "@/assets";

const Gallery = ({
  images,
  image,
}: {
  images: Array<StaticImageData>;
  image: StaticImageData;
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const handleVideoToggle = () => setShowVideo((k) => !k);
  return (
    <>
      {" "}
      {showVideo && (
        <Sliderr images={images} handleVideoToggle={handleVideoToggle} />
      )}
      <div className="rounded-[1.5rem] h-[250px] lg:h-[500px] relative">
        <Image
          src={image}
          alt={image.toString()}
          className="w-full h-full object-cover relative  z-[1] rounded-[1.5rem]"
          priority={true}
        />
        <button
          onClick={handleVideoToggle}
          className="absolute z-20 bottom-[1rem] right-[1rem] lg:bottom-[1.5rem] lg:right-[1.5rem] text-xs lg:text-sm bg-white text-prefferredBlack capitalize rounded-[50px] px-5 py-3  w-auto flex items-center hover:scale-105 transition duration-300"
        >
          {" "}
          <Image
            src={Gala}
            alt="land scape"
            className="w-[15px] lg:w-[20px] h-[15px] lg:h-[20px] object-contain mr-3 text-white text-3xl"
            priority={true}
          />
          See All Gallery
        </button>
      </div>
    </>
  );
};

export default Gallery;
