"use client";
import Image from "next/image";
import { WhiteLogo } from "@/assets";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
export default function Loading() {
  const Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<any>();

  const q = gsap.utils.selector(Ref);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current = gsap
      .timeline()
      .from(q("#image"), {
        y: 100,
        opacity: 0,
        delay: 1,
        duration: 1,
        ease: "power1.in",
      })
      .to(q("#top"), {
        y: -100,
        opacity: 0,
        delay: 1,
        duration: 1.5,
        ease: "power1.in",
      })
      .to(
        q("#bottom"),
        {
          y: 100,
          opacity: 0,
          delay: 1,
          duration: 1.5,
          ease: "power1.in",
        },
        "-=2"
      );
  });
  return (
    <div
      ref={Ref}
      className="fixed top-0 bottom-0 left-0 right-0 flex justify-center h-screen items-center  z-[99999999999999999999999999999999999999] "
    >
      <div
        id="top"
        className="h-[50%] bg-footerBg absolute z-[9] w-full top-0"
      ></div>
      <div
        id="bottom"
        className="h-[50%] bg-footerBg absolute z-[9] w-full bottom-0"
      ></div>{" "}
      <Image
        id="image"
        src={WhiteLogo}
        alt="realty white"
        className="w-[80px] h-[30px] object-contain z-[15] "
        priority={true}
      />
    </div>
  );
}
