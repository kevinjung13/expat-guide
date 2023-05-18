import ExploreLayout from "@/components/Layout/ExploreLayout";
import MarketsCards from "@/components/Cards/Explore/Shopping/MarketsCards";

export default function Markets() {
  return (
    <>
      {/* Markets */}
      <ExploreLayout
        bgColor={"stone-200"}
        cards={<MarketsCards />}
        title={"Markets"}
        description={`Discover and shop from local markets.`} />
    </>
  )
}