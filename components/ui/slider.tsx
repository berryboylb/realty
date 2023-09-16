import React from "react";
import Image, { StaticImageData } from "next/image";
import { Plus } from "@/assets";
import Slider from "./swiper";

const Sliderr = ({
  images,
  handleVideoToggle,
}: {
  images: Array<StaticImageData>;
  handleVideoToggle: () => void;
}) => {
  return (
    <div className="aspect-w-16 aspect-h-9 bg-gray-500 bg-opacity-50  fixed top-0 bottom-0 right-0 left-0 z-[9999] flex justify-center items-center">
      <button
        className="absolute top-2 right-2 z-10 px-2 py-1  text-white rounded-md -rotate-45"
        onClick={handleVideoToggle}
      >
        <Image
          src={Plus}
          alt={Plus.toString()}
          className="w-[30px] h-[30px] "
        />
      </button>
      <div className="w-[80%] h-[90%] rounded-lg">
        {/* <div className="h-[calc(100%-120px)]">
          <Slider images={images} />
        </div> */}
        <Slider images={images} />
        {/* <div className="lg:w-[70%] flex flex-wrap mt-5  w-auto mx-auto ">
          {images.map((item, i) => (
            <Image
              key={i}
              src={item}
              alt={item.toString()}
              className="w-[100px] h-[100px] object-cover rounded-[1.5rem] mr-[1rem] cursor-pointer"
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Sliderr;
