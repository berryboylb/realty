import Link from "next/link";
import { blogPosts } from "@/lib";
import Image from "next/image";
export default async function RelatedPost({ tags }: { tags: Array<string> }) {
  const filteredArray = blogPosts.filter((obj) =>
    obj.tags.some((tag) => tags.includes(tag))
  );

  return (
    filteredArray &&
    filteredArray.length > 0 && (
      <section>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl lg:text-3xl text-prefferredBlack  font-medium leading-[1.5]">
            Related Posts
          </h3>
          <Link
            className={`lg:block lg:ml-5 text-sm  text-black font-normal border border-gray-500 py-3 px-5 rounded-[100px] lg:hover:opacity-90 hover:bg-black hover:text-white  w-[100px] lg:w-auto `}
            href="/blog"
          >
            View All
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1rem] mt-10 ">
          {filteredArray.map((item, i) => (
            <Link key={i} href={`/blog/${item.title}`} className="block ">
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
    )
  );
}
