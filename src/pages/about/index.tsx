import HeroLayout from "@/components/Layout/HeroLayout";
import PersonalIntro from "@/components/Sections/About/PersonalIntro";
import FiveYears from "@/components/Sections/About/FiveYears";
import Current from "@/components/Sections/About/Current";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/about-img.jpg")]`}
        href={"/img/sections/about-img.jpg"}
        headTitle={"About | Farang"}
        title={"ABOUT"}
        titleCSS={"text-6xl pb-3 text-center md:text-8xl"}
        subtitle={"My Story"}
        subtitleCSS={"text-2xl pt-3 text-center md:text-4xl"}/>
      {/* Third Culture Kid Section */}
      <PersonalIntro />
      {/* 5 Years Section */}
      <FiveYears />
      {/* Current Section */}
      <Current />
    </>
  );
}
