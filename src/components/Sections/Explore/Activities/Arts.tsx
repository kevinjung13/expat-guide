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
        description={`Looking to expand your creativity and imagination? Spend an afternoon getting your hands dirty or admiring the work of some of the best artists.`} />
    </>
  )
}