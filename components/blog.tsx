import Link from "next/link";
import { blogPosts } from "@/lib";
import { Space } from "@/assets";
import Image from "next/image";
export default function Blog() {
  return (
    <section className="mt-[5rem]">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl lg:text-3xl text-prefferredBlack  font-medium leading-[1.5]">
          Our Blog
        </h3>
        <Link
          className={`lg:block lg:ml-5 text-sm  text-black font-normal border border-gray-500 py-3 px-5 rounded-[100px] lg:hover:opacity-90 hover:bg-black hover:text-white  w-[100px] lg:w-auto `}
          href="/blog"
        >
          View All
        </Link>
      </div>
      <div className=" mt-[1rem] lg:mt-10 grid grid-cols-1 lg:grid-cols-6 gap-[1rem] ">
        <Link
          href={`/blog/${blogPosts[0].title}`}
          className="col-span-6 lg:col-span-3 group "
        >
          <div className="lg:h-[400px] h-[250px] overflow-hidden rounded-[30px]">
            <Image
              src={blogPosts[0].image}
              alt={blogPosts[0].image.toString()}
              className="w-full h-full object-cover rounded-[30px] group-hover:scale-150 transition duration-300  "
            />
          </div>
          <h3 className="text-base lg:text-2xl text-prefferredBlack  font-semibold  lg:font-medium leading-[1.5] mt-2">
            {blogPosts[0].title}
          </h3>
          <p className="mt-2 text-propColor text-base">
            {blogPosts[0].description}
          </p>
        </Link>
        <div className="col-span-6 lg:col-span-3">
          {blogPosts.slice(1).map((item, i) => (
            <Link
              key={i}
              href={`/blog/${item.title}`}
              className="col-span-6 lg:col-span-3  flex flex-wrap  mb-[1rem] group "
            >
              <div className="lg:h-[150px] lg:w-[200px] w-full h-[250px] overflow-hidden rounded-[30px]">
                <Image
                  src={item.image}
                  alt={item.image.toString()}
                  className="w-full h-full object-cover rounded-[30px] group-hover:scale-150 transition duration-300 "
                />
              </div>
              <div className="w-full lg:w-[63.8%] lg:ml-5 ">
                <h3 className="text-base lg:text-xl text-prefferredBlack font-semibold  lg:font-medium  leading-[1.5] mt-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-propColor text-base">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Dreams() {
  return (
    <section className="mt-[5rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1rem]  w-full">
        <div className="w-full  bg-propBg rounded-[30px] p-[1.5rem] lg:p-[2rem]">
          <h1 className="text-[2rem] lg:text-[3.25rem]  font-medium leading-[1.25]  lg:mt-[3rem]">
            Take the First Step Towards Your Dream Home Today!
          </h1>
          <p className="text-base  mt-10">
            At Realty, we are committed to providing exceptional service to all
            of our clients. Whether you &apos;re looking to buy, sell, or invest
            in real estate, our team of expert agents is here to help. Contact
            us today to discuss your real estate goals and find out how we can
            assist you every step of the way.
          </p>
          <div className="flex items-start justify-start mt-10">
            {" "}
            <Link
              className={` lg:block  text-sm  text-white font-normal bg-black py-2 px-3  lg:py-3 lg:px-5 rounded-[100px] lg:hover:opacity-90  hover:bg-navHover border-0  hover:navHover `}
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="w-full  h-[250px] lg:h-[570px]">
          <Image
            src={Space}
            alt={Space.toString()}
            className="w-full h-full object-cover rounded-[30px]  "
          />
        </div>
      </div>
    </section>
  );
}
