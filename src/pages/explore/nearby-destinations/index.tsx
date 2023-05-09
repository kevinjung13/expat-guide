import HeroLayout from "@/components/Layout/HeroLayout";
import Beach from "@/components/Sections/Explore/Nearby-Destinations/Beach";
import Mountain from "@/components/Sections/Explore/Nearby-Destinations/Mountain";
import History from "@/components/Sections/Explore/Nearby-Destinations/History";

export default function NearbyDestinations() {
  return (
    <>
      {/* First Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/nearby-destinations-img.jpg")]`}
        headTitle={"Nearby Attractions | Farang"}
        title={"NEARBY DESTINATIONS"}
        titleCSS={"text-center text-5xl md:text-6xl pb-3"}
        subtitle={"City Escapes"}
        subtitleCSS={"text-4xl text-center pt-3 md:text-5xl"} />
      {/* Beach Section */}
      <Beach />
      {/* Mountain Section */}
      <Mountain />
      {/* History Section */}
      <History />
    </>
  );
}
