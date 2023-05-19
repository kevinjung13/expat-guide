import HeroLayout from "@/components/Layout/HeroLayout";
import NorthBangkok from "@/components/Sections/Neighbourhoods/Ratchathewi-PhayaThai/NorthBangkok";

export default function RatchathewiPhayathai() {
  return (
    <>
      {/* Hero Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/ari-img.jpg")]`}
        headTitle={"Ratchathewi-Phaya Thai | Neighbourhoods"}
        title={"RATCHATHEWI-PHAYA THAI"}
        titleCSS={"text-6xl text-center pb-3 md:text-8xl"}
        subtitle={"A Hidden Gem"}
        subtitleCSS={"text-2xl text-center pt-3 md:text-4xl"} />
      {/* North Bangkok Section */}
      <NorthBangkok />
    </>
  )
}