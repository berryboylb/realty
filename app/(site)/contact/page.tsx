import { Metadata } from "next";
import { ContactDetails, ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Our Contact",
};

export default function LoginPage() {
  return (
    <div className="container">
      <ContactDetails />
      <ContactForm />
    </div>
  );
}
