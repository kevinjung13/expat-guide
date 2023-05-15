import HeroLayout from "@/components/Layout/HeroLayout";
import Options from "@/components/Sections/Explore/Options";

export default function explore() {

  return (
    <>
      <HeroLayout
        bgImg={`bg-[url("/img/sections/explore-img.jpg")]`}
        headTitle={"Explore | Farang"}
        title={"EXPLORE"}
        titleCSS={"text-6xl text-center md:text-8xl pb-3"}
        subtitle={"Your New Home"}
        subtitleCSS={"text-2xl text-center md:text-4xl pt-3"}/>
      {/* Options */}
      <Options />
    </>
  );
}
