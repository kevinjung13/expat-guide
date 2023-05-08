import ExploreLayout from "@/components/Layout/ExploreLayout";
import CulturalCards from "@/components/Cards/Explore/Activities/CulturalCards";

export default function Cultural() {
  return (
    <>
      {/* Cultural */}
      <ExploreLayout
        bgColor={"bg-stone-200"}
        cards={<CulturalCards />}
        title={"Cultural"}
        description={`Discover the history of Bangkok and the culture of Thailand by visiting the following locations.`} />
    </>
  )
}