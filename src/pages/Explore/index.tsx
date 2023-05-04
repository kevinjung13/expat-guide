import HeroLayout from "@/components/Layout/HeroLayout";
import Options from "@/components/Sections/Explore/Options";

export default function Explore() {

  return (
    <>
      <HeroLayout
        bgImg={`bg-[url("/img/sections/explore-img.jpg")]`}
        headTitle={"Explore | Farang"}
        title={"EXPLORE"}
        titleCSS={"text-6xl md:text-8xl pb-3"}
        subtitle={"Your New Home"}
        subtitleCSS={"text-2xl md:text-4xl pt-3 pl-16 md:pl-24"}/>
      {/* Options */}
      <Options />
    </>
  );
}
