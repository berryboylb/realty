import Link from "next/link";
import { properties } from "@/lib";
import Image from "next/image";
import { Bed, Shower, Size, Plus } from "@/assets";
import { nFormatter } from "@/lib";
export default async function LatestProperty() {
  const filteredArray = properties.slice(0,5)

  return (
    filteredArray &&
    filteredArray.length > 0 && (
      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl lg:text-3xl text-prefferredBlack  font-medium leading-[1.5]">
            Latest properties
          </h3>
          <Link
            className={`lg:block lg:ml-5 text-sm  text-black font-normal border border-gray-500 py-3 px-5 rounded-[100px] lg:hover:opacity-90 hover:bg-black hover:text-white  w-[100px] lg:w-auto `}
            href="/properties"
          >
            View All
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1rem] mt-10 ">
          {filteredArray.map((item, i) => (
            <Link
              href={`/properties/${item.name}`}
              key={i}
              className="overflow-hidden block "
            >
              <div className="overflow-hidden p-5 rounded-[30px] bg-propBg h-[250px] lg:h-[300px] relative group transition duration-500">
                <h4 className="text-base font-semibold">
                  ${nFormatter(Number(item.amount), 3)}
                </h4>
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
                <div className="absolute top-0 left-0 w-full h-full lg:group-hover:top-[70%]  transition-all duration-300 ease-in ">
                  {" "}
                  <Image
                    src={item.image}
                    alt={item.image.toString()}
                    className="w-full h-full object-cover z-[3]"
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
                <h3 className="lg:mt-2 lg:mb-4 capitalize lg:uppercase text-sm lg:text-base">
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
            </Link>
          ))}
        </div>
      </section>
    )
  );
}
