import HeroLayout from "@/components/Layout/HeroLayout";
import Sathorn from "@/components/Sections/Neighbourhoods/Sathorn-Silom/Sathorn";
import Silom from "@/components/Sections/Neighbourhoods/Sathorn-Silom/Silom";

export default function SathornSilom() {
  return (
    <>
      {/* Hero Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/sathorn-img.jpg")]`}
        headTitle={"Sathorn-Silom | Neighbourhoods"}
        title={"SATHORN-SILOM"}
        titleCSS={"text-6xl text-center md:text-8xl pb-3"}
        subtitle={"The Business District"}
        subtitleCSS={"text-2xl text-center md:text-4xl pt-3"}/>
      {/* Sathorn Section */}
      <Sathorn />
      {/* Silom Section */}
      <Silom />
    </>
  )
}