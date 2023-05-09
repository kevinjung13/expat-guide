import ExploreLayout from "@/components/Layout/ExploreLayout";
import ArtsCards from "@/components/Cards/Explore/Activities/ArtsCards";

export default function Arts() {
  return (
    <>
      {/* Arts & Craft */}
      <ExploreLayout
        bgColor={"white"}
        cards={<ArtsCards />}
        title={"Arts & Craft"}
        description={`Museums, Art Galleries, Painting`} />
    </>
  )
}