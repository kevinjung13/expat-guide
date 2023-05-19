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
        titleCSS={"text-6xl text-center pb-3 md:text-8xl"}
        subtitle={"The Heart of Bangkok"}
        subtitleCSS={"text-2xl text-center pt-3 md:text-4xl"} />
      {/* Lower Sukhumvit Section */}
      <LowerSukhumvit />
      {/* Central Sukhumvit Section */}
      <CentralSukhumvit />
      {/* Central Sukhumvit Section */}
      <UpperSukhumvit />
    </>
  )
}