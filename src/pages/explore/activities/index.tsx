import HeroLayout from "@/components/Layout/HeroLayout";
import Physical from "@/components/Sections/Explore/Activities/Physical";
import Cultural from "@/components/Sections/Explore/Activities/Cultural";

export default function Activities() {
  return (
    <>
      {/* First Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/activities-img.jpg")]`}
        headTitle={"Activities | Farang"}
        title={"ACTIVITIES"}
        titleCSS={"text-6xl text-center pb-3 md:text-8xl"}
        subtitle={"For Body and Soul"}
        subtitleCSS={"text-2xl text-center md:text-4xl pt-3"}/>
      {/* Physical Section */}
      <Physical />
      {/* Cultural Section */}
      <Cultural />
    </>
  );
}
