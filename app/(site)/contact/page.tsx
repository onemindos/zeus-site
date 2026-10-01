import type { Metadata } from "next";
import { getPage } from "@/lib/payload";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Work with Zeus DeLaCruz — courses, speaking, consulting.",
};

export default async function ContactPage() {
  const page = await getPage("contact");

  return (
    <>
      {/* If CMS has a Zoho/Circle embed configured, use that — otherwise show default form */}
      <ContactForm embed={(page as any)?.embed ?? null} />
    </>
  );
}
