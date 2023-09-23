"use client";
import Link from "next/link";
import Image from "next/image";
import { WhiteLogo } from "@/assets";
import { FooterLink } from "@/lib";
import { z } from "zod";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import { useMediaQuery } from "react-responsive";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ErrorMessage } from "@hookform/error-message";
export default function Footer() {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const formSchema = z.object({
    email: z
      .string()
      .min(8, { message: "Email length must be at least 8." })
      .email({ message: "The email is invalid." })
      .trim(),
  });
  useEffect(() => {
    if (isMobile === false)
      gsap.from("#footer #inner", {
        scrollTrigger: {
          trigger: "#inner",
          start: "top 90%",
          end: "bottom bottom",
          toggleActions: "restart complete reverse reset",
        },
        duration: 2,
        y:50,
        ease: "bounce",
        // width: "100vw",
        // marginLeft: "-2rem",
      });
  }, [isMobile]);
  return (
    <footer
      id="footer"
      className="mt-[1rem] lg:mt-[5rem] container lg:mb-[1rem]"
    >
      <div
        id="inner"
        className=" bg-footerBg text-white rounded-[30px] p-[1rem] lg:p-[2rem] "
      >
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-[1rem] lg:gap-[1.5rem]">
          <div className="col-span-7 lg:col-span-2">
            <div className="logo z-[999] ">
              <Link
                href="/"
                className="w-[80px] h-[30px] lg:w-[90px] lg:h-[30px]    block hover:opacity-80"
              >
                <Image
                  src={WhiteLogo}
                  alt="realty white"
                  className="w-full h-full object-contain "
                  priority={true}
                />
              </Link>
            </div>
            <p className="text-sm mt-5">
              &quot;Home is where the heart is and where the memories are made
              &quot;
            </p>
            <h4 className="mt-10 lg:hidden text-base capitalize">NewsLetter</h4>
            <form
              //   onSubmit={handleSubmit(onSubmit)}
              className=" mt-5 lg:hidden flex flex-wrap items-center justify-between  bg-white rounded-[50px] p-1 pl-5 "
            >
              <input
                className={`w-[50%] border text-sm text-footer h-full  lg:text-base border-none  bg-white outline-none placeholder:text-[#AFAFAF] placeholder:text-sm placeholder:opacity-[.6]`}
                aria-label="name"
                placeholder="Email Address"
                type="email"
                id="name"
                // aria-invalid={Boolean(errors.email)}
                // {...register("email", { required: "This is required." })}
                // disabled={isSubmitting}
              />
              <button
                // disabled={isSubmitting}
                type="submit"
                className=" bg-footerBg capitalize text-white text-sm  px-3 py-2  rounded-[20px] cursor-pointer  hover:bg-navHover hover:text-white  hover:border-white "
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="col-span-7 lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-[1rem]  lg:mt-0">
            {FooterLink.map((item, i) => (
              <div key={i} className="mt-[2rem] lg:mt-0">
                <h4 className=" text-base capitalize">{item.title}</h4>
                <Link
                  href={item.link1.link}
                  className="text-footerColor block mt-5 text-sm hover:text-white transition duration-300"
                >
                  {item.link1.name}
                </Link>
                <Link
                  href={item.link2.link}
                  className="text-footerColor block mt-5 text-sm hover:text-white transition duration-300"
                >
                  {item.link2.name}
                </Link>
                <Link
                  href={item.link3.link}
                  className="text-footerColor block mt-5 text-sm hover:text-white transition duration-300"
                >
                  {item.link3.name}
                </Link>
                <Link
                  href={item.link4.link}
                  className="text-footerColor block mt-5 text-sm hover:text-white transition duration-300"
                >
                  {item.link4.name}
                </Link>
                {item.link5 && (
                  <Link
                    href={item.link5.link}
                    className="text-footerColor block mt-5 text-sm hover:text-white transition duration-300"
                  >
                    {item.link5.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="col-span-7 lg:col-span-2">
            {" "}
            <h4 className=" text-base capitalize hidden lg:block">
              NewsLetter
            </h4>
            <form
              //   onSubmit={handleSubmit(onSubmit)}
              className=" mt-[1rem]  flex-wrap items-center justify-between  bg-white rounded-[50px] p-1 pl-5 hidden lg:flex"
            >
              <input
                className={` border text-sm text-footer h-full  lg:text-base border-none  bg-white outline-none placeholder:text-[#AFAFAF] placeholder:text-sm placeholder:opacity-[.6]`}
                aria-label="name"
                placeholder="Email Address"
                type="email"
                id="name"
                // aria-invalid={Boolean(errors.email)}
                // {...register("email", { required: "This is required." })}
                // disabled={isSubmitting}
              />
              <button
                // disabled={isSubmitting}
                type="submit"
                className=" bg-footerBg capitalize text-white text-sm  px-3 py-2  rounded-[20px] cursor-pointer  hover:bg-navHover hover:text-white  hover:border-white "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <p className="text-sm text-footerColor mt-10">
          © 2023 Realty by{" "}
          <Link
            className="text-white hover:opacity-80"
            href="https://twitter.com/pappychuolow"
          >
            JoyBoy
          </Link>
          . Powered by{" "}
          <Link
            className="text-white hover:opacity-80"
            href="https://chase.com"
          >
            Chase
          </Link>{" "}
          .
        </p>
      </div>
    </footer>
  );
}
