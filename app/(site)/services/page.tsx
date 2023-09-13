import { Metadata } from "next";
import { Dreams } from "@/components/blog";
import Services from "@/components/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Our Servicess",
};


export default function LoginPage() {
  return (
    <div className="container">
      <Services />
      <Dreams />
    </div>
  );
}