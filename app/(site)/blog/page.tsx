import { Dreams } from "@/components/blog";
import { BlogHeader } from "@/components/blog-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Our Blog",
};

export default function LoginPage() {
  return <div className="container">
    <BlogHeader/>
    <Dreams/>
  </div>;
}