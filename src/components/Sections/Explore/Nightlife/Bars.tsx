import ExploreLayout from "@/components/Layout/ExploreLayout";
import BarsCards from "@/components/Cards/Explore/Nightlife/BarsCards";

export default function Bars() {
  return (
    <>
      {/* Bars */}
      <ExploreLayout
        bgColor={"white"}
        cards={<BarsCards />}
        title={"Bars"}
        description={`From Rooftops and cocktail bars to speakeasy, discover the best places for drinks.`} />
    </>
  )
}