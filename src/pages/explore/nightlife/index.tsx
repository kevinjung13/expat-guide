import HeroLayout from "@/components/Layout/HeroLayout";
import Drinks from "@/components/Sections/Explore/Nightlife/Drinks";
import Dance from "@/components/Sections/Explore/Nightlife/Dance";

export default function Nightlife() {
  return (
    <>
      {/* Hero Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/nightlife-img.jpg")]`}
        headTitle={"Nightlife | Farang"}
        title={"NIGHTLIFE"}
        titleCSS={"text-6xl text-center pb-3 md:text-8xl"}
        subtitle={"Sin City"}
        subtitleCSS={"text-2xl text-center pt-3 md:text-4xl"} />
      {/* Drinks Section */}
      <Drinks />
      {/* Dance Section */}
      <Dance />
    </>
  );
}
