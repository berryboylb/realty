import { ContactForm } from "@/components/contact-form";
import LatestProperty from "@/components/ui/latest-property";
import { NavHeader } from "@/components/ui/nav";
import { properties } from "@/lib";
import Image from "next/image";
import { Gala, Bed, Shower, Size } from "@/assets";
import Gallery from "@/components/gallery";
export default async function BlogPost({
  params: { title },
}: {
  params: { title: string };
}) {
  title = title.replace(/%20/g, " ");
  const property = properties.find((item) => item.name === title);

  if (!property) return <div>OOps property not found</div>;
  const {
    image,
    amount,
    address,
    bedrooms,
    bathrooms,
    space,
    description,
    otherImages,
  } = property;
    return (
      <>
        <section className="container">
        <Gallery image={image} images={otherImages} />
          {/* <NavHeader /> */}
          {title}

          <div className="grid gap-[3rem]  grid-cols-1 lg:grid-cols-9 mt-10">
            <div className="lg:col-span-6">
              <NavHeader />
              <h3 className=" mt-5 capitalize text-2xl lg:text-4xl text-prefferredBlack font-medium">
                {title}
              </h3>
              <p className="my-3 text-sm text-propColor">{address}</p>
              <h4 className="text-base lg:text-2xl font-semibold">${amount}</h4>

              <div className="flex items-center mt-5">
                <h5 className="flex items-center text-sm text-propColor">
                  <Image
                    src={Bed}
                    alt={Bed.toString()}
                    className="w-[20px] h-[20px] mr-1"
                  />
                  {bedrooms}
                </h5>
                <h5 className=" ml-5 flex  items-center text-sm text-propColor">
                  <Image
                    src={Shower}
                    alt={Shower.toString()}
                    className="w-[20px] h-[20px] mr-1"
                  />
                  {bathrooms}
                </h5>
                <h5 className="ml-5 flex items-center text-sm text-propColor">
                  <Image
                    src={Size}
                    alt={Size.toString()}
                    className="w-[20px] h-[20px] mr-1"
                  />
                  {space} sqft
                </h5>
              </div>
              <p className="mt-5 text-base text-prefferredBlack">
                {description}
              </p>

              <div className="grid gap-[1rem]  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {otherImages.map((item, i) => (
                  <div className="h-[200px] w-full rounded-[1.5rem]" key={i}>
                    <Image
                      src={item}
                      alt={item.toString()}
                      className="w-full h-full object-cover rounded-[1.5rem]"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <ContactForm title={"Request more info"} form={false} />
            </div>
          </div>
          <LatestProperty />
        </section>
      </>
    );
}

export async function generateStaticParams() {
  return properties.map((post) => ({
    title: post.name,
  }));
}

export async function generateMetadata({
  params: { title },
}: {
  params: { title: string };
}) {
  const property = properties.find(
    (item) => item.name === title.replace(/%20/g, " ")
  );
  return {
    title: property?.name,
  };
}
