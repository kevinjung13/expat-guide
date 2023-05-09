import HeroLayout from "@/components/Layout/HeroLayout";
import Historical from "@/components/Sections/Explore/Attractions/Historical";
import Local from "@/components/Sections/Explore/Attractions/Local";

export default function Attractions() {
  return (
    <>
      {/* First Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/attractions-img.jpg")]`}
        headTitle={"Attractions | Farang"}
        title={"ATTRACTIONS"}
        titleCSS={"text-6xl text-center pb-3 md:text-8xl"}
        subtitle={"Venice of the East"}
        subtitleCSS={"text-2xl text-center pt-3 md:text-4xl"}/>
      {/* Historical Section */}
      <Historical />
      {/* Local Section */}
      <Local />
    </>
  );
}
