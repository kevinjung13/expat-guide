import ExploreLayout from "@/components/Layout/ExploreLayout";
import MountainCards from "@/components/Cards/Explore/Nearby-Destinations/MountainCards";

export default function Mountain() {
  return (
    <>
      {/* Mountain */}
      <ExploreLayout
        bgColor={"white"}
        cards={<MountainCards />}
        title={"Mountain"}
        description={`Mountain Destinations`} />
    </>
  )
}