import ExploreLayout from "@/components/Layout/ExploreLayout";
import HikingCards from "@/components/Cards/Explore/Nearby-Destinations/HikingCards";

export default function Hiking() {
  return (
    <>
      {/* Hiking & Nature */}
      <ExploreLayout
        bgColor={"white"}
        cards={<HikingCards />}
        title={"Hiking & Nature"}
        description={`Hiking and Nature Destinations`} />
    </>
  )
}