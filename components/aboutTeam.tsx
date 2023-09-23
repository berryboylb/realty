import { team } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "@/assets";
export default function AboutHeader() {
  return (
    <section>
      <div>
        <div id="sticky" className="w-full lg:w-1/2 ">
          <h3 className="text-[2rem] lg:text-[3.25rem]  font-medium leading-[1.25] mt-[2rem]  lg:mt-[3rem]">
            Our Team
          </h3>
          <p className="text-base  mt-10">
            A team of experienced and dedicated professionals who are passionate
            about helping our clients find their dream properties. From our
            agents to our support staff, everyone on our team is committed to
            providing personalized service, expert guidance, and exceptional
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem] lg:gap-[1.5rem] my-[2rem]">
          {team.map((item, i) => (
            <figure
              key={item.name}
              className={` relative ${i % 2 !== 0 ? "lg:mt-10" : ""}`}
            >
              <Image
                src={item.image}
                alt={item.image.toString()}
                className="w-full h-auto object-cover  rounded-[30px] "
              />
              <figcaption className="my-2  lg:my-5 text-prefferredBlack text-center text-base font-semibold lg:text-xl">
                {item.name}
              </figcaption>
              <figcaption className="text-center capitalize opacity-70">
                {item.position}
              </figcaption>
              <div className=" absolute top-[1rem]  right-[1rem] flex items-center">
                <Link
                  href={item.instagramLink}
                  className="rounded-full p-2 backdrop-blur-lg bg-opacity-30 bg-gray-200 border border-transparent hover:border-white transition duration-300"
                >
                  {" "}
                  <Image
                    src={Instagram}
                    alt={Instagram.toString()}
                    className=" "
                  />
                </Link>
                <Link
                  href={item.twitterLink}
                  className="ml-2 rounded-full p-2 backdrop-blur-lg bg-opacity-30 bg-gray-200 border border-transparent hover:border-white transition duration-300"
                >
                  {" "}
                  <Image src={Twitter} alt={Twitter.toString()} className=" " />
                </Link>
                <Link
                  href={item.facebookLink}
                  className="ml-2 rounded-full p-2 backdrop-blur-lg bg-opacity-30 bg-gray-200 border border-transparent hover:border-white transition duration-300"
                >
                  <Image
                    src={Facebook}
                    alt={Facebook.toString()}
                    className=" "
                  />
                </Link>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
