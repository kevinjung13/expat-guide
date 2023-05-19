import HeroLayout from "@/components/Layout/HeroLayout";
import Physical from "@/components/Sections/Explore/Activities/Physical";
import Entertainment from "@/components/Sections/Explore/Activities/Entertainment";
import Arts from "@/components/Sections/Explore/Activities/Arts";
import Others from "@/components/Sections/Explore/Activities/Others";

export default function Activities() {
  return (
    <>
      {/* Hero Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/activities-img.jpg")]`}
        headTitle={"Activities | Farang"}
        title={"ACTIVITIES"}
        titleCSS={"text-5xl text-center pb-3 sm:text-6xl md:text-8xl"}
        subtitle={"For Body and Soul"}
        subtitleCSS={"text-2xl text-center md:text-4xl pt-3"}/>
      {/* Physical Section */}
      <Physical />
      {/* Entertainment Section */}
      <Entertainment />
      {/* Arts & Craft Section */}
      <Arts />
      {/* Others Section */}
      <Others />
    </>
  );
}
