import React from "react";
import { Metadata } from "next";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Properties from "@/components/properties";
import Reviews from "@/components/reviews";
import Blog, { Dreams } from "@/components/blog";

export const metadata: Metadata = {
  title: "Realty",
  description: "Realty does bla bla bla",
};

export default function IndexPage() {
  return (
    <div className="container mt-8 lg:mt-10 overflow-hidden">
      <Hero />
      <Services />
      <Properties />
      <Reviews />
      <Blog />
      <Dreams/>
    </div>
  );
}
