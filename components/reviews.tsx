"use client";
import { reviews } from "@/lib";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import { useMediaQuery } from 'react-responsive';
export default function Reviews() {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  useEffect(() => {
    if (!isMobile)
      gsap.to("#review #sticky", {
        scrollTrigger: {
          trigger: "#sticky",
          start: "top 90%",
          end: "bottom bottom",
          toggleActions: "restart complete reverse reset",
        },
        duration: 3,
        ease: "power4.inOut",
        position: "sticky",
        top: "0",
        left:"0",
        // y: 200,
      });
  }, [isMobile]);
  return (
    <section id="review" className="mt-[5rem]">
      <div className="flex justify-between flex-wrap w-full relative">
        <div id="sticky" className="w-full lg:w-1/2 ">
          <h3 className="text-[2rem] lg:text-[3.25rem]  font-medium leading-[1.25]  lg:mt-[3rem]">
            What Our Clients Say
          </h3>
          <p className="text-base  mt-10">
            At Realty, we are committed to providing our clients with the best
            possible real estate experience. But don &apos;t just take our word
            for it. Here &apos;s what some of our satisfied clients have to say
            about working with us.
          </p>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="relative flex mt-8">
            <div className="flex flex-col items-end relative ">
              <div className="w-[6.25rem] h-[7rem] lg:w-[8.25rem] lg:h-[9rem] bg-reviewBg rounded-t-[1.5rem] rounded-bl-[1.5rem]">
                <div className="w-full h-[7rem] lg:h-full rounded-[1.5rem] pr-5 pb-5 bg-white ">
                  <Image
                    src={reviews[0].image}
                    alt={reviews[0].image.toString()}
                    className="w-full h-full rounded-[1.5rem]"
                  />
                </div>
                <div className="bg-reviewBg  rounded-l-[1.5rem] w-[65%] min-h-[calc(100%-7rem)] lg:min-h-[3rem] bottom-0 absolute right-[0]  "></div>
              </div>
            </div>
            <div className="bg-reviewBg px-[1rem] py-[1.5rem] lg:p-[2rem] rounded-t-[1.5rem] rounded-br-[1.5rem] ">
              <h3 className="text-base font-semibold">{reviews[0].name}</h3>
              <p className="text-base text-propColor mt-2">
                &quot;{reviews[0].review}&quot;
              </p>
            </div>
          </div>
          <div className="relative flex mt-8">
            <div className="bg-reviewBg px-[1rem] py-[1.5rem] lg:p-[2rem] rounded-t-[1.5rem] rounded-bl-[1.5rem] ">
              <h3 className="text-base font-semibold">{reviews[1].name}</h3>
              <p className="text-base text-propColor mt-2">
                &quot;{reviews[1].review}&quot;
              </p>
            </div>
            <div className="flex flex-col items-end relative ">
              <div className="w-[6.25rem] h-[7rem] lg:w-[8.25rem] lg:h-[9rem] bg-reviewBg rounded-t-[1.5rem] rounded-br-[1.5rem]">
                <div className="w-full h-[7rem] lg:h-full rounded-[1.5rem] pl-5 pb-5 bg-white ">
                  <Image
                    src={reviews[1].image}
                    alt={reviews[1].image.toString()}
                    className="w-full h-full rounded-[1.5rem]"
                  />
                </div>
                <div className="bg-reviewBg rounded-r-[1.5rem] w-[65%] min-h-[calc(100%-7rem)] lg:min-h-[3rem] bottom-0 absolute left-[0]  "></div>
              </div>
            </div>
          </div>
          {/* {reviews.map((item, i) => (
            <div key={i} className="relative flex mt-10">
              <div className="flex flex-col items-end relative ">
                <div className="w-[8.25rem] h-[9rem] bg-reviewBg rounded-t-[1.5rem] rounded-bl-[1.5rem]">
                  <div className="w-full h-full rounded-[1.5rem] pr-5 pb-5 bg-white ">
                    <Image
                      src={item.image}
                      alt={item.image.toString()}
                      className="w-full h-full rounded-[1.5rem]"
                    />
                  </div>
                  <div className="bg-reviewBg rounded-l-[1.5rem] w-[65%] min-h-[3rem] bottom-0 absolute right-[0]  "></div>
                </div>
              </div>
              <div className="bg-reviewBg p-[2rem] rounded-t-[1.5rem] rounded-br-[1.5rem] ">
                <h3 className="text-base font-semibold">{item.name}</h3>
                <p className="text-base text-propColor mt-2">
                  &quot;{item.review}&quot;
                </p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}
