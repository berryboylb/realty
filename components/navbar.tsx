"use client";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/assets";
import { NavLinks } from "@/lib/data";

export interface INavbrProps {}

export default function NavBar(props: INavbrProps) {
  const {} = useRouter();
  const path = usePathname();
  const [mobileNav, setmobileNav] = React.useState<boolean>(false);
  const isMobile: boolean = useMediaQuery({ query: `(max-width: 768px)` });
  const handleMobileNav = (): void => {
    if (isMobile) setmobileNav(!mobileNav);
  };

  return (
    <nav
      className={`container z-[99] lg:my-1 ${
        mobileNav && "absolute top-0 left-0 right-0"
      }`}
    >
      <div className="flex justify-between items-center py-[.5rem] lg:py-[.1rem] ">
        <div className="logo z-[999]" tabIndex={0}>
          <Link
            href="/"
            className="w-[80px] h-[50px] lg:w-[90px] lg:h-[70px]    block hover:opacity-80"
          >
            <Image
              src={Logo}
              alt="realty"
              className="w-full h-full object-contain "
              priority={true}
            />
          </Link>
        </div>
        <ul
          className={
            mobileNav
              ? "absolute right-0 top-0 pt-[5rem] lg:pt-0 w-full  flex items-center justify-evenly flex-col z-[98] border-b border-[#c5c5c5]   ease-in duration-300 bg-white pt-11 pb-5"
              : "lg:flex lg:items-center lg:capitalize hidden "
          }
        >
          {" "}
          {NavLinks.map((item, i: number) => (
            <li
              key={i}
              tabIndex={i + 1}
              className={
                path == item.link
                  ? `  lg:mx-5 mb-5 lg:mb-0  text-sm font-normal text-navHover  ease-in duration-300 hover:opacity-80 inline-block border-b border-secondary py-1 px-5  `
                  : ` lg:mx-5 mb-5 lg:mb-0  text-sm font-normal text-black  ease-in duration-300 hover:opacity-80 hover:text-navHover inline-block no-underline  `
              }
            >
              <Link href={item.link} onClick={handleMobileNav}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex  items-center">
          <li
            className={` z-[99] lg:block lg:ml-5 text-sm  text-white font-normal bg-black py-2 px-3  lg:py-3 lg:px-5 rounded-[100px] lg:hover:opacity-90 border-0  hover:navHover `}
          >
            <Link href="/contact" onClick={handleMobileNav}>
              Contact Us
            </Link>
          </li>
          <div
            className={
              mobileNav
                ? " lg:hidden block cursor-pointer z-[99] caret-transparent"
                : " lg:hidden block cursor-pointer z-[99] caret-transparent"
            }
            onClick={handleMobileNav}
          >
            <div
              className={
                mobileNav
                  ? " w-[30px] h-[2px] m-[5px] bg-black rounded origin-center rotate-45 -translate-x-[5px] translate-y-[6px] ease-in duration-300 line0"
                  : " w-[30px] h-[2px] m-[5px] bg-black rounded ease-in duration-300"
              }
            ></div>
            <div
              className={
                mobileNav
                  ? "w-[30px] h-[2px] m-[5px] bg-black rounded ease-in duration-300 opacity-0 line1"
                  : "w-[30px] h-[2px] m-[5px] bg-black rounded ease-in duration-300"
              }
            ></div>
            <div
              className={
                mobileNav
                  ? "w-[30px] h-[2px] m-[5px] bg-black rounded origin-center -rotate-45 -translate-x-[5px] -translate-y-[7.5px] ease-in duration-300 line2"
                  : " w-[30px] h-[2px] m-[5px] bg-black rounded ease-in duration-300"
              }
            ></div>
          </div>
        </ul>
      </div>
    </nav>
  );
}
