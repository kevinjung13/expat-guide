import HeroLayout from "@/components/Layout/HeroLayout";
import LocalFlavors from "@/components/Sections/Explore/Dining/LocalFlavors";
import Asia from "@/components/Sections/Explore/Dining/Asia";
import Europe from "@/components/Sections/Explore/Dining/Europe";
import TheAmericas from "@/components/Sections/Explore/Dining/LatinAmerica";
import MiddleEastAndAfrica from "@/components/Sections/Explore/Dining/MiddleEastAndAfrica";
import Brunch from "@/components/Sections/Explore/Dining/Brunch";

export default function Dining() {
  return (
    <>
      {/* First Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/dining-img.jpg")]`}
        headTitle={"Dining | Farang"}
        title={"DINING"}
        titleCSS={"text-6xl text-center pb-3 md:text-8xl"}
        subtitle={"A Street Food Capital"}
        subtitleCSS={"text-1xl text-center md:text-3xl pt-3"}/>
      {/* Local Flavors Section */}
      <LocalFlavors />
      {/* Asia Section */}
      <Asia />
      {/* Europe Section */}
      <Europe />
      {/* The Americas Section */}
      <TheAmericas />
      {/* Middle East & Africa Section */}
      <MiddleEastAndAfrica />
      {/* Brunch Section */}
      <Brunch />
    </>
  );
}
