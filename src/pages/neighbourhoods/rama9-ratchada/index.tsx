
import HeroLayout from "@/components/Layout/HeroLayout";
import MainAreas from "@/components/Sections/Neighbourhoods/Rama9-Ratchada/MainAreas";

export default function Rama9Ratchada() {
  return (
    <>
      {/* Hero Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/rama9-img.jpg")]`}
        headTitle={"Rama 9-Ratchada | Neighbourhoods"}
        title={"RAMA 9-RATCHADA"}
        titleCSS={"text-5xl sm:text-6xl text-center pb-3 md:text-8xl"}
        subtitle={"The New CBD"}
        subtitleCSS={"text-2xl text-center pt-3 md:text-4xl"}/>
      {/* Main Areas Section */}
      <MainAreas />
    </>
  )
}