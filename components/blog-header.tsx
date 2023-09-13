import { tags } from "@/lib";
import { NavHeader } from "./ui/nav";
import { blogPosts } from "@/lib";
import Link from "next/link";
import Image from "next/image";

export function BlogHeader() {
  return (
    <section>
      <NavHeader />
      <div className=" mt-[1rem] lg:mt-[5rem] lg:w-[60%] mx-auto">
        <h1 className="text-[2rem] lg:text-[3.25rem]  font-medium leading-[1.25] text-center text-prefferredBlack">
          Our Blog
        </h1>
        <p className=" my-8  text-prefferredBlack text-base lg:text-lg text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare.
        </p>
        <div className="flex flex-wrap justify-center">
          {tags.map((item) => (
            <button
              className="border p-2 rounded-[100px] font-normal text-sm  text-prefferredBlack capitalize mr-4 mt-4 bg-propBg w-auto"
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1rem] mt-10 ">
        {blogPosts.map((item, i) => (
          <Link key={i} href={`/blog/${item.id}`} className="block ">
            <div className="group lg:h-[250px]  w-full h-[250px] overflow-hidden rounded-[30px]">
              <Image
                src={item.image}
                alt={item.image.toString()}
                className="w-full h-full object-cover rounded-[30px] group-hover:scale-150 transition duration-300 "
              />
            </div>
            <div className="w-full   ">
              <h3 className="text-base lg:text-2xl text-prefferredBlack font-semibold  lg:font-medium  leading-[1.5] mt-2">
                {item.title}
              </h3>
              <p className="mt-2 text-propColor text-base">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
