import HeroLayout from "@/components/Layout/HeroLayout";
import Malls from "@/components/Sections/Explore/Shopping/Malls";
import Markets from "@/components/Sections/Explore/Shopping/Markets"

export default function Shopping() {
  return (
    <>
      {/* Hero Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/shopping-img.jpg")]`}
        href={"/img/sections/shopping-img.jpg"}
        headTitle={"Shopping | Farang"}
        title={"SHOPPING"}
        titleCSS={"text-6xl text-center pb-3 md:text-8xl"}
        subtitle={"Shop Till You Drop"}
        subtitleCSS={"text-2xl text-center pt-3 md:text-4xl"} />
      {/* Malls Section */}
      <Malls />
      {/* Markets Section */}
      <Markets />
    </>
  );
}
