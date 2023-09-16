"use client";
import { services } from "@/lib";
import Link from "next/link";
import Image from "next/image";
import image from "../assets/jpgs/prop.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import { useMediaQuery } from "react-responsive";
export default function Services() {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  useEffect(() => {
    if (isMobile === false)
      gsap.to("#services #banner", {
        scrollTrigger: {
          trigger: "#banner",
          start: "top 90%",
          end: "bottom bottom",
          toggleActions: "restart complete reverse reset",
        },
        y: -200,
        x: 0,
        duration: 2,
        ease: "power4.inOut",
        // width: "100vw",
        // marginLeft: "-2rem",
      });
  }, [isMobile]);
  return (
    <section className="mt-[5rem]" id="services">
      <div className="w-full lg:w-1/2">
        <h1 className="text-2xl lg:text-3xl text-prefferredBlack  font-medium leading-[1.5]">
          Comprehensive real estate services to help you buy, sell, and manage
          your properties with ease and confidence.
        </h1>
      </div>
      <div className="mt-10 grid gap-[1rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-prefferredBlack">
        {services.map((item, i) => (
          <div key={i}>
            <h4 className="text-lg lg:text-xl">0{i + 1}</h4>
            <h3 className="mt-2 mb-4 uppercase text-base">{item.title}</h3>
            <p className="mt-5 text-base">{item.description}</p>
          </div>
        ))}
      </div>
      <div
        id="banner"
        className="bg-[url('../assets/jpgs/prop.jpg')] bg-cover bg-no-repeat bg-left lg:bg-center mt-[2rem] rounded-[30px] flex items-center flex-col p-[1.5rem] lg:p-[2rem] lg:h-[800px]"
      >
        <div className="w-full lg:w-[60%]">
          <h1 className="text-[2rem] lg:text-[3.25rem]  font-medium leading-[1.25] text-center lg:mt-[3rem]">
            Your Trusted Real Estate with 15 years of experience
          </h1>

          <p className="text-base text-center mt-10">
            At Realty, we are passionate about real estate and committed to
            providing our clients with exceptional service and support. With
            years of experience in the industry and a proven track record, our
            expert agents can help you achieve your real estate goals.
          </p>
          <div className="flex items-center justify-center mt-10">
            {" "}
            <Link
              className={` lg:block lg:ml-5 text-sm  text-white font-normal bg-black py-2 px-3  lg:py-3 lg:px-5 rounded-[100px] lg:hover:opacity-90 border-0  hover:navHover `}
              href="/about"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
