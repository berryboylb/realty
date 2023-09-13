import { Metadata } from "next";
import { Dreams } from "@/components/blog";
import { PropertiesHeader } from "@/components/properties-header";
export const metadata: Metadata = {
  title: "Properties",
  description: "Our Properties",
};

export default function PropertiesPage() {
  return (
    <div className="container">
      <PropertiesHeader/>
      <Dreams />
    </div>
  );
}