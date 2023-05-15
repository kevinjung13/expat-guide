import HeroLayout from "@/components/Layout/HeroLayout";
import PersonalIntro from "@/components/Sections/About/PersonalIntro";
import FiveYears from "@/components/Sections/About/FiveYears";
import Current from "@/components/Sections/About/Current";

export default function about() {
  return (
    <>
      {/* Hero Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/about-img.jpg")]`}
        headTitle={"About | Farang"}
        title={"ABOUT"}
        titleCSS={"text-6xl text-center pb-3 md:text-8xl"}
        subtitle={"My Story"}
        subtitleCSS={"text-2xl text-center pt-3 md:text-4xl"}/>
      {/* Third Culture Kid Section */}
      <PersonalIntro />
      {/* 5 Years Section */}
      <FiveYears />
      {/* Current Section */}
      <Current />
    </>
  );
}
