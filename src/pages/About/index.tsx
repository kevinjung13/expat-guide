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
        headTitle={"About | Farang"}
        title={"ABOUT"}
        subtitle={"My Story"} />
      {/* Third Culture Kid Section */}
      <PersonalIntro />
      {/* 5 Years Section */}
      <FiveYears />
      {/* Current Section */}
      <Current />
    </>
  );
}
