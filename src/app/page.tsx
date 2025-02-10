import Image from "next/image";
import HeroCarousel from "./(components)/home/heroSection";
import AboutSection from "./(components)/home/aboutSection";
import WhyChooseUs from "./(components)/home/whyChooseUs";
import ProductsSection from "./(components)/home/products";
import MediaSection from "./(components)/home/media";
import WhatWeDoSection from "./(components)/home/whatWeDo";
import LocationSection from "./(components)/home/location";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AboutSection />
      <WhyChooseUs />
      <ProductsSection />
      <MediaSection />
      <WhatWeDoSection />
      <LocationSection />
    </main>
  );
}
