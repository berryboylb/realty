import Image from "next/image";
import {
  AboutMain,
  AboutMini,
  EdgeLeft,
  EdgeRight,
  Mini2,
  Mini3,
  Property3,
  Mirror,
  Lamp,
} from "@/assets";
export default function AboutHeader() {
  return (
    <section>
      <div className=" mt-[1rem] lg:mt-[5rem] lg:w-1/2 mx-auto">
        <h1 className="text-[2rem] lg:text-[3.25rem]  font-medium leading-[1.25] text-center text-prefferredBlack">
          The Perfect Partner for Your Real Estate Needs
        </h1>
        <p className=" mt-8 lg:mt-10 text-prefferredBlack text-base lg:text-lg text-center ">
          At Realty, we believe that finding your dream home should be an
          enjoyable experience. With over 15 years of experience, our team of
          dedicated real estate professionals is committed to providing you with
          personalized and comprehensive services that cater to your unique
          needs. Whether you&apos;re looking to buy, sell, or rent a property,
          we have the expertise and resources to help you achieve your goals. We
          prioritize customer satisfaction and strive to build lasting
          relationships with each of our clients.
        </p>
      </div>

      <div className="mt-[2rem] grid gap-[1rem]  lg:grid-flow-col grid-cols-1 md:grid-cols-9 place-items-center">
        <div className="md:col-span-1  h-[250px] w-full">
          <Image
            src={EdgeLeft}
            alt={EdgeLeft.toString()}
            className="w-full h-full object-cover relative  z-[1] rounded-[30px] md:rounded-l-[0px] md:rounded-r-[30px]"
          />
        </div>
        <div className="md:col-span-2 grid gap-[1rem] md:grid-rows-8 w-full">
          <div className="row-span-5 h-[250px]">
            <Image
              src={Mini2}
              alt={Mini2.toString()}
              className="w-full h-full object-cover relative  z-[1] rounded-[30px]"
            />
          </div>
          <div className="row-span-3 h-[250px] md:h-[200px]">
            <Image
              src={Property3}
              alt={Property3.toString()}
              className="w-full h-full object-cover relative  z-[1] rounded-[30px]"
            />
          </div>
        </div>
        <div className="md:col-span-3 h-[250px] lg:h-[400px] w-full">
          <Image
            src={AboutMain}
            alt={AboutMain.toString()}
            className="w-full h-full object-cover relative  z-[1] rounded-[30px]"
          />
        </div>

        <div className="md:col-span-2 grid gap-[1rem] md:grid-rows-8">
          <div className="row-span-3 h-[250px] lg:h-[200px]">
            <Image
              src={Mirror}
              alt={Mirror.toString()}
              className="w-full h-full rounded-[30px]"
            />
          </div>
          <div className="row-span-5 h-[250px]">
            <Image
              src={AboutMini}
              alt={AboutMini.toString()}
              className="w-full h-full object-cover relative  z-[1] rounded-[30px]"
            />
          </div>
        </div>
        <div className="md:col-span-1 h-[250px] w-full">
          <Image
            src={EdgeRight}
            alt={EdgeRight.toString()}
            className="w-full h-full object-cover relative  z-[1] rounded-[30px] md:rounded-r-[0px] md:rounded-l-[30px]"
          />
        </div>
      </div>

      <div className="">
        <h3
          //   className="my-[5rem] text-center text-prefferredBlack bg-[red]  mx-auto text-2xl lg:text-3xl font-medium leading-[1000px]"
          className="leading-[1.5] lg:w-1/2 my-[5rem] mx-auto text-center font-medium text-2xl lg:text-[2rem]"
        >
          Where passion, expertise, and exceptional service meet to guide you on
          the journey to finding your perfect property. We bring a deep
          understanding of the market and a commitment to delivering
          unparalleled value to our clients. Let us help you turn your real
          estate dreams into reality.
        </h3>
        <div className="w-full h-auto mt-[1rem]">
          <Image
            src={Lamp}
            alt={Lamp.toString()}
            className="w-full h-full object-cover relative  z-[1] rounded-[30px] "
          />
        </div>
      </div>
    </section>
  );
}
