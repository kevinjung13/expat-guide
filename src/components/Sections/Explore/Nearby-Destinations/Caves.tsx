import ExploreLayout from "@/components/Layout/ExploreLayout";
import CavesCards from "@/components/Cards/Explore/Nearby-Destinations/CavesCards";

export default function Caves() {
  return (
    <>
      {/* Caves */}
      <ExploreLayout
        bgColor={"stone-200"}
        cards={<CavesCards />}
        title={"Caves"}
        description={`Thailand is usually known for its beaches but did you know that it is also full of caves? 
        Here are my favorite ones, just a short drive away from Bangkok.`} />
    </>
  )
}