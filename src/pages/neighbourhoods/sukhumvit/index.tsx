import HeroLayout from "@/components/Layout/HeroLayout";
import LowerSukhumvit from "@/components/Sections/Neighbourhoods/Sukhumvit/LowerSukhumvit";
import CentralSukhumvit from "@/components/Sections/Neighbourhoods/Sukhumvit/CentralSukhumvit";
import UpperSukhumvit from "@/components/Sections/Neighbourhoods/Sukhumvit/UpperSukhumvit";

export default function Sukhumvit() {
  return (
    <>
      {/* Hero Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/sukhumvit-img.jpg")]`}
        headTitle={"Sukhumvit | Neighbourhoods"}
        title={"SUKHUMVIT"}
        titleCSS={"text-6xl text-center md:text-8xl pb-3"}
        subtitle={"The Heart of Bangkok"}
        subtitleCSS={"text-2xl text-center md:text-4xl pt-3"} />
      {/* Lower Sukhumvit Section */}
      <LowerSukhumvit />
      {/* Central Sukhumvit Section */}
      <CentralSukhumvit />
      {/* Central Sukhumvit Section */}
      <UpperSukhumvit />
    </>
  )
}