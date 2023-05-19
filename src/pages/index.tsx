import HeroLayout from "@/components/Layout/HeroLayout";
import Introduction from "@/components/Sections/Home/Introduction";
import ExploreSection from "@/components/Sections/Home/ExploreSection";
import NeighbourhoodsSection from "@/components/Sections/Home/NeighbourhoodsSection";
import ResourcesSection from "@/components/Sections/Home/ResourcesSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/home-img.jpg")]`}
        href={"/img/sections/home-img.jpg"}
        headTitle={"Farang | Bangkok Expat Guide"}
        title={"BANGKOK"}
        titleCSS={"text-6xl text-center pb-3 md:text-8xl"}
        subtitle={"Thailand"}
        subtitleCSS={"text-2xl text-center pt-3 md:text-4xl"}/>
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
