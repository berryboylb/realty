import { Metadata } from "next";
import { Dreams } from "@/components/blog";
import AboutHeader from "@/components/aboutHeader";
import AboutTeam from "@/components/aboutTeam";
export const metadata: Metadata = {
  title: "About",
  description: "Our About",
};

export default function LoginPage() {
  return (
    <div className="container">
      <AboutHeader />
      <AboutTeam />
      <Dreams />
    </div>
  );
}
