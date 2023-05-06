import HeroLayout from "@/components/Layout/HeroLayout";
import Introduction from "@/components/Sections/Home/Introduction";
import Explore from "@/components/Sections/Home/Explore";
import Neighbourhoods from "@/components/Sections/Home/Neighbourhoods";
import Resources from "@/components/Sections/Home/Resources";

export default function Home() {
  return (
    <>
      {/* Image Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/home-img.jpg")]`}
        headTitle={"Farang | Bangkok Expat Guide"}
        title={"BANGKOK"}
        titleCSS={"text-6xl text-center md:text-8xl pb-3"}
        subtitle={"Thailand"}
        subtitleCSS={"text-2xl text-center md:text-4xl pt-3"}/>
      {/* Introduction Section */}
      <Introduction />
      {/* Explore Section */}
      <Explore />
      {/* Neighbourhoods Section */}
      <Neighbourhoods />
      {/* Resources Section */}
      <Resources />
    </>
  );
}
