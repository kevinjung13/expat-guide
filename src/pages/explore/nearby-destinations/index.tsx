import HeroLayout from "@/components/Layout/HeroLayout";
import Beach from "@/components/Sections/Explore/Nearby-Destinations/Beach";
import NationalPark from "@/components/Sections/Explore/Nearby-Destinations/NationalPark";
import History from "@/components/Sections/Explore/Nearby-Destinations/History";
import Caves from "@/components/Sections/Explore/Nearby-Destinations/Caves";

export default function NearbyDestinations() {
  return (
    <>
      {/* Hero Section */}
      <HeroLayout
        bgImg={`bg-[url("/img/sections/nearby-destinations-img.jpg")]`}
        href={"/img/sections/nearby-destinations-img.jpg"}
        headTitle={"Nearby Attractions | Farang"}
        title={"NEARBY DESTINATIONS"}
        titleCSS={"text-center text-4xl sm:text-5xl md:text-6xl pb-3"}
        subtitle={"City Escapes"}
        subtitleCSS={"text-4xl text-center pt-3 md:text-5xl"} />
      {/* Beach Section */}
      <Beach />
      {/* National Park Section */}
      <NationalPark />
      {/* History Section */}
      <History />
      {/* Caves Section */}
      <Caves />
    </>
  );
}
