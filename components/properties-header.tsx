"use client";
import { properties } from "@/lib";
import Link from "next/link";
import Image from "next/image";
import { Bed, Shower, Size, Plus } from "@/assets";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const location = ["miami", "aspen", "malibu", "new york"];
export function PropertiesHeader() {
  const isMobile: boolean = useMediaQuery({ query: `(max-width: 768px)` });
  const [popup, setPopup] = useState<boolean>(false);
  const updatePopupState = () => setPopup((popup) => !popup);
  return (
    <section>
      <div className=" mt-[1rem] lg:mt-[5rem] lg:w-1/2 mx-auto">
        <h1 className="text-[2rem] lg:text-[3.25rem]  font-medium leading-[1.25] text-center text-prefferredBlack">
          Our properties
        </h1>
        <p className=" mt-8 lg:mt-10 text-prefferredBlack text-base lg:text-lg text-center ">
          Welcome to our properties page, where you can explore a wide range of
          stunning homes, from cozy apartments to luxurious estates.
        </p>
      </div>
      <div className="grid gap-[3rem]  grid-cols-1 lg:grid-cols-8 mt-10">
        <button
          onClick={updatePopupState}
          className="w-full text-base border p-3 rounded-[100px] text-prefferredBlack capitalize lg:hidden"
        >
          Filters
        </button>
        {isMobile ? (
          <>
            {popup && (
              <div className="lg:col-span-2 lg:static fixed top-0 left-0 right-0 bottom-0 bg-white lg:bg-transparent z-[99999999999999999999999] lg:z-[1] p-5 lg:p-0 ease-in duration-300 ">
                <div className="flex items-center justify-end my-3 w-full lg:hidden">
                  <button
                    className={
                      " lg:hidden block cursor-pointer z-[99] caret-transparent"
                    }
                    onClick={updatePopupState}
                  >
                    <div
                      className={
                        " w-[20px] h-[2px] m-[5px] bg-black rounded origin-center rotate-45 -translate-x-[5px] translate-y-[6px] ease-in duration-300 line0"
                      }
                    ></div>
                    <div
                      className={
                        "w-[20px] h-[2px] m-[5px] bg-black rounded ease-in duration-300 opacity-0 line1"
                      }
                    ></div>
                    <div
                      className={
                        "w-[20px] h-[2px] m-[5px] bg-black rounded origin-center -rotate-45 -translate-x-[5px] -translate-y-[7.5px] ease-in duration-300 line2"
                      }
                    ></div>
                  </button>
                </div>
                <div className="flex items-center justify-between border-b pb-5">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <button>All Properties</button>
                </div>

                <div className="mt-5 border-b pb-10">
                  <h3 className=" text-base lg:text-lg ">Location</h3>
                  <div className="mt-5 flex items-center justify-start flex-wrap">
                    {location.map((item) => (
                      <button
                        className="border p-2 rounded-[100px] font-normal text-sm lg:text-base text-prefferredBlack capitalize mr-2 mt-2 hover:border-black"
                        key={item}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className=" text-base lg:text-lg ">Property Type</h3>
                  <div className="mt-5 flex items-center justify-start flex-wrap">
                    {location.map((item) => (
                      <button
                        className="border p-2 rounded-[100px] font-normal text-sm lg:text-base text-prefferredBlack capitalize mr-2 mt-2 hover:border-black"
                        key={item}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="lg:col-span-2 lg:static fixed top-0 left-0 right-0 bottom-0 bg-white lg:bg-transparent z-[99999999999999999999999] lg:z-[1] p-5 lg:p-0 ease-in duration-300 ">
            <div className="flex items-center justify-end my-3 w-full lg:hidden">
              <button
                className={
                  " lg:hidden block cursor-pointer z-[99] caret-transparent"
                }
                onClick={updatePopupState}
              >
                <div
                  className={
                    " w-[20px] h-[2px] m-[5px] bg-black rounded origin-center rotate-45 -translate-x-[5px] translate-y-[6px] ease-in duration-300 line0"
                  }
                ></div>
                <div
                  className={
                    "w-[20px] h-[2px] m-[5px] bg-black rounded ease-in duration-300 opacity-0 line1"
                  }
                ></div>
                <div
                  className={
                    "w-[20px] h-[2px] m-[5px] bg-black rounded origin-center -rotate-45 -translate-x-[5px] -translate-y-[7.5px] ease-in duration-300 line2"
                  }
                ></div>
              </button>
            </div>
            <div className="flex items-center justify-between border-b pb-5">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button>All Properties</button>
            </div>

            <div className="mt-5 border-b pb-10">
              <h3 className=" text-base lg:text-lg ">Location</h3>
              <div className="mt-5 flex items-center justify-start flex-wrap">
                {location.map((item) => (
                  <button
                    className="border p-2 rounded-[100px] font-normal text-sm lg:text-base text-prefferredBlack capitalize mr-2 mt-2 hover:border-black"
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className=" text-base lg:text-lg ">Property Type</h3>
              <div className="mt-5 flex items-center justify-start flex-wrap">
                {location.map((item) => (
                  <button
                    className="border p-2 rounded-[100px] font-normal text-sm lg:text-base text-prefferredBlack capitalize mr-2 mt-2 hover:border-black"
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="lg:col-span-6  grid gap-[1rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-prefferredBlack ">
          {properties.map((item, i) => (
            <div key={i} className="overflow-hidden ">
              <div className="overflow-hidden p-5 rounded-[30px] bg-propBg h-[250px] lg:h-[250px] relative group transition duration-500">
                <h4 className="text-base font-semibold">${item.amount}</h4>
                <p className="mt-2 text-sm text-propColor">{item.address}</p>
                <div className="flex items-center mt-3">
                  <h5 className="flex items-center text-sm text-propColor">
                    <Image
                      src={Bed}
                      alt={Bed.toString()}
                      className="w-[20px] h-[20px] mr-1"
                    />
                    {item.bedrooms}
                  </h5>
                  <h5 className=" ml-5 flex  items-center text-sm text-propColor">
                    <Image
                      src={Shower}
                      alt={Shower.toString()}
                      className="w-[20px] h-[20px] mr-1"
                    />
                    {item.bathrooms}
                  </h5>
                  <h5 className="ml-5 flex items-center text-sm text-propColor">
                    <Image
                      src={Size}
                      alt={Size.toString()}
                      className="w-[20px] h-[20px] mr-1"
                    />
                    {item.space}
                  </h5>
                </div>
                <div className="absolute top-0 right-0 left-0 bottom-0 lg:group-hover:top-[70%] transition duration-5000">
                  {" "}
                  <Image
                    src={item.image}
                    alt={item.image.toString()}
                    className="w-full h-full object-cover z-[3] transition duration-500"
                  />
                  <button className="z-[5] backdrop-blur-lg bg-opacity-30 bg-gray-200  absolute top-[5%] right-[5%] rounded-full p-3 transition duration-5000 group-hover:-rotate-45">
                    <Image
                      src={Plus}
                      alt={Plus.toString()}
                      className="w-[20px] h-[20px] "
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <h3 className="lg:mt-2 lg:mb-4 capitalize  text-sm lg:text-base">
                  {item.name}
                </h3>
                <h4 className="text-base font-semibold lg:hidden">
                  ${item.amount}
                </h4>
              </div>
              <div className="flex items-center mt-1 lg:hidden">
                <h5 className="flex items-center text-sm text-propColor">
                  <Image
                    src={Bed}
                    alt={Bed.toString()}
                    className="w-[20px] h-[20px] mr-1"
                  />
                  {item.bedrooms}
                </h5>
                <h5 className=" ml-5 flex  items-center text-sm text-propColor">
                  <Image
                    src={Shower}
                    alt={Shower.toString()}
                    className="w-[20px] h-[20px] mr-1"
                  />
                  {item.bathrooms}
                </h5>
                <h5 className="ml-5 flex items-center text-sm text-propColor">
                  <Image
                    src={Size}
                    alt={Size.toString()}
                    className="w-[20px] h-[20px] mr-1"
                  />
                  {item.space}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
