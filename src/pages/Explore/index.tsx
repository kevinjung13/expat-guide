import HeroLayout from "@/components/Layout/HeroLayout";
import SectionCards from "@/components/Cards/Explore/SectionCards";

export default function Explore() {

  return (
    <>
      {/* Hero Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/explore-img.jpg")]`}
        headTitle={"Explore | Farang"}
        title={"EXPLORE"}
        titleCSS={"text-6xl text-center md:text-8xl pb-3"}
        subtitle={"Your New Home"}
        subtitleCSS={"text-2xl text-center md:text-4xl pt-3"}/>
      {/* Options */}
      <section
        className={"w-full"}
        id={"options"}>
        <SectionCards />
      </section>
    </>
  );
}
