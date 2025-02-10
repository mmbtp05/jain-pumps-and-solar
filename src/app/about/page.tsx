import Image from "next/image";
import Banner from "../(components)/about/banner";
import AboutSection from "../(components)/about/about";
import SolutionsSection from "../(components)/about/solutions";
import ValuesSection from "../(components)/about/ourValues";

export default function About() {
  return (
    <main>
        <Banner />
        <AboutSection />
        <SolutionsSection />
        <ValuesSection />
    </main>
  );
}
