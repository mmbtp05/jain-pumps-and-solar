import Image from "next/image";
import ContactBanner from "../(components)/contactUs/banner";
import ContactSection from "../(components)/contactUs/contact";


export default function Contact() {
  return (
    <main>
        <ContactBanner />
        <ContactSection />
    </main>
  );
}
