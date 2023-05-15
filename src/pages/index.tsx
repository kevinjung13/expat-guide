import HeroLayout from "@/components/Layout/HeroLayout";
import Introduction from "@/components/Sections/Home/Introduction";
import ExploreSection from "@/components/Sections/Home/ExploreSection";
import NeighbourhoodsSection from "@/components/Sections/Home/NeighbourhoodsSection";
import ResourcesSection from "@/components/Sections/Home/ResourcesSection";

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
      <ExploreSection />
      {/* Neighbourhoods Section */}
      <NeighbourhoodsSection />
      {/* Resources Section */}
      <ResourcesSection />
    </>
  );
}
