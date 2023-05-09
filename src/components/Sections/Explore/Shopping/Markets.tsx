import ExploreLayout from "@/components/Layout/ExploreLayout";
import MarketsCards from "@/components/Cards/Explore/Shopping/MarketsCards";

export default function Markets() {
  return (
    <>
      {/* Markets */}
      <ExploreLayout
        bgColor={"white"}
        cards={<MarketsCards />}
        title={"Markets"}
        description={`Shopping from Local Markets`} />
    </>
  )
}