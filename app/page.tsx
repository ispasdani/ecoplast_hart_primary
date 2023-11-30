import Story from "./story/page";
import WhatWeDo from "./whatwedo/page";
import WhyUsPage from "./whyus/page";
import HomeSection from "@/sections/homesection/HomeSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <WhyUsPage />
      <WhatWeDo />
      <Story />
    </>
  );
}
