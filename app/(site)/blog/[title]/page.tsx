import { blogPosts } from "@/lib";
import Image from "next/image";
import { NavHeader } from "@/components/ui/nav";
import RelatedPost from "@/components/ui/related-posts";
export default async function BlogPost({
  params: { title },
}: {
  params: { title: string };
}) {
  title = title.replace(/%20/g, " ");
  const post = blogPosts.find((item) => item.title === title);

  if (!post) return <div>OOps blog post not found</div>;

  const { description, image, tags } = post;
  return (
    <section className="container">
      <NavHeader />
      <article>
        <div className=" ">
          <h1 className="my-8 text-prefferredBlack text-center text-3xl lg:text-5xl font-medium lg:w-[50%] mx-auto">
            {title}
          </h1>
          <h4 className="text-center text-lg lg:w-[60%] mx-auto text-prefferredBlack">
            {description}
          </h4>

          <div className="flex flex-wrap justify-center mt-3">
            {tags &&
              tags.length > 0 &&
              tags.map((item) => (
                <button
                  className="border p-2 rounded-[100px] font-normal text-sm  text-prefferredBlack capitalize mr-4 mt-4 bg-propBg w-auto"
                  key={item}
                >
                  {item}
                </button>
              ))}
          </div>
        </div>
        <div className="lg:w-[60%] lg:h-[400px] object-cover rounded-[30px] mx-auto my-10">
          <Image
            src={image}
            alt={image.toString()}
            className="w-full h-full object-cover rounded-[30px]  transition duration-300 "
          />
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      </article>
      <RelatedPost tags={tags} />
    </section>
  );
}

// export async function generateStaticParams() {
//   const posts = await getAllPosts();

//   return posts.map((post) => ({
//     id: post.id,
//   }));
// }

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    title: post.title,
  }));
}

// export async function generateMetadata({
//   params: { id },
// }: {
//   params: { id: string };
// }) {
//   const { title } = await getPostById(id);
//   return {
//     title,
//   };
// }

export async function generateMetadata({
  params: { title },
}: {
  params: { title: string };
}) {
  const post = blogPosts.find(
    (item) => item.title === title.replace(/%20/g, " ")
  );
  return {
    title: post?.title,
  };
}
