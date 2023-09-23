"use client";
import React, { useState } from "react";
import { Condo, Star, ArrowRight, Play, Chair } from "@/assets";
import Link from "next/link";
import Image from "next/image";
import Slider from "./ui/swiper";
import { Sliderimages } from "@/lib";
import Embed from "./ui/youtube-embed";
export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const handleVideoToggle = () => setShowVideo((k) => !k);

  return (
    <section className="">
      <div className="flex justify-between flex-wrap w-full">
        <div className="w-full lg:w-1/2">
          <h1 className="text-[2.5rem] lg:text-[3.25rem]  font-medium leading-[1.25]">
            Discover Your Ideal Living Space
          </h1>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-prefferredBlack text-base lg:text-lg mt-7 lg:mt-0">
            Explore our latest collection of premium properties and find your
            dream home today. From luxurious estates to trendy urban condos, we
            have something for every lifestyle and budget.
          </p>
        </div>
      </div>
      <div className=" mt-[1rem] lg:mt-10 grid grid-cols-1 lg:grid-cols-6 gap-[1rem] lg:gap-[1.5rem] ">
        <Link
          href={``}
          className="block relative col-span-6 lg:col-span-3  h-[250px] lg:h-[650px] rounded-[30px] group"
        >
          <Image
            src={Condo}
            alt={Condo.toString()}
            className="w-full h-full object-cover relative  z-[1] rounded-[30px]"
            priority={true}
          />
          <div className="z-[99] w-full h-full  absolute top-0 bottom-0 left-0 right-0 rounded-[30px] flex flex-col justify-between p-[1rem] lg:p-[2rem]">
            <div>
              <div>
                <button className="bg-white text-prefferredBlack uppercase rounded-[50px] px-5 py-3 text-xs w-auto flex items-center">
                  <Image
                    src={Star}
                    alt={Star.toString()}
                    className="w-[20px] h-[20px] mr-1"
                  />
                  New Property
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <div>
                <h3 className="text-white font-bold text-3xl lg:text-[2rem]">
                  Luxury Condo
                </h3>
                <p className="text-white uppercase text-sm mt-4">
                  456 PARK AVENUE, NEW YORK,NY
                </p>
              </div>
              <button className="bg-white text-prefferredBlack rounded-full p-3 transition duration-300 group-hover:-rotate-45">
                <Image
                  src={ArrowRight}
                  alt={ArrowRight.toString()}
                  className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] rounded-full"
                />
              </button>
            </div>
          </div>
        </Link>
        <div className="col-span-6 lg:col-span-3  grid grid-flow-row lg:grid-rows-6 gap-[1rem] lg:gap-[1.5rem] ">
          <div className="row-span-3 rounded-[30px] w-full overflow-hidden ">
            <Slider images={Sliderimages} />

            {/* <h1>Carousel</h1> */}
          </div>
          <div className="row-span-3  rounded-[30px] grid grid-cols-1 lg:grid-cols-6 gap-[1rem] lg:gap-[1.5rem]">
            <div
              onClick={handleVideoToggle}
              role="button"
              className="col-span-6 lg:col-span-3  rounded-[30px] h-[250px] lg:h-auto   relative group overflow-hidden cursor-pointer"
            >
              <div className="w-full h-full z-[9] absolute top-0 right-0 bottom-0 left-0 rounded-[30px] flex justify-center items-center">
                <div className="invisible rounded-full p-5 backdrop-blur-lg bg-opacity-30 bg-gray-200 group-hover:visible transition duration-300 ">
                  <Image
                    src={Play}
                    alt={Play.toString()}
                    className="w-[15px] h-[15px] lg:w-[20px] relative lg:h-[20px]  rounded-full "
                  />
                </div>
              </div>
              <Image
                src={Chair}
                alt={Chair.toString()}
                className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 group-hover:scale-150 transition duration-300  z-[1] rounded-[30px]"
              />
            </div>
            <div className="col-span-6 lg:col-span-3 bg-grey rounded-[30px] h-[250px]  lg:h-auto  p-[1rem] lg:p-[2rem] group cursor-pointer">
              <h1 className="font-normal text-3xl lg:text-4xl text-prefferredBlack">
                140+
              </h1>
              <p className="text-prefferredBlack my-2 uppercase leading-[1.5] text-sm">
                properties
              </p>
              <p className="mt-2 text-xs text-prefferredBlack">
                Explore our wide variety of of properties to find your dream
                home today.
              </p>
              <div className="flex justify-end items-end">
                <button className="bg-white text-prefferredBlack rounded-full mt-[4.5rem] mb-2 p-3 transition duration-300 group-hover:-rotate-45">
                  <Image
                    src={ArrowRight}
                    alt={ArrowRight.toString()}
                    className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] rounded-full"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showVideo && (
        <Embed videoId={"asy3ZV8Ui7k"} handleVideoToggle={handleVideoToggle} />
      )}
    </section>
  );
}
