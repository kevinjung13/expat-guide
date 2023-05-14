import ExploreLayout from "@/components/Layout/ExploreLayout";
import CavesCards from "@/components/Cards/Explore/Nearby-Destinations/CavesCards";

export default function Caves() {
  return (
    <>
      {/* Caves */}
      <ExploreLayout
        bgColor={"white"}
        cards={<CavesCards />}
        title={"Caves"}
        description={`Caves`} />
    </>
  )
}