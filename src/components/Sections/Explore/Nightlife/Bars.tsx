import ExploreLayout from "@/components/Layout/ExploreLayout";
import BarsCards from "@/components/Cards/Explore/Nightlife/BarsCards";

export default function Bars() {
  return (
    <>
      {/* Bars */}
      <ExploreLayout
        bgColor={"white"}
        cards={<BarsCards />}
        title={"Drinks"}
        description={`From rooftops and  ocktail bars to speakeasy and casual venues, here are my favorite places for drinks.`} />
    </>
  )
}