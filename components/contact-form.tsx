import { Space } from "@/assets";
import Image from "next/image";
import { contact } from "@/lib";
export function ContactDetails() {
  return (
    <section className="mt-[5rem] ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem]  w-full">
        {contact.map((item) => (
          <div key={item.name} className="bg-propBg rounded-[30px] px-10 py-5">
            <div className="flex items-center">
              <Image
                src={item.img}
                alt={item.img.toString()}
                className="w-[25px] h-[25px] object-contain   "
              />
              <h4 className="ml-2 text-[2rem] lg:text-[1.5rem]  font-medium">
                {item.name}
              </h4>
            </div>
            <p className="mt-5 text-xs lg:text-sm">{item.val}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Form() {
  return (
    <form className="w-full">
      <input
        className="w-full bg-white p-[.8rem] rounded-[100px] text-sm"
        type="text"
        name=""
        id=""
        placeholder="Full Name"
      />
      <input
        className="w-full bg-white p-[.8rem] rounded-[100px] text-sm mt-[1.5rem]"
        type="email"
        name=""
        id=""
        placeholder="Email Address"
      />
      <input
        className="w-full bg-white p-[.8rem] rounded-[100px] text-sm mt-[1.5rem]"
        type="tel"
        name=""
        id=""
        placeholder="Phone"
      />
      <textarea
        className="w-full bg-white p-[.8rem] rounded-[30px] text-sm mt-[1.5rem] h-[150px]"
        name=""
        placeholder="Enter your message"
      ></textarea>
      <input
        className={` lg:block mt-[1.5rem] w-full  text-sm  text-white font-normal bg-black p-[.8rem] rounded-[100px] lg:hover:opacity-90  hover:bg-navHover border-0  hover:navHover `}
        type="submit"
        name=""
        id=""
        value="Submit"
      />
    </form>
  );
}
export function ContactForm({
  title = " Contact Us",
  form = true,
}: {
  title?: string;
  form?: boolean;
}) {
  return (
    <section className="mt-[1rem]">
      <div
        className={` w-full  ${
          form ? "grid grid-cols-1 lg:grid-cols-2 gap-[1rem]  " : ""
        }`}
      >
        <div className="w-full  bg-propBg rounded-[30px] p-[1.5rem] lg:p-[2rem] ">
          <h1
            className={` ${
              form
                ? "text-[2rem] lg:text-[2.5rem]  font-medium mt-0  lg:mt-[1.5rem] lg:mb-[1.5rem] "
                : "text-center text-lg lg:text-2xl font-semibold lg:mb-[1.5rem]"
            }`}
          >
            {title}
          </h1>
          <Form />
        </div>
        {/* {form && (
          <div className="w-full  h-[250px] lg:h-[37.5rem] object-cover max-w-full">
            <Image
              src={Space}
              alt={Space.toString()}
              className="w-full h-full object-cover rounded-[30px]  "
            />
          </div>
        )} */}
      </div>
    </section>
  );
}
